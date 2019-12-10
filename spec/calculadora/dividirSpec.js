describe('Suíte de testes de divisão', () => {
  const Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 6 para 12 e 2', () => {
    expect(Calculadora.dividir(12, 2)).toEqual(6);
  });

  it('deve retornar 6 para 12 e 2 em formato texto', () => {
    expect(Calculadora.dividir('12', '2')).toEqual(6);
  });

  it('deve retornar 1.5 para 4.5 e 3', () => {
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
  });

  it('deve retornar 1.5 para 4.5 e 3 em formato texto', () => {
    expect(Calculadora.dividir('4.5', '3')).toEqual(1.5);
  });

  it('deve retornar 0 para valor 1 inválido', () => {
    expect(Calculadora.dividir(undefined, 10)).toEqual(0);
  });

  it('deve retornar 0 para valor 2 inválido', () => {
    expect(Calculadora.dividir(10, undefined)).toEqual(0);
  });

  
  it('deve retornar "Erro" para divisão por 0', () => {
    expect(Calculadora.dividir(10, 0)).toEqual("Erro");
  });
});
