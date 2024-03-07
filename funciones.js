function generarMensajeWhatsApp() {
    // Obtener los datos necesarios del resultado
    const resultContainer = document.getElementById("result");
    const resultado = resultContainer.innerText;

    // Generar el mensaje para WhatsApp
    const mensajeWhatsApp = `¡Hola! Aquí están los resultados de la consulta de importación:\n\n${resultado}`;

    // Crear el enlace para enviar el mensaje por WhatsApp
    const linkWhatsApp = `https://wa.me/50373989087?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Abrir una nueva ventana o pestaña con el enlace
    window.open(linkWhatsApp);
}