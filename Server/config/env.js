import { z } from 'zod';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define schema for environment variables
const envSchema = z.object({
  PORT: z.string().default('5000'),
  MONGODB_URI: z.string().url('MONGODB_URI must be a valid URL'),
  JWT_SECRET: z.string().min(8, 'JWT_SECRET must be at least 8 characters long'),
  AI_PROVIDER: z.enum(['gemini', 'grok', 'openai']).default('gemini'),
  GEMINI_API_KEY: z.string().optional(),
  XAI_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
}).refine(
  (data) => {
    if (data.AI_PROVIDER === 'gemini') return !!data.GEMINI_API_KEY;
    if (data.AI_PROVIDER === 'grok') return !!data.XAI_API_KEY;
    if (data.AI_PROVIDER === 'openai') return !!data.OPENAI_API_KEY;
    return true;
  },
  {
    message: 'API key for the selected AI_PROVIDER is required',
    path: ['AI_PROVIDER'],
  }
);

// Validate and parse environment variables
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:');
  _env.error.issues.forEach((issue) => {
    console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
  });
  process.exit(1);
}

export const ENV = _env.data;
