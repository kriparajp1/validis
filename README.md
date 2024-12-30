# 🚀 Validis - Simple Validation Package

Your go-to solution for simple and customizable form validations ✨

## 📋 Overview

**Validis** is a lightweight and easy-to-use package for validating different types of user input. From emails to passwords, this package offers various validation methods that you can integrate into your forms quickly and effortlessly. 💫

## 📦 Installation

```bash
npm install validis
```

## 🎯 Usage

### Basic Validations 📝

#### Email Validation ✉️
```javascript
const { email } = require('validis');
const result = email('test@example.com');
// Returns: { valid: true } or { valid: false, reason: "Invalid email format." }
```

#### Phone Number Validation 📱
```javascript
const { phone } = require('validis');
const result = phone('+1234567890');
// Returns: { valid: true } or { valid: false, reason: "Invalid phone number format." }
```

#### Character Limit Validation 📏
```javascript
const { char } = require('validis');
const result = char('hello', 10);
// Returns: { valid: true } or { valid: false, reason: "Input exceeds character limit." }
```

### Password Validations 🔒

#### Strong Password Validation
```javascript
const { pass } = require('validis');
const result = pass('Passw0rd!');
// Returns: { valid: true } or { valid: false, reasons: ["Uppercase letter missing", ...] }
```

#### Minimum Length Validation
```javascript
const { minLen } = require('validis');
const result = minLen('hello', 5);
// Returns: { valid: true } or { valid: false, reason: "Input does not meet minimum length." }
```

### Number Validations 🔢

#### Positive Number Validation
```javascript
const { num } = require('validis');
const result = num(42);
// Returns: { valid: true } or { valid: false, reason: "Number must be positive." }
```

#### Range Validation 📊
```javascript
const { range } = require('validis');
const result = range(50, 10, 100);
// Returns: { valid: true } or { valid: false, reason: "Number is out of range." }
```

### Text Case Validations ✍️

#### First Letter Uppercase
```javascript
const { firstUpper } = require('validis');
const result = firstUpper('Hello');
// Returns: { valid: true } or { valid: false, reason: "First letter is not uppercase." }
```

#### Lowercase Validation
```javascript
const { isLower } = require('validis');
const result = isLower('hello');
// Returns: { valid: true } or { valid: false, reason: "String is not fully lowercase." }
```

#### Uppercase Validation
```javascript
const { isUpper } = require('validis');
const result = isUpper('HELLO');
// Returns: { valid: true } or { valid: false, reason: "String is not fully uppercase." }
```

## 🛠️ API Reference

### Basic Validations
- ✉️ **email(email: string)**: Validates email format using regex
- 📱 **phone(phone: string)**: Validates phone numbers (10-15 digits, optional '+' prefix)
- 📝 **char(input: string, limit: number)**: Checks if string length is within limit

### Password Validations
- 🔒 **pass(password: string)**: Validates password strength (uppercase, lowercase, numbers, symbols)
- 📏 **minLen(input: string, minLength: number)**: Checks if string meets minimum length

### Number Validations
- 🔢 **num(number: number)**: Validates if number is positive
- 📊 **range(number: number, min: number, max: number)**: Checks if number is within range

### Text Case Validations
- 🔤 **firstUpper(input: string)**: Checks if first letter is uppercase
- 📝 **isLower(input: string)**: Validates if string is fully lowercase
- 📝 **isUpper(input: string)**: Validates if string is fully uppercase

## 🔍 Return Values

All validation functions return an object with the following structure:
```typescript
{
  valid: boolean;
  reason?: string;    // Single reason for failure
  reasons?: string[]; // Multiple reasons (password validation)
}
```

## 🤝 Contributing

If you'd like to contribute to the development of this package, feel free to:
- 🔄 Fork the repository
- ⭐ Create a pull request
- 🐛 Report any issues you encounter

## 📜 License

MIT License 🔓

## 👨‍💻 Creator

This package was created with ❤️ by **Kriparaj P**.

🔗 Connect with me:
- LinkedIn: [https://www.linkedin.com/in/kriparajp/](https://www.linkedin.com/in/kriparajp/) 💼
- GitHub: [https://github.com/kriparajp1](https://github.com/kriparajp1) 🐙

---

© 2024 Validis Package - All Rights Reserved ✨#   v a l i d i s  
 