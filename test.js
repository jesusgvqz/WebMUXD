chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applyFilter') {
    // Obtener los elementos de la página y aplicar los estilos según la configuración
    document.body.style.filter = `hue-rotate(${request.hue}deg)`;
  }
});
