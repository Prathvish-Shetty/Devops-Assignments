# ---------- STAGE 1: Build ----------
FROM node:20-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source
COPY . .

# ---------- STAGE 2: Production ----------
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy only the built app and production dependencies
COPY --from=build /usr/src/app .

# Expose port
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
