

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    
    if(isNaN(resultado)){
        document.getElementById('resultado').innerHTML = `No existen valores`;
    } else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`El resultado es: ${resultado}`);
    }
}