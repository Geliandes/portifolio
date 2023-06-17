function btnMenu() {
  let button = document.querySelector('#btnMenu');
  let menuMobile = document.querySelector('#menuMobileContainer');

  if (button.classList == 'btnActive') {
    button.classList.remove('btnActive');
    button.classList.add('opened');
    menuMobile.style.width = '0%';
  } else {
    button.classList.add('btnActive');
    button.classList.remove('opened');
    menuMobile.style.width = '100%';
  }
}

function closeMenu() {
  closeMenuOption = document.querySelector('#btnMenu');

  closeMenuOption.click();
}

function performHeavyTask() {
  // Simula um processamento intensivo
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

function performHeavyTask() {
  // Simula um processamento intensivo
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

function executeHeavyScript() {
  console.log('Início do script pesado.');
  const startTime = performance.now();

  // Executa a tarefa pesada várias vezes para aumentar a carga
  for (let i = 0; i < 10; i++) {
    performHeavyTask();
  }

  const endTime = performance.now();
  console.log(`Fim do script pesado. Tempo total: ${endTime - startTime}ms.`);
}

// Função para verificar se o elemento está visível no viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para lidar com a interação do usuário
function handleUserInteraction() {
  const heavyScriptElement = document.getElementById('heavy-script');

  if (isElementInViewport(heavyScriptElement)) {
    // Se o elemento estiver visível, executa o script pesado
    executeHeavyScript();

    // Remove o event listener para evitar repetições
    window.removeEventListener('scroll', handleUserInteraction);
  }
}

// Adiciona um event listener para verificar a interação do usuário
window.addEventListener('scroll', handleUserInteraction);
