let cont4 = 0;

function calculaLuidyMoura(x){
    console.log(x)
    
    let arrayLuidyMoura =[];
    let i = 0;

    while (cont4<x){
        cont4=cont4+1;
        arrayLuidyMoura.push(cont4);
    }   

    console.log()
    
    setTimeout(() => { for(i; i < arrayLuidyMoura.length; i++ ){

        switch(true){
            case (arrayLuidyMoura[i] % 5 == 0 && arrayLuidyMoura[i] % 9 == 0):
                arrayLuidyMoura[i] = "LuidyMoura";
                break;
            case (arrayLuidyMoura[i] % 5 == 0):
                arrayLuidyMoura[i] = "Luidy";
                break;
            case (arrayLuidyMoura[i] % 9 == 0):
                arrayLuidyMoura[i] = "Moura";
                break;
        }
                
    }}, 500);

    setTimeout(() => {
        document.getElementById("r4").value = arrayLuidyMoura
    }, 500);

}

function luidyMoura(){
    let x = document.getElementById("ex4").value;
    calculaLuidyMoura(x);
}