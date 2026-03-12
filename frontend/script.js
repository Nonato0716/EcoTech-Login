const apiUrl = "http://localhost:3000/usuarios";

const form = document.getElementById('login-form')

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    try{
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ email, senha })
    });

    const result = await response.json();
    console.log(result)

    if (response.ok) { 
            
            alert("✅ " + result.message);
            
        } else {
            
            alert("❌ " + result.message);
        }
            } catch(err) {
        alert("Erro ao conectar ao servidor")
    }
});