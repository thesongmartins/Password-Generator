// // Selecting elements
// const generateEl = document.getElementById("generate");
// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numbersEl = document.getElementById("numbers");
// const symbolsEl = document.getElementById("symbols");
// const passwordEl = document.getElementById("password");
// // Character sets
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

// // Function to generate a random password
// const generatePassword = (
//   length,
//   includeUpper,
//   includeLower,
//   includeNumbers,
//   includeSymbols
// ) => {
//   let characters = "";
//   if (includeUpper) characters += upperCase;
//   if (includeLower) characters += lowerCase;
//   if (includeNumbers) characters += numbers;
//   if (includeSymbols) characters += symbols;

//   if (characters === "") return "Select at least one option!";

//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters[randomIndex];
//   }

//   return password;
// };

// // Event listener for the Generate button
// generateEl.addEventListener("click", () => {
//   const length = parseInt(lengthEl.value);
//   const includeUpper = uppercaseEl.checked;
//   const includeLower = lowercaseEl.checked;
//   const includeNumbers = numbersEl.checked;
//   const includeSymbols = symbolsEl.checked;

//   const password = generatePassword(
//     length,
//     includeUpper,
//     includeLower,
//     includeNumbers,
//     includeSymbols
//   );
//   passwordEl.textContent = password;
// });
function updateValue(val) {
  document.getElementById("lengthValue").textContent = val;
}

function generatePassword() {
  const length = document.getElementById("lengthRange").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+=-{}[];:'\",.<>?/|";

  let allowedChars = "";
  let password = "";

  if (useUppercase) allowedChars += uppercaseChars;
  if (useLowercase) allowedChars += lowercaseChars;
  if (useNumbers) allowedChars += numberChars;
  if (useSymbols) allowedChars += symbolChars;

  if (allowedChars.length === 0) {
    document.getElementById("password").value = "Select at least one option!";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordField.value);
  
  // Show confirmation message
  const message = document.getElementById("copyMessage");
  message.textContent = "Copied!";
  setTimeout(() => { message.textContent = ""; }, 1500);
}
function updateValue(val) {
  document.getElementById("lengthValue").textContent = val;
}
