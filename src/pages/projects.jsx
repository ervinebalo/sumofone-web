import React from "react"
import Layout from '../components/Layout'

// images
import img_feedging_program from '../img/resources/feeding_program.jpg'
import img_aeta_outreach from '../img/resources/aeta_outreach.jpg'
import img_school_build_out from '../img/resources/school_build_out.jpg'
import img_aeta_outreach_2013 from '../img/resources/aeta_outreach_2013.jpg'
import img_medical_mission_2012 from '../img/resources/medical_mission_2012.jpg'

import headerImage from '../img/resources/blog-header.jpg'
const title = 'Projects'

export default () => (
  <Layout>
    {/* page header */}
    <div className="container">
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
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
    

    <div className="section has-background-light">
      <div className="container">
        <div className="columns is-multiline   ">
          {/* project 1 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={img_feedging_program} alt="Feeding Program" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  {/* <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                  </div> */}
                  <div className="media-content">
                    <p className="title is-4">Feeding Program</p>
                    <p className="subtitle is-6">2018/2019</p>
                  </div>
                </div>

                <div className="content">
                  Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose.
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href="#">Learn More</a>
                  </span>
                </p>
              </footer>
            </div>
            
            
          </div>
          {/* project 2 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={img_aeta_outreach} alt="Aeta Outreach" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Aeta Outreach</p>
                    <p className="subtitle is-6">2017</p>
                  </div>
                </div>

                <div className="content">
                  Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose.
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href="#">Learn More</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          {/* project 3 */}
          <div className="column is-one-third"> 
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={img_school_build_out} alt="School Build Out" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">School Build Out</p>
                    <p className="subtitle is-6">2015</p>
                  </div>
                </div>

                <div className="content">
                  Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose.
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href="#">Learn More</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        
          {/* project 4 */}
          <div className="column is-one-third"> 
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={img_aeta_outreach_2013} alt="Aeta Outreach" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Aeta Outreach</p>
                    <p className="subtitle is-6">2013</p>
                  </div>
                </div>

                <div className="content">
                  Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose.
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href="#">Learn More</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>

          {/* project 5 */}
          <div className="column is-one-third"> 
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={img_medical_mission_2012} alt="Medical Mission" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Medical Mission</p>
                    <p className="subtitle is-6">2012</p>
                  </div>
                </div>

                <div className="content">
                  Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose.
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    <a href="#">Learn More</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
)