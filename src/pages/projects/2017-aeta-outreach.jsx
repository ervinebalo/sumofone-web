import React from "react"
import Layout from '../../components/Layout'

import PageHeaderQuote from '../../components/PageHeaderQuote'
// images

import containerStyles from "../../components/container.module.css"

export default () => (
<Layout>  
  <div className="section ">
    <div className="container has-text-centered">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4i7XgGAgE5k" allowFullScreen title="Feeding Program"></iframe>
      </div>
    </div>
  </div>
  <PageHeaderQuote quote="WE MAKE A LIVING BY WHAT WE GET, WE MAKE A LIFE BY WHAT WE GIVE."
                    author="Sir Winston Churchill" />

  {/* Background */}
  <div className="section has-background-white-ter">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Background</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
        Over the course of the previous five years, we had done several different types of outreaches but the ones we were 
        particularly drawn to were in the arena of education. So this trip was very special for us as an organization as it was 
        dual purpose. One, we wanted to do our largest outreaches ever in more rural communities, and two, we wanted to 
        discover what we could do to partner with schools in a more permanent way moving forward. This was also our 
        first trip as a family, and our first trip traveling with a team of people.
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
        Nearly 14 months before the trip, we had decided to set a goal of providing 1,000 Family Packs (filled with towels, 
        blankets, rice, and canned goods), 3,000 pairs of slippers/flip flops to children and adults, and school supplies to 2 
        separate elementary schools. We quickly realized that this would by far be the largest outreaches we had ever done, 
        and not only would we need all hands on deck, we would need to raise nearly 5 times more money than we had ever raised 
        in a single year. Once again, we had the privilege to be fully supported by the current mayor of Botolan and her staff, 
        who helped to coordinate supply delivery, and assembly of the family packs, as well as providing meals to the most 
        remote village during the outreach. We are forever indebted to our parents, Jim and Tessie Ebalo, for coordinating 
        all of these things on the ground in the Philippines, as truly, this event would not have been able to happen if it 
        weren’t for them and their dedication to supporting us and the mission of the Sum of One.
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
      Thanks to your generosity, we were able to deliver all 1,000 Family Packs, 3,000 pairs of slippers/flip-flops, 
      AND provide school supplies for 3 elementary schools! We estimated that 5,000-7,000 people in all were reached in 
      some way through the outreaches that were held over the course of 3-4 days.
      </p>
    </div>
  </div>

  
  
</Layout>
)