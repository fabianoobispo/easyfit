import React from 'react';

import { Container, Div1, Div2, Div3, Div4, Div5, Div6 } from './styles';

import LogoCabecalho from '../../assets/LogoCabecalho.png';
import BackgroundDiv1Vetor from '../../assets/BackgroundDiv1Vetor.png';

import VetorCheck from '../../assets/VetorCheck.png';

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
                <h1>div4</h1>
            </Div4>
            <Div5>
                <h1>div5</h1>
            </Div5>
            <Div6>
                <h1>div6</h1>
            </Div6>
        </Container>
    );
}

export default Comercial;
