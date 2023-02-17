import { useState, useEffect} from 'react'
import './App.css'
import { default as lupa } from './assets/icons8-search.svg';


function App() {
  const [lista, setLista] = useState([])
  
  function adicionarVeiculo() {
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;
    const ano = document.getElementById('ano').value;
    const vendido = document.querySelector('input[name="radio"]:checked').value;

    // Cria um novo objeto com os dados do veículo
    const novoVeiculo = { modelo, marca, ano, vendido};

    // Adiciona o novo veículo ao estado da lista
    setLista([...lista, novoVeiculo]);

    // Limpa os campos do formulário
    document.getElementById('modelo').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('ano').value = '';
    document.querySelector('input[name="radio"]:checked').checked = false;
    document.getElementById('descriçao').value = '';

  }

  function mostrarDetalhe(){
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;
    const ano = document.getElementById('ano').value;
    const vendido = document.querySelector('input[name="radio"]:checked').value;
    const descriçao = document.getElementById('descriçao').value;
    const detalhes = document.getElementById("detalhes");

  
    detalhes.insertAdjacentHTML('afterbegin', `<li className = "lista"><h3><strong>${marca} 
    ${modelo}</h3></strong> <br>
    Ano: ${ano} <br>
    Vendido: ${vendido} <br> <br>
    ${descriçao} </li>`); 
  }


  useEffect (() => {
    const modalcontainer = document.getElementById('modalcontainer');   /* bloco utilizado para abrir/fechar o modal */
    const abrir = document.getElementById('abrir');
    const cancelar = document.getElementById('cancelar');

    abrir.addEventListener('click', () => {
        modalcontainer.classList.add('abrir');
    })

    cancelar.addEventListener('click', () => {
        modalcontainer.classList.remove('abrir');                       
    })
  }, [])

  return (
    <div className="App">
      <header class = "cabeçalho">
        <h3 class = "cabeçalho-titulo">*LOGO*| Auto HK</h3>
        <p class = "cabeçalho-texto">Buscador de veículos</p>
    </header>

    <main class = "conteudo">
        <div class = "div-conteudo-botao">
            <input type="text" class = "buscar-input" placeholder="Pesquisar"/>
            <a href="#" class="botao-busca">
            <img src={lupa}  alt = "lupa"/>
            </a>
        </div>

        <div class = "div-conteudo-principal">
            <div class = "div-conteudo-principal-lista">
                <h3 class = "conteudo-principal-lista-titulo">Lista de veículos </h3>
                <div class = "div-conteudo-principal-lista-veiculos">
                <ul id="lista">
                  {lista.map((veiculo, index) => (
                    <li class = "item" onClick={mostrarDetalhe} key={index}><strong>{veiculo.marca}  {veiculo.modelo}</strong>  <br/>
                    {veiculo.ano} | vendido:{veiculo.vendido}</li>
                  ))}
                </ul> 
                </div>
                <div class = "div-adicionar-veiculo">
                    <button class = "adicionar-veiculo-botao" id="abrir">Adicionar veículo</button>
                    <div class = "modal-container" id="modalcontainer">                         
                        <div class = "container">
                            <h1 class = "titulo-principal">Novo veículo</h1>
                            <div class = "div-conteudo">
                                <div class = "div.conteudo-inputs">
                                    <div class = "conteudo-input-box">
                                        <label for="modelo">Modelo</label>
                                        <input type="text" name="modelo" id="modelo" placeholder="Modelo" required autocomplete="off"/>
                                    </div>
                                    <div class = "conteudo-input-box">
                                        <label for="marca">Marca</label>
                                        <input type="text" name="marca" id="marca" placeholder="Marca" autocomplete="off"/>
                                    </div>
                                    <div class = "conteudo-input-box">
                                        <label for="modelo">Ano</label>
                                        <input type="number" name="ano" id="ano" placeholder="Ano" autocomplete="off"/>
                                    </div>
                                </div>
                                <div class = "div-venda-inputs">
                                    <div class = "venda-titulo">
                                        <h4>vendido</h4>
                                    </div>
                                    <div class = "div-venda-grupo">
                                        <div class = "venda-input" id="venda-input">
                                            <input type="radio" name="radio" id="sim" value="sim"/>
                                            <label for="sim">Sim</label>
                                        </div>
                                        <div class = "venda-input" id="venda-input">
                                            <input type="radio" name="radio" id="nao" value="nao"/>
                                            <label for="nao">Não</label>
                                        </div>
                                            
                                    </div>
                                </div>
                    
                            </div>
                            <div class = "div-descriçao">
                                <div class = "descriçao-input">
                                    <label for="descriçao">Descrição</label>
                                    <textarea cols="30" rows="5" class="caixa-descriçao" placeholder="Descrição" id="descriçao"></textarea>
                                </div>
                            </div>
                            <div class = "div.botoes"> 
                                <button class="botao-adicionar" onClick={adicionarVeiculo}>Adicionar</button>
                                <button class = "botao-cancelar" id="cancelar">Cancelar</button> 
                            </div>
                        </div>
                    </div>                                                                 
                </div>
            </div>

            <div class = "div-conteudo-principal-detalhes">
                
                <h3 class = "conteudo-principal-detalhes-titulo">Detalhes do Veículo </h3>
                <div class = "div-conteudo-principal-detalhes-veiculo" >
                    <ul id = "detalhes">
                    
                    </ul>
                </div>
                <div class = "div-editar-botao">
                    <button class = "editar-botao" onClick="editarVeiculo()">Editar veículo</button>
                </div>
                
            </div>
        </div>
    </main>
    </div>
  )
}

export default App