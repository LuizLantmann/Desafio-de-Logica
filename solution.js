export const main = (num) => {
  const arr = [];

  if (num < 6) {
    console.log(null);
  }
  const max = +[num, num, num, num].join('');
  for (let i = 1000; i < max; i++) {
    const listNum = i.toString().split('');
    const sum = +listNum[0] + +listNum[1] + +listNum[2] + +listNum[3];
    if (sum === 21 && listNum.every((n) => n <= num)) {
      arr.push(i);
    }
  }

  return arr;
};

// const funcCreateDigitArray = (maxDigit, isMilhar) => {
//   let digitos = [];
//   for (let index = isMilhar ? 1 : 0; index <= maxDigit; index++) {
//     digitos.push(index);
//   }
//   return digitos;
// };

// const arrayDeDigitosCreator = (maxDigit) => {
//   const milhares = funcCreateDigitArray(maxDigit, true);
//   console.log(milhares);
//   const centenas = funcCreateDigitArray(maxDigit, false);
//   const dezenas = funcCreateDigitArray(maxDigit, false);
//   const unidades = funcCreateDigitArray(maxDigit, false);
//   return [milhares, centenas, dezenas, unidades];
// };
// arrayDeDigitosCreator(6);

// const filterSumVinteUm = (maxDigit) => {
//   const arrayDeDigitos = arrayDeDigitosCreator(maxDigit);
//   const response = [];
//   arrayDeDigitos[0].forEach((milhar) => {
//     arrayDeDigitos[1].forEach((centena) => {
//       arrayDeDigitos[2].forEach((dezena) => {
//         arrayDeDigitos[3].forEach((unidade) => {
//           if (milhar + centena + dezena + unidade === 21) {
//             const number =
//               milhar * 1000 + centena * 100 + dezena * 10 + unidade;
//             console.log(number);
//             response.push(number);
//           }
//         });
//       });
//     });
//   });
//   return response;
// };
