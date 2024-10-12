import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <main className="CV">

        <div className="CV_Contacts">
          <div className="CV_Overview">
            <div className="Avatar">
              <img src="./Malebo-Sambo.png" alt="Avatar" className="Avatar" />
            </div>
            <div className="Profile">
              <br />
              <h1>Malebo Sambo</h1><br />
              <h4>Software Developer/Engineer, Entrepreneur, Business Analyst</h4><br />
              <img src="Email.png" className="Icon" />
              <a href="mailto:sambo.malebo96@gmail.com"><h5>sambo.malebo96@gmail.com</h5></a><br />
              <img src="./Telephone.png" className="Icon" />
              <a href="tel:+27630013711"><h5>+27630013711</h5></a><br />
              <img src="./Location.png" className="Icon" />
              <h5>South Africa</h5><br />
            </div>
            <div className="Online">
              <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Icon" /></a>
              <a href="www.github.com/sambomalebo"><img src="./Github.png" alt="GitHub" className="Icon" /></a>
              <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Icon" /></a>
            </div>  
          </div>
          <div className="CV_Email">
            <img src="Email.png" className="Icon" />
            <div>
              <h4>Email</h4>
              <a href="mailto:sambo.malebo96@gmail.com"><p>sambo.malebo96@gmail.com</p></a>
            </div>
          </div>
          <div className="CV_Phone">
            <img src="Telephone.png" className="Icon" />
            <div>
              <h4>Phone Number</h4>
              <a href="tel:+27630013711"><p>+27 63 001 3711</p></a>
            </div>
          </div>
          <div className="CV_Socials">
            <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Social_Logo" /></a>
            <a href="www.github.com/sambomalebo"><img src="./Github.png" alt="GitHub" className="Social_Logo" /></a>
            <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Social_Logo" /></a>
          </div>
        </div>

        <div className="CV_Body">
          <div className="CV_Section1">
            <div className="CV_About">
              <h4>Personal Summary</h4><br />
              <p>I am an IT professional with experience in both Software and Mobile App Development, Quality Assuarance (QA), Research & Development (R&D) Analysis, and Business Analysis (BA). </p><br />
              <p>I have skills and experience as a Operations Manager for SMMEs in the IT sector, I also provide organizational culture and business model development expertise.</p><br />
              <p>I possess great personal characteristics that assist me to work with diverse and incredible private and public sector individuals to deliver projects and initiatives.</p>
            </div>
            <div className="CV_Education">
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
            <div className="CV_Softskills">
              <h4>Soft Skills</h4><br />
              <ul>
                <li>Communication (Verbal/Written)</li>
                <li>Collaborator</li>
              </ul>
            </div> 
          </div>

          <div className="CV_Section2">
            <div className="CV_Avatar">
              <img src="./Malebo-Sambo.png" alt="Avatar" />
              <h1>Malebo Sambo</h1>
              <h3>Software Developer/Engineer</h3>
            </div>
            <div className="CV_Hardskills">
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

          <div className="CV_Section3">
            <div className="CV_Employment">
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
      </main>
    </>
  )
}
