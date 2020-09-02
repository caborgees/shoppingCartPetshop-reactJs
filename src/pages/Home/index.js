import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css' 


class Home extends Component{
     render(){
        return(
            <div>
              <img src={require('./images/Banner.png')} className="header"></img>

              <div className="Promo"> 
              <img src={require('./images/Banner2.png')} ></img>
              <img src={require('./images/Banner2-1.png')} ></img>
               </div>
               <h3> Populares</h3>
               <div className="Produtos">
               <div> 
               <img src={require('./images/produto1.png')} ></img>
              <p> Coleira com pedras</p>
              <h4> R$13,99</h4>
                <Link to="/Produto">   
                <button> Comprar</button>
                </Link> 
               </div>

               <div> 
               <img src={require('./images/produto2.png')} ></img>
              <p> Coleira com pedras</p>
              <h4> R$13,99</h4>
              <button> Comprar</button>
               </div>
             
               <div> 
               <img src={require('./images/produto3.png')} ></img>
              <p> Coleira com pedras</p>
              <h4> R$13,99</h4>
              <button> Comprar</button>
               </div>

               <div> 
               <img src={require('./images/produto4.png')} ></img>
              <p> Coleira com pedras</p>
              <h4> R$13,99</h4>
              <button> Comprar</button>
               </div>

               </div>

               <div className="Newsletter">
                 <div> 
                 <textarea> </textarea>
                  <button> Cadastre-se</button>
                  </div>
               </div>

               <footer>

                 <div> 
                   <h5> Contato</h5>
                   <p> +55 661 993049430 </p>
                    <p>contato@gmail.com</p>
                 </div>

                 <div> 
                   <h5> Endereco</h5>
                   <p> +55 661 993049430 </p>
                    <p>contato@gmail.com</p>
                 </div>

                 <div> 
                   <h5> Horario</h5>
                   <p> +55 661 993049430 </p>
                    <p>contato@gmail.com</p>
                 </div>
               </footer>
            </div>          
        );
    }
}

export default Home;