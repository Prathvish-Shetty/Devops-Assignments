#!/bin/bash

# Build Docker image
docker build -t prathvishs/q10 .

# Push to Docker Hub
docker push prathvishs/q10

# Apply Kubernetes configs
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Output service URL (for Minikube)
echo "Application is being deployed..."
minikube service auto-app-service
