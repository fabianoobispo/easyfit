import React from 'react';

import { Container, Div1, Div2, Div3 } from './styles';

import LogoBranca from '../../assets/LogoCabecalhoBranca.png';
import LogoCabecalho from '../../assets/LogoCabecalho.png';
import Check from '../../assets/VetorCheck.png';

import Kettlebell from '../../assets/KETTLEBELL1.png';

import Card01 from '../../assets/quadro01.png';
import Card02 from '../../assets/quadro02.png';

function Personal() {
    return (
        <Container>
            <Div1>
                <img src={LogoBranca} alt={LogoBranca} />

                <titulo>
                    <p>
                        Personal,
                        <br /> conecte-se ao
                        <br /> novo mundo
                        <br /> <strong>com o EasyFit</strong>
                    </p>
                    <img src={Check} alt={Check} />
                </titulo>

                <subTitulo>
                    <p>
                        Mais pessoas praticando atividades em casa,
                        <br />
                        Dando preferencia a espaços ao ar livre, longe de <br />
                        aglomerações. Totalmente adaptadas ao digital.
                    </p>
                    <button>Quero me conectar agora</button>
                </subTitulo>
            </Div1>
            <Div2>
                <p>
                    <strong>O mundo mudou.</strong> E vai continuar mudando.
                </p>
                <cards>
                    <img src={Card01} alt="Card01" />
                    <img src={Card02} alt="Card02" />
                </cards>

                <img src={Kettlebell} alt="Kettlebell" />
            </Div2>
            <Div3>
                <form>
                    <p>
                        Quero me cadastrar
                        <br />
                        gratuitamnete
                    </p>

                    <input name="name" placeholder="Nome..." />
                    <input name="email" placeholder="E-mail..." />
                    <input name="Tel" placeholder="Telefone..." />

                    <button>Confirmar cadastro</button>
                </form>

                <logo>
                    <img src={LogoCabecalho} alt="LogoCabecalho" />
                    <p>Siga nas redes sociais.</p>
                </logo>
            </Div3>
        </Container>
    );
}

export default Personal;
