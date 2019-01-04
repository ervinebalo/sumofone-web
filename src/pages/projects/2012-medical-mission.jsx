import React from "react"
import Layout from '../../components/Layout'

import PageHeaderQuote from '../../components/PageHeaderQuote'
// images

import containerStyles from "../../components/container.module.css"

export default () => (
<Layout>  
  
  <PageHeaderQuote quote="NO ONE HAS EVER BECOME POOR BY GIVING."
                    author="Anne Frank" />

  {/* Background */}
  <div className="section has-background-white-ter">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Background</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
      This was our first outreach in the Philippines AND it was Ervin’s first time back to the Philippines since he had moved as a little boy. When we started the Sum of One, our goal was pretty broad because we weren’t really sure where we fit and what we would find a specific passion for. So helping people by providing medical care seemed like a really great place to start. We were able to work very closely with the local government in setting up this outreach, and before we knew it, we had roughly 450 people pre-registered for the event. We were super excited and dove straight into fundraising, organizing, and planning the details. With a 10 bed clinic selected as our host site, things quickly got under way.
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
      Our goal was to provide basic surgeries, vitamins, deworming medications, and other prescriptions to about 500 people (seeing as how we had 450 pre-register, we thought that a 10% margin was good enough). We were able to arrange for a small staff of doctors, and about a dozen nurses to attend to all the medical needs that day. We hoped that this would be a great kick-off to a yearly medical outreach and we quickly learned that while this event was effective, we weren’t the best people to be running medical outreaches since neither of us have experience in that field. However, that being said, we had a phenomenal turn-out and quickly earned the support of the local government for future projects.
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
      On top of the 450 residents that pre-registered for the outreach, roughly 600-800 more people showed up the day of in anticipation of being served. In fact, we had so many more people that we planned for that we had to send out for more medical supplies, TWICE. Providing over 300 minor surgeries, eye exams, cataract surgeries, deworming medications, minor dental surgeries, even haircuts! We were able to serve over 1,000 men, women, and children that ranged from 6 months to 98 years of age! This was made possible with the generosity and support of the mayor, her staff, our extensive volunteer group, and most importantly, YOU.
      </p>
    </div>
  </div>

  
  
</Layout>
)