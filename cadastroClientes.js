//Cadastro de clientes

var dataDeHoje = 01012021
var dataUsuario = []
var idade = 18
var nascimentoUsuario = []
var inscritos = 100
var dadosPalestrante = " Complete "


console.log (" Seja bem vindo! Digite a data de hoje: ")
console.log (' data de hoje ')
if (dataUsuario.lenght <= dataDeHoje){
    console.log (" Evento encerrado ")
}else {
    console.log (" Insira sua Data de Nascimento ")
}
console.log (' data de nascimento ')
if (nascimentoUsuario.length < 18){
    console.log (" Evento para pessoas acima de 18 anos, ainda não chegou sua hora. ")
}else (" Continue sua Inscrição ")

for (let index = 0; index < inscritos; index ++){
    if (index <= inscritos){
        console.log (" Inscrição realizada com sucesso! ")
    }else{
        console.log (" Lugares esgotados ! ")
    }
}


//Cadastro de Palestrantes

console.log (" Seja bem vindo! Digite a data de hoje: ")
console.log (' data de hoje ')
if (dataUsuario.lenght <= dataDeHoje){
    console.log (" Data Indisponível ")
}else {
    console.log (" Cadastre seu evento ")
}
console.log (' Evento ')
    if (dadosPalestrante = " Complete"){
        console.log (" Evento Cadastrado com sucesso! ")
    }else{
        console.log (" Faltaram alguns dados, vamos refazer?")
    }
