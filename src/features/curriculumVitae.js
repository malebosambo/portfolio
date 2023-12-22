import React from 'react';

export default function CurriculumVitae() {

  return (
    <>
      <div className="cv-intro">
        <div className="avatar">
          <h1>Malebo Sambo</h1>
        </div>
        <div className="contact-details">
          <h4>Contact Details</h4><br/>
          <p>Preferred Method</p><br/>
          <p>Cellphone: 0630013711</p><br/>
          <p>Alternative Method</p><br/>
          <p>Email: sambo.malebo96@gmail.com</p><br/>
          <p>Social Accounts</p><br/>
          <p>LinkedIn: <span><a href="">Malebo Sambo</a></span></p>
        </div>
      </div>
      <div className="cv-body">
        <div className="column1">
          <div className="address-details">
          </div>
          <div className="education-details">
          </div>
        </div>
        <div className="column2">
          <div className="personal-details">
          </div>
          <div className="specializations">
          </div>
        </div>
        <div className="personal-profile">
        </div>
      </div>
    </>
  )
}
