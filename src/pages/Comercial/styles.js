import styled from 'styled-components';

import backgroundDiv1 from '../../assets/BackgroundDiv1.png';

import Baner01 from '../../assets/Baner01.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: auto;
`;

export const Div1 = styled.div`
    background-image: url(${backgroundDiv1});

    overflow: auto
    background-attachment: fixed;
    display: flex;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: column;

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
        p {
            margin-top: 200px;
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: right;

        }
        span {
            margin-top: 50px;
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: right;
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

    max-width: 100%;
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
    background-color: red;
    max-width: 1920px;
`;
export const Div5 = styled.div`
    background-color: black;
    max-width: 1920px;
`;
export const Div6 = styled.div`
    background-color: red;
    max-width: 1920px;
`;
