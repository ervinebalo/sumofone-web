import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section class="hero is-fullheight-with-navbar is-primary">
        <div class="hero-body">
          <div class="container">
          <h1 class="title is-1">Uh oh!</h1>
            <p class="title">
              The page you're looking for can't be found.
            </p>
            <p class="">
              Try again or <a href="/contact" className="button">send us a message</a> to let us know what you're looking for.
            </p>
          </div>
        </div>
      </section>
  </Layout>
)

export default NotFoundPage
