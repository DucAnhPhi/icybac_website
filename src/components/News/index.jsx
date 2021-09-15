import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, Wrapper, Link, Header, Content } from './styles';
import { Title, Subtitle, Text } from '../index';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 1.5,
                slidesToScroll: 1
            }
        }
    ]
};

export const News = () => (
    <Wrapper id="aktuelles">
        <Content>
            <Header>
                <Title center>Aktuelles</Title>
                <Link href="" className="position hide-mobile">Alle Artikel lesen</Link>
            </Header>
            <div style={{paddingLeft: 50}}>
                <Slider {...settings}>
                    <div>
                        <div style={{paddingRight:"30px"}}>
                            <StaticImage
                                src="../../images/mosquito.jpg"
                                alt="Tigermoskito"
                                quality="100"
                            />
                            <Text>27.07.2021</Text>
                            <Subtitle>ICYBAC bei Radio1</Subtitle>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                            <Link href="">weiterlesen</Link>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingLeft:"15px", paddingRight:"15px"}}>
                            <StaticImage
                                src="../../images/mosquito.jpg"
                                alt="Tigermoskito"
                                quality="100"
                            />
                            <Text>27.07.2021</Text>
                            <Subtitle>Die große Schnakenplage</Subtitle>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
                            <Link href="">weiterlesen</Link>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingLeft: "30px"}}>
                            <StaticImage
                                src="../../images/mosquito.jpg"
                                alt="Tigermoskito"
                                quality="100"
                            />
                            <Text>27.07.2021</Text>
                            <Subtitle>Das Wundermittel BTI</Subtitle>
                            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Text>
                            <Link href="">weiterlesen</Link>
                        </div>
                    </div>
                </Slider>
                <Button className="hide-desktop">Alle Artikel lesen</Button>
            </div>
        </Content>
    </Wrapper>
);