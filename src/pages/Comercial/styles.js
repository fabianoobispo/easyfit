import styled from 'styled-components';

import backgroundDiv1 from '../../assets/BackgroundDiv1.png';

import backgroundDiv6 from '../../assets/BackgroudCadastro.png';
import Baner01 from '../../assets/Baner01.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    max-width: 1440px;
`;

export const ImageLogo = styled.img``;

export const Div1 = styled.div`
    background-image: url(${backgroundDiv1});

    overflow: auto
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;

        div {
            img {
            max-width: 239px;
            max-height: 94px;
            width: auto;
            height: auto;
            display: block;
            position: relative;
            top: 70px;
            left: 40px;
        }

        }
        p {
            margin-top: 200px;
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: left;

        }
        span {
            margin-top: 50px;
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: left;
        }

        button {
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            padding: 20px;
            margin: 90px;
            border-radius: 20px;
            border: none;
            color: #fff;
            background-color: #4fc580;
        }
    }
`;
export const Div2 = styled.div`
    background-image: url(${Baner01});
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
    justify-content: center;

    max-width: 100%;
    width: 100%;
    div {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;

        margin-top: 90px;
        margin-bottom: 90px;
        img {
            width: 200px;
            height: 200px;
        }
        p {
            font-family: 'Anton', sans-serif;
            font-size: 50px;
            color: #fff;
            margin-left: 30px;
            margin-top: 20px;
        }
    }
`;
export const Div3 = styled.div`
    h1 {
        margin-top: 50px;
        font-family: 'Anton', sans-serif;
        font-size: 60px;
        text-align: center;
    }
    p {
        margin-top: 50px;
        font-family: 'Anton', sans-serif;
        font-size: 30px;
        text-align: center;
    }

    span {
        margin-top:-10px
        font-family: 'Anton', sans-serif;
        font-size: 15px;
        text-align: center;
    }
`;
export const Div4 = styled.div`
       display: flex;
        flex-direction: column;
    justify-content: center;
    flex: 1;

  p {
        margin-top: 50px;
        font-family: 'Anton', sans-serif;
        font-size: 30px;
        text-align: center;
    }

    span {
        margin-top:-10px
        font-family: 'Anton', sans-serif;
        font-size: 15px;
        text-align: center;
    }
`;
export const Div5 = styled.div`
    max-width: 1920px;
`;
export const Div6 = styled.div`
    background-image: url(${backgroundDiv6});

    max-width: 100%;
    width: 100%;
    height: 533px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 80px;

        p {
            font-family: 'Anton', sans-serif;
            font-size: 30px;
            text-align: center;
            color: #742079;
        }

        input {
            margin-top: 10px;
            background-color: #ab81b3;

            border-radius: 10px;
            color: #eeceea;
            font-family: sans-serif;
            font-size: 20px;

            padding: 10px;
        }
        button {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            padding: 10px;
            margin-top: 10px;
            border-radius: 10px;
            border: none;
            color: #fff;
            background-color: #4fc580;
            width: 100%;
        }
    }

    logo {
        margin-top: 300px;
        margin-left: 150px;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            margin-top: 10px;
            color: #742079;
        }
    }
`;
