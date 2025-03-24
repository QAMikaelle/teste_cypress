Cypress.on('uncaught:exception', (err, runnable) => {
  // Verifique se o erro contém a mensagem específica
  if (err.message.includes("Cannot read properties of null")) {
    return false; // Ignora apenas esse erro específico
  }
  // Permita que outros erros sejam processados
  return true;
});