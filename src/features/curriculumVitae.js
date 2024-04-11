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
            <a href="www.malebosambo.github.app"><img src="" alt="portfolio" /></a>
            <a href="www.linkedin.com/malebosambo"><img src="" alt="LinkedIn" /></a>
            <a href="www.github.com/sambomalebo"><img src="" alt="GitHub" /></a>
            <a href="www.twitter.com/lovais000"><img src="" alt="Twitter" /></a>
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
                <li>Collaborator</li>
              </ul>
            </div> 
          </div>

          <div className="CV-section2">
            <div className="CV-avatar">
              <img src="" alt="" />
              <h5>Malebo Sambo</h5>
              <h6>Software Engineer</h6>
            </div>
            <div className="CV-hardskills">
              <h6>Hard Skills</h6>
              <ul>
                <li>OutSystems Reactive Developer</li>
                <li>MERN/Next.js Developer</li>
                <li>C# Developer (Blazor)<li>
                <li>WordPress Developer</li>
                <li>Flutter Mobile App Developer</li>
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
    </>
  )
}
