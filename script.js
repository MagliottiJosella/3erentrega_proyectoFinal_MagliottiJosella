
// variables globales

let horarioSeleccionado = null;
let diaseleccionado=null;
let reserva=[];
let nombre="";
let apellido="";
let horaturno="";
let diaturno="";
let turnosConfirmados="";
let reservasConfirmadas=[]
// variables DOM

const contenedor = document.getElementById("turneraHorario");
const selecciondia=document.getElementById("seleccionDia");




 // evento para escuchar eleccion de dias


  selecciondia.addEventListener("change",() => {
    diaseleccionado=selecciondia.value
    selecciondia.className="diaseleccionado"

  })



 // creacion de la grilla horaria

  for (let horario = 9; horario <= 18; horario++) {

    const itemListaHorario = document.createElement("button");
    itemListaHorario.innerText = horario.toString();
    contenedor.append(itemListaHorario);


// evento para seleccionar horario y corroborar que se ingrese el ultimo click hecho:

    itemListaHorario.addEventListener("click", () => {

    // remuevo la clase del elemento seleccionado anteriormente (si existe)
    const seleccionadoAnterior = document.querySelector(".horarioseleccionado");

    if (seleccionadoAnterior) {
      // esto remueve la clase
      seleccionadoAnterior.className = "";
    }

    // al que acabamos de hacer click le damos la clase horarioseleccionado
    itemListaHorario.className = "horarioseleccionado";

    // asignamos el horario seleccionado a la variable global
    horarioSeleccionado = horario;
  });
}



// FINALIZACION DE RESERVA

// array de objetos con los datos de la reserva



const botonreserva=document.getElementById("reservar")


botonreserva.addEventListener("click", (event) => 

{  event.preventDefault() 
   let Clientenombre=document.getElementById("nombreCliente").value
   let Clienteapellido=document.getElementById("apellidoCliente").value

   //genero array con los datos de la reserva

   reserva.push({
    nombre:Clientenombre,
    apellido:Clienteapellido,
    horaturno:horarioSeleccionado,
    diaturno:diaseleccionado,

   })   // este array no pisa los datos anteriores si uso el sistema de reservas seguido

    localStorage.setItem("reserva", JSON.stringify(reserva)) // guardo la reserva enSTORAGE

    turnosConfirmados =localStorage.getItem("reserva")

   reservasConfirmadas=JSON.parse(turnosConfirmados) // traigo los datos de los turnos reservados del localstorage
   console.log(reservasConfirmadas)

 



} )














