import { z } from 'zod';

export const generateImageSchema = z.object({
  body: z.object({
    prompt: z.string().min(3, 'Prompt must be at least 3 characters long').max(1000),
  }),
});

// Examples for future AI endpoints
export const generateTextSchema = z.object({
  body: z.object({
    prompt: z.string().min(3, 'Prompt is required').max(2000),
  }),
});
