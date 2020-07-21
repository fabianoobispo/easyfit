import styled from 'styled-components';

import backgroundDiv1 from '../../assets/BackgroudPersonal.png';
import backgroundDiv6 from '../../assets/BackgroundCadastroPersonal.png';

export const Container = styled.div`
    margin: 0 auto;
    width: 1900px;
`;
export const Div1 = styled.div`
    background-image: url(${backgroundDiv1});
    background-repeat: no-repeat;
    width: 100%;
    height: 1040px;

    img {
        max-width: 239px;
        max-height: 94px;

        top: 70px;
    }

    titulo {
        p {
            font-family: 'Anton', sans-serif;
            font-size: 60px;

            color: #fff;
        }
        img {
            width: 100px;
            height: 100px;
        }
    }

    subTitulo {
        p {
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: left;
            color: #fff;
        }
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        border: none;
        color: #fff;
        background-color: #4fc580;
    }
`;
export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: 'Anton', sans-serif;
        font-size: 60px;
        color: #000;
    }
    cards {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        img {
            padding: 20px;
            height: 645px;
            width: 730px;
        }
    }
    img {
        height: 278px;
        width: 324px;
        margin-bottom: 60px;
    }
`;
export const Div3 = styled.div`
    background-image: url(${backgroundDiv6});
    background-repeat: no-repeat;
    width: 100%;
    height: 730px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    form {
        display: flex;
        flex-direction: column;

        margin-top: 20px;
        margin-left: 20%;
        width: 450px;

        p {
            font-family: 'Anton', sans-serif;
            font-size: 40px;
            text-align: center;
            color: #fff;
        }

        input {
            margin-top: 15px;
            background-color: #9b149d;
            border: none;
            border-radius: 10px;
            color: #fff;
            font-family: sans-serif;
            font-size: 20px;

            padding: 10px;
        }
        button {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            padding: 10px;
            margin-top: 15px;
            border-radius: 10px;
            border: none;
            color: #fff;
            background-color: #4fc580;
            width: 100%;
        }
    }

    logo {
        display: flex;
        flex-direction: column;

        margin-top: 120px;
        margin-left: 30%;
        width: 450px;

        img {
            width: 160px;
            height: 50px;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            margin-top: 10px;
            color: #fff;
        }
    }
`;
