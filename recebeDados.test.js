
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Sarah Ribeiro" e o RA "182652"', () => {
    const nome = "Sarah Ribeiro";
    const RA = "182652";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
