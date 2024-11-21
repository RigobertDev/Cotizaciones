<script>
    function generarMensajeWhatsApp() {
        const valorCompra = document.getElementById("valorCompra").value.trim();
        const tipoFlete = document.getElementById("tipoFlete").value.trim();
        const codigoArancelario = document.getElementById("codigoArancelario").value.trim();
        const pesoKg = document.getElementById("pesoKg").value.trim();
        const cbm = document.getElementById("cbmInput").value.trim();
        
        // Generar el mensaje basado en la información disponible
        let mensaje = `Hola, quisiera realizar una consulta de importación:\n\n`;
        mensaje += `- Valor de la compra: $${valorCompra}\n`;
        mensaje += `- Tipo de flete: ${tipoFlete || "No especificado"}\n`;
        if (pesoKg) mensaje += `- Peso: ${pesoKg} kg\n`;
        if (cbm) mensaje += `- CBM: ${cbm}\n`;
        mensaje += `- Código arancelario: ${codigoArancelario || "No proporcionado"}\n`;
        mensaje += `\nPor favor, contáctenme para más detalles.`;

        // Redirigir a WhatsApp con el mensaje
        const urlWhatsApp = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }
</script>
