import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  consultationDate: z.string().min(1, "Please give a date"),
  destination: z.string().min(1, "Destination is required"),
  duration: z.string().min(1, "Duration is required"),
  message: z.string().optional(),
});
