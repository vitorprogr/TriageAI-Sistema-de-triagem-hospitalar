const bcrypt = require('bcrypt');

async function fazerLogin(email, senhaDigitadaNoLogin) {
  try {
    // TODO: Busque o usuário no banco de dados pelo email
    // Exemplo fictício:
    // const usuario = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    const senhaSalvaNoBanco = "$2b$10$ExemploDeHashGeradoAnteriormente..."; 

    // Compara a senha digitada com o hash salvo
    const senhasConferem = await bcrypt.compare(senhaDigitadaNoLogin, senhaSalvaNoBanco);

    if (senhasConferem) {
      console.log("Login realizado com sucesso!");
      // Aqui você geralmente gera um token de sessão (como JWT)
    } else {
      console.log("Email ou senha incorretos.");
    }
    
  } catch (erro) {
    console.error("Erro ao verificar a senha:", erro);
  }
}