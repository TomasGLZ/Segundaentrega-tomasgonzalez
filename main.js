
    // Clase Calculadora
    class Calculadora {
      constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
      }
  
      suma() {
        return this.numero1 + this.numero2;
      }
  
      resta() {
        return this.numero1 - this.numero2;
      }
  
      concatenar() {
        return this.numero1.toString() + this.numero2.toString();
      }
  
      division() {
        if (this.numero2 !== 0) {
          return this.numero1 / this.numero2;
        } else {
          return "Error: división por cero";
        }
      }
  
      porcentaje() {
        return (this.numero1 * this.numero2) / 100;
      }
    }
  
  
    // Capturar entradas
    const entrada1 = prompt("Ingresa el primer valor:");
    const entrada2 = prompt("Ingresa el segundo valor:");
    const numero1 = parseFloat(entrada1);
    const numero2 = parseFloat(entrada2);
  
    // Crear instancia de Calculadora
    const calculadora = new Calculadora(numero1, numero2);
  
    // Salida
    const resultadoSuma = calculadora.suma();
    const resultadoResta = calculadora.resta();
    const resultadoConcatenacion = calculadora.concatenar();
    const resultadoDivision = calculadora.division();
    const resultadoPorcentaje = calculadora.porcentaje();
  
    alert("Resultado de la suma: " + resultadoSuma);
    alert("Resultado de la resta: " + resultadoResta);
    alert("Resultado de la concatenación: " + resultadoConcatenacion);
    alert("Resultado de la división: " + resultadoDivision);
    alert("Resultado del porcentaje: " + resultadoPorcentaje);
  
    console.log("Resultado de la suma: " + resultadoSuma);
    console.log("Resultado de la resta: " + resultadoResta);
    console.log("Resultado de la concatenación: " + resultadoConcatenacion);
    console.log("Resultado de la división: " + resultadoDivision);
    console.log("Resultado del porcentaje: " + resultadoPorcentaje);
