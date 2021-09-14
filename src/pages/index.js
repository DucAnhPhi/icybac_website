import * as React from "react"
import {
  About,
  News,
  Control,
  Footer,
  Header,
  Hero,
  Layout,
  Partner
} from '../components';
const IndexPage = () => {
  return (
      <Layout>
        <Header />
        <Hero />
        <Control />
        <About />
        <News />
        <Partner />
        <Footer />
      </Layout>
  )
}

export default IndexPage
