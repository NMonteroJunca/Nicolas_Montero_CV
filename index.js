$('.ContactButton').on('click', function(event) {
    event.preventDefault(); // Evita que se abra el cliente de correo
    var email = 'nicolasgreen@hotmail.com';
    var originalText = $(this).text(); // Guarda el texto original
    
    // Copia el correo electrónico al portapapeles
    navigator.clipboard.writeText(email).then(function() {
      // Cambia el texto del botón temporalmente
      $('.ContactButton').text('¡Copied!');
      
      // Después de 3 segundos, vuelve al texto original
      setTimeout(function() {
        $('.ContactButton').text(originalText);
      }, 3000);
    }).catch(function(err) {
      console.error('Error al copiar: ', err);
    });
  });
