import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <div>
        <div>
          <div className="CV-avatar">
            <img src="./CVAvatar.jpg" alt="avatar" className="Avatar-Mobile" />
            <h5>Malebo Sambo</h5>
            <h6>Software Developer</h6>
          </div>
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
              <div>
                <p>2010-2014</p>
                <p>National Senior Certificate</p>
                <p>Frans du Toit High School</p>
              </div>
              <div>
                <p>2022</p>
                <p>OutSystems Reactive Developer</p>
                <p>OutSystems</p>
              </div>
            </div>
            <div className="CV-softskills">
              <h6>Soft Skills</h6>
              <ul>
                <li>Communication (Verbal/Written)</li>
              </ul>
            </div> 
          </div>

          <div className="CV-section2">
            <div className="CV-avatar">
              <img src="./CVAvatar.jpg" alt="avatar" className="Avatar" />
              <h5>Malebo Sambo</h5>
              <h6>Software Developer</h6>
            </div>
            <div className="CV-hardskills">
              <h6>Hard Skills</h6>
              <ul>
                <li>OutSystems Developer</li>
              </ul>
            </div>
          </div>

          <div className="CV-section3">
            <div className="CV-employment">
              <h6>Experience</h6>
              <div>
                <p>2021-2022</p>
                <p>Social Impact Platform Specialist</p>
                <p>ExoFutures</p>
              </div>
              <div>
                <p>2020-2021</p>
                <p>Tester/Business Analyst/Mobile Developer</p>
                <p>ExoSystems</p>
              </div>
              <div>
                <p>2019-2020</p>
                <p>OutSystems Platform Internship Trainee</p>
                <p>ExoSystems</p>
              </div>
              <div>
                <p>2018</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>
              <div>
                <p>2017-2018</p>
                <p>Dispatch Assistant</p>
                <p>CTM Montague Gardens</p>
              </div>
              <div>
                <p>2016-2017</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>              
            </div>
            <div className="CV-achievements">
              <h6>Achievements</h6>
              <div>
                <p>2016</p>
                <p>2nd Place Winners</p>
                <p>Pitch and Poster Competition</p>
              </div>              
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
