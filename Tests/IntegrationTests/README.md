# QA Technical Challenge — Automated Tests

## 📌 Overview

This repository contains the automated tests created for the technical challenge of the residential expense control system.

The objective of this project is to validate the business rules implemented in the application without modifying the original source code.

The tests were designed following a test pyramid approach, including:

- Unit Tests
- Integration Tests
- End-to-End Tests

---

# 🧱 Tested Business Rules

The tests focus mainly on the following business rules:

- Underage people cannot have income transactions
- Categories must only be used according to their purpose
- Cascade deletion of transactions when deleting a person
- CRUD operations for people
- Category creation
- Transaction validation
- Monthly totals validation

---

# 🛠 Technologies Used

## Back-end
- C#
- .NET
- xUnit
- FluentAssertions

## Front-end
- React
- TypeScript
- Playwright
- Vitest

---

# 📂 Project Structure

```bash
├── docs/
│   └── bugs.md
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── README.md
```

---

# 🧪 Test Pyramid Strategy

## Unit Tests

Unit tests were created to validate isolated business rules such as:

- Preventing income transactions for underage people
- Category compatibility validation
- Transaction type validation

The goal is to validate business logic quickly and independently.

---

## Integration Tests

Integration tests validate communication with the API endpoints and persistence behavior.

Examples:

- Creating people
- Creating categories
- Creating transactions
- Validation of invalid requests
- API response validation

---

## End-to-End Tests

E2E tests simulate real user behavior in the front-end application.

Main tested flows:

- Registering people
- Creating categories
- Creating transactions
- Error message validation
- Navigation and data loading

---

# ▶️ How to Run the Tests

## Back-end Tests

Run all .NET tests:

```bash
dotnet test
```

---

## Front-end E2E Tests

Install dependencies:

```bash
npm install
```

Run Playwright tests:

```bash
npx playwright test
```

---

## Front-end Unit Tests

Run Vitest:

```bash
npm run test
```

---

# 🐞 Bugs Found

The identified bugs were documented in:

```bash
/docs/bugs.md
```

Main issues identified:

- Error while creating people through the front-end
- Invalid API route configuration
- Transactions not being created correctly
- Category validation inconsistencies
- Cascade delete flow impossible to validate completely
- Network error while loading dashboard data

---

# ✅ Testing Approach

The strategy used in this project focused on:

- Business rule validation
- API behavior validation
- User flow validation
- Error reproduction
- Clear documentation of failures

The goal was not to achieve 100% coverage, but to prioritize critical business behavior and system reliability.

---

# 📌 Notes

- The original application source code was NOT modified.
- This repository contains only automated tests and documentation.
- Any identified issues were documented without altering the implementation.

---

# 👨‍💻 Author

Allyson da Cruz