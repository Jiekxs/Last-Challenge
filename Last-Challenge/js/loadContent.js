document.addEventListener("DOMContentLoaded", function() {
    fetch("layouts/home_layout.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar la página: " + response.status);
        }
        return response.text();
    })
    .then(data => {
        // Inserta la plantilla en el cuerpo del documento
        document.querySelector("body").innerHTML = data;

        fetch("gama.html")
        .then(response => response.text())
        .then(indexHtml => {
            // Encuentra el main en la plantilla y reemplaza su contenido
            document.querySelector("main").innerHTML = extractMainContent(indexHtml);
        })
        .catch(error => console.error("Error al cargar el contenido del main del index.html:", error));

        // Llama a una función para iniciar tus scripts después de cargar el contenido, si es necesario
        iniciarScripts();
    })
    .catch(error => console.error(error));
});

// Función para extraer el contenido del main del index.html
function extractMainContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.querySelector("html").innerHTML;
}

function iniciarScripts() {
    jQuery(document).ready(function() {
       // console.log("Script ejecutándose"); // Verifica si el script se está ejecutando
       // console.log(jQuery("li"));
    
        jQuery("li").mouseover(function () {
            jQuery(this).find(".drop-down").slideDown(300);
            jQuery(this).find(".accent").addClass("animate");
            jQuery(this).find(".item").css("color", "#0D0D0D");
        }).mouseleave(function () {
            jQuery(this).find(".drop-down").slideUp(300);
            jQuery(this).find(".accent").removeClass("animate");
            jQuery(this).find(".item").css("color", "#FFFFFF");
        });
        
    });

}
