// app.js

const { Persona, Empleado, Estudiante, Profesor, PersonalServicio } = require('./clases');
const CentroEducativo = require('./centroEducativo');

const centro = new CentroEducativo();

function ejecutarAccion() {
  const opcion = document.getElementById("opcion").value;

  switch (opcion) {
    case "1":
      darAltaPersona();
      break;
    case "2":
      darBajaPersona();
      break;
    case "3":
      imprimirInformacion();
      break;
    default:
      console.log("Opción no válida");
  }
}

function darAltaPersona() {
  const tipoPersona = prompt("Ingrese el tipo de persona (estudiante, profesor, personal): ").toLowerCase();
  const nombre = prompt("Ingrese el nombre: ");
  const apellidos = prompt("Ingrese los apellidos: ");
  const identificacion = prompt("Ingrese la identificación: ");
  const estadoCivil = prompt("Ingrese el estado civil: ");
  
  if (tipoPersona === "estudiante") {
    const cursoMatriculado = prompt("Ingrese el curso matriculado: ");
    const estudiante = new Estudiante(nombre, apellidos, identificacion, estadoCivil, cursoMatriculado);
    centro.darAltaPersona(estudiante);
  } else if (tipoPersona === "profesor") {
    const departamento = prompt("Ingrese el departamento: ");
    const profesor = new Profesor(nombre, apellidos, identificacion, estadoCivil, null, null, departamento);
    centro.darAltaPersona(profesor);
  } else if (tipoPersona === "personal") {
    const seccionAsignada = prompt("Ingrese la sección asignada: ");
    const personal = new PersonalServicio(nombre, apellidos, identificacion, estadoCivil, null, null, seccionAsignada);
    centro.darAltaPersona(personal);
  } else {
    console.log("Tipo de persona no válido.");
  }

  actualizarOutput();
}

function darBajaPersona() {
  const identificacion = prompt("Ingrese la identificación de la persona a dar de baja: ");
  centro.darBajaPersona(identificacion);
  actualizarOutput();
}

function imprimirInformacion() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const infoCentro = document.createElement("div");
  infoCentro.innerHTML = "<h2>Información del Centro Educativo:</h2>";
  output.appendChild(infoCentro);

  centro.personas.forEach(persona => {
    const infoPersona = document.createElement("div");
    infoPersona.innerHTML = `
      <strong>Nombre:</strong> ${persona.nombre} ${persona.apellidos}<br>
      <strong>Identificación:</strong> ${persona.identificacion}<br>
      <strong>Estado Civil:</strong> ${persona.estadoCivil}<br>
    `;
    if (persona instanceof Empleado) {
      infoPersona.innerHTML += `
        <strong>Año de Incorporación:</strong> ${persona.anioIncorporacion}<br>
        <strong>Despacho:</strong> ${persona.numeroDespacho}<br>
      `;
    }
    if (persona instanceof Estudiante) {
      infoPersona.innerHTML += `<strong>Curso Matriculado:</strong> ${persona.cursoMatriculado}<br>`;
    }
    if (persona instanceof Profesor) {
      infoPersona.innerHTML += `<strong>Departamento:</strong> ${persona.departamento}<br>`;
    }
    if (persona instanceof PersonalServicio) {
      infoPersona.innerHTML += `<strong>Sección Asignada:</strong> ${persona.seccionAsignada}<br>`;
    }
    infoPersona.innerHTML += "-------------------------------------<br>";
    output.appendChild(infoPersona);
  });
}

function actualizarOutput() {
  const output = document.getElementById("output");
  output.innerHTML = "";
}