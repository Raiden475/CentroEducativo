// clases.js

class Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.identificacion = identificacion;
      this.estadoCivil = estadoCivil;
    }
  
    cambiarEstadoCivil(nuevoEstadoCivil) {
      this.estadoCivil = nuevoEstadoCivil;
      console.log(`El estado civil de ${this.nombre} ha sido cambiado a ${nuevoEstadoCivil}`);
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho) {
      super(nombre, apellidos, identificacion, estadoCivil);
      this.anioIncorporacion = anioIncorporacion;
      this.numeroDespacho = numeroDespacho;
    }
  
    reasignarDespacho(nuevoDespacho) {
      this.numeroDespacho = nuevoDespacho;
      console.log(`El despacho de ${this.nombre} ha sido cambiado a ${nuevoDespacho}`);
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil, cursoMatriculado) {
      super(nombre, apellidos, identificacion, estadoCivil);
      this.cursoMatriculado = cursoMatriculado;
    }
  
    cambiarCurso(nuevoCurso) {
      this.cursoMatriculado = nuevoCurso;
      console.log(`El curso de ${this.nombre} ha sido cambiado a ${nuevoCurso}`);
    }
  }
  
  class Profesor extends Empleado {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho, departamento) {
      super(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho);
      this.departamento = departamento;
    }
  }
  
  class PersonalServicio extends Empleado {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho, seccionAsignada) {
      super(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho);
      this.seccionAsignada = seccionAsignada;
    }
  }
  
  module.exports = { Persona, Empleado, Estudiante, Profesor, PersonalServicio };