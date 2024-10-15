import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3165e560-54c5-433c-a507-d36c109299c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form successfully submited! Thank You");
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-[length:90%_auto] bg-center dark:text-white dark:bg-darkTheme"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto mt-10 mb-8 gap-6">
          <input
            name="name"
            required
            autoComplete="name"
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md dark:text-white dark:bg-darkTheme"
          />
          <input
            name="email"
            required
            autoComplete="email"
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md dark:text-white dark:bg-darkTheme"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your msg"
          className="w-full p-5 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 dark:text-white dark:bg-darkTheme"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between bg-black/70 text-white rounded-full mx-auto gap-2 hover:bg-black duration-500 font-ovo dark:border"
        >
          Submit Now <IoIosArrowRoundForward />
        </button>
      </form>
    </div>
  );
};

export default Contact;
