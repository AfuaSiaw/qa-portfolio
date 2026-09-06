const { test, expect } = require('@playwright/test');

test('GET /agent/v1/users returns a list of users', async ({ request }) => {
  const response = await request.get('https://reqres.in/agent/v1/users');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body.data)).toBeTruthy();
  const firstUser = body.data[0];
  expect(firstUser).toHaveProperty('email');
});

test('GET /agent/v1/users/:id with a bad ID returns 400', async ({ request }) => {
    const response = await request.get('https://reqres.in/agent/v1/users/does-not-exist-123');
  
    expect(response.status()).toBe(400);
  
    const body = await response.json();
    expect(body.error).toBe('invalid_id_format');
    expect(body).toHaveProperty('message');
  });