# Based on https://github.com/devcontainers/templates/blob/main/src/php-mariadb/
FROM mcr.microsoft.com/devcontainers/javascript-node:18

WORKDIR app

# ADD script.sql .

# Install MariaDB client
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mariadb-client \ 
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

RUN mariadb --help

# # Create and populate MariaDB
# RUN mariadb -h db -u root < script.sql

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends nano vim net-tools iputils-ping
