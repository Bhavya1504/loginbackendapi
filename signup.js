document.addEventListener('DOMContentLoaded', () => {
  const errorElement = document.getElementById('error-message');
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const signupDetails = {
      name: name,
      email: email,
      password: password
    };

    try {
      const response = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupDetails)
      });

      if (response.status === 201) {
        window.location.href = "../Login/login.html";
      } else {
        throw new Error('Failed to signup email already registered');
      }
    } catch (err) {
      errorElement.textContent = err.message;
    }
  });
});
