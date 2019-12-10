var Calculadora = {
  ADICAO: '+',
  SUBTRACAO: '-',
  DIVISAO: '/',
  MULTIPLICACAO: '*',


  adicionar: function(num1, num2) {
    return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
  },

  subtrair: function(num1, num2) {
    return Calculadora.calcular(num1,num2, Calculadora.SUBTRACAO);
  },

  dividir: function(num1, num2) { 
    return Calculadora.calcular(num1,num2, Calculadora.DIVISAO);
  },

  multiplicar: function(num1, num2) {
    return Calculadora.calcular(num1,num2, Calculadora.MULTIPLICACAO);
  },

  calcular: function (num1, num2, operacao) {
    let resultado = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      return 0;
    }

    switch (operacao) {
      case Calculadora.ADICAO:
        resultado = num1 + num2;
        break;
      case Calculadora.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case Calculadora.DIVISAO:
        if (!num2)
          return 'Erro';
        resultado = num1 / num2;
        break;
      case Calculadora.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

};


// Usado na função 'require' no NodeJs
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Calculadora;
}