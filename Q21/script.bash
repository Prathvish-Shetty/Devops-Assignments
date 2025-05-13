#!/bin/bash

URL="http://localhost:3000"

status=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$status" -eq 200 ]; then
  echo "App is UP"
else
  echo "App is DOWN (HTTP $status)"
fi