import * as React from "react"
import {
  About,
  Biology,
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
        <Biology />
        <Partner />
        <Footer />
      </Layout>
  )
}

export default IndexPage
