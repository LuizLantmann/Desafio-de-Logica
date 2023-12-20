import { main } from './solution.js';
import { test1, test2 } from './solutionsWrong.js';

// ATENÇÃO: Essa é apenas simulação do teste real

// Desafio de lógica para o bootcamp de JAVA

// Complete a seguinte função para que a mesma devolva
// todos os possíveis números de 4 digitos, onde cada
// um seja menor ou igual a <maxDigit>, e a soma dos
// dígitos de casa número gerado seja 21.

// Exemplos com maxDigit=6: 3666, 4566 ...

const testMeli = (maxDigit) => {
  console.log(maxDigit);
};

// para verificar suas respostas em outros casos
const arraysIguais = (maxDigit) => {
  const results = [];
  for (let i = 0; i <= maxDigit; i++) {
    for (let j = 0; j <= maxDigit; j++) {
      for (let k = 0; k <= maxDigit; k++) {
        for (let l = 0; l <= maxDigit; l++) {
          if (i + j + k + l === 21) {
            results.push(parseInt(`${i}${j}${k}${l}`));
          }
        }
      }
    }
  }
  return results;
};

// resultado completo caso maxDigit=6
const result6 = [
  3666, 4566, 4656, 4665, 5466, 5556, 5565, 5646, 5655, 5664, 6366, 6456, 6465,
  6546, 6555, 6564, 6636, 6645, 6654, 6663,
];

// resultado completo caso maxDigit=7
const result7 = [
  1677, 1767, 1776, 2577, 2667, 2676, 2757, 2766, 2775, 3477, 3567, 3576, 3657,
  3666, 3675, 3747, 3756, 3765, 3774, 4377, 4467, 4476, 4557, 4566, 4575, 4647,
  4656, 4665, 4674, 4737, 4746, 4755, 4764, 4773, 5277, 5367, 5376, 5457, 5466,
  5475, 5547, 5556, 5565, 5574, 5637, 5646, 5655, 5664, 5673, 5727, 5736, 5745,
  5754, 5763, 5772, 6177, 6267, 6276, 6357, 6366, 6375, 6447, 6456, 6465, 6474,
  6537, 6546, 6555, 6564, 6573, 6627, 6636, 6645, 6654, 6663, 6672, 6717, 6726,
  6735, 6744, 6753, 6762, 6771, 7077, 7167, 7176, 7257, 7266, 7275, 7347, 7356,
  7365, 7374, 7437, 7446, 7455, 7464, 7473, 7527, 7536, 7545, 7554, 7563, 7572,
  7617, 7626, 7635, 7644, 7653, 7662, 7671, 7707, 7716, 7725, 7734, 7743, 7752,
  7761, 7770,
];

// resultado completo caso maxDigit=8
const result8 = [
  1488, 1578, 1587, 1668, 1677, 1686, 1758, 1767, 1776, 1785, 1848, 1857, 1866,
  1875, 1884, 2388, 2478, 2487, 2568, 2577, 2586, 2658, 2667, 2676, 2685, 2748,
  2757, 2766, 2775, 2784, 2838, 2847, 2856, 2865, 2874, 2883, 3288, 3378, 3387,
  3468, 3477, 3486, 3558, 3567, 3576, 3585, 3648, 3657, 3666, 3675, 3684, 3738,
  3747, 3756, 3765, 3774, 3783, 3828, 3837, 3846, 3855, 3864, 3873, 3882, 4188,
  4278, 4287, 4368, 4377, 4386, 4458, 4467, 4476, 4485, 4548, 4557, 4566, 4575,
  4584, 4638, 4647, 4656, 4665, 4674, 4683, 4728, 4737, 4746, 4755, 4764, 4773,
  4782, 4818, 4827, 4836, 4845, 4854, 4863, 4872, 4881, 5088, 5178, 5187, 5268,
  5277, 5286, 5358, 5367, 5376, 5385, 5448, 5457, 5466, 5475, 5484, 5538, 5547,
  5556, 5565, 5574, 5583, 5628, 5637, 5646, 5655, 5664, 5673, 5682, 5718, 5727,
  5736, 5745, 5754, 5763, 5772, 5781, 5808, 5817, 5826, 5835, 5844, 5853, 5862,
  5871, 5880, 6078, 6087, 6168, 6177, 6186, 6258, 6267, 6276, 6285, 6348, 6357,
  6366, 6375, 6384, 6438, 6447, 6456, 6465, 6474, 6483, 6528, 6537, 6546, 6555,
  6564, 6573, 6582, 6618, 6627, 6636, 6645, 6654, 6663, 6672, 6681, 6708, 6717,
  6726, 6735, 6744, 6753, 6762, 6771, 6780, 6807, 6816, 6825, 6834, 6843, 6852,
  6861, 6870, 7068, 7077, 7086, 7158, 7167, 7176, 7185, 7248, 7257, 7266, 7275,
  7284, 7338, 7347, 7356, 7365, 7374, 7383, 7428, 7437, 7446, 7455, 7464, 7473,
  7482, 7518, 7527, 7536, 7545, 7554, 7563, 7572, 7581, 7608, 7617, 7626, 7635,
  7644, 7653, 7662, 7671, 7680, 7707, 7716, 7725, 7734, 7743, 7752, 7761, 7770,
  7806, 7815, 7824, 7833, 7842, 7851, 7860, 8058, 8067, 8076, 8085, 8148, 8157,
  8166, 8175, 8184, 8238, 8247, 8256, 8265, 8274, 8283, 8328, 8337, 8346, 8355,
  8364, 8373, 8382, 8418, 8427, 8436, 8445, 8454, 8463, 8472, 8481, 8508, 8517,
  8526, 8535, 8544, 8553, 8562, 8571, 8580, 8607, 8616, 8625, 8634, 8643, 8652,
  8661, 8670, 8706, 8715, 8724, 8733, 8742, 8751, 8760, 8805, 8814, 8823, 8832,
  8841, 8850,
];

// Caso queira testar outras funções basta substituir a chamada da função no teste abaixo
const arr6 = testMeli(6);
const arr7 = testMeli(7);
const arr8 = testMeli(8);

// Aqui estamos testando sua resposta

const test6 = arraysIguais(arr6, result6);
const test7 = arraysIguais(arr7, result7);
const test8 = arraysIguais(arr8, result8);

const result = () => {
  const main = document.querySelector('#app');
  const result6 = document.createElement('p');
  result6.innerText = test6
    ? 'MaxDigit 6: passou'
    : 'MaxDigit 6:continue tentando';
  const result7 = document.createElement('p');
  result7.innerText = test7
    ? 'MaxDigit 7: passou'
    : 'MaxDigit 7:continue tentando';
  const result8 = document.createElement('p');
  result8.innerText = test8
    ? 'MaxDigit 8: passou'
    : 'MaxDigit 8:continue tentando';
  main.appendChild(result6);
  main.appendChild(result7);
  main.appendChild(result8);
};

result();
