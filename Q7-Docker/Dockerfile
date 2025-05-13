# Use official nginx image
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy custom content
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80