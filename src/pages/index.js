import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import '../components/style.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "My Profile"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="My Profile"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, borderRadius: '5px' }} src="./wahyudi.jpg" alt="Gatsby Scene" />
        <h1 style={{ fontFamily: 'montserrat' }}>Muhammad Wahyudi</h1>
        <h4 style={{ fontFamily: 'montserrat' }}>Front End Web Developer</h4>
        <p style={{ fontFamily: 'montserrat' }}>
        Welcome to my profile page.
        </p>
        <p style={{ fontFamily: 'montserrat' }}>I am Muhammad Wahyudi from North Sumatra, Indonesia. a front end web developer who is currently still developing da'wah applications with pondok programmer</p>

        <Link to="/blog/" style={{ fontFamily: 'montserrat' }}>
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
