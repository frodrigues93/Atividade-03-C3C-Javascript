function calculaBhaskara(a,b,c){
    let resp2 = []

    let delta = (b*b) - (4*a*c);
    console.log("delta:",delta)

    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

    if(delta >= 0){
        resp2.push(x1);
        resp2.push(x2);
    }
    else{
        resp2.push("Delta é negativo");
    }

    setTimeout(() => {
        console.log("resp: ", resp2)
        if(resp2.indexOf("Delta é negativo") > 0){
            document.getElementById("r2").value = "Delta é negativo"
        }
        else{
            document.getElementById("r2").value = resp2
        }
    }, 300);
    
}

function ex2(){
    let x = document.getElementById('ex2_a').value;
    let y = document.getElementById('ex2_b').value;
    let z = document.getElementById('ex2_c').value;

    calculaBhaskara(x,y,z)
}

