import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example validation (you can replace with actual API call)
    const form = e.target as HTMLFormElement;
    const name = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;
    const msg = (form.elements[2] as HTMLTextAreaElement).value;

    if (!name || !email || !msg) {
      setStatus("error");
      setMessage("Please fill all fields!");
      return;
    }

    // Simulate successful submission
    setStatus("success");
    setMessage("Message sent successfully!");

    // Clear form fields
    form.reset();

    // If you have API, you can do fetch/axios here
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify({name,email,msg}) })
    //   .then(res => setStatus('success') / setMessage('Message sent successfully!'))
    //   .catch(err => setStatus('error') / setMessage('Something went wrong!'))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 m-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white rounded-lg p-2 hover:bg-purple-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 font-medium ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
