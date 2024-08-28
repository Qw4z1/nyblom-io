import React, { useState } from "react";
import { SignupResponse } from "../types/signup";

const InlineNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        const body = await response.json();
        if (body.success) {
          setIsSubmitted(true);
        } else {
          console.error("Subscription failed");
        }
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full">
        <div className="text-center p-4 bg-green-100 rounded">
          <h3 className="text-xl font-bold mb-2">Thank you for subscribing!</h3>
          <p>Check your email to confirm your subscription.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full sm:w-4/5 mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="p-2 border rounded flex-grow w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-yellow text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 w-full sm:w-auto"
      >
        Subscribe
      </button>
    </form>
  );
};

export default InlineNewsletterForm;
