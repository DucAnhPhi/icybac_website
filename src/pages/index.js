import * as React from "react"
import {
  About,
  Biology,
  Contact,
  Footer,
  Header,
  Layout,
  Partner,
  Selfhelp
} from '../components';
const IndexPage = () => {
  return (
      <Layout>
        <Header />
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
