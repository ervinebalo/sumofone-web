import React from "react"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import headerImage from '../img/resources/blog-header.jpg'
import investImage from '../img/resources/invest.jpg'
import volunteerImage from '../img/resources/volunteer.jpg'
import fundraiseImage from '../img/resources/fundraise.jpg'

import containerStyles from "../components/container.module.css"

export default () => (
  <Layout>
  <div class="">
    <div className="container">
        {/* <div className="section"> */}
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      headerImage
                    })`,
                    marginBottom: 0
                  }}
                >
                {/* <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #9e3031, -0.5rem 0 0 #9e3031',
                    backgroundColor: '#9e3031',
                    color: 'white',
                    padding: '1rem',
                  }}
                > */}
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Invest
                </h2>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    

    {/* quote */}
    <div class="container">
      <div class="section">
        <h2 class="title is-2 has-text-grey-dark has-text-weight-light has-text-centered">
          AN INVESTMENT IN EDUCATION IS AN INVESTMENT IN OUR FUTURE.
        </h2>
        <h3 class="subtitle has-text-centered has-text-grey">David Wasinger</h3>
      </div>
    </div>

    {/* invest */}
    <div class="section has-background-light">
      <div class="container">
        <div class="columns is-multiline   ">
          <div class="column is-half">
            <h3 class="title is-3 has-text-grey-darker is-uppercase">Invest</h3>
            <div className={containerStyles.separator}></div>
            <br/>

            <img src={investImage} alt="Invest" />
            <p>
              Whether your donation is directed to the general fund, to a special project, or to one of our feeding programs, every dollar you invest into the Sum of One matters. Because you aren’t just investing into an organization, you are investing into people. From providing simple footwear, food, blankets, or school supplies, your investment will make a difference in someone’s life.
            </p>
            <p>
              If you would like more information on the programs or special projects we are currently involved with, please visit our contact page and send us a message.
            </p>
          </div>
          <div class="column is-half">
            <script src="https://cdn.donately.com/dntly-core/current/core.min.js"  >
            </script>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="columns is-multiline   ">
          <div class="column is-half">
            <img src={volunteerImage} alt="Volunteer" />
          </div>
          <div class="column is-half">
            <h3 class="title is-3 has-text-grey-darker is-uppercase">Volunteer</h3>
            <div className={containerStyles.separator}></div>
            <br/>
            <p>
              There are so many ways to get involved with what we are doing! Whether you want to help with an upcoming event, or you have a skill set that you think could benefit us, we would love to hear from you.
            </p>
            <br/>
            <p>
              We are currently looking for photographers, fundraisers, and registration coordinators for our Fun Run benefit on November 3rd, 2018.
            </p>
            <br/>
            <p>
              If you are interested in filling any of those volunteer positions please go to our Contact page and send us a message.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="section has-background-light">
      <div class="container">
        <div class="columns is-multiline ">
          <div class="column is-half">
            <h3 class="title is-3 has-text-grey-darker is-uppercase">Fundraise</h3>
            <div className={containerStyles.separator}></div>
            <br/>
            <p>
            Love what we’re doing? Want to help us spread the word? Fundraisers are a great place to start! From Facebook Fundraising to garage sales, dance events to 5K’s and casino nights, we would love to help you get started.
            Contact us for more information or even to share a great idea you have about how we could fundraise.
            </p>
          </div>

          <div class="column is-half">
            <img src={fundraiseImage} alt="Fundraise" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </Layout>
)