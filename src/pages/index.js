import * as React from "react"
import {
  About,
  Biology,
  Contact,
  Footer,
  Header,
  Hero,
  Layout,
  Partner,
  Selfhelp
} from '../components';
const IndexPage = () => {
  return (
      <Layout>
        <Header />
        <Hero />
        <About />
        <Biology />
        <Selfhelp />
        <Partner />
        <Contact />
        <Footer />
      </Layout>
  )
}

export default IndexPage
