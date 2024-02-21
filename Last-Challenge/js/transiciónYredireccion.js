
// varios casos en la funcion opa para que nos rediriga a una determinada pagina 
function opa($nom) {
    document.body.classList.add("transparent"); // Aplica la clase 'transparent' para hacer todos los elementos transparentes
    setTimeout(function () {
      switch ($nom) {
        case "aprilia":
          window.location.href = "/layouts/home_layout.html?marca=aprilia";
          break;
        case "ducati":
          window.location.href = "/layouts/home_layout.html?marca=ducati";
          break;
        case "motoguzzi":
          window.location.href = "/layouts/home_layout.html?marca=motoguzzi";
          break;
  
        case "mvagusta":
          window.location.href = "/layouts/home_layout.html?marca=mvagusta";
          break;
        case "empresa":
          window.location.href = "/layouts/home_layout.html?marca=empresa";
          break;
        case "servicios":
          window.location.href = "/layouts/home_layout.html?marca=servicios";
          break;
  
        case "contacto":
          window.location.href = "/layouts/home_layout.html?marca=contacto";
          break;
        case "taller":
          window.location.href = "/layouts/home_layout.html?marca=taller";
          break;
        case "login":
          window.location.href = "/layouts/home_layout.html?marca=login";
          break;
  
        case "registro":
          window.location.href = "/layouts/home_layout.html?marca=registro";
          break;
        case "perfil":
          window.location.href = "/layouts/home_layout.html?marca=perfil";
          break;
        case "index":
          window.location.href = "/index.html";
          break;
      }
  
      // Redirige a la nueva página después de 2 segundos
    }, 1000); // 2000 milisegundos = 2 segundos
  }
  