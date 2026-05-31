import { GoogleGenAI } from '@google/genai';
import OpenAI from 'openai';
import { ENV } from '../../config/env.js';
import AppError from '../../utils/AppError.js';

class AIProvider {
  constructor() {
    this.provider = ENV.AI_PROVIDER;

    if (this.provider === 'gemini') {
      this.ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });
    } else if (this.provider === 'openai') {
      this.ai = new OpenAI({ apiKey: ENV.OPENAI_API_KEY });
    } else if (this.provider === 'grok') {
      this.ai = new OpenAI({ apiKey: ENV.XAI_API_KEY, baseURL: 'https://api.x.ai/v1' });
    }
  }

  async generateImage(prompt) {
    if (this.provider === 'gemini') {
      throw new AppError('Image generation not natively supported by the standard gemini text api here. Use OpenAI for DALL-E or another provider.', 400);
    } else if (this.provider === 'openai' || this.provider === 'grok') {
       // Assuming grok might support image generation or just fallback to openai structure
       // Note: grok currently might not support image gen, this is a placeholder
       try {
           const response = await this.ai.images.generate({
               model: "dall-e-3",
               prompt: prompt,
               n: 1,
               size: "1024x1024",
               response_format: 'b64_json'
           });
           return `data:image/png;base64,${response.data[0].b64_json}`;
       } catch (error) {
           throw new AppError(`AI Image Generation failed: ${error.message}`, 500);
       }
    }
    throw new AppError('Provider not supported for image generation', 400);
  }

  async generateText(prompt) {
    try {
      if (this.provider === 'gemini') {
          const response = await this.ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
          });
          return response.text;
      } else if (this.provider === 'openai' || this.provider === 'grok') {
          const model = this.provider === 'grok' ? 'grok-beta' : 'gpt-4o-mini';
          const completion = await this.ai.chat.completions.create({
              model: model,
              messages: [{ role: "user", content: prompt }],
          });
          return completion.choices[0].message.content;
      }
    } catch (error) {
        throw new AppError(`AI Text Generation failed: ${error.message}`, 500);
    }
  }

  async generateBlog(topic) {
      return this.generateText(`Write a comprehensive blog post about: ${topic}. Format it in markdown with headings and paragraphs.`);
  }

  async rewriteContent(content) {
      return this.generateText(`Rewrite the following content to make it more professional and engaging:\n\n${content}`);
  }

  async summarizeText(text) {
      return this.generateText(`Summarize the following text concisely:\n\n${text}`);
  }

  async generateTitle(topic) {
      return this.generateText(`Generate 5 catchy and SEO-friendly titles for an article about: ${topic}`);
  }

  async generateSEOKeywords(topic) {
      return this.generateText(`Generate a comma-separated list of 15 high-ranking SEO keywords for: ${topic}`);
  }
}

export default new AIProvider();
