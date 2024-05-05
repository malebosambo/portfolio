import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <div className="CV">

        <div className="CV-Contacts">
          <div className="CV-avatar-Mobile">
            <img src="./CVAvatar" alt="avatar" className="Avatar-Mobile" />
            <h1>Malebo Sambo</h1>
            <h3>Software Developer/Engineer</h3>
          </div>
          <div className="CV-email">
            <img alt="" />
            <h5>Email</h5>
            <p>sambo.malebo96@gmail.com</p>
          </div>
          <div className="CV-phone">
            <img alt="" />
            <h5>Phone Number</h5>
            <p>+27 63 001 3711</p>
          </div>
          <div className="CV-socials">
            <a href="www.malebosambo.github.app"><img src="" alt="portfolio" /></a>
            <a href="www.linkedin.com/malebosambo"><img src="" alt="LinkedIn" /></a>
            <a href="www.github.com/sambomalebo"><img src="" alt="GitHub" /></a>
            <a href="www.twitter.com/lovais000"><img src="" alt="Twitter" /></a>
          </div>
        </div>

        <div className="CV-Body">
          <div className="CV-section1">
            <div className="CV-about">
              <h5>Personal Summary</h5>
              <p>I am a professional with experience in Software and Mobile App Development, Business Analysis, Research & Development, and SMME Operations Management. The experience and learnings that I have acquired, gives me the skills and knowledge to conduct quality work.</p><br />

              <p>I possess great personal characteristics that assist me to work with diverse and incredible private and public sector individuals to deliver projects and initiatives.</p>
            </div>
            <div className="CV-education">
              <h5>Education</h5>
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
              <h5>Soft Skills</h5>
              <ul>
                <li>Communication (Verbal/Written)</li>
                <li>Collaborator</li>
              </ul>
            </div> 
          </div>

          <div className="CV-section2">
            <div className="CV-avatar">
              <img src="" alt="" />
              <h1>Malebo Sambo</h1>
              <h3>Software Developer/Engineer</h3>
            </div>
            <div className="CV-hardskills">
              <h5>Hard Skills</h5>
              <ul>
                <li>OutSystems Reactive Developer</li>
                <li>MERN/Next.js Developer</li>
                <li>C# Developer (Blazor)</li>
                <li>WordPress Developer</li>
                <li>Flutter Mobile App Developer</li>
              </ul>
            </div>
          </div>

          <div className="CV-section3">
            <div className="CV-employment">
              <h5>Experience</h5>
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
              <h5>Achievements</h5>
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
