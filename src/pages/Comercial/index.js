import React from 'react';

import { Container, Div1, Div2, Div3, Div4, Div5, Div6 } from './styles';

import LogoCabecalho from '../../assets/LogoCabecalho.png';
import BackgroundDiv1Vetor from '../../assets/BackgroundDiv1Vetor.png';

import Baner01 from '../../assets/Baner01.png';

function Comercial() {
    return (
        <Container>
            <Div1>
                <img src={BackgroundDiv1Vetor} alt="BackgroundDiv1Vetor" />
                <div>
                    <img src={LogoCabecalho} alt="LogoCabecalho" />
                    <p>Conquiste novos clientes com custo zero</p>
                    <span>A gente leva elas até você e seus produtos</span>
                    <button>Me conte mais sobre isso</button>
                </div>
            </Div1>
            <Div2>
                <img src={Baner01} alt="Baner01" />
            </Div2>
            <Div3>
                <h1>div3</h1>
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
