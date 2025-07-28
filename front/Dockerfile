# Use a Node.js image to build the Angular application
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
# Use --configuration production for optimized build
RUN npm run build -- --configuration production

# Use a lightweight Nginx image to serve the built Angular application
FROM nginx:alpine

# Copy the Nginx default configuration
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular application to the Nginx html directory
COPY --from=build /app/dist/l2cc/browser /usr/share/nginx/html

# Expose port 80 (default HTTP port for Nginx)
EXPOSE 8080
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
