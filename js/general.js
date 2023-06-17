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

executeHeavyScript();
