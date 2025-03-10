# 🚀 Validis - Simple Validation Package

[![npm version](https://img.shields.io/npm/v/validis.svg)](https://www.npmjs.com/package/validis)
[![Downloads](https://img.shields.io/npm/dm/validis.svg)](https://www.npmjs.com/package/validis)
[![License](https://img.shields.io/npm/l/validis.svg)](https://github.com/kriparajp1/validis/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/kriparajp1/validis/pulls)
[![GitHub stars](https://img.shields.io/github/stars/kriparajp1/validis.svg?style=social)](https://github.com/kriparajp1/validis/stargazers)

> Your go-to solution for simple and customizable form validations ✨

## 📋 Overview

**Validis** is a lightweight and easy-to-use package for validating different types of user input. From emails to passwords, this package offers various validation methods that you can integrate into your forms quickly and effortlessly. 💫

### ✨ Key Features

- 🎯 Zero dependencies
- ⚡ Lightweight and blazing fast
- 🛡️ Type safety with detailed error messages
- 🔧 Highly customizable
- 🌐 Works in both Browser and Node.js

## 📦 Installation

```bash
npm install validis
```

# 📘 Validis API Reference

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

### Space Validations 🔍

#### Edge Space Validation
```javascript
const { edgeSpace } = require('validis');
const result = edgeSpace('hello');  // ✅ Valid
const result2 = edgeSpace(' hello'); // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "No edge spaces allowed." }
```

#### No Spaces Validation
```javascript
const { noSpaces } = require('validis');
const result = noSpaces('hello');    // ✅ Valid
const result2 = noSpaces('hello world'); // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "No spaces allowed." }
```

#### Blank Check Validation
```javascript
const { blank } = require('validis');
const result = blank('hello');  // ✅ Valid
const result2 = blank('   ');   // ❌ Invalid
// Returns: { valid: true } or { valid: false, reason: "Cannot be blank." }
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

#### Match Validation
```javascript
const { match } = require('validis');
const result = match('password@123', 'password@123');
// Returns: { valid: true } or { valid: false, reason: "Password does not match!" }
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

### OTP Generation & Validation 🔢🔠

Validis also includes an OTP generator with different types of OTPs.

#### Generate Numeric OTP
```javascript
const { numOtp } = require('validis');
const otp = numOtp(6);
// Returns: "123456" (Random 6-digit numeric OTP)
```

#### Generate Alphabet OTP
```javascript
const { alphabetOtp } = require('validis');
const otp = alphabetOtp(6);
// Returns: "ABCDEF" (Random 6-character alphabet OTP)
```

#### Generate Mixed OTP
```javascript
const { mixedOtp } = require('validis');
const otp = mixedOtp(6);
// Returns: "A1B2C3" (Random 6-character alphanumeric OTP)
```

## 🛠️ API Reference

### Basic Validations
- ✉️ **email(email: string)**: Validates email format using regex
- 📱 **phone(phone: string)**: Validates phone numbers (10-15 digits, optional '+' prefix)
- 📝 **char(input: string, limit: number)**: Checks if string length is within limit

### Space Validations
- 🔍 **edgeSpace(str: string)**: Checks for no leading or trailing spaces
- 🚫 **noSpaces(str: string)**: Ensures string contains no spaces
- ⚡ **blank(str: string)**: Validates that string is not entirely whitespace

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

### OTP Generation & Validation
- 🔢 **numOtp(length: number)**: Generates a numeric OTP of the specified length
- 🔠 **alphabetOtp(length: number)**: Generates an alphabetic OTP of the specified length
- 🔀 **mixedOtp(length: number)**: Generates an alphanumeric OTP of the specified length

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

<div align="center">

## ⭐ Give Validis a Star!

If you find **Validis** helpful, consider **starring** the repository! ⭐  

[![GitHub stars](https://img.shields.io/github/stars/kriparajp1/validis.svg?style=social)](https://github.com/kriparajp1/validis/stargazers)  

Your support helps us improve and maintain the project! 🚀
## ⭐ Starred by Amazing Developers  

Thanks to everyone who has starred **Validis**! 🌟  

[![Stargazers](https://reporoster.com/stars/dark/kriparajp1/validis)](https://github.com/kriparajp1/validis/stargazers)  


Made with ❤️ by Kriparaj P

© 2024 Validis Package - All Rights Reserved ✨

</div> 
