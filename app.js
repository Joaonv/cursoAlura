//=================== pesquisar ===================


function pesquisar() {
    let section = document.getElementById('resultados-pesquisa'); // pega a seção de resultados da pesquisa
    //console.log(section);

    let campoPesquisa = document.getElementById('campo-pesquisa').value; // pega o valor digitado no input

    //se o campo de pesquisa está vazio, não executa a pesquisa
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi Encontrado </p>" // limpa a seção de resultados
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase(); // converte o texto para minúsculo

    //console.log(campoPesquisa);

    let resultados = ""; // armazena os resultados
    let titulo = ""; // armazena o título do item
    let descricao = ""; // armazena a descrição do item
    let tags = ""; // armazena as tags do item

    for (let dado of dados) { // percorre os dados

        titulo = dado.titulo.toLowerCase(); // converte o título para minúsculo
        descricao = dado.descricao.toLowerCase(); // converte a descrição para minúsculo
        tags = dado.tags.toLowerCase(); // converte as tags para uma string separadas por vírgula

        //se o titulo inclui o dado de pesquisa, retorna verdadeiro e o valor html

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                        <h2>
                            <a href="#">
                                ${dado.titulo}
                            </a>
                        </h2>
    
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="https://pt.wikipedia.org/wiki/Lorem_ipsum" target="_blank">Mais Sobre Lorem Ipsum</a>
                    </div>
        `; // concatena os resultados em uma string HTML utilizando crases
            }
        }//puxa os dados da variavel campopesquuisa 

        if (!resultados) { 
            resultados = "<p> Nada foi Encontrado </p>" // se não há resultados, exibe uma mensagem
        }// se não há resultados, exibe uma mensagem



    section.innerHTML = resultados; // atualiza a seção com os resultados
}





//pesquisar 



