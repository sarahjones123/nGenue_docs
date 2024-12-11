# nGenue installation and initial setup

This guide provides step-by-step instructions for installing the nGenue Desktop Application, configuring it with the nGenue database, and starting the application.

## Prerequisites

Before starting the installation, ensure the following:

- **SQL server:** Installed and accessible.

- **nGenue database Files:** Backup or scripts provided by the nGenue team.
- **nGenue application installer:** The latest version of the installer.
- **System requirements:**

    - **Operating system:** Windows 10 or later
    - **RAM:** Minimum 8 GB
    - **Disk space:** At least 20 GB free
    - .NET Framework 4.8 or higher installed

## SQL server database installation

1. **Install SQL server:**
    1. Download the SQL server installer from [Microsoft's website](https://www.microsoft.com/sql-server).
    - Run the installer and follow these steps:
        1. Choose **New SQL server stand-alone installation**.
        - Configure **Server Type** as database engine.
        - Set up an authentication method (Windows authentication is recommended).
        - Complete the installation process.

2. **Create nGenue database:**
    1. Open SQL Server Management Studio (SSMS).
    - Connect to your SQL server instance.
    - Right-click **Databases** in the object explorer and select **Restore database**.
    - Use the provided database backup file (`database.bak`) to restore the database.
    - Verify the database is listed under **Databases**.

## Configuring nGenue application with nGenue database

1. **Configure database connection:**
    - Navigate to the installation folder of the nGenue application.
    - Open the `config.json` or `appsettings.json` file (or a similar configuration file).
    - Update the database connection string with your SQL server details:
     ```json
     {
       "ConnectionString": "Server=YOUR_SERVER_NAME;Database=nGenue;User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;"
     }
     ```
    - Save the file and close the editor.

3. **Verify configuration:**
    - Open a command prompt.
    - Navigate to the nGenue installation directory and run:
        ```cmd
        ngenue.exe --verify-config
        ```
    - Ensure the output confirms a successful connection to the database.

## Starting the nGenue application

1. Navigate to the installation directory and run `ngenue.exe`.

2. Log in using your credentials

3. Explore the application and ensure all features are working as expected.

## Troubleshooting

### Common Issues

1. **Database Connection failure:**

    - Verify the `config.json` or `appsettings.json` file for correct connection details.
    - Ensure the SQL Server is running and accessible.

2. **Missing dependencies:**

    - Ensure the .NET Framework 4.8 or higher is installed.
    - Check for missing DLLs and reinstall the application if necessary.

3. **Application crashes:**

    - Check the `logs` folder in the application directory for error messages.
    - Contact nGenue support with the log file for assistance.

For additional help, contact the nGenue support team at **support@ngenue.com**.
