import styled from 'styled-components';
import background from '../../assets/BackgroundAgradecimento.png';
import backgroundFooter from '../../assets/fundoRodape.png';

export const Container = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    padding: 100px 0;
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
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding-top: 5px;
`;
