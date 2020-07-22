import React from 'react';

import { Container } from './styles';

function Main() {
    return (
        <Container>
            <a href="/usuarios">pagina Usuarios </a>
            <a href="/comercial">pagina Comercial </a>
            <a href="/personal">pagina Personal </a>
            <a href="/agradecimento">pagina agradecimento </a>
        </Container>
    );
}

export default Main;
