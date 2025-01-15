const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

// Generating random password
const generatePassword = (
  length,
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols
) => {
  let characters = "";
  if ((includeUpper, includeLower, includeNumbers, includeSymbols)) {
    characters += upperCase;
    characters += lowerCase;
    characters += numbers;
    characters += symbols;
  }
  if (characters === "") {
    return "Select at least one option!";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};
