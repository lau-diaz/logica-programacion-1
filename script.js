function numeros(){
let numero1 = parseFloat(prompt("ingrese su primer numero"));
let numero2 = parseFloat(prompt("ingrese su segundo numero"));
let numero3 = parseFloat(prompt("ingrese su tercer numero"));

if(numero1 == numero2 && numero1 == numero3){
console.log("los tres numeros son iguales")
}
else if(numero1 >= numero2){
    if(numero1 >= numero3 && numero3 <= numero2){
        let numeroMayor = numero1
        let numeroMedio = numero2
        let numeroMenor = numero3
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
    else if(numero1 <= numero3){
        let numeroMayor = numero3
        let numeroMedio = numero1
        let numeroMenor = numero2
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
}
else if(numero1 <= numero2){
    if(numero1 <= numero3 && numero2 >= numero3){
        let numeroMayor = numero2
        let numeroMedio = numero3
        let numeroMenor = numero1
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
    else if(numero1 >= numero3){
        let numeroMayor = numero2
        let numeroMedio = numero1
        let numeroMenor = numero3
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
}
else if(numero3 >= numero2){
    if(numero3 >= numero1 && numero1 <= numero2){
        let numeroMayor = numero3
        let numeroMedio = numero2
        let numeroMenor = numero1
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
    else if(numero3 <= numero1){
        let numeroMayor = numero1
        let numeroMedio = numero3
        let numeroMenor = numero2
        
        console.log(`De mayor a menor ${numeroMayor}, ${numeroMedio}, ${numeroMenor}`)
        console.log(`De menor a mayor ${numeroMenor},${numeroMedio},${numeroMayor}`)
    }
}
}
numeros()