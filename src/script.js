// Selecting elements
const copyPassword = document.querySelector(".copypassword");
const passwordField = document.getElementById("password");
const message = document.getElementById("copyMessage");
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("charLength");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const lengthVal = document.getElementById("lengthValue");

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

// // Event listener for the Generate button
generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const includeUpper = uppercaseEl.checked;
  const includeLower = lowercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSymbols = symbolsEl.checked;
  console.log("Clicked");

  // Calling the generate random password function
  const password = generatePassword(
    length,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
  );
  console.log(password);
  passwordField.value = password;
});

// Event listener for copying the password
copyPassword.addEventListener("click", () => {
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordField.value);

  // Show confirmation message
  message.textContent = "Password Copied!";
  setTimeout(() => {
    message.textContent = "";
  }, 1500);
});

// Updating the of character length function
const updateValue = (val) => (lengthVal.textContent = val);
