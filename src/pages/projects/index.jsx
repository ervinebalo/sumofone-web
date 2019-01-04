import React from "react"
import Layout from '../../components/Layout'

// import PageHeader from '../components/PageHeader'
import ProjectCard from '../../components/ProjectCard'

// images
import img_feedging_program from '../../img/resources/feeding_program.jpg'
import img_aeta_outreach from '../../img/resources/aeta_outreach.jpg'
import img_school_build_out from '../../img/resources/school_build_out.jpg'
import img_aeta_outreach_2013 from '../../img/resources/aeta_outreach_2013.jpg'
import img_medical_mission_2012 from '../../img/resources/medical_mission_2012.jpg'

// import headerImage from '../../img/resources/blog-header.jpg'
// const title = 'Projects'

export default () => (
  <Layout>
    {/* <PageHeader headerImage={headerImage}
                title={title} /> */}
    

    <div className="section has-background-light">
      <div className="container">
        <div className="columns is-multiline   ">
          {/* project 1 */}
          <div className="column is-one-third">
            <ProjectCard  title="Feeding Program"
                          year="2018/2019"
                          projectUrl="/projects/2018-19-feeding-program"
                          mainImage={img_feedging_program}
                          shortDescription="Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose."
                          />
          </div>
          {/* project 2 */}
          <div className="column is-one-third">
            <ProjectCard  title="Aeta Outreach"
                          year="2017"
                          projectUrl="#"
                          mainImage={img_aeta_outreach}
                          shortDescription="Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose."
                          />
          </div>
          {/* project 3 */}
          <div className="column is-one-third"> 
            <ProjectCard  title="School Build Out"
                          year="2015"
                          projectUrl="#"
                          mainImage={img_school_build_out}
                          shortDescription="Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose."
                          />
          </div>
        
          {/* project 4 */}
          <div className="column is-one-third"> 
            <ProjectCard  title="Aeta Outreach"
                          year="2013"
                          projectUrl="#"
                          mainImage={img_aeta_outreach_2013}
                          shortDescription="Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose."
                          />
          </div>

          {/* project 5 */}
          <div className="column is-one-third"> 
            <ProjectCard  title="Medical Mission"
                          year="2012"
                          projectUrl="#"
                          mainImage={img_medical_mission_2012}
                          shortDescription="Some short description needs to go here. Something short and sweet. An appetizer but you also can understand the whole purpose."
                          />  
          </div>

        </div>
      </div>
    </div>
  </Layout>
)