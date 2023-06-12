function generateRandomCode() {
    let code = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 9; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
  
  function showOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `
      <div class="message-box">
        <p>Clique no botão abaixo para gerar o código:</p>
        <div id="codeDisplay"></div>
        <div class="div-received-code">
          <button class="generate-code-button">Gerar Código</button>
          <button class="close-button">Fechar</button>
        </div>
      </div>
    `;
  
    document.body.appendChild(overlay);
  
    const generateButton = overlay.querySelector('.generate-code-button');
    generateButton.addEventListener('click', () => {
      const codeDisplay = document.getElementById('codeDisplay');
      const generatedCode = generateRandomCode();
      codeDisplay.textContent = generatedCode;
    });
  
    const closeButton = overlay.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      overlay.remove();
    });
  
    const codeDisplay = document.getElementById('codeDisplay');
    codeDisplay.addEventListener('click', () => {
      const code = codeDisplay.textContent;
      navigator.clipboard.writeText(code)
        .then(() => {
          codeDisplay.classList.add('code-copied');
          codeDisplay.textContent = 'Código copiado para a área de transferência!';
          setTimeout(() => {
            codeDisplay.classList.remove('code-copied');
            codeDisplay.textContent = code;
          }, 2000);
        })
        .catch((error) => {
          console.log('Erro ao copiar o código:', error);
        });
    });
  }
  
  const button = document.querySelector('.button-new-point');
  button.addEventListener('click', showOverlay);
  