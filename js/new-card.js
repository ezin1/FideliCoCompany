function generateRandomCode() {
    let code = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 9; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
  
function showCardOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    overlay.innerHTML = `
      <div class="message-box">
        <form>
          <label for="nameInput">Nome:</label>
          <input type="text" id="nameInput" name="nameInput">
          <label for="cpfInput">CPF:</label>
          <input type="text" id="cpfInput" name="cpfInput">
          <div class="div-received-code">
            <button class="generate-card-button">Gerar Cartão</button>
            <button class="close-button">Fechar</button>
          </div>
        </form>
      </div>
    `;
  
    document.body.appendChild(overlay);
  
    const closeButton = overlay.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      overlay.remove();
    });
  
    const generateCardButton = overlay.querySelector('.generate-card-button');
    generateCardButton.addEventListener('click', (event) => {
      event.preventDefault();
      const cpfInput = overlay.querySelector('#cpfInput');
      const nameInput = overlay.querySelector('#nameInput');
      const cpf = cpfInput.value.trim();
      const name = nameInput.value.trim();
  
      if (cpf === '' || name === '') {
        const messageBox = overlay.querySelector('.message-box');
        const errorMessage = document.createElement('p');
        overlay.innerHTML = `
        <div class="message-box">
          <p>Por favor, preencha todos os campos!</p>
          <button class="close-button">Fechar</button>
        </div>
      `;
      const closeButton = overlay.querySelector('.close-button');
      closeButton.addEventListener('click', () => {
        overlay.remove();
      });
        messageBox.appendChild(errorMessage);
      } else {
        const generatedCode = generateRandomCode();
        overlay.innerHTML = `
          <div class="message-box">
            <p>Cartão gerado com sucesso para o CPF ${cpf} e nome ${name}!</p>
            <p>Código de validação do cartão para o cliente:</p>
            <div id="codeDisplay">${generatedCode}</div>
            <button class="close-button">Fechar</button>
          </div>
        `;

        const closeButton = overlay.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
          overlay.remove();
        });
              // Adiciona o evento de clique ao #codeDisplay para copiar o código
      codeDisplay.addEventListener('click', () => {
        if (generatedCode) {
          const tempInput = document.createElement('input');
          tempInput.value = generatedCode;
          document.body.appendChild(tempInput);
      
          tempInput.select();
          tempInput.setSelectionRange(0, 99999);
      
          document.execCommand('copy');
      
          document.body.removeChild(tempInput);
      
          codeDisplay.textContent = 'Código copiado para a área de transferência!';
          codeDisplay.classList.add('copied');
        }
      });
      }
    });
  }
  
  const newCardButton = document.querySelector('.button-new-card');
  newCardButton.addEventListener('click', (event) => {
    event.preventDefault();
    showCardOverlay();
  });
  