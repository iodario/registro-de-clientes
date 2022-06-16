const personas = [];
let formulario = document.getElementById("formulario");

class Persona {
  constructor(nombre, apellido, email, edad, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.dni = dni;
  }

  static crearPersona(persona) {
    let p = new Persona(persona.nombre, persona.apellido, persona.email, persona.edad, persona.dni);
    return p;
  }
}


formulario.onsubmit = (e) => {

  e.preventDefault();
  const inputs = e.target;
    let nombre = inputs[0].value;
    let apellido = inputs[1].value;
    let email = inputs[2].value;
    let edad = inputs[3].value;
    let dni = inputs[4].value;

    let nueva_persona = new Persona(nombre, apellido, email, edad, dni);

      
  
  guardar_personas(nueva_persona);

  mostrarPersonas();

  alert("cliente guardado con exito");
}

const clave_lista_storage = "listaPersonas";
function guardar_personas(persona_nueva) {

  let item = localStorage.getItem(clave_lista_storage);
  if (item) {

    let almacenados = JSON.parse(localStorage.getItem(clave_lista_storage));
    almacenados.push(persona_nueva);

    let almacenados_string = JSON.stringify(almacenados);
    localStorage.setItem(clave_lista_storage, almacenados_string);

  } else {

    let almacenados = new Array();
    almacenados.push(persona_nueva);
    let almacenados_string = JSON.stringify(almacenados);
    localStorage.setItem(clave_lista_storage, almacenados_string);


  }
}



function mostrarPersonas() {

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

  //recorrer arreglo storage
  let almacenados = JSON.parse(localStorage.getItem(clave_lista_storage));
  for (let i = 0; i < almacenados.length; i++) {
    let persona = almacenados[i];
    salida.innerHTML += `
    <tbody>
    <tr>
      <td>${persona.nombre}</td>
      <td>${persona.apellido}</td>
      <td>${persona.email}</td>
      <td>${persona.edad}</td>
      <td>${persona.dni}</td>
    </tr>
  </tbody>
    `;
  }
  return salida.innerHTML;
}

  // let arreglo = localStorage.getItem(clave_lista_storage);
  // if (arreglo) {

  //   arreglo = JSON.parse(arreglo);
  //   for (let i = 0; i < arreglo.length; i++) {

  //     let persona = arreglo[i];
  //     let nueva_persona = Persona.crearPersona(persona);
  //     console.log(nueva_persona);
  //     console.log(nueva_persona.nombre);


  //   }
  //   return arreglo;
  // }

  



  // for (const persona of personas) {
  //   let trPersona = document.createElement("div");
  //   trPersona.innerHTML = `<tbody>
  //   <tr>
  //   <th scope="row">El nombre es: ${persona.nombre}</th>
  //   <td>El apellido es: ${persona.apellido}</td>
  //   <td>El email es: ${persona.email}</td>
  //   <td>La edad es: ${persona.edad}</td>
  //   <td>El dni es: ${persona.dni}</td>

  //   </tr>
  // `
  //   //<td>El turno es: ${persona.turno}</td>
  //   salida.appendChild(trPersona);
  // }
  // `</tbody>
  //   </table>`

const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);




