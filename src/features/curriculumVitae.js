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
        <div className="personal-profile">
        </div>
      </div>
    </>
  )
}
