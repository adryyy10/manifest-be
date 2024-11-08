# Use the official Node.js LTS image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if using npm)
COPY package*.json ./

# If using yarn, replace the above line with:
# COPY yarn.lock package.json ./

# Install dependencies
RUN npm install
# If using yarn, replace with:
# RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3307

# Define the command to run the app
CMD ["npm", "start"]
# If you have a different start script, adjust accordingly
