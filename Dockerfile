FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# remove all the dev dependencies
RUN rm -rf node_modules
# Serve the production version of the application with a static server
RUN npm install -g serve
WORKDIR /app/server
RUN npm install
WORKDIR /app

CMD ["sh", "-c", "node server/index.js & serve -s dist"]

# Expose port 3000 so that it can be accessed from the host
EXPOSE 3000
