import React from 'react';

import { Container, Div1, Div2, Div3, Div4 } from './styles';

import LogoBranca from '../../assets/LogoCabecalhoBranca.png';
import Check from '../../assets/VetorCheck.png';

function Personal() {
    return (
        <Container>
            <Div1>
                <img src={LogoBranca} src={LogoBranca} />

                <titulo>
                    <p>
                        Personal,
                        <br /> conecte-se ao
                        <br /> novo mundo
                        <br /> <strong>com EasyFit</strong>
                    </p>
                    <img src={Check} src={Check} />
                </titulo>

                <subTitulo>
                    <p>
                        Mais pessoas praticando atividades em casa,
                        <br />
                        Dando preferencia a espaços ao ar livre, longe de <br />
                        aglomerações. Totalmente adaptadas ao digital.
                    </p>
                </subTitulo>
                <button>Quero me conectar agora</button>
            </Div1>
            <Div2>
                <p>
                    <strong>O mundo mudou.</strong> E vai continuar mudando.
                </p>
            </Div2>
            <Div3>
                <h1>Div3</h1>
            </Div3>
            <Div4>
                <h1>Div4</h1>
            </Div4>
        </Container>
    );
}

export default Personal;
