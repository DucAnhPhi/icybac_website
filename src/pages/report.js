import * as React from "react"
import {
  Header,
  Layout,
  Text,
  Title
} from '../components';
import styled from 'styled-components';

const Section = styled.div`
    height: 90vh;
`;

const Container = styled.div`
    padding: 0 150px;
`;

const ReportPage = () => {
  return (
      <Layout>
        <Header report/>
        <Section>
            <Container>
                <Title>Stechmücke melden</Title>
                <Text>Sie möchten eine Asiatische Tigermücke melden?</Text>
                <Text>Bitte nehmen Sie sich einen Moment Zeit und beantworten Sie die folgenden drei Fragen - diese helfen uns beim Vorsortieren der Meldungen.</Text>
            </Container>
        </Section>
      </Layout>
  )
}

export default ReportPage
