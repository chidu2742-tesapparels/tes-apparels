"use client";

import { useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateName,
  validateCompany,
  validateMessage,
} from "@/app/lib/validation";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  product: string;
  quantity: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  mobile: "",
  city: "",
  state: "",
  product: "",
  quantity: "",
  message: "",
};

const products = [
  "Corporate T-Shirts",
  "Sports Jerseys",
  "Polo T-Shirts",
  "Uniforms",
  "Promotional Apparel",
  "Custom Apparel",
  "Other",
];

const quantities = [
  "50 - 100 Pieces",
  "100 - 500 Pieces",
  "500 - 1000 Pieces",
  "1000 - 5000 Pieces",
  "5000+ Pieces",
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validateField = (
    name: keyof FormData,
    value: string
  ): string => {
    switch (name) {

      case "fullName":
        return validateName(value)
        
      case "companyName":
        return validateCompany(value)
      
      case "email":
        return validateEmail(value)
       
      case "mobile":
  return validatePhone(value);

  case "message":
      return validateMessage(value);

      case "city":
        return value.trim().length >= 2
          ? ""
          : "City is required";

      case "state":
        return value.trim().length >= 2
          ? ""
          : "State is required";

      case "product":
        return value
          ? ""
          : "Please select a product";

      case "quantity":
        return value
          ? ""
          : "Please select quantity";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    const field = name as keyof FormData;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };


  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const field = e.target.name as keyof FormData;

    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };


  const validateForm = () => {
    const newErrors: Errors = {};

    Object.keys(form).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, form[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const submitForm = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      setReferenceId(data.referenceId);
      setSuccess(true);

      setForm(initialForm);
      setTouched({});
      setErrors({});

    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit enquiry"
      );
    } finally {
      setLoading(false);
    }
  };


  const inputClass = (
    field: keyof FormData
  ) => {
    const hasError =
      touched[field] && errors[field];

    const valid =
      touched[field] &&
      !errors[field] &&
      form[field];

    return `
      w-full rounded-lg border px-4 py-3
      outline-none transition
      ${
        hasError
          ? "border-red-500 bg-red-50"
          : valid
          ? "border-green-500 bg-green-50"
          : "border-gray-300"
      }
      focus:ring-2 focus:ring-[#C49A00]
    `;
  };


  return (
    <section
      id="contact"
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-5">

        <div className="mb-10 text-center">

          <h2
            className="text-4xl font-bold"
            style={{
              color: "#0B2341",
            }}
          >
            Get Your Apparel Quote
          </h2>

          <p className="mt-3 text-gray-600">
            Partner with TES Apparels for
            premium corporate and sports apparel
            manufacturing.
          </p>

        </div>


        <form
          onSubmit={submitForm}
          className="
            rounded-2xl border
            bg-white p-8 shadow-xl
          "
        >

          <div className="grid gap-6 md:grid-cols-2">

            {[
              {
                name: "fullName",
                label: "Full Name",
                type: "text",
              },
              {
                name: "companyName",
                label: "Company Name",
                type: "text",
              },
              {
                name: "email",
                label: "Business Email",
                type: "email",
              },
              {
                name: "mobile",
                label: "Mobile Number",
                type: "tel",
              },
              {
                name: "city",
                label: "City",
                type: "text",
              },
              {
                name: "state",
                label: "State",
                type: "text",
              },

            ].map((field) => {

              const key =
                field.name as keyof FormData;

              return (

                <div key={field.name}>

                  <label
                    className="mb-2 block font-medium"
                    style={{
                      color:"#0B2341",
                    }}
                  >
                    {field.label} *
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={form[key]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(key)}
                  />

                  {errors[key] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[key]}
                    </p>
                  )}

                </div>
              );

            })}



            <div>

              <label
                className="mb-2 block font-medium"
                style={{
                  color:"#0B2341",
                }}
              >
                Product Interested In *
              </label>

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("product")}
              >

                <option value="">
                  Select Product
                </option>

                {products.map((item)=>(
                  <option key={item}>
                    {item}
                  </option>
                ))}

              </select>

              {errors.product && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.product}
                </p>
              )}

            </div>



            <div>

              <label
                className="mb-2 block font-medium"
                style={{
                  color:"#0B2341",
                }}
              >
                Estimated Quantity *
              </label>

              <select
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("quantity")}
              >

                <option value="">
                  Select Quantity
                </option>

                {quantities.map((item)=>(
                  <option key={item}>
                    {item}
                  </option>
                ))}

              </select>

              {errors.quantity && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.quantity}
                </p>
              )}

            </div>


          </div>


          <div className="mt-6">

            <label
              className="mb-2 block font-medium"
              style={{
                color:"#0B2341",
              }}
            >
              Message *
            </label>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("message")}
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}

          </div>



          <button
            disabled={loading}
            className="
              mt-8 flex w-full
              items-center justify-center
              rounded-lg py-4
              font-semibold text-white
              transition
              disabled:opacity-70
            "
            style={{
              background:"#0B2341",
            }}
          >

            {loading ? (
              <>
                <span
                  className="
                    mr-3 h-5 w-5
                    animate-spin rounded-full
                    border-2 border-white
                    border-t-transparent
                  "
                />
                Sending...
              </>
            ) : (
              "Submit Enquiry"
            )}

          </button>


        </form>

      </div>


      {success && (

        <div
          className="
            fixed inset-0
            flex items-center justify-center
            bg-black/50 px-5
          "
        >

          <div
            className="
              max-w-md rounded-2xl
              bg-white p-8 text-center
              shadow-2xl
            "
          >

            <h3
              className="text-2xl font-bold"
              style={{
                color:"#0B2341",
              }}
            >
              Thank You!
            </h3>

            <p className="mt-3 text-gray-600">
              Your enquiry has been received.
            </p>

            <p className="mt-4 font-semibold">
              Reference ID:
            </p>

            <p
              className="mt-1 text-lg font-bold"
              style={{
                color:"#C49A00",
              }}
            >
              {referenceId}
            </p>


            <button
              onClick={()=>setSuccess(false)}
              className="
                mt-6 rounded-lg
                px-6 py-3
                text-white
              "
              style={{
                background:"#0B2341",
              }}
            >
              Close
            </button>


          </div>

        </div>

      )}

    </section>
  );
}