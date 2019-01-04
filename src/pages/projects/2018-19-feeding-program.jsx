import React from "react"
import Layout from '../../components/Layout'

import PageHeaderQuote from '../../components/PageHeaderQuote'
import lauren_image from '../../img/resources/lauren.jpg'
import ervin_image from '../../img/resources/ervin.jpg'

import containerStyles from "../../components/container.module.css"

export default () => (
<Layout>  
  <div className="section ">
    <div className="container has-text-centered">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6wfvJbOAT2Y" allowFullScreen title="Feeding Program"></iframe>
      </div>
    </div>
  </div>
  <PageHeaderQuote quote="YOU CANNOT IMPROVE THE QUALITY OF A CHILD’S EDUCATION IF YOU DO NOT FIRST IMPROVE THE CHILD’S LIKELIHOOD OF ACTUALLY RECEIVING AN EDUCATION"
                    author="" />

  {/* The Problem */}
  <div className="section has-background-white-ter">
    <div className="container">
      <div className="columns is-multiline   ">
        <div className="column is-half">
          <img src={lauren_image} alt="Lauren Ebalo" />
        </div>
        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker is-uppercase">The Problem</h3>
          <div className={containerStyles.separator}></div>
          <br/>
          <h4 className="is-uppercase">Low attendance</h4>
          <p>
            School attendance in rural areas is considerably lower than their urban counterparts. 
            Although a majority of the students suffer from malnutrition, 
            most schools simply cannot afford to fund a feeding program. 
            Government funded feeding programs currently exist in some schools, but it can take years to receive approval for a program. 
            Due to budget constraints, it is highly unlikely that aid will be available to all schools to address this problem. 
            After speaking with the teachers and other school officials that serve in these rural poverty-stricken communities, 
            the lack of a feeding program was identified as the largest reason why parents don’t send their school-age kids to school.
          </p>
          <p>
            This is where we have the incredible opportunity to step in and help.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* The Solution */}
  <div className="section ">
    <div className="container">
      <div className="columns is-multiline ">
        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker is-uppercase">The Solution</h3>
          <div className={containerStyles.separator}></div>
          <br/>
          <h4 className="is-uppercase">School Feeding Program</h4>
          <p>
            Research shows that the drop out rate of 1st-3rd graders in schools with a feeding program decreased dramatically 
            and overall attendance improved by as much as 85% in schools with a feeding program in place. To implement the program, 
            an overseer is appointed (someone who is already on staff at the school), and they purchase the food, provide receipts, 
            and pictures of the food being made and served to the students.
          </p>
          <p>
            Our pilot feeding program with Moraza Elementary School is a giant stepping stone for us as an organization. 
            We would love for you to be a part of changing the lives of the children and families in this rural community.
          </p>
        </div>

        <div className="column is-half">
          <img src={ervin_image} alt="Ervin Ebalo" />
        </div>
      </div>
    </div>
  </div>
  
  {/* The Details */}
  <div className="section has-background-white-ter">
    <div className="container">
      <div className="columns is-multiline   ">
        <div className="column is-half">
          <img src={lauren_image} alt="Lauren Ebalo" />
        </div>
        <div className="column is-half">
          <h3 className="title is-3 has-text-grey-darker is-uppercase">The Details</h3>
          <div className={containerStyles.separator}></div>
          <br/>
          <h4 className="is-uppercase">WHAT WE ARE DOING & HOW YOU CAN HELP</h4>
          <p>
            A feeding program like the one we are funding is fairly basic, providing a nutritional daily breakfast. 
            Students were assessed by signs of obvious malnutrition, sporadic attendance, or based on firsthand knowledge of their home situation. 
            In the case of Moraza Elementary, the entire student population falls into one or all of these categories.
          </p>
          <p>The cost to provide one meal for one child during the course of the school year:</p>
          <ul>
            <li>$2.50/wk</li>
            <li>$10.00/mo</li>
            <li>$85.00/yr</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Layout>
)