// Selecting elements
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const passwordEl = document.getElementById("password");
// Character sets
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

// Function to generate a random password
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

  if (characters === "") return "Select at least one option!";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};

// Event listener for the Generate button
generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const includeUpper = uppercaseEl.checked;
  const includeLower = lowercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSymbols = symbolsEl.checked;

  const password = generatePassword(
    length,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
  );
  passwordEl.textContent = password;
});
