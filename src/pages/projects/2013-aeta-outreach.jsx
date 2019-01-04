import React from "react"
import Layout from '../../components/Layout'

import PageHeaderQuote from '../../components/PageHeaderQuote'
// images

import containerStyles from "../../components/container.module.css"

export default () => (
<Layout>  
  
  <PageHeaderQuote quote="YESTERDAY IS GONE. TOMORROW HAS NOT YET COME.
WE HAVE ONLY TODAY. LET US BEGIN"
                    author="Mother Teresa" />

  {/* Background */}
  <div className="section has-background-white-ter">
    <div className="container">
      <h3 className="title is-3 has-text-grey-darker is-uppercase">Background</h3>
      <div className={containerStyles.separator}></div>
      <br/>
      <p>
      We had a wildly successful outreach in 2012 with the Medical Mission, and while we had hoped that it would be an annual event that we could continue to just drive every year, we really wanted to work on building relationships that were longer lasting than just a single day event. However, we weren’t really sure what that looked like and we knew that we didn’t want to sit idly waiting for a great idea to hit us when we knew that such great need existed. With the birth of our first son that spring, we also needed to do something that was easy for our family and other volunteers to accomplish on the ground in the Philippines.
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
      To distribute 300+ family packs to 2-3 different remote barangays. The family packs are filled with rice, canned goods, and towels, and should be able to provide for a family of four for 2-3 weeks. Our secondary goal was to continue our relationship with the city of Botolan and keep our presence their known. Not so we can garner attention, but so they know we have not forgotten about them and their city.
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
      We were able to distribute roughly 350 family packs to several different locations.
      </p>
    </div>
  </div>

  
  
</Layout>
)