import React from "react"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'

// import PageHeader from '../components/PageHeader'
// import PageHeaderQuote from '../components/PageHeaderQuote'

import lauren_and_ervin_image from '../img/resources/lauren_and_ervin.jpg'
import lauren_image from '../img/resources/lauren.jpg'
import ervin_image from '../img/resources/ervin.jpg'

import containerStyles from "../components/container.module.css"
// import headerImage from '../img/resources/blog-header.jpg'

// const title = 'About'

export default () => (
<Layout>
  {/* <PageHeader headerImage={headerImage}
              title={title} /> */}
    
    

  {/* <PageHeaderQuote quote="BELIEVE WITH US THAT THE FUTURE CAN BE BETTER THAN TODAY"
                    author="" /> */}
  
  {/* About Us */}
  <div className="section ">
    <div className="container">
      <div className="columns is-multiline   ">
        <div className="column is-half">
          <img src={lauren_and_ervin_image} alt="Lauren and Ervin Ebalo" />
        </div>

        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker ">WHO WE ARE</h3>
          <div className={containerStyles.separator}></div>
        <br/>
          <h2 className="subtitle has-text-weight-semibold">
            Hi, we are Ervin and Lauren Ebalo, the founders of the Sum of One.
          </h2>
          <p>
          We are people that believe we can do something to make a difference for someone. We both grew up in very family oriented homes that emphasized and exemplified what it meant to put other people’s needs before our own. So it only felt natural when we got married that we would carry on that legacy and do something to give back as well. Although the details of how and where we grew up were vastly different, the basic elements of who we are and the value we hold melded together in a pretty cool way, inspiring us to form the Sum of One. Our hope is that as we include our kids in these outreaches and fundraising, they will grow up to value and experience the same kind of life perspective.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Lauren */}
  <div className="section has-background-white-ter">
    <div className="container">
      <div className="columns is-multiline   ">
        <div className="column is-half">
          <img src={lauren_image} alt="Lauren Ebalo" />
        </div>
        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker is-uppercase">Lauren</h3>
          <div className={containerStyles.separator}></div>
          <br/>
          <p>
          I spent most of my younger years in the Pacific Northwest, and moved to San Diego, CA with my family in 1999. When I was 12 years old, I was able to take a trip with my family to visit orphanages in rural Honduras. This trip made me rethink who and what I wanted to become. Through work with various non-profits and some relief work efforts in the U.S., I really felt the need to prioritize giving to others in developing nations. And upon meeting Ervin in 2009 and marrying in 2011, this desire was rekindled, and ultimately, came to life in the form of The Sum of One.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Ervin */}
  <div className="section ">
    <div className="container">
      <div className="columns is-multiline ">

        <div className="column is-half">
          <img src={ervin_image} alt="Ervin Ebalo" />
        </div>

        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker is-uppercase">Ervin</h3>
          <div className={containerStyles.separator}></div>
          <br/>
          <p>
          I was born in Olongapo City on the island of Luzon in the Philippines and moved with my family to the city of Norwalk, CA when I was 8. I have very few memories of the Philippines and didn’t really get a true appreciation of my culture until I was much older. Generosity, service, and genuine love for others is what my parents have both consistently displayed and instilled in me and my siblings. This put a desire in my heart to give back but I didn’t figure out how to execute it until I met my wife. This came to life in the form of The Sum of One.
          </p>
        </div>
      </div>
    </div>
  </div>
  
</Layout>
)