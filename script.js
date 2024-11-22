let divPrincipal = document.getElementById('divPrincipal')
let divResultado = document.getElementById('divResultado')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let voltar = document.getElementById('voltar')
let calcular = document.getElementById('calcular')
let limpar = document.getElementById('limpar')
let resultadoIMC = document.getElementById('resultadoIMC')
let situacao = document.getElementById('situacao')

calcular.addEventListener('click', () => {
    if(altura.value === '' || peso.value === '') {
        resultadoIMC.innerHTML = ''
    } else {
        let alturaConvertida = altura.valueAsNumber * 2
        let pesoConvertido = peso.valueAsNumber
        let resultado = pesoConvertido / alturaConvertida
        divResultado.style.display = 'flex'
        if(resultado < 18.5) {
            resultadoIMC.style.color = 'yellow'
            resultadoIMC.innerHTML = resultado.toFixed(1)
            situacao.style.color = 'yellow'
            situacao.innerHTML = 'Magreza'
        } else if(resultado >= 18.5 && resultado < 24.9) {
            resultadoIMC.style.color = 'green'
            resultadoIMC.innerHTML = resultado.toFixed(1)
            situacao.style.color = 'green'
            situacao.innerHTML = 'Normal'
        } else if(resultado >= 25.0 && resultado < 29.9) {
            resultadoIMC.style.color = 'yellow'
            resultadoIMC.innerHTML = resultado.toFixed(1)
            situacao.style.color = 'yellow'
            situacao.innerHTML = 'Sobrepeso'
        } else if(resultado >= 30.0 && resultado < 39.9) {
            resultadoIMC.style.color = 'orange'
            resultadoIMC.innerHTML = resultado.toFixed(1)
            situacao.style.color = 'orange'
            situacao.innerHTML = 'Obesidade'
        } else {
            resultadoIMC.style.color = 'red'
            resultadoIMC.innerHTML = resultado.toFixed(1)
            situacao.style.color = 'red'
            situacao.innerHTML = 'Obesidade Grave'
        }
        
        divPrincipal.style.display = 'none'
    }
    ;
})

limpar.addEventListener('click', () => {
    altura.value = ''
    peso.value = ''
})

voltar.addEventListener('click', () => {
    altura.value = ''
    peso.value = ''
    divResultado.style.display = 'none'
    divPrincipal.style.display = 'flex'
})


