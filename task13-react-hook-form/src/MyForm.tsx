import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// Schema validation with Zod
const schema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .refine((val) => val.trim().length > 0, "First name cannot be empty"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .refine((val) => val.trim().length > 0, "Last name cannot be empty"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  contact: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^\d{10}$/, "Contact number must be 10 digits"),
  role: z.string().min(1, "Role is required"),
  skills: z
    .array(
      z
        .string()
        .min(1, "Skill is required")
        .refine((val) => val.trim().length > 0, "Skill cannot be empty")
    )
    .min(1, "At least one skill is required"),
  message: z.string().optional(),
});

export default function UserRegisterForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      role: "",
      skills: [""],
      message: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">User Register Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block font-medium">First Name</label>
          <input
            type="text"
            {...register("firstName")}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-medium">Last Name</label>
          <input
            type="text"
            {...register("lastName")}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block font-medium">Contact Number</label>
          <input
            type="text"
            {...register("contact")}
            className="w-full p-2 border rounded"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block font-medium">Role</label>
          <select {...register("role")} className="w-full p-2 border rounded">
            <option value="">Select role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium">Skills</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                type="text"
                {...register(`skills.${index}`)}
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
          <button
            type="button"
            onClick={() => append("")}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Add Skill
          </button>
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-semibold"
        >
          Register
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 border rounded bg-green-50">
          <h3 className="text-lg font-semibold text-green-700">
            ✅ Registration Successful!
          </h3>
          <pre className="mt-2 text-sm bg-gray-100 p-2 rounded">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
