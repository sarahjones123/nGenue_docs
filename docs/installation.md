# nGenue installation and initial setup

This guide provides step-by-step instructions for installing the nGenue Desktop Application, configuring it with the nGenue database, and starting the application.

## Prerequisites

Before starting the installation, ensure the following:

- **SQL Server:** Installed and accessible.

- **nGenue Database Files:** Backup or scripts provided by the nGenue team.
- **nGenue Application Installer:** The latest version of the installer.
- **System Requirements:**

    - **Operating System:** Windows 10 or later
    - **RAM:** Minimum 8 GB
    - **Disk Space:** At least 20 GB free
    - .NET Framework 4.8 or higher installed

## SQL Server Database Installation

1. **Install SQL Server:**
    1. Download the SQL Server installer from [Microsoft's website](https://www.microsoft.com/sql-server).
    - Run the installer and follow these steps:
        1. Choose **New SQL Server stand-alone installation**.
        - Configure **Server Type** as Database Engine.
        - Set up an authentication method (Windows Authentication is recommended).
        - Complete the installation process.

2. **Create nGenue Database:**
    1. Open SQL Server Management Studio (SSMS).
    - Connect to your SQL Server instance.
    - Right-click **Databases** in the Object Explorer and select **Restore Database**.
    - Use the provided database backup file (`nGenue.bak`) to restore the database.
    - Verify the database is listed under **Databases**.

## Configuring nGenue Application with nGenue Database

1. **Install the nGenue Application:**
    - Run the nGenue application installer (`nGenueInstaller.exe`).
    - Follow the installation wizard and choose the destination folder.

2. **Configure Database Connection:**
    - Navigate to the installation folder of the nGenue application.
    - Open the `config.json` or `appsettings.json` file (or a similar configuration file).
    - Update the database connection string with your SQL Server details:
     ```json
     {
       "ConnectionString": "Server=YOUR_SERVER_NAME;Database=nGenue;User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;"
     }
     ```
    - Save the file and close the editor.

3. **Verify Configuration:**
    - Open a command prompt.
    - Navigate to the nGenue installation directory and run:
        ```cmd
        ngenue.exe --verify-config
        ```
    - Ensure the output confirms a successful connection to the database.

## Starting the nGenue Application

1. Double-click the **nGenue Desktop Application** shortcut on your desktop or navigate to the installation directory and run `ngenue.exe`.

2. Log in using your credentials provided by the nGenue team.

3. Explore the application and ensure all features are working as expected.

## Troubleshooting

### Common Issues

1. **Database Connection Failure:**

    - Verify the `config.json` or `appsettings.json` file for correct connection details.
    - Ensure the SQL Server is running and accessible.

2. **Missing Dependencies:**

    - Ensure the .NET Framework 4.8 or higher is installed.
    - Check for missing DLLs and reinstall the application if necessary.

3. **Application Crashes:**

    - Check the `logs` folder in the application directory for error messages.
    - Contact nGenue support with the log file for assistance.

For additional help, contact the nGenue support team at **support@ngenue.com**.
