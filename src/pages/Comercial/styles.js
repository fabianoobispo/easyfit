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
        }
        span {
            margin-top: 50px;
            font-family: 'Anton', sans-serif;
            font-size: 60px;
        }

        button {
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            padding: 20px;

            border-radius: 20px;
            border: none;
            color: #fff;
            background-color: #4fc580;
        }
    }
`;
export const Div2 = styled.div`

    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    img{
        max-width: 100%;
    }
`;
export const Div3 = styled.div`
    background-color: black;
    max-width: 1920px;
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
