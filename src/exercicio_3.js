let x = 0;
let cont = 0;
let arrayNotas =[]

while (x<=100){
    cont=cont+1;
    arrayNotas.push(cont*5);
    x=cont*5;
}   

function arredondaNota(){
    let nota = document.getElementById('ex3').value;
    console.log("nota", nota)

    if(nota > 100){
        alert("A nota do aluno não pode ser superior à 100");
        document.getElementById("ex3").value = '';
        document.getElementById("ex3").focus();
    }
    else if(nota >= 38){
        for(let i = 0; i < arrayNotas.length; i++ ){
            if(arrayNotas[i] > nota && arrayNotas[i] - nota < 3){
                nota = arrayNotas[i]
            }
        }
        document.getElementById("r3").value = nota
    }
    
}