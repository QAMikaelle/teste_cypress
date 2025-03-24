Cypress.on('uncaught:exception', (err, runnable) => {
  // Verifica se o erro é referente a 'style'
  if (err.message.includes("Cannot read properties of null (reading 'style')")) {
    return false; // Ignora o erro
  }
  // Permite que outros erros sejam tratados normalmente
  return true;
});
