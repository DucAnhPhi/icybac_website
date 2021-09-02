import * as React from "react"
import {
  About,
  Biology,
  Contact,
  Control,
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
        <Control />
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
