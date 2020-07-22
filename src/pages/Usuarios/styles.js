import styled from 'styled-components';

import backgroundDiv6 from '../../assets/BackgroundFooter.png';
import backgroundDiv1 from '../../assets/backgroundUser.png';

export const Container = styled.div`
    margin: 0 auto;
    width: 1900px;
`;
export const Div1 = styled.div`
    background-image: url(${backgroundDiv1});
    width: 100%;
    height: 740px;

    display: flex;
    flex-direction: column;
    align-items: center;

    logo {
        margin-top: 30px;
    }

    titulo {
        display: flex;
        flex-direction: row;
        justify-items: center;
        margin-top: 60px;

        texto1 {
            margin-left: -50px;
            margin-right: 50px;

            p {
                font-family: 'Roboto', sans-serif;
                font-size: 70px;
                line-height: 65px;
                color: #fff;
            }
        }

        texto2 {
            margin-left: 50px;
            margin-top: 40px;

            p {
                font-family: 'Roboto', sans-serif;
                font-size: 40px;

                color: #fff;
            }

            botoes {
                display: flex;
                flex-direction: column;
                align-items: center;

                margin-top: 30px;

                button {
                    font-family: 'Roboto', sans-serif;
                    font-size: 40px;
                    padding: 5px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    margin-left: 60px;
                    border-radius: 10px;
                    border: none;
                    color: #fff;
                    background-color: #4fc580;
                    width: 50%;
                }

                buttonApp {
                    margin-left: 60px;
                    margin-top: 10px;
                    img {
                        height: 50px;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
`;
export const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    p {
        margin-top: 10%;
        margin-left: 5%;
        font-family: 'Roboto', sans-serif;
        font-size: 100px;
        color: #000;
    }
`;
export const Div3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 80px;
    margin-bottom: 80px;

    card {
        margin: 10px;
        img {
            width: 515px;
            height: 300px;
        }
        p {
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            color: #000;

            strong {
                color: #6a0d6a;
            }
        }
    }
`;

export const Div4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 60px;
    margin-bottom: 120px;

    texto {
        display: flex;
        flex-direction: column;

        margin-left: 30px;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
            margin-left: 30px;
            color: #6a0d6a;
        }
        button {
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            padding: 5px;
            margin-top: 15px;
            margin-bottom: 15px;
            margin-left: 60px;
            border-radius: 10px;
            border: none;
            color: #fff;
            background-color: #4fc580;
            width: 30%;
        }

        buttonApp {
            margin-left: 60px;
            img {
                height: 28px;
                margin-right: 10px;
            }
        }
    }
`;

export const Div5 = styled.div`
    background-image: url(${backgroundDiv6});

    logo {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        padding-left: 30%;
        padding-bottom: 50px;

        img {
            width: 160px;
            height: 50px;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            margin-top: 10px;
            color: #fff;
        }
    }
`;
