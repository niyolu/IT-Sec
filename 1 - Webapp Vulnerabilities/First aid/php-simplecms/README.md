# SimpleCMS

## General

The MySQL user is root
The MySQL user password is "" (empty)

Do not touch the `mariadb-data` folder if you run the project in a development container, as Docker uses this folder to store the data from the database.


## Running in a container

This template supports development containers.
This means, all dependencies and required applications are set up automatically and run inside one or more container(s) instead of directly on your machine.
In this case, two containers are created and started: the development container and a container for the MariaDB database.
Visual Studio Codes natively supports development containers.

As a requirement, you need:

- Docker (e.g., Docker Desktop on Windows and macOS or only docker on Linux-based distributions) - **Not needed if you use the IT Security Lab infrastructure**
- Visual Studio Code
- The "Remote Development" extension in VS Code (Docker in all cases and additionally SSH if you use the IT Security Lab infrastructure)

Just open the downloaded template as a folder in VS Code (so that the .devcontainer folder is directly inside the opened folder) and follow the recommendation to open the workspace in a container.
In case you missed the recommendation, open the command palette (F1) and type "Open Folder in Container" and choose the first suggestion.

First steps (run all commands in the container, i.e., in the VS Code terminal):

- Create a database (e.g., "ponyfarm")
  - Connect to the MariaDB server: `mariadb -h db -u root`
  - Create the database: `CREATE DATABASE ponyfarm;`
- Start the Apache web server:
  - Run the command `apache2ctl start`
  - Apache2 automatically makes the simplecms folder available in Apache
  - VS Code should automatically forward the web server on the container to your machine (usually port 8080. If it does not work, look it up in VS Code)
  - You can access your website on `localhost:8080` (or another port as mentioned above)


## Running on the VM

About the virtual machine:

The user for the virtual machine is lucky
The password for the user lucky is luke

The virtual machine uses DHCP
You can find out its address by typing "ip addr" on the command line

The web directory /var/www contains a simple content management system without user management but with a database connection

The Apache web server and the PHP interpreter as well as the database should be up and running
The SSH server should also be up and running
