/*  Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Capturando o clique no botão Buscar */
botaoBuscar.addEventListener("click", function(){
    // Verificando se o cep NÃO TEM 9 dígitos
    if(campoCep.value.length !== 9 ){
        // Informar o usuário sobre o erro
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        // Parar completamente a execução do script
        return;
    }

    /* Guardar o valor do cep digitado */
    let cepDigitado = campoCep.value;
    
    /* AJAX - Asyncronous JavaScript And XML
    Técnica de comunicação (transmissão, recebimento) de dados muito usado entre sistemas e tecnologias diferentes. */ 

}); // final do evento do botão


