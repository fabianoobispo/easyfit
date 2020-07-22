import React from 'react';

import { Container, Div1, Div2, Div3, Div4, Div5 } from './styles';

import UserImg from '../../assets/UserImg.png';

import MaisFit from '../../assets/maisFit.png';

import UserImg1 from '../../assets/userImg1.png';
import UserImg2 from '../../assets/userImg2.png';
import UserImg3 from '../../assets/userImg3.png';

import Kettlebell from '../../assets/KETTLEBELL1.png';
import butonGoogle from '../../assets/buttonGoogle.png';
import butonApple from '../../assets/buttonApple.png';
import LogoRodape from '../../assets/LogoCabecalhoBranca.png';

function Usuarios() {
    return (
        <Container>
            <Div1>
                <logo>
                    <img src={LogoRodape} alt="logo" />
                </logo>
                <titulo>
                    <texto1>
                        <p>
                            Deixe
                            <br />o seu dia
                        </p>
                        <img src={MaisFit} alt="maisfit" />
                    </texto1>
                    <texto2>
                        <p>
                            Um app gratuito
                            <br />
                            para você{' '}
                            <strong>
                                vuidar
                                <br /> da sua saúde pagando pouco
                            </strong>
                        </p>
                        <botoes>
                            <button>Use agora</button>
                            <buttonApp>
                                <img src={butonGoogle} alt="buttonGoogle" />
                                <img src={butonApple} alt="buttonApple" />
                            </buttonApp>
                        </botoes>
                    </texto2>
                </titulo>
            </Div1>
            <Div2>
                <img src={UserImg} alt="userImg" />
                <p>
                    <strong>
                        O seu
                        <br /> companheiro
                        <br /> do dia a dia
                    </strong>
                </p>
            </Div2>
            <Div3>
                <card>
                    <img src={UserImg1} alt="UserImg1" />
                    <p>
                        <strong>Ofertas diarias</strong> nos melhores
                        <br />
                        estabelecimentos de jf
                    </p>
                </card>
                <card>
                    <img src={UserImg2} alt="UserImg2" />
                    <p>
                        <strong>Treinos e dietas exclusivas</strong>
                    </p>
                </card>
                <card>
                    <img src={UserImg3} alt="UserImg3" />
                    <p>
                        <strong>Dicas </strong>para você mmanter uma vida
                        <br /> mais saudável
                    </p>
                </card>
            </Div3>
            <Div4>
                <img src={Kettlebell} alt="Kettlebell" />

                <texto>
                    <p>
                        No EasyFit você acumula pontos
                        <br />
                        Leva uma vida mais saudável
                        <br />e ganha prêmios
                    </p>
                    <button>Use agora</button>
                    <buttonApp>
                        <img src={butonGoogle} alt="buttonGoogle" />
                        <img src={butonApple} alt="buttonApple" />
                    </buttonApp>
                </texto>
            </Div4>
            <Div5>
                <logo>
                    <img src={LogoRodape} alt="LogoRodape" />{' '}
                    <p>Siga nossas redes sociais.</p>
                </logo>
            </Div5>
        </Container>
    );
}

export default Usuarios;
