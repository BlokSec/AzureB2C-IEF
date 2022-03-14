// Select DOM elements to work with
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpsignInButton = document.getElementById('signUpsignIn');
const signOutButton = document.getElementById('signOut');
const titleDiv = document.getElementById('title-div');
const welcomeDiv = document.getElementById('welcome-div');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const editProfileButton = document.getElementById('editProfileButton');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const label = document.getElementById('label');

function welcomeUser(username) {
    welcomeDiv.innerHTML = `Welcome ${username}!`

    label.classList.add('d-none');
    signUpButton.classList.add('d-none');
    signInButton.classList.add('d-none');
    signUpsignInButton.classList.add('d-none');
    titleDiv.classList.add('d-none');

    signOutButton.classList.remove('d-none');
    editProfileButton.classList.remove('d-none');
    welcomeDiv.classList.remove('d-none');
    callApiButton.classList.remove('d-none');
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}