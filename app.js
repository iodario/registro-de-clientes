const personas = [];
const turno_agenda = [];

let formulario = document.getElementById("formulario");

class Persona {
  constructor(literal) {
    this.nombre = literal.nombre;
    this.apellido = literal.apellido;
    this.email = literal.email;
    this.edad = literal.edad;
    this.dni = literal.dni;
    this.turno = [];

  }
}




formulario.onsubmit = (e) => {

  e.preventDefault();
  const inputs = e.target;
  personas.push
    (new
      Persona({ nombre: inputs[0].value, 
        apellido: inputs[1].value, 
        email: inputs[2].value, 
        edad: inputs[3].value, 
        dni: inputs[4].value }));

  mostrarPersonas(personas);
  alert("turno reservado con exito");
}


function mostrarPersonas(personas) {

  salida.innerHTML = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Email</th>
      <th scope="col">Edad</th>
      <th scope="col">Dni</th>
    </tr>
  </thead>  
  
 
    `;

  for (const persona of personas) {
    let trPersona = document.createElement("div");
    trPersona.innerHTML = `<tbody>
    <tr>
    <th scope="row">${persona.nombre}</th>
    <td>${persona.apellido}</td>
    <td>${persona.email}</td>
    <td>${persona.edad}</td>
    <td>${persona.dni}</td>
    </tr>
  `
    salida.appendChild(trPersona);
  }
  `</tbody>
    </table>`
}
const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);




