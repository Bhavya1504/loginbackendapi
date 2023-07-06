document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const loginDetails = {
        email: email,
        password: password
      };
  
      try {
        const response = await fetch('/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginDetails)
        });
  
        if (response.status === 200) {
          // Login successful
          alert('Login successful');
        } else if (response.status === 400) {
          // Invalid email or password
          alert('Invalid email or password');
        } else {
          throw new Error('Failed to login');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred during login');
      }
    });
  });
  