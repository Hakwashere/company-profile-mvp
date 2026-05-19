"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  message: z.string().min(5, "Pesan terlalu pendek"),
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    setSuccess(false);
    setErrors({});

    const validation = contactSchema.safeParse({
      name,
      email,
      message,
    });

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });

      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          service,
          message,
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Failed to send message");
    } else {
      setSuccess(true);
      setErrors({});

      setName("");
      setEmail("");
      setService("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      {/* CARD */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 w-full max-w-md border border-gray-700 transition">

        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Us
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1 mb-4">{errors.name}</p>
        )}
        {!errors.name && <div className="mb-4" />}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1 mb-4">{errors.email}</p>
        )}
        {!errors.email && <div className="mb-4" />}

        {/* SERVICE */}
        <select
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="SEO Optimization">SEO Optimization</option>
        </select>

        {/* MESSAGE */}
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1 mb-4">{errors.message}</p>
        )}
        {!errors.message && <div className="mb-4" />}

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* SUCCESS */}
        {success && (
          <p className="text-green-400 text-center mt-4">
            Message sent successfully!
          </p>
        )}

        {/* PREVIEW */}
        <div className="mt-6 text-sm text-gray-300">
          <p>Halo, {name}</p>
          <p>Email: {email}</p>
          <p>Service: {service}</p>
          <p>Pesan: {message}</p>
        </div>

      </div>

    </div>
  );
}
