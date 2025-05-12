# Use the official Python base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy the app files
COPY .. /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]