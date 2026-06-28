import { z } from "zod";

export const chatSchema = z.object({
  message: z.string().trim().min(1, "Message is required"),
});

export type ChatSchema = z.infer<typeof chatSchema>;
