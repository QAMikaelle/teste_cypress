import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'hp9zn2',
  e2e: {
    baseUrl: "https://www.hml.lector.live/testesautomatizados/subscribe/login", // Substitua pela URL base desejada
  

    chromeWebSecurity: false, // Desabilita a segurança do Chrome, se necessário

    // Configurações adicionais para o modo e2e
    video: true, // Habilita a gravação do vídeo
    videoCompression: 32, // Reduz a compressão do vídeo
    videoUploadOnPasses: false, // Não faz upload de vídeos quando o teste passa
    defaultCommandTimeout: 10000, // Tempo limite para comandos (10 segundos)
    execTimeout: 120000, // Tempo limite de execução do teste (2 minutos)
    pageLoadTimeout: 60000, // Tempo limite para o carregamento da página
    waitForAnimations: true // Aguarda animações, se necessário
  }
});
