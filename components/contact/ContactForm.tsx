"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  productCategory: "",
  estimatedQuantity: "",
  fabricDetails: "",
  targetPrice: "",
  targetBudget: "",
  brandingRequirements: "",
  message: "",
});

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");

      setFormData({
       fullName: "",
       companyName: "",
       email: "",
       phone: "",
       productCategory: "",
       estimatedQuantity: "",
       fabricDetails: "",
       targetPrice: "",
       targetBudget: "",
       brandingRequirements: "",
       message: "",
    });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
    id="quote-form"
    className="rounded-3xl border border-zinc-800 bg-[#1A1A1A] p-10">
      <h3 className="text-3xl font-bold text-white">
        Request a Quote
      </h3>

      <p className="mt-4 text-zinc-400">
        Tell us about your project and we'll get back to you with a customized quotation.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <select
  name="productCategory"
  value={formData.productCategory}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      productCategory: e.target.value,
    }))
  }
  className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
>
       <option value="">Select Product Category</option>
        <option>T-Shirts</option>
        <option>Polo Shirts</option>
        <option>Hoodies</option>
        <option>Shorts</option>
        <option>Tracksuits</option>
        <option>Tank Tops</option>
        <option>Women's Activewear</option>
        <option>Racing Wear</option>
        <option>Leather Jackets</option>
        <option>Sports Jerseys</option>
        <option>Other</option>
         </select>

          <input
            type="text"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            placeholder="Estimated Quantity"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>
          <div className="space-y-6">

  <input
    type="text"
    name="fabricDetails"
    value={formData.fabricDetails}
    onChange={handleChange}
    placeholder="Fabric Details (e.g. 100% Cotton, 280 GSM)"
    className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
  />

  <input
    type="text"
    name="targetPrice"
    value={formData.targetPrice}
    onChange={handleChange}
    placeholder="Target Price per Piece (Optional)"
    className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
  />

  <input
    type="text"
    name="targetBudget"
    value={formData.targetBudget}
    onChange={handleChange}
    placeholder="Target Budget (Optional)"
    className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
  />

  <input
    type="text"
    name="brandingRequirements"
    value={formData.brandingRequirements}
    onChange={handleChange}
    placeholder="Printing / Branding Requirements"
    className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
  />

    </div>
    
      
        <textarea
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional Requirements (sizes, colors, packaging, labels, shipping destination, delivery timeline, etc.)"
          required
          className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#00C853] py-4 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-[#00E676] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Request a Quote"}
        </button>

        {status === "success" && (
          <p className="text-center font-medium text-green-400">
            ✅ Your quote request has been sent successfully. We'll contact you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-center font-medium text-red-400">
            ❌ Something went wrong. Please try again.
          </p>
        )}

      </form>
    </div>
  );
}