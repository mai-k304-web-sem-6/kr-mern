# Frontend Dockerfile
FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app for production
RUN npm run build

# Install a simple web server to serve static files
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 6000

# Command to run the app
CMD ["serve", "-s", "build"]
