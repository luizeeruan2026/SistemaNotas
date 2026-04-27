//Preparando o formulário para exibir notas de 0 a 10
const todasNotas = document.querySelectorAll('.nota');
console.log(todasNotas.value);

//recuperando o formulario
//escutador para o evento Submit- Ele fica escutando qaudno o evento for disparado
// quando for disparado,executa uma função
document.querySelector('#form-notas').addEventListener('submit', function(e)  { // "e" representa o Submit
    // cancelando o envio
    e.preventDefault();
    //resultado final
    let resultadoFinal;
    // pegando cada informação digitada e armazenando em variáveis
     const nomeAluno = document.querySelector('#nome-aluno').value;
    console.log(nomeAluno);
     const disciplina = document.querySelector('#disciplina').value;
    console.log(disciplina);

    //verificando se o usuário escolheu a disciplina
    if(disciplina.length === 0){
        alert("Selecione uma Disciplina Válida");
        return;
    }

     const nota1 = Number(document.querySelector('#nota1').value);
    console.log(nota1);
     const nota2 = Number(document.querySelector('#nota2').value);
    console.log(nota2);
     const nota3 = Number(document.querySelector('#nota3').value);
    console.log(nota3);
     const nota4 = Number(document.querySelector('#nota4').value);
    console.log(nota4);
     const media = parseInt(nota1 + nota2 + nota3 + nota4)/4;
    console.log(media)


    if(nota1 >= 10 || nota2 >= 10 || nota3 >=10 || nota4 >= 10){
        alert('Notas precisam estar entre 0 e 10');
        return;
    }

    // calcular o resultado
    if(media >= 6){
         resultadoFinal = "Aprovado"
     } else if(media < 4){
         resultadoFinal = "Reprovado"
     } else {
         resultadoFinal = "Recuperação"
     }
     console.log(resultadoFinal) 

  

    document.querySelector('tbody').innerHTML +=`
    <tr>
      <td>${nomeAluno}</td>
      <td>${disciplina}</td>
      <td>${nota1.toFixed(1)}</td>
      <td>${nota2.toFixed(1)}</td>
      <td>${nota3.toFixed(1)}</td>
      <td>${nota4.toFixed(1)}</td>
      <td>${media.toFixed(1)}</td>
      <td>${resultadoFinal}</td>
    </tr>
    `
    
    //limpando o formulario
    this.reset();


    // Exibir a dara da atualização
    document.querySelector('#data').textContent = new Intl.DateTimeFormat('pt-BR').format(new Date());
    //retoma a atualização para o data e hora do Brasil 
})

