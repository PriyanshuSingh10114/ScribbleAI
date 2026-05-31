FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production for better security/size in a real prod scenario, but we install all here to ensure it works)
RUN npm install

# Copy application files
COPY . .

# Expose port
EXPOSE 5000

# Add Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => {if (r.statusCode !== 200) throw new Error()})"

# Start command
CMD ["npm", "start"]
