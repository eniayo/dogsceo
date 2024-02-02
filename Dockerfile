# Stage 1: Build Stage
FROM node:14 as build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Stage 2: Production Stage
FROM nginx:alpine as production-stage

# Copy the built assets from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy additional configuration files
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY fastcgi-php.conf /etc/nginx/snippets/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
 
