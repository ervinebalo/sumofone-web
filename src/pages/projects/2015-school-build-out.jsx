import React from "react"
import Layout from '../../components/Layout'

import PageHeaderQuote from '../../components/PageHeaderQuote'
// images

import containerStyles from "../../components/container.module.css"

export default () => (
<Layout>  
  
  <PageHeaderQuote quote="IN DEVELOPING, LOW INCOME COUNTRIES,
                          EVERY ADDITIONAL YEAR OF EDUCATION
                          CAN INCREASE A PERSON’S FUTURE INCOME BY AN AVERAGE OF 10%"
                    author="" />

  {/* Background */}
  <div className="section has-background-white-ter">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Background</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
      This trip was our first foray into education, and it left a huge dent on our hearts. During a family gathering, one of our brothers asked if we would have any interest or need for a large donation of used school books from the school he taught at. We readily accepted and we began to make plans to ship them over to the Philippines along with funding for some school improvements at Dojoc Balite Integrated School.
      </p>
    </div>
  </div>

  {/* Our Goal */}
  <div className="section ">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Our Goal</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
      Prior to this trip, we had learned that a rural integrated school (meaning that it houses all grades in one building) was looking for funding to have a roof constructed over an existing 10’ x 20’ outdoor space. While this may have seemed like a simply cosmetic fix, it most certainly wasn’t. That outdoor space was set to hold the schools first 9th grade class in the 2015/2016 school year, which in an area where most children only finish up to 6th grade is an esteemed accomplishment. It would also serve as a stage and multi-purpose area for the school. Our goal was to provide the funding for the roof, and to bring enough school supplies for each student to have access to 2-3 pencils, erasers, pencil sharpeners etc. The school books and old encyclopedias from our brother’s school would be evenly distributed amongst several schools in need.
      </p>
    </div>
  </div>
  
  {/* Your Impact */}
  <div className="section has-background-white-ter">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Your Impact</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
      In addition to providing school supplies to Dojoc Balite and another elementary school, the roof was completely funded by your donations! That roof will provide shelter from the elements to hundreds of students in the years to come, all because you gave.
      </p>
    </div>
  </div>

  
  
</Layout>
)