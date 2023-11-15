# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to /app
COPY . .

# Build the application
# RUN npm --verbose install
# RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD npm run dev
