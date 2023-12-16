#!/bin/bash

# Stop docker containers
docker compose down

# Start docker containers
docker compose up --build