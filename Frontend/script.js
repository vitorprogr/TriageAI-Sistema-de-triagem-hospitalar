/* const form = document.getElementById('loginForm');

        form.addEventListener('submit', function(event) {
            // Evita que a página recarregue
            event.preventDefault();

            // Pega os valores digitados
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Apenas para teste/demonstração
            alert(`E-mail: ${email}\nSenha: ${senha}`);
        }); */


const respostaEl = document.getElementById('resposta');
const formulario = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

formulario.addEventListener('submit', async (evento) => {
  // Evita o recarregamento automático da página
    evento.preventDefault();
    const email = emailInput.value;
    const senha = senhaInput.value;
    
   try {
    const [resposta, email, senha] = await fetch('http://localhost:3006 ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, senha: senha})
    });

    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    respostaEl.textContent = 'Sucesso: ' + JSON.stringify(dados);

  } catch (erro) {
    console.error('Falha ao enviar:', erro);
    respostaEl.textContent = 'Erro ao enviar os dados.';
  }
});
