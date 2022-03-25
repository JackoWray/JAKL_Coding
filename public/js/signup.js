const loginFormHandler = async (event) => {
  event.preventDefault();

  const signupFirstname = document
    .querySelector('#signup-firstname')
    .value.trim();
  const signupLastname = document
    .querySelector('#signup-lastname')
    .value.trim();
  const signupEmail = document.querySelector('#signup-email').value.trim();
  const signupPassword = document
    .querySelector('#signup-password')
    .value.trim();
  const passwordConfirm = document
    .querySelector('#password-confirm')
    .value.trim();

  if (
    signupFirstname &&
    signupLastname &&
    signupEmail &&
    signupPassword &&
    passwordConfirm
  ) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        signupFirstname,
        signupLastname,
        signupEmail,
        signupPassword,
        passwordConfirm,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
