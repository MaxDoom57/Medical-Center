import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9ac205f0-c41d-48a8-9e96-75c8073acac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="h-screen">
      <Navbar />

      {/* Main content area with background image and 50% opacity */}
      <div className="relative h-full bg-gradient-to-br from-stone-300 to-slate-300">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://i.ytimg.com/vi/YjBnFNXIAOk/maxresdefault.jpg')",
          }}
        ></div>

        <div className="relative flex items-center justify-center w-full min-h-screen md:mx-16 sm:mx-8">
          <div className="flex w-full max-w-6xl p-8 space-x-8 rounded-lg shadow-lg bg-white ring-1 ring-gray-300">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold tracking-wide text-gray-900">
                Contact Us
              </h1>
              <div className="space-y-4 ml-6">
                <div>
                  <p className="text-red-700 font-semibold">Medical support</p>
                  <p className="text-red-700">support@example.com</p>
                  <p className="text-red-700">+477-123-456</p>
                </div>
                <div>
                  <p className="text-red-700 font-semibold">Questions</p>
                  <p className="text-red-700">questions@example.com</p>
                  <p className="text-red-700">+477-123-456</p>
                </div>
                <div>
                  <p className="text-red-700 font-semibold">Medical report</p>
                  <p className="text-red-700">report@example.com</p>
                  <p className="text-red-700">+477-123-456</p>
                </div>
              </div>

              <div className="flex space-x-4 text-xl text-gray-900">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:text-blue-500"></i>
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github hover:text-gray-500"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook hover:text-blue-700"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram hover:text-pink-500"></i>
                </a>
              </div>
            </div>

            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl ring-1 ring-gray-300">
              <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-sm">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  required
                  className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="email" className="text-sm">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="message" className="text-sm">
                  Message:
                </label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <button className="self-end inline-block px-4 py-2 text-sm text-white bg-red-600 rounded-lg shadow-xl hover:bg-yellow-500 focus:outline-none">
                  Send Message
                </button>
              </form>
              <span className="text-red-600">{result}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
