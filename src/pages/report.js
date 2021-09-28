import * as React from "react"
import {
  Header,
  Layout,
  Text,
  Title,
  Subtitle
} from '../components';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    touchMove: false
};

const Container = styled.div`
    width: 700px;
    @media (max-width: 800px) {
      width: auto;
    }
    :focus,:active {
      outline: None;
    }

    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

const Button = styled.div`
  font-weight: bold;
  color: #eb5e57;
  display: flex;
  justify-content: flex-end;
  outline: None;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Separator = styled.div`
  border-color: #eb5e56;
  border-style: solid;
  width: 66px;
  border-bottom-width: 0px;
`;

const Outer = styled.div`
  *:focus {
    outline: None;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    align-items: center;
`
export default class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
        <Layout>
          <Header report/>
          <Outer>
            <Slider ref={c=>{this.slider=c}} {...settings}>
              <div key={1}>
                <Wrapper>
                  <Container>
                      <Title>Stechmücke melden</Title>
                      <Separator/>
                      <div>
                        <Text>Sie möchten eine Asiatische Tigermücke melden?</Text>
                        <Text>Bitte nehmen Sie sich einen Moment Zeit und beantworten Sie die folgenden drei Fragen - diese helfen uns beim Vorsortieren der Meldungen.</Text>
                      </div>
                      <Button onClick={this.next}>Fragen beantworten <div style={{fontSize: "60px", height: "90px"}}>&rarr;</div></Button>
                  </Container>
                </Wrapper>
              </div>
              <div key={2}>
                <Wrapper>
                  <Container>
                    <Subtitle>1. Die Größe des Insekts</Subtitle>
                    <Separator/>
                    <Title>Ist das Insekt kleiner als eine 1 Cent Münze?</Title>
                    <Button onClick={this.next}>Next</Button>
                    <Button onClick={this.previous}>Previous</Button>
                  </Container>
                </Wrapper>
              </div>
              <div key={3}>
                <Wrapper>
                  <Container>
                    <Subtitle>2. Farbe</Subtitle>
                    <Separator/>
                    <Title>Besitzt das Insekt einen schwarzen Körper und eine auffällige weiße Musterung?</Title>
                    <Button onClick={this.next}>Next</Button>
                    <Button onClick={this.previous}>Previous</Button>
                  </Container>
                </Wrapper>
              </div>
              <div key={4}>
                <Wrapper>
                  <Container>
                    <Subtitle>3. Musterung der Beine</Subtitle>
                    <Separator/>
                    <Title>Besitzt das Insekt fünf weiße Ringe am hinteren Beinpaar?</Title>
                    <Button onClick={this.next}>Next</Button>
                    <Button onClick={this.previous}>Previous</Button>
                  </Container>
                </Wrapper>
              </div>
              <div key={5}>
                <Wrapper>
                  <Container>
                    <Subtitle>4. Bildnachweis</Subtitle>
                    <Separator/>
                    <Title>Bitte laden Sie noch ein klar erkennbares Foto des Insekts hoch.</Title>
                    <Button onClick={this.next}>Next</Button>
                    <Button onClick={this.previous}>Previous</Button>
                  </Container>
                </Wrapper>
              </div>
            </Slider>
          </Outer>
        </Layout>
    )
  }
}
