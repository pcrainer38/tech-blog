const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST to API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json '},
        });

        if (response.ok) {
            console.log('you are now logged in');
            // If successful, redirect to the blogs page
            document.location.replace('/blogs');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

