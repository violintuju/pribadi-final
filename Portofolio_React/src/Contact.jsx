import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" required />
          <input type="text" placeholder="Email Subject" required />
        </div>
        <textarea cols="30" rows="10" placeholder="Ketik Pesan" required></textarea>
        <input type="submit" value="Kirim Pesan" className="btn" />
      </form>
    </section>
  );
};

export default Contact;