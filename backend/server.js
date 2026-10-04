import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
    
// middlewares
app.use(cors());
app.use(express.json());

// CRUD

// criar usuario - create

/* app.post("/", async (req, res)=> {
    try{
        const {email} = req.body;

        const [result] = await pool.query(
            "INSERT INTO usuarios (email) VALUES (?)", 
            [email]
        );
        res.status(201).json({ id: result.insertId, email});
    }  catch(e){
        console.error("Erro do MySQL:", e); 
        res.status(500).json({erro: "falha ao criar usuario"});
    }
});
*/

app.post("/", async (req, res)=> {
    // RASTREADOR 1: Vê se a requisição chegou no Express
    console.log("Passo 1: Alguém chamou a rota POST!"); 
    console.log("Passo 2: O que chegou no req.body?", req.body);

    try{
        const {email, senha} = req.body;
        console.log("Passo 3: Tentando inserir no banco o e-mail:", email, senha);

        const [result] = await pool.query(
            "INSERT INTO usuarios (email, senha) VALUES (?,?)", 
            [email,senha]
        );
        
        console.log("Passo 4: Sucesso no banco! ID criado:", result.insertId);
        res.status(201).json({ id: result.insertId, email, senha});
    }  catch(e){
        // RASTREADOR 5: Erro real
        console.error("Passo 5: ERRO DO BANCO DE DADOS AQUI ->", e); 
        res.status(500).json({erro: "falha ao criar usuario"});
    }
});

//listar usuarios - read

app.get("/", async (req, res) => {
    try{
        const[rows] = await pool.query("SELECT * FROM usuarios");
        res.json(rows);
    } catch (e){
        res.status(500).json({ erro: "falha ao listar usuarios"})
    }
});

// atualizar usuario - update

app.put("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { nome, email } = req.body;
        const [ result ] = await pool.query("UPDATE usuarios SET nome = COALESCE(?,nome), email = COALESCE(?,email) WHERE id = ?", [nome || null, email || null, id]);
        
        if(!result.affectedRows)
            return res.status(404).json({ erro: "Usuario nao encontrado"});

           res.json({ mensagem: "atualizado com sucesso"});
    } catch (e) {
        res.status(500).json({ erro: "falha ao atualizar usuario"});
    }
});

// Deletar usuario - DELETE

app.delete("/:id", async (req, res)=> {
    try{
        const { id } = req.params;

        const [ result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id, ]);

        if (!result.affectedRows)
            return res.status(404).json({ erro: "Usuario nao encotrado"});
        res.json({mensagem: "Deletado com sucesso"});

    } catch (e){
        res.status(500).json({erro: "falha ao deletar usuario"});
    }
});

app.listen( PORT, ()=> {
    console.log(`Servidor MySQL rodando em http:localhost:${PORT}`);
});