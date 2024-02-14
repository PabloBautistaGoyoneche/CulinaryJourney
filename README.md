# Favorite Recipe Manager

This project consists of an API built with FastAPI that allows users to manage their favorite recipes. Users can register, log in, add recipes to their favorites, view their favorite recipes, and remove recipes from their favorites. The API uses JWT token-based authentication to secure routes that require authentication. User information and favorite recipes are stored in a MySQL database.

## 1. Clone the project
```bash
git clone https://github.com/PabloBautistaGoyoneche/CulinaryJourney
```

# 2. MySQL database:

**2.1 Installing MySQL on Windows:**
- Download the MySQL MSI installer from the official site: MySQL Community Downloads.
- Run the downloaded installer and follow the wizard instructions.
- During installation, you will be asked to set the MySQL root user password.
- Add the path of the MySQL binary directory to the system to the PATH environment variable to make it easier to use commands from the terminal.

**2.2 Installing MySQL on Linux:**


    # Update the package index
    sudo apt update
    
    # Install MySQL server
    sudo apt install mysql-server
    
    # Start the MySQL service
    sudo service mysql start
    
    # Set the MySQL root user password
     sudo mysql_secure_installation


**2.3 Installing MySQL on MacOS:**

- Install Homebrew if you don't have it already:


    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        # Install MySQL with Homebrew:
        brew install mysql
        
        # Start the MySQL service
        brew services start mysql
        
        # Set the MySQL root user password
        mysql_secure_installation


- These commands should give you a basic installation of MySQL on each operating system. Be sure to check out the official MySQL documentation for additional information on setting up and using MySQL Server: MySQL Documentation.

**2.4 Place the MySQL username and password in the "backend/.env" file for the application to function correctly.**

**2.5 Login to MySQL from terminal:**


        sudo mysql -u <Enter your username> -p
        Enter password: <Enter your password>
		
**2.6 View list of existing users in MySQL**

        mysql> SELECT user FROM mysql.user;

**2.7 User privileges**

        GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';

**2.8 To create the data base:**

- In the MySQL session in the terminal, Run these SQL commands from the file "backend/db_culinary_journey.sql"

```bash
mysql> SHOW TABLES;
____________________________
| Tables_in_culinary_journey |
|--------------------------|
| favorite_recipes         |
| users               |
|__________________________|
```

## 3. Navegar al directorio

```bash
    CulinaryJourney/backend
```

## 4. Instalar dependencias
```bash
    pip install -r requirements.txt
```

## 5. Navegar al directorio
```bash
    CulinaryJourney/backend/app
```

## 6. Ejecutar el comando
```bash
    uvicorn main:app --reload
```



