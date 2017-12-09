let answer = document.getElementById('answer').value;
let attempt = document.getElementById('attempt').value;

function guess() {
  let input = document.getElementById('user-guess').value.toString();
  //add functionality to guess function here
  if (answer == '' || attempt == '') {
    setHiddenFields();
  }
  console.log(input);
  if (!validateInput(input)) {
    return false;
  } else {
    attempt++;
  }

  if (getResults(input)) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else if (attempt >= 10) {
    setMessage('You Lose! :(');
    showAnswer(false);
    showReplay();
  } else {
    setMessage('Incorrect, try again.');
  }
}

//implement new functions here

function setHiddenFields() {
  answer = Math.floor(Math.random() * 9999 + 1).toString();
  attempt = 0;
  while (answer.length < 4) {
    answer = '0' + answer;
  }
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}

function getResults(input) {
  let div =
    '<div class="row"><span class="col-md-6">' +
    input +
    '</span><div class="col-md-6">';
  for (let i = 0; i < 4; i++) {
    if (input[i] == answer[i]) {
      div += '<span class="glyphicon glyphicon-ok"></span>';
    } else if (answer.includes(input[i])) {
      div += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      div += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  div += '</div></div>';
  document.getElementById('results').innerHTML = div;

  let victory = false;
  if (answer == input) {
    victory = true;
  }
  return victory;
}

function showAnswer(status) {
  document.getElementById('code').innerHTML = answer;
  if (status) {
    document.getElementById('code').className = 'success';
  } else {
    document.getElementById('code').className = 'failure';
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
