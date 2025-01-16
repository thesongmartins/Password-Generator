# Password Generator

## Overview

The Password Generator is a user-friendly tool designed to create secure, random passwords customized to your specific needs. Whether you require a password of a particular length or need to include a combination of uppercase letters, lowercase letters, numbers, and symbols, this tool allows easy customization and instant password generation.

## Features

- **Customizable Length**: Define the desired length of your password.
- **Flexible Character Selection**: Choose to include or exclude:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&\* and more)
- **Instant Results**: Generate and view your password immediately.
- **Intuitive Interface**: Designed for simplicity and ease of use.

## How to Use

1. **Set Your Preferences**:
   - Enter the desired password length.
   - Select the character types you wish to include.
2. **Generate Your Password**:
   - Click the **Generate Password** button.
3. **Use Your Password**:
   - View the generated password in the display area.
   - Copy the password for use in your accounts or applications.

## Code Summary

This tool dynamically generates passwords based on user-selected criteria and instantly updates the display. Below are key parts of the implementation:

### Key Code Highlights

#### Character Selection and Combination

The application uses predefined character sets for maximum flexibility:

```javascript
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";
```

#### Password Generation Logic

A function creates a pool of characters based on user preferences, then randomly selects characters to build the password:

```javascript
const generatePassword = (
  length,
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols
) => {
  let characters = "";
  if (includeUpper) characters += upperCase;
  if (includeLower) characters += lowerCase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (!characters) return "Select at least one option!";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};
```

#### Event Listener

This captures user inputs, generates the password, and updates the display area:

```javascript
generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const password = generatePassword(
    length,
    uppercaseEl.checked,
    lowercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked
  );
  passwordEl.textContent = password;
});
```

## Additional Features to Explore

- **Copy to Clipboard**: Add functionality to copy the generated password with a single click.
- **Input Validation**: Validate password length input to ensure it falls within a reasonable range.
- **Ambiguity Avoidance**: Provide an option to exclude ambiguous characters (e.g., `l`, `1`, `O`, `0`).
- **Save Preferences**: Allow saving commonly used settings for faster password generation in the future.

## License

This project is open-source under the MIT License. You are free to modify and distribute it as needed.
