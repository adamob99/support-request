import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { saveFormData } from "../redux/slices/supportRequestSlice";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  issueType: z.string().min(1, "Issue Type is required"),
  tags: z.array(z.string()).min(1, "Select at least one tag"),
  steps: z
    .array(
      z.object({
        description: z.string().min(1, "Step description is required"),
      })
    )
    .min(1, "At least one step is required"),
});

const SupportRequestForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      issueType: "",
      tags: [],
      steps: [{ description: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (data) => {
    dispatch(saveFormData(data));
    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <input {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Issue Type</label>
        <select {...register("issueType")}>
          <option value="">Select</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        {errors.issueType && <p>{errors.issueType.message}</p>}
      </div>

      <div>
        <label>Tags</label>
        <div className="checkbox-container">
          <label>
            <input type="checkbox" value="UI" {...register("tags")} />
            UI
          </label>
          <label>
            <input type="checkbox" value="Backend" {...register("tags")} />
            Backend
          </label>
          <label>
            <input type="checkbox" value="Performance" {...register("tags")} />
            Performance
          </label>
        </div>
        {errors.tags && <p className="error-message">{errors.tags.message}</p>}
      </div>

      <div>
        <label>Steps to Reproduce</label>
        {fields.map((field, index) => (
          <div key={field.id} style={{ display: "flex", gap: "10px" }}>
            <input
              placeholder="Describe step"
              {...register(`steps.${index}.description`)}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ description: "" })}>
          Add Step
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SupportRequestForm;
