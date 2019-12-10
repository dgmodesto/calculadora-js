"use strict";

describe("Suite de testes de adição", function() {

  const Calculadora= require("../../src/js/calculadora.js");

  it('deve retornar 5 para os valores 2 e 3', function() {
    expect(Calculadora.adicionar(2, 3)).toEqual(5);
  });

  it('deve retornar 6 para os valores 9 e -3', function() {
    expect(Calculadora.adicionar('9', '-3')).toEqual(6);
  });

  it('deve retornar 6.5 para os valores 1.5 e 5', function() {
    expect(Calculadora.adicionar(1.5, 5)).toEqual(6.5);
  });

  it('deve retornar 0 quando número 1 for inválido', function() {
    expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
  });

  it('deve retornar 0 quando número 2 for inválido', function() {
    expect(Calculadora.adicionar(10, undefined)).toEqual(0);
  });

  
})