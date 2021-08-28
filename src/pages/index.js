import * as React from "react"
import { Header, Layout, About, Biology, Selfhelp, Partner, Contact } from '../components';
const IndexPage = () => {
  return (
      <Layout>
        <Header />
        <About />
        <Biology />
        <Selfhelp />
        <Partner />
        <Contact />
      </Layout>
  )
}

export default IndexPage
