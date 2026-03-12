const apiUrl = "http://localhost:3000/tasks";

const form = document.getElementById('login-form')

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
});