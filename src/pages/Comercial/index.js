import React from 'react';

import { Container, Div1, Div2, Div3, Div4, Div5, Div6 } from './styles';

import LogoCabecalho from '../../assets/LogoCabecalho.png';
import BackgroundDiv1Vetor from '../../assets/BackgroundDiv1Vetor.png';

import VetorCheck from '../../assets/VetorCheck.png';

import Gastos from '../../assets/Easyfit-Revisão-estratégia-Comercial.png';
import Passos from '../../assets/passos.png';

import Celular from '../../assets/celular.png';

function Comercial() {
    return (
        <Container>
            <Div1>
                <img src={BackgroundDiv1Vetor} alt="BackgroundDiv1Vetor" />
                <div>
                    <img src={LogoCabecalho} alt="LogoCabecalho" />
                    <p>
                        Conquiste novos clientes
                        <br />
                        com custo zero
                    </p>
                    <span>A gente leva elas até você e seus produtos</span>
                    <button>Me conte mais sobre isso</button>
                </div>
            </Div1>
            <Div2>
                <div>
                    <img src={VetorCheck} alt="vetorCheck" />
                    <p>
                        Nunca foi tão fácil
                        <br />
                        fazer bons negócios
                    </p>
                </div>
            </Div2>
            <Div3>
                <h1>
                    você sabe qual é o custo de
                    <br />
                    aquisição de um novo cliente?
                </h1>
                <img src={Gastos} alt="Gastos" />
                <p>
                    Com o EasyFit, seu custo para adquirir um novo cliente é de
                    R$0,00.
                    <br />
                    <span>
                        *Taxas de conversão e valores médicos de mercado.
                    </span>
                </p>
            </Div3>
            <Div4>
                <img src={Passos} alt="Passos" />
                <p>
                    Lembre-se: o lucro dessa primeira "venda" não importa.
                    <br />
                    Você está investindo na geração de leads que vão estabelecer
                    uma longa relação de compra com sua empresa
                </p>
            </Div4>
            <Div5>
                <img src={Celular} alt="Celular" />
            </Div5>
            <Div6>
                <form>
                    <p>Quer ser um parceiro EasyFit?</p>
                    <p>Cadastre-se agora mesmo</p>
                    <input name="name" placeholder="Nome..." />
                    <input name="email" placeholder="E-mail..." />
                    <input name="Tel" placeholder="Telefone..." />
                    <input name="empresa" placeholder="Empresa..." />
                    <button>Quero me conectar</button>
                </form>

                <logo>
                    <img src={LogoCabecalho} alt="LogoCabecalho" />
                    <p>Siga nas redes sociais.</p>
                </logo>
            </Div6>
        </Container>
    );
}

export default Comercial;
