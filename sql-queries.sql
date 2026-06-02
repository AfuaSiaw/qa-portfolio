-- =============================
-- WEEK 6 - SQL BASICS FOR TESTERS
-- =============================

-- WHY SQL FOR QA?
-- After testing an app, SQL lets you verify data was saved correctly in the database
-- e.g. Did the new user actually get saved? Was the record deleted? Was the price updated?


-- 1. CREATE A TABLE
-- -----------------
-- Think of this like creating a new sheet in Excel with column headers
CREATE TABLE users (
    id INTEGER,
    name TEXT,
    email TEXT,
    age INTEGER,
    is_active TEXT
);


-- 2. INSERT DATA (Add rows to the table)
-- --------------------------------------
-- Think of this like filling in rows in a spreadsheet
INSERT INTO users (id, name, email, age, is_active)
VALUES (1, 'Georgina', 'georgina@email.com', 30, 'true');

INSERT INTO users (id, name, email, age, is_active)
VALUES (2, 'Sofia', 'sofia@email.com', 25, 'true');

INSERT INTO users (id, name, email, age, is_active)
VALUES (3, 'Maria', 'maria@email.com', 28, 'false');

INSERT INTO users (id, name, email, age, is_active)
VALUES (4, 'John', 'john@email.com', 35, 'true');

INSERT INTO users (id, name, email, age, is_active)
VALUES (5, 'James', 'james@email.com', 22, 'false');


-- 3. SELECT ALL DATA
-- ------------------
-- Show everything from the table
-- * means "all columns"
SELECT * FROM users;


-- 4. SELECT SPECIFIC COLUMNS
-- --------------------------
-- Only show name and email columns
SELECT name, email FROM users;


-- 5. WHERE CLAUSE - Filter rows
-- -----------------------------
-- Only show users older than 27
SELECT * FROM users WHERE age > 27;

-- Only show active users
SELECT * FROM users WHERE is_active = 'true';

-- Combine specific columns with a filter
-- Only show name and email of active users
SELECT name, email FROM users WHERE is_active = 'true';


-- 6. COUNT ROWS
-- -------------
-- Count how many users are in the table
-- Very useful for verifying data after a test
SELECT COUNT(*) FROM users;

-- Count only active users
SELECT COUNT(*) FROM users WHERE is_active = 'true';


-- =============================
-- SQL COMMANDS LEARNED THIS WEEK
-- =============================
-- CREATE TABLE  - Creates a new table
-- INSERT INTO   - Adds a new row of data
-- SELECT *      - Gets all columns
-- SELECT col    - Gets specific columns only
-- WHERE         - Filters rows based on a condition
-- COUNT(*)      - Counts the number of rows