# 🧪 Natchez Cypress Testing

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Node](https://img.shields.io/badge/node-%3E%3D%2018-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📌 Overview

This repository contains automated **End-to-End (E2E) tests** built using **Cypress** for testing the Natchez application.

The project follows a **Page Object Model (POM)** structure for better maintainability and scalability.

---

## 📚 Table of Contents

- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Project Structure](#-project-structure)
- [Environment Setup](#-environment-setup)
- [Troubleshooting](#-troubleshooting)
- [Author](#-author)

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js (v18 or higher recommended)
- npm or yarn
- Git

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/shpres1mKrasniqi/NatchesTest.git

# Navigate into the project folder
cd NatchesTest

# Install dependencies
npm install
```

## ▶️ Running Tests
🖥️ Open Cypress (UI Mode)
```bash
npx cypress open
```
**Steps:**
1. Select E2E Testing
2. Choose a browser (Chrome, Edge, etc.)
3. Click on any test to run it

##⚡ Run Tests (Headless Mode)
```bash
npx cypress run
```

#🎯 Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/your-test-file.cy.js"
```

##📁 Project Structure
```bash
cypress/
├── e2e/        # Test cases (E2E)
├── pages/      # Page Object Model (POM)
├── fixtures/   # Test data
├── support/    # Custom commands & global setup
```



