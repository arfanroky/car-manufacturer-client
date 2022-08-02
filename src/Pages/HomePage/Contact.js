import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import contactUs from '../../images/contact-us.jpg';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact_us', 'template_fhpiufx', form.current, 'vSYLq3IqIep_lqsTT')
        .then((result) => {
            toast.success(result.text);
        }, (error) => {
            toast.error(error.text);
        });

        e.target.reset();
    };

    return (
        <div className='container mx-auto px-6'>
            <h1 className="text-center md:text-5xl font-semibold text-primary text-2xl my-12">
        Contact Us
      </h1>
        <div className="hero-content grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="text-center lg:text-left">
          <img className='rounded-lg' src={contactUs} alt="" />
          </div>

          <div className="card flex-shrink-0  shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-primary"
                  name='user_name'
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  placeholder="Email"
                  className="input input-bordered input-primary"
                  name='user_email'
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea name='user_message' className="textarea textarea-primary" placeholder="Message..."></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>

        </div>
        </div>
      
    );
};

export default Contact;