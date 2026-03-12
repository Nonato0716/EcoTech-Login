const express = require('express');
const fs = require('fs/promises'); 
const path = require('path');
const cors = require('cors'); 

const app = express();


app.use(express.json()); 
app.use(cors()); 


app.post('/usuarios', async (req, res) => {
    const { email, senha } = req.body; 

    try {
        
        const caminhoArquivo = path.resolve(__dirname, 'usuarios.json');
        const conteudo = await fs.readFile(caminhoArquivo, 'utf-8');
        const usuarioDB = JSON.parse(conteudo);
        const buscaUsuario = usuarioDB.find(user => user.email === email);

        if(!buscaUsuario) return res.status(404).json({message: "usuario não encontrado"});

        
        if (senha === buscaUsuario.senha) {
            
            return res.status(200).json({ message: "Login realizado com sucesso!" });
        } else {
            
            return res.status(401).json({ message: "Credenciais Inválidas" });
        }

    } catch (error) {
        console.error("Erro ao ler o banco de dados:", error);
        return res.status(500).json({ message: "Erro interno no servidor" });
    }
});

app.get("/", async (req, res) => {
    const caminhoArquivo = path.resolve(__dirname, 'usuarios.json');
    const conteudo = await fs.readFile(caminhoArquivo, 'utf-8');
    const usuarioDB = JSON.parse(conteudo);

    res.send(usuarioDB)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor EcoTech rodando em http://localhost:${PORT}`);
});