// solução resolve esse problema

export const test1 = (numeroInicial) => {
  const arr = [];

  const numero = `${numeroInicial}${numeroInicial}${numeroInicial}${numeroInicial}`;

  for (let i = 1000; i <= Number(numero); i++) {
    if (i.toString().includes('7')) continue;
    if (i.toString().includes('8')) continue;
    if (i.toString().includes('9')) continue;

    const data = i.toString().split('');

    const soma =
      Number(data[0]) + Number(data[1]) + Number(data[2]) + Number(data[3]);

    if (soma < 21) continue;

    arr.push(i);
  }
  return arr;
};

// Solução resolva esse problema

export const test2 = (num) => {
  const arr2 = [];
  const xablau = [];
  for (let primeiro = num; primeiro > 0; primeiro--) {
    for (let segundo = num; segundo > 0; segundo--) {
      for (let terceiro = num; terceiro > 0; terceiro--) {
        for (let quarto = num; quarto > 0; quarto--) {
          if (primeiro + segundo + terceiro + quarto === 21) {
            xablau.push([primeiro, segundo, terceiro, quarto].join(''));
          }
        }
      }
    }
  }
  for (let i = xablau.length - 1; i >= 0; i--) {
    arr2.push(Number(xablau[i]));
  }
  return arr2;
};
