// centroEducativo.js

const { Persona, Empleado, Estudiante, Profesor, PersonalServicio } = require('./clases');

class CentroEducativo {
  constructor() {
    this.personas = [];
  }

  darAltaPersona(persona) {
    this.personas.push(persona);
    console.log(`${persona.nombre} ha sido dado de alta en el centro educativo.`);
  }

  darBajaPersona(identificacion) {
    this.personas = this.personas.filter(persona => persona.identificacion !== identificacion);
    console.log(`Persona con identificación ${identificacion} ha sido dado de baja.`);
  }

  imprimirInformacion() {
    console.log("Información del Centro Educativo:");
    this.personas.forEach(persona => {
      console.log(`Nombre: ${persona.nombre} ${persona.apellidos}`);
      console.log(`Identificación: ${persona.identificacion}`);
      console.log(`Estado Civil: ${persona.estadoCivil}`);
      if (persona instanceof Empleado) {
        console.log(`Año de Incorporación: ${persona.anioIncorporacion}`);
        console.log(`Despacho: ${persona.numeroDespacho}`);
      }
      if (persona instanceof Estudiante) {
        console.log(`Curso Matriculado: ${persona.cursoMatriculado}`);
      }
      if (persona instanceof Profesor) {
        console.log(`Departamento: ${persona.departamento}`);
      }
      if (persona instanceof PersonalServicio) {
        console.log(`Sección Asignada: ${persona.seccionAsignada}`);
      }
      console.log("-------------------------------------");
    });
  }
}

module.exports = CentroEducativo;