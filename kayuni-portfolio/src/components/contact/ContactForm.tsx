"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      status: "submitting",
      message: "Sending your message...",
    });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          status: "idle",
          message: "",
        });
      }, 5000);
    }, 1500);
    
    // Actual implementation would use an API call:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   
    //   if (response.ok) {
    //     setFormStatus({
    //       status: "success",
    //       message: "Thank you! Your message has been sent successfully.",
    //     });
    //     setFormData({ name: "", email: "", subject: "", message: "" });
    //   } else {
    //     setFormStatus({
    //       status: "error",
    //       message: "Oops! Something went wrong. Please try again.",
    //     });
    //   }
    // } catch (error) {
    //   setFormStatus({
    //     status: "error",
    //     message: "Oops! Something went wrong. Please try again.",
    //   });
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={formStatus.status === "submitting"}
          className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 disabled:opacity-70 transition-colors"
        >
          {formStatus.status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
      
      {formStatus.message && (
        <div
          className={`p-4 rounded-lg ${
            formStatus.status === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : formStatus.status === "error"
              ? "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : "bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;