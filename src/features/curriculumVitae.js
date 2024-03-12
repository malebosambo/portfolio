import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <div>
        <div>
          <div className="CV-email">
            <img alt="" />
            <h6>Email</h6>
            <p>sambo.malebo96@gmail.com</p>
          </div>
          <div className="CV-phone">
            <img alt="" />
            <h6>Phone Number</h6>
            <p>+27 63 001 3711</p>
          </div>
          <div className="CV-socials">
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
          </div>
        </div>

        <div>
          <div className="CV-section1">
            <div className="CV-about">
              <h6>Personal Summary</h6>
              <p>I am a professional with experience in Software and Mobile App Development, Business Analysis, Research & Development, and SMME Operations Management. The experience and learnings that I have acquired, gives me the skills and knowledge to conduct quality work.</p><br />



              <p>I possess great personal characteristics that assist me to work with diverse and incredible private and public sector individuals to deliver projects and initiatives.</p>
            </div>
            <div className="CV-education">
              <h6>Education</h6>
            </div>
            <div className="CV-softskills">
              <h6>Soft Skills</h6>
            </div> 
          </div>

          <div className="CV-section2">
            <div className="CV-avatar">
              <img src="" alt="" />
              <h5>Malebo Sambo</h5>
              <h6>Software Developer</h6>
            </div>
            <div className="CV-hardskills">
              <h6>Hard Skills</h6>
            </div>
          </div>

          <div className="CV-section3">
            <div className="CV-employment">
              <h6>Experience</h6>
            </div>
            <div className="CV-achievements">
              <h6>Achievements</h6>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="CV-intro">
        <div className="avatar">
          <h1>Malebo Sambo</h1>
          <img src="./CVAvatar.jpg" />
        </div>

        <div className="Contact-details">
          <h4>Contact Details</h4><br/>
          <p>Preferred Method</p><br/>
          <p>Cellphone: 0630013711</p><br/>
          <p>Alternative Method</p><br/>
          <p>Email: sambo.malebo96@gmail.com</p><br/>
          <p>Social Accounts</p><br/>
          <p>LinkedIn: <span><a href="">Malebo Sambo</a></span></p>
        </div>
      </div>
    
      <div className="CV-Body-1">
        <div className="column1">
          <div className="accordion" id="accordionColumn1">
    
            <div className="accordion-item address-details">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapse one">Address Details</button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionColumn1">
                <div className="accordion-body">
                </div>
              </div>
            </div>
      
            <div className="accordion-item education-details">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapse Two">Education Details</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionColumn1">
                <div className="accordion-body">
                </div>
              </div>
            </div>
    
          </div>
        </div>

        <div className="column2">
          <div className="personal-details">
          </div>
          <div className="specializations">
          </div>
        </div>
      </div>
      */}
    </>
  )
}
