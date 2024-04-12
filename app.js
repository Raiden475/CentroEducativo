// app.js

const prompt = require('prompt-sync')();
const { Persona, Empleado, Estudiante, Profesor, PersonalServicio } = require('./clases');
const CentroEducativo = require('./centroEducativo');

const centro = new CentroEducativo();

function mostrarMenu() {
  console.log("1. Dar de alta a una persona");
  console.log("2. Dar de baja a una persona");
  console.log("3. Imprimir información del centro educativo");
  console.log("4. Salir");
}

function ejecutarAccion(opcion) {
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
      console.log("Hasta luego!");
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
}

function darBajaPersona() {
  const identificacion = prompt("Ingrese la identificación de la persona a dar de baja: ");
  centro.darBajaPersona(identificacion);
}

function imprimirInformacion() {
  centro.imprimirInformacion();
}

// Interfaz de usuario
let opcion = "";
while (opcion !== "4") {
  mostrarMenu();
  opcion = prompt("Ingrese una opción: ");
  ejecutarAccion(opcion);
}