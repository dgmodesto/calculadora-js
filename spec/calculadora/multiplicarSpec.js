describe('Suíte de testes de multiplicação', () => {
  const Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 24 para 12 e 2', () => {
    expect(Calculadora.multiplicar(12, 2)).toEqual(24);
  });

  it('deve retornar 24 para 12 e 2 em formato texto', () => {
    expect(Calculadora.multiplicar('12', '2')).toEqual(24);
  });

  it('deve retornar 13.5 para 4.5 e 3', () => {
    expect(Calculadora.multiplicar(4.5, 3)).toEqual(13.5);
  });

  it('deve retornar 1.5 para 4.5 e 3 em formato texto', () => {
    expect(Calculadora.multiplicar('4.5', '3')).toEqual(13.5);
  });

  it('deve retornar 0 para valor 1 inválido', () => {
    expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
  });

  it('deve retornar 0 para valor 2 inválido', () => {
    expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
  });

  it('deve retornar 0 para multiplicação por 0', () => {
    expect(Calculadora.multiplicar(10, 0)).toEqual(0);
  });
});
