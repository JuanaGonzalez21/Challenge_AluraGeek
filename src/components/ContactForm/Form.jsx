import React from 'react';

import '../../assets/styles/Form/css/bootstrap.min.css'
import '../../assets/styles/Form.css'
import imgForm from '../../assets/img/undraw-contact.svg'

const Form = () => {
    return (
        
    
    <div className=" containerForm pt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          

          <div className="row justify-content-center">
            <div className="col-md-6">
              
              <h3 className="heading mb-4">Escríbeme para estar en contacto</h3>

              <p><img src={imgForm} alt="Image" className="img-fluid"/></p>


            </div>
            <div className="col-md-6">
              
              <form className="mb-5" method="post" id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Tu nombre"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" name="email" id="email" placeholder="Correo"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Escribe tu mensaje"></textarea>
                  </div>
                </div>  
                <div className="row">
                  <div className="col-12 mt-5">
                    <input value="Enviar Mensaje" className="btn btn-outline-info border-2 py-2 px-4"/>
                  <span className="submitting"></span>
                  </div>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </div>


    );
}

export default Form;
