// A function that allows only numbers

function isNumberKey(event) {
  const charCode = event.which ? event.which : event.keyCode;
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

function stateChange() {
  if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
    var text = document.getElementById('error-text'); //  text is an id of a
    text.innerHTML = asyncRequest.responseText; //  div in HTML document
  }
}

function validate(oops) {
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
  if (
    document.getElementById('ps').value !== document.getElementById('cn').value
  ) {
    errMessage += 'Confirm password, ';
    error = true;
  }
  if (!validateEmail(document.getElementById('re'))) {
    errMessage += 'Recovery email';
    error = true;
  }
  if (error) {
    document.getElementById('error-text').innerHTML = errMessage;
  } else {
    console.log('Here');
    try {
      asyncRequest = new XMLHttpRequest();
      asyncRequest.addEventListener('readystatechange', stateChange, false);
      asyncRequest.open('POST', 'servlet/Register', true); //   /Test is url to Servlet!
      // Construct
      let data = '';
      data += 'fn=' + document.getElementById('fn').value + '&';
      data += 'ln=' + document.getElementById('ln').value + '&';
      data += 'un=' + document.getElementById('un').value + '&';
      data += 'ps=' + document.getElementById('ps').value + '&';
      data += 'date=' + document.getElementById('date').value + '&';
      data += 'aa=' + document.getElementById('aa').value + '&';
      data += 're=' + document.getElementById('re').value + '&';
      data += 'mo=' + document.getElementById('mo').value;
      console.log(new FormData(document.getElementById('form')));
      var form = document.getElementById('form');
      form.submit();
      // asyncRequest.send(data);
    } catch (exception) {
      alert('Request failed');
      console.log(exception);
    }
  }
  document.getElementById('form').reset();
}

let asyncRequest;
function start() {
  try {
    asyncRequest = new XMLHttpRequest();
    asyncRequest.addEventListener('readystatechange', stateChange, false);
    asyncRequest.open('POST', '/Poopy/servlet/Register', true); //   /Test is url to Servlet!
    // Construct
    let data = new FormData();
    data.append('fn', document.getElementById('fn').value);
    data.append('ln', document.getElementById('ln').value);
    data.append('un', document.getElementById('un').value);
    data.append('ps', document.getElementById('ps').value);
    data.append('aa', document.getElementById('aa').value);
    data.append('re', document.getElementById('re').value);
    data.append('mo', document.getElementById('mo').value);
    console.log(data);
    asyncRequest.send(data);
  } catch (exception) {
    alert('Request failed');
  }
}
