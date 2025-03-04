import React, { useState } from "react";
import {
  Beaker,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <div className="h-1 w-20 bg-fuchsia-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Have questions about our club? Want to collaborate on a project?
            We'd love to hear from you! Fill out the form below or reach out
            directly.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="md:col-span-2 bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-600 bg-opacity-20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">
                    43 Route Sidi M'barek
                    <br />
                    El Achour 16104
                    <br />
                    Esst
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-600 bg-opacity-20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">
                    <a
                      href="mailto:contact@MolecularMinds.edu"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      contact@MolecularMinds.edu
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-600 bg-opacity-20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-fuchsia-600 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-600 bg-opacity-20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Meeting Hours</h3>
                  <p className="text-gray-300">
                    Every Friday at 5:00 PM
                    <br />
                    Open Lab: Tuesday & Thursday 2-5 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/molecularminds.club/"
                  target="_blank"
                  className="bg-gray-700 hover:bg-fuchsia-600 p-3 rounded-full transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-fuchsia-600 bg-opacity-20 p-4 rounded-full inline-flex mb-6">
                  <svg
                    className="h-12 w-12 text-fuchsia-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Your message has been sent successfully. We'll get back to you
                  soon!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-600 text-white rounded-lg transition-colors"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.subject ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 bg-gray-700 border ${
                        errors.message ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex justify-center items-center px-6 py-3 ${
                        isSubmitting
                          ? "bg-gray-600"
                          : "bg-fuchsia-600 hover:bg-fuchsia-600"
                      } text-white rounded-lg transition-colors`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-6 mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MolecularMinds. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
