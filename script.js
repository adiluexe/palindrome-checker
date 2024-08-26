const checkButton = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const input = textInput.value.trim();
  if (input === "") {
    alert("Please input a value");
    result.textContent = "Please enter a word or sentence to check";
    return;
  }

  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversed) {
    result.textContent = `${input} is a palindrome!`;
  } else {
    result.textContent = `${input} is not a palindrome!`;
  }
}
