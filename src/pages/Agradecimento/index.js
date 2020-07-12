import React from 'react';

import kettleBell from '../../assets/Kettlebell.png';

import { Container } from './styles';

function Agradecimento() {
    return (
        <Container>
            <img src={kettleBell} />
            <h1>Obrigado pelo interesse!</h1>
            <span>
                Nossos consultores entrarão em contato o mais rápido possível.
            </span>
            <span>Enquanto isso, siga o EasyFit no instagram</span>
        </Container>
    );
}

export default Agradecimento;
