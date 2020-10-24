// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
	var PWLength = (prompt("Enter the length of your password(8-128 charactor)"));
	if (PWLength <= 7 || PWLength >= 129) {
	  alert("Invalid Input, Please input numeric number of 8-128");
	  return;
	}

	var Lowercase = confirm("Including lowercase letters?");
	var Uppercase = confirm("Including uppercase letters?");
	var Symbols = confirm("Including special characters?");
	var Numbers = confirm("Including numbers?");	

	
	var newCode = '';
	if (Lowercase) {
		newCode += 'abcdefghijklmnopqrstuvwxyz';
	}	
	if (Uppercase) {
		newCode += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}	
	if (Symbols) {
		newCode += '!"#$%&()*+,-./:;<=>?@[^_`{|}';
	}
	if (Numbers) {
		newCode += '0123456789';
	}
	
	var NewPassword = '';
	for (i = 0; i < PWLength; i++) {
		NewPassword += newCode[parseInt(newCode.length * Math.random())];
	}
	return NewPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
