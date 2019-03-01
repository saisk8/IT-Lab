// A function that allows only numbers

function isNumberKey(event) {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// A function that checks for a valid email
function validateEmail(emailField) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(emailField.value) === false) {
    return false;
  }
  return true;
}

// A function that checks for valid name
function inputAlphabet(inputField) {
  const alphaExp = /^[a-zA-Z]+$/;
  if (inputField.value.match(alphaExp)) {
    return true;
  }
  return false;
}

function checkPassword(str) {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(str);
}

function validate() {
  let error = false;
  let errMessage = 'Please correct the ';
  if (!inputAlphabet(document.getElementById('fn'))) {
    errMessage += 'First Name, ';
    error = true;
  }
  if (!inputAlphabet(document.getElementById('ln'))) {
    errMessage += 'Last Name, ';
    error = true;
  }
  if (!inputAlphabet(document.getElementById('un'))) {
    errMessage += 'Username Name, ';
    error = true;
  }
  if (!checkPassword(document.getElementById('ps').value)) {
    errMessage += 'Password, ';
    error = true;
  }
  if (document.getElementById('ps').value !== document.getElementById('cn').value) {
    errMessage += 'Confirm password, ';
    error = true;
  }
  if (!validateEmail(document.getElementById('re'))) {
    errMessage += 'Recovery email';
    error = true;
  }
  if (error) {
    document.getElementById('error-text').innerHTML = errMessage;
  }
  document.getElementById('form').reset();
}
