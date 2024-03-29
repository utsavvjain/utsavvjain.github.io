import React from "react";
import { user } from "../data";
import Toast from "./Toast";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Contact() {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [processing, setProcessing] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [toastBoldMessage, setToastBoldMessage] = React.useState("");
  const [toastMessage, setToastMessage] = React.useState("");

  const onNameChange = (ev) => {
    setName(ev.target.value);
    setNameError("");
  };
  const onEmailChange = (ev) => {
    setEmail(ev.target.value);
    setEmailError("");
  };
  const onMessageChange = (ev) => {
    setMessage(ev.target.value);
    setMessageError("");
  };
  const clearContactForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  };
  const submitContactForm = () => {
    setProcessing(true);
    let valid = true;
    if (name.trim().length == 0) {
      setNameError("Please enter name");
      valid = false;
    }
    if (email.trim().length == 0) {
      setEmailError("Please enter email");
      valid = false;
    } else if (/\S+@\S+\.\S+/.test(email) == false) {
      setEmailError("Please enter valid email");
      valid = false;
    }
    if (message.trim().length == 0) {
      setMessageError("Please enter message");
      valid = false;
    }
    if (!valid) {
      setProcessing(false);
      return;
    }
    let contact = {
      name: name,
      email: email,
      message: message,
    };
    fetch(
      "https://8omaieid99.execute-api.ap-south-1.amazonaws.com/Prod/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(contact),
      }
    ).then((response) => {
      setProcessing(false);
      setShowToast(true);
      setToastBoldMessage("SUCCESS!");
      setToastMessage("Thank you for being in touch");
      clearContactForm();
    });
  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d916.9664038653974!2d75.8025773711635!3d23.175104328860243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1643032924593!5m2!1sen!2sin"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">{user.address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href={"mailto: " + user.mail}
              >
                {user.mail}
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{user.contactNumber}</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Lets Connect
          </h2>
          <p className="leading-relaxed mb-5"></p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              value={name}
              onChange={onNameChange}
              type="text"
              id="name"
              name="name"
              className={classNames(
                nameError.length == 0
                  ? "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : "w-full bg-gray-800 rounded border border-red-700 focus:border-red-600 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              )}
            />
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {nameError}
            </span>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              value={email}
              onChange={onEmailChange}
              type="email"
              id="email"
              name="email"
              className={classNames(
                emailError.length == 0
                  ? "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : "w-full bg-gray-800 rounded border border-red-700 focus:border-red-600 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              )}
            />
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {emailError}
            </span>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={onMessageChange}
              id="message"
              name="message"
              className={
                classNames(messageError.length == 0)
                  ? " w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  : "w-full bg-gray-800 rounded border border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              }
            />
            <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {messageError}
            </span>
          </div>
          <button
            type="button"
            onClick={submitContactForm}
            className={classNames(
              processing
                ? "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg   disabled:bg-indigo-400 disabled:cursor-not-allowed flex"
                : "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-indigo-400 disabled:cursor-not-allowed "
            )}
            disabled={processing}
          >
            {processing && (
              <div class="animate-spin rounded-full h-8 w-8 border-b-4 border-white-900 ml-auto mr-4"></div>
            )}
            <span class="mr-auto">Submit</span>
          </button>
        </form>
      </div>
      <Toast
        open={showToast}
        setShowToast={setShowToast}
        severity="success"
        boldMessage={toastBoldMessage}
        message={toastMessage}
        duration={3000}
      />
    </section>
  );
}
