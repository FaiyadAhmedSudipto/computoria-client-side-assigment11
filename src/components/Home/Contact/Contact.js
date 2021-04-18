import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h2 className="fw-bold">SUBMIT YOUR QUERY</h2>
                    <h5 className="text-muted">Feel free to ask anything to us!</h5>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;