import React, { useState } from 'react';

function ContactForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');
  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, email, massage, phone };
    setAllValue([...allValue, newValue]);
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');
    setMassage('');
  };

  return (
    <>
      <section className="contact  py-12 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="main-content">
              <h2 className="text-2xl font-bold">Contact Form</h2>
              <p>Fill in the form below:</p>
              <form onSubmit={formSubmit}>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="fname" className="text-sm font-semibold">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lname" className="text-sm font-semibold">
                      Family Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold">
                      Phone No.<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="massage" className="text-sm font-semibold">
                      Write your Message here
                    </label>
                    <textarea
                      id="massage"
                      name="massage"
                      value={massage}
                      onChange={(e) => setMassage(e.target.value)}
                      className="input-field"
                    ></textarea>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600 transition duration-300">
                  Submit!
                </button>
              </form>
            </div>
            <div className="side-content">
              <h2 className="text-2xl font-bold">You Can Visit Us Here!</h2>
              <p></p>
              <br />
              <h2 className="text-2xl font-bold">Contact Us Here...</h2>
              <span className="text-lime-700">faRashin1@gmail.com</span>
              <br />
              <span className="text-lime-700">+98 911 235 78</span>
              <br />
              <div className="icon">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <i className="fab fa-twitter text-lime-400 hover:text-blue-600 transition duration-300"></i>
                  <i className="fab fa-instagram text-lime-400 hover:text-blue-600 transition duration-300"></i>
                  <i className="fab fa-facebook-f text-lime-400 hover:text-blue-600 transition duration-300"></i>
                  <i className="fab fa-yahoo text-lime-400 hover:text-blue-600 transition duration-300"></i>
                  <i className="fab fa-linkedin-in text-lime-400 hover:text-blue-600 transition duration-300"></i>
                  <i className="fab fa-youtube text-lime-400 hover:text-blue-600 transition duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="data-show py-8">
        {allValue.map((currentValue, index) => {
          const { fname, lname, phone, massage, email } = currentValue;
          return (
            <div key={index} className="sing-box bg-white rounded-lg shadow-md p-4 mb-4">
              <h1 className="text-xl font-semibold text-green-500">Send Successfully</h1>
              <h3 className="text-lg">
                First Name:
                <p className="text-lime-500">{fname}</p>
              </h3>
              <h3 className="text-lg">
                Family Name:
                <p className="text-lime-500">{lname}</p>
              </h3>
              <h3 className="text-lg">
                Email:
                <p className="text-lime-500">{email}</p>
              </h3>
              <h3 className="text-lg">
                Phone No.:
                <p className="text-lime-500">{phone}</p>
              </h3>
              <h3 className="text-lg">
                Your Message:
                <p className="text-blue-500">{massage}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ContactForm;
