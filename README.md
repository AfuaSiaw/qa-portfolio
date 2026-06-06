# QA Engineer Portfolio — Georgina Siaw

A portfolio of QA automation and testing work built over 8 weeks, demonstrating skills relevant to remote QA Engineer roles.

---

## 🛠️ Technologies Used

- **Playwright** — End-to-end browser automation (JavaScript)
- **Postman** — API testing
- **JavaScript** — Scripting and test logic
- **Git & GitHub** — Version control and portfolio hosting

---

## 📁 Project Structure

```
qa-portfolio/
├── pages/
│   └── LoginPage.js       # Page Object Model for login page
├── tests/
│   ├── first-test.spec.js     # Page title verification
│   ├── search-test.spec.js    # Docs page verification
│   ├── login-test.spec.js     # Login form automation
│   └── login-pom.spec.js      # Login tests using Page Object Model
└── playwright.config.js       # Playwright configuration
```

---

## ✅ Test Coverage

### Playwright Automation

- Page title verification across Chrome, Firefox and Safari
- Login form automation — positive and negative test cases
- Success and error message validation
- Page Object Model implementation for maintainable tests

### API Testing (Postman)

- GET and POST request testing on REST APIs
- Status code validation (200, 201, 400, 404, 500)
- Response body validation
- Negative testing — empty body and wrong data types
- Bug identification and documentation

---

## 🚀 How to Run the Tests

### Prerequisites

- Node.js installed
- Playwright installed

### Install dependencies

```bash
npm install
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/login-test.spec.js --headed
```

---

## 🤖 AI Testing Project

### LLM Response Quality Tester

A JavaScript test suite that automatically tests Google Gemini AI responses against quality criteria.

**What it tests:**

- **Quality** — checks response length is within acceptable bounds
- **Relevance** — verifies responses contain expected keywords
- **Safety** — confirms the AI refuses harmful requests
- **Consistency** — sends the same prompt twice and validates both responses

**Technologies:** Node.js, Google Gemini API, Environment Variables

**To run:**

```bash
export GEMINI_API_KEY=your_key_here
node tests/ai-quality-test.js
```

---

## 👩‍💻 About Me

QA Engineer with 3-5 years of manual testing experience, currently expanding into automation testing with Playwright. Passionate about software quality and building reliable test suites.

📧 Contact: [Your Email Here]
🔗 LinkedIn: [Your LinkedIn Here]
