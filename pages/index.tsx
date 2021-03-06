// import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'

// const Home = () => (
//   <Layout>
//     <h1>{attributes.title}</h1>
//     <div dangerouslySetInnerHTML={{ __html: html }} />
//     <style jsx>{`
//       h1,
//       div {
//         text-align: center;
//       }
//     `}</style>
//   </Layout>
// )

// export default Home

import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../src/components/layout"
import Hero from "../src/components/hero"
import Projects from "../src/components/projects"
import About from "../src/components/about"
import Contact from "../src/components/contact"

const Illiac = () => (
  <Layout>
    <Parallax pages={5}>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style> */}
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default Illiac