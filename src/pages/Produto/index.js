import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css' 



class Produto extends Component{
     render(){
        return(
            <div>
                <header>
                    <ul>
                        <Link to="/">  <li> Home</li></Link>
                        <li> Produtos</li>
                        <li> Contato</li>

                    </ul>
                </header>

            <div className="Container"> 
            <div className="Imagens">
            <img src={require('./images/produtomaior.png')} ></img>
            <div className="Miniaturas">
            <img src={require('./images/i1.png')} ></img>
            <img src={require('./images/i2.png')} ></img>
            <img src={require('./images/i3.png')} ></img>

            </div>

            </div>
            <div className="Descricao"> 
            <h2> Bandana Xadrez</h2>
            <p> Cod  RS3FF823</p>
            <p>Content here, content here', making it look like readable English.</p>
            <h3> R$13,99</h3>
            <p> 2x de R$6,99 sem juros</p>
            <div className="Tamanhos">
                <button> P </button>
                <button> M </button>
                <button> G </button>

            </div>
            </div>
            <div className="Botoes"> 
            <textarea> </textarea>
            <button> Adicionar ao carrinho</button>
            </div>
            </div>

            </div>         
        );
    }
}

export default Produto;