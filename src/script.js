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
document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(
    length,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("password").textContent = password;
});
