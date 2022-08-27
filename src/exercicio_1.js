function tipoTriangulo(){

    console.log("entrou");

    let resp = "";
    let l1 = document.getElementById('ex1_l1').value;
    let l2 = document.getElementById('ex1_l2').value;
    let l3 = document.getElementById('ex1_l3').value;

    if(l1 <= 0 || l2 <= 0 || l3 <= 0 || !l1 || !l2 || !l3){
        alert("Os lados dos triângulos nao podem ser vazios e devem ser superiores à 0");
        document.getElementById("ex1_l1").value = '';
        document.getElementById("ex1_l2").value = '';
        document.getElementById("ex1_l3").value = '';
        document.getElementById("ex1_l1").focus();
        return document.getElementById("r1").value = '';
    }

    else if(l1 == l2 && l1 == l3){
        resp = "Equilátero"
        console.log("\n")
        console.log(resp)
        return document.getElementById("r1").value = resp;
    }
    else if(l1 == l2 || l2 == l3 || l1 == l3) {
        resp = "Isósceles"
        console.log("\n")
        console.log(resp)
        return document.getElementById("r1").value = resp;
    }
    else{
        resp = "Escaleno"
        console.log("\n")
        console.log(resp)
        return document.getElementById("r1").value = resp;
    }

}