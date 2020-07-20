import styled from 'styled-components';

import backgroundDiv1 from '../../assets/BackgroudPersonal.png';

export const Container = styled.div`
    margin: 0 auto;
    width: 1900px;
`;
export const Div1 = styled.div`
    background-image: url(${backgroundDiv1});
    background-repeat: no-repeat;
    width: 100%;
    height: 1040px;

    titulo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        p {
            font-family: 'Anton', sans-serif;
            font-size: 60px;
            text-align: left;
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
    background-color: black;
`;
export const Div3 = styled.div`
    background-color: red;
`;
export const Div4 = styled.div`
    background-color: black;
`;
