let divPrincipal = document.getElementById('divPrincipal')
let divResultado = document.getElementById('divResultado')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let calcular = document.getElementById('calcular')
let resultadoIMC = document.getElementById('resultadoIMC')
let situacao = document.getElementById('situacao')

calcular.addEventListener('click', () => {
    if(altura.value === '' || peso.value === '') {
        resultadoIMC.innerHTML = 'ERRO'
    } else {
        resultadoIMC.innerHTML = 'OK'
        divPrincipal.style.display = 'none'
    }
    ;
})
