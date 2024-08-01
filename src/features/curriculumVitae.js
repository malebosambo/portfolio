import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <div className="CV">

        <div className="CV-Contacts">
          <div className="CV-Avatar-Mobile">
            <img src="./Malebo-Sambo.png" alt="Malebo-Sambo-Avatar" className="Avatar" />
            <div className="Profile">
              <h1>Malebo Sambo</h1>
              <h3>Software Developer/Engineer</h3>
            </div>  
          </div>
          <div className="CV-Email">
            <h4>Email</h4>
            <p>sambo.malebo96@gmail.com</p>
          </div>
          <div className="CV-Phone">
            <h4>Phone Number</h4>
            <p>+27 63 001 3711</p>
          </div>
          <div className="CV-Socials">
            <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Social-Logo" /></a>
            <a href="www.github.com/sambomalebo"><img src="./Github.png" alt="GitHub" className="Social-Logo" /></a>
            <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Social-Logo" /></a>
          </div>
        </div>

        <div className="CV-Body">
          <div className="CV-Section1">
            <div className="CV-About">
              <h4>Personal Summary</h4><br />
              <p>I am an IT professional with experience in both Software and Mobile App Development, Quality Assuarance (QA), Research & Development (R&D) Analysis, and Business Analysis (BA). </p><br />
              <p>I have skills and experience as a Operations Manager for SMMEs in the IT sector, I also provide organizational culture and business model development expertise.</p><br />
              <p>I possess great personal characteristics that assist me to work with diverse and incredible private and public sector individuals to deliver projects and initiatives.</p>
            </div>
            <div className="CV-Education">
              <h4>Education</h4><br />
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
            <div className="CV-Softskills">
              <h4>Soft Skills</h4><br />
              <ul>
                <li>Communication (Verbal/Written)</li>
                <li>Collaborator</li>
              </ul>
            </div> 
          </div>

          <div className="CV-Section2">
            <div className="CV-Avatar">
              <img src="./CVAvatar.jpg" alt="avatar" />
              <h1>Malebo Sambo</h1>
              <h3>Software Developer/Engineer</h3>
            </div>
            <div className="CV-Hardskills">
              <h4>Hard Skills</h4><br />
              <ul>
                <li>OutSystems Reactive Developer</li>
                <li>MERN/Next.js Developer</li>
                <li>C# Developer (Blazor)</li>
                <li>WordPress Developer</li>
                <li>Flutter Mobile App Developer</li>
              </ul>
            </div>
          </div>

          <div className="CV-Section3">
            <div className="CV-Employment">
              <h4>Experience</h4><br />
              <div>
                <p>2021-2022</p>
                <p>Social Impact Platform Specialist</p>
                <p>ExoFutures</p>
              </div>
              <hr />
              <div>
                <p>2020-2021</p>
                <p>Tester/Business Analyst/Mobile Developer</p>
                <p>ExoSystems</p>
              </div>
              <hr />
              <div>
                <p>2019-2020</p>
                <p>OutSystems Platform Internship Trainee</p>
                <p>ExoSystems</p>
              </div>
              <hr />
              <div>
                <p>2018</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>
              <hr />
              <div>
                <p>2017-2018</p>
                <p>Dispatch Assistant</p>
                <p>CTM Montague Gardens</p>
              </div>
              <hr />
              <div>
                <p>2016-2017</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>              
            </div>
            <div className="CV-Achievements">
              <h4>Achievements</h4><br />
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
