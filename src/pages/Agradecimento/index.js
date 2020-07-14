import React from 'react';

import kettleBell from '../../assets/Kettlebell.png';
import rodapelogo from '../../assets/LogoRodape.png';

import { Container, Message, Footer, MessageImg, MessageText } from './styles';

function Agradecimento() {
    return (
        <Container>
            <Message>
                <MessageImg />
                <img src={kettleBell} alt="kettlebell" />
                <MessageText>
                    <h1>
                        Obrigado <br /> pelo interesse!
                    </h1>
                    <span>
                        Nossos consultores entrarão em contato
                        <br /> o mais rápido possível.
                    </span>
                    <span>Enquanto isso, siga o EasyFit no instagram</span>
                    <button href="#">
                        Quero seguir o EasyFit no Instagram
                    </button>
                </MessageText>
            </Message>
            <Footer>
                <img src={rodapelogo} alt="rodapelogo" />
            </Footer>
        </Container>
    );
}

export default Agradecimento;
