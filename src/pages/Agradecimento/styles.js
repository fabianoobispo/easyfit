import styled from 'styled-components';
import background from '../../assets/BackgroundAgradecimento.png';
import backgroundFooter from '../../assets/fundoRodape.png';

export const Container = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    margin: 0 auto;
    width: 1900px;

    height: 100vh;
`;

export const Message = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MessageImg = styled.div`
    padding-top: 0px;
`;

export const MessageText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    margin-top: 150px;
    /* tipo de fonte thicker semibold */
    h1 {
        font-family: 'Anton', sans-serif;
        color: #fff;
        font-size: 70px;
    }
    span {
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        font-size: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    button {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        padding: 20px;
        border-radius: 20px;
        color: #fff;
        background-color: #4fc580;
    }
`;

export const Footer = styled.div`
    background-image: url(${backgroundFooter});
    margin: 0 auto;
    width: 1900px;
    opacity: 0.8;
    position: fixed;

    bottom: 0;

    color: white;
    text-align: center;
`;
