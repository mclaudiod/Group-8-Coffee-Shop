function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function init() {
  document.getElementById("nosotros").style.display = "none";
  document.getElementById("masElegidos").style.display = "none";
  document.getElementById("sucursales").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  //document.getElementById('productos').style.display='none';
}

function menug(elem, e) {
  e.preventDefault();
  document.getElementById("nosotros").style.display = "none";
  document.getElementById("carrousel").style.display = "none";
  document.getElementById("masElegidos").style.display = "none";
  document.getElementById("sucursales").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  document.getElementById("productos").style.display = "none";
  if (elem.id == "mnosotros") {
    document.getElementById("nosotros").style.display = "grid";
    document.getElementById("masElegidos").style.display = "grid";
  } else if (elem.id == "mproductos") {
    document.getElementById("productos").style.display = "grid";
    document.getElementById("carrousel").style.display = "grid";
  } else if (elem.id == "msucursales") {
    document.getElementById("sucursales").style.display = "grid";
  } else if (elem.id == "mcontacto") {
    document.getElementById("contacto").style.display = "grid";
  }
}
