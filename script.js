var peso = Number(prompt(`Ingrese su peso`, ['en kilogramos']))
var altura = Number(prompt(`Ingrese su altura`, ['en metros'] )) 

var imc = parseFloat(peso/(altura*altura)).toFixed(2)

console.log(imc)

if (imc < 18.5){
    alert(`Tu IMC es de ${imc} y tienes Bajo peso! `)
}else if(imc >18.5 && imc<24.9){
    alert(`Tu IMC es de ${imc} y tienes Peso normal! `)
}else if(imc >25 && imc<29.9){
    alert(`Tu IMC es de ${imc} y tienes Sobrepeso! `)
}else {
    alert(`Tu IMC es de ${imc} y tienes Obesidad! `)
}