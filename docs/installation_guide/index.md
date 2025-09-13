---
hide: toc
---

# Installation guide

This guide serves as the master reference for installing the nGenue application in your environment. It outlines a step-by-step process starting from verifying that your system meets the necessary hardware and software requirements, to setting up essential backend components such as Microsoft SQL Server and restoring the application database. It also includes guidance on launching the nGenue application and performing critical post-installation tasks like configuring SQL Server Reporting Services (SSRS) for report generation.

Each section below contains detailed instructions to help you complete the installation successfully. Following the steps in the listed order ensures that dependencies are handled correctly and reduces the risk of errors during setup.

| Step category          | Description                                                                 | Link                                                                |
|------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------|
| **System requirements**| Provides detailed information about the operating system versions supported by nGenue, minimum hardware specifications, and third-party software dependencies such as .NET Framework or IIS. | [View system requirements](system_requirements.md)                  |
| **Install SQL Server** | Walks through the installation and basic configuration of Microsoft SQL Server, which serves as the core database engine for nGenue. This step includes setting up authentication modes, user roles, and enabling necessary services. | [Install Microsoft SQL Server](sql_server_installation.md)          |
| **Restore database**   | Explains how to restore the nGenue database from the latest backup file provided during deployment. This includes steps for using SQL Server Management Studio (SSMS), verifying the restore, and setting user permissions. | [Restore database backup](restore_database.md)                      |
| **Run nGenue application** | Covers how to start the nGenue application after all prerequisites are met. It also explains basic login, initial setup options, and how to confirm successful connectivity to the database. | [Run nGenue application](run_ngenue_application.md)                 |
| **SSRS configuration** | Describes how to configure SQL Server Reporting Services (SSRS) to work with nGenue's reporting features. This includes setting report URLs, permissions, and data source connections. | [Configure SSRS](./post_installation/ssrs_configure.md)             |

## Support
If you encounter any issues or need further assistance, contact the [nGenue support team.](mailto:support@ngenue.com)


<!-- # Installation steps

This document will help you set up the required components and get started with the nGenue application. Please follow each step carefully to ensure a smooth installation process.

1. **Install Microsoft SQL Server**  
   Follow the instructions to install Microsoft SQL Server, which is required to host the nGenue database.  
   👉 [Install Microsoft SQL Server](sql_server_installation.md)

2. **Restore a database backup**  
   Learn how to restore an existing nGenue database backup to your SQL Server instance.  
   👉 [Restore a database backup](restore_database.md)

3. **Run nGenue application**  
   Once the setup is complete, follow this guide to launch and start using the nGenue application.  
   👉 [Run nGenue application](run_ngenue_application.md)


!!!note "Note"
    Please make sure all prerequisites (hardware, OS version, and admin access) are in place before starting the installation.

If you encounter any issues or need further assistance, contact the [nGenue support team.](mailto:support@ngenue.com) -->
