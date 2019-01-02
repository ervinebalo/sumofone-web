import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import heroImage from '../img/resources/kids1.jpg'
// import debugCSS from "../components/styles/debug.css"
import containerStyles from "../components/container.module.css"
 

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="hero is-link is-fullheight-with-navbar has-background-white" style={{
                    backgroundImage: `url(${
                      heroImage
                    })`,
                    marginBottom: 0,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title" style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    color: 'white',
                    padding: '1rem',
                  }}>
                Fullheight hero with navbar
              </h1>
            </div>
          </div>
        </section>


        <div className="container">
          <div className="section">
            <h2 className="title is-2 has-text-grey-dark has-text-weight-light has-text-centered">
              IF WE HAVE NO FAITH IN THE FUTURE, <br/>
              THEN WE HAVE NO POWER IN THE PRESENT.
            </h2>
            <div className={containerStyles.separator} style={{margin: 'auto auto'}}></div>
            <br/>
            <p className="has-text-centered is-size-4 has-text-grey-dark">
            The Sum of One is more than just an organization. We have a very real passion that moves us to seeing education expanded, poverty extinguished, and communities developed for sustainable futures. We believe that we can do more than just imagine change, we can be a part of the change.  Join us in our fight to end poverty and make an investment by making education possible for impoverished students.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
