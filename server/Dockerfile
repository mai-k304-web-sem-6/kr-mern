# Backend Dockerfile
FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port that the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
