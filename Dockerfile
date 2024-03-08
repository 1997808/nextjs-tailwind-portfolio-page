# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Next.js application for production
# RUN npm run build

# Expose the application port (assuming your app runs on port 3000)
EXPOSE 3000

ENV NODE_OPTIONS=--max_old_space_size=1024

# Start the application
CMD ["npm", "run dev"]