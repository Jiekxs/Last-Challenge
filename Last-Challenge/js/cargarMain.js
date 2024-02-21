$(document).ready(function() {
    // Obtener el valor del parámetro 'marca' de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var marca = urlParams.get('marca');

    // Definir la ruta del archivo HTML según el valor de 'marca'
    var archivoHTML;
    var archivoCSS;
    switch (marca) {
        case 'aprilia':
            archivoHTML = '/html/gama/gama_aprilia.html';
            archivoCSS = '/css/gama.css';
            break;
        case 'ducati':
            archivoHTML = '/html/gama/gama_ducati.html';
            archivoCSS = '/css/gama.css';
            break;
        case 'motoguzzi':
            archivoHTML = '/html/gama/gama_motoguzzi.html';
            archivoCSS = '/css/gama.css';
            break;
        case 'mvagusta':
            archivoHTML = '/html/gama/gama_mvagusta.html';
            archivoCSS = '/css/gama.css';
            break;
        case 'empresa':
            archivoHTML = '/html/nosotros/empresa.html';
            archivoCSS = '/css/nosotros1.css';
            break;
        case 'servicios':
            archivoHTML = '/html/nosotros/servicios.html';
            archivoCSS = '/css/nosotros1.css';
            break;
        case 'contacto':
            archivoHTML = '/html/nosotros/contacto.html';
            break;
        case 'taller':
            archivoHTML = '/html/nosotros/taller.html';
            break;
        case 'login':
            archivoHTML = '/html/perfil/login.html';
            break;
        case 'registro':
            archivoHTML = '/html/perfil/registro.html';
            break;
        case 'perfil':
            archivoHTML = '/html/perfil/registro.html';
            break;
        case 'index':
            archivoHTML = '/index.html';
            break;
    }

    // Realizar solicitud AJAX para cargar el contenido del archivo HTML
    // Realizar solicitud AJAX para cargar el contenido del archivo HTML
    if (archivoHTML !== '') {
        $.ajax({
            url: archivoHTML,
            dataType: 'html',
            success: function(data) {
                // Colocar el contenido del archivo HTML dentro del elemento main
                $('#main-content').html(data);

                // Cargar el archivo CSS correspondiente
                if (archivoCSS !== '') {
                    $('<link>').appendTo('head').attr({
                        type: 'text/css',
                        rel: 'stylesheet',
                        href: archivoCSS
                    });
                }
            },
            error: function() {
                // Manejar errores si la solicitud AJAX falla
                $('#main-content').html('<p>Error al cargar el contenido.</p>');
            }
        });
    }
});
