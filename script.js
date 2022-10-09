const Allnotas = [70,75,80]

console.log(media(Allnotas));

function media(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  let mediaAluno = soma / (notas.length);

  if (mediaAluno < 59) return "F";
  if (mediaAluno < 69) return "D";
  if (mediaAluno < 79) return "C";
  if (mediaAluno < 89) return "B";
  else return "A";
};
