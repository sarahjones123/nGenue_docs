# Electronic Data Interchange (EDI) configuration and testing

This document outlines the steps required for installing the EDI application locally, configuring necessary settings, and executing SQL queries to monitor and manage EDI schedules. The goal is to ensure smooth operation and testing of EDI processes.

## Process details

### 1. Installation steps

To install the EDI executable, download the shared EDI executable.

1. **Download the EDI executable:**
   - Obtain the `EDI.exe` file.

2. **Run the installer:**
   - Double-click the `EDI.exe` file.
   - Click **Next** to proceed through the installation prompts.
   - Click **Finish** once the installation is complete.

3. **Verify installation:**
   - Navigate to `C:\\Program Files\\nGenueLLC`.
   - Confirm that the EDI application files are present.


### 2. EDI configuration

Once the solution is installed, open the installed EDI solution.

1. **Update configuration settings:**
   - Find and open the `EDI.Service.exe` file.
   - Update the following settings:
     - **Data source**: specify the database connection string.
     - **Database**: enter the correct database name.
     - **Email ID**: provide the email address for notifications.
     - **Time interval**: adjust according to the expected import/export request frequency and file size.
   - Save the changes.

### 3. SQL database management

To monitor and configure EDI schedules, execute the following SQL queries:

1. **View EDI schedules:**
   ```
   SELECT * FROM EDI_SCHEDULES WHERE EDI_TYPE_ID = xxxx;
   ```

2. **View EDI Configuration:**

```
SELECT * FROM EDI_LDC_CONFIGURATIONS WHERE EDI_TYPE_ID = xxxx;
```

3. **EDI_SCHEDULES Table Structure:**

The EDI_SCHEDULES  table contains the following columns:

* ID: Unique identifier.
* EDI_TYPE_ID: Identifier for the EDI type.
* LDC_ID: Identifier for the LDC.
* SCHEDULED_TYPE: Type of schedule.
* START_DATE: Date processing starts.
* START_TIME: Time processing starts.
* STATUS: Current status of the job.
* LAST_EXECUTED_ON: Last execution timestamp.
* NEXT_EXECUTION_DATE: Upcoming execution date.
* IS_ACTIVE: Indicates if the schedule is active (1 for active, 0 for inactive).
* INTERVAL: Frequency of execution.
* END_TIME: Time processing ends.

!!!note "Configuration guidelines"
    1. Ensure that the IS_ACTIVE column for the relevant EDI_TYPE_ID is set to 1. All other EDI schedules should have this column set to 0.
    1. For every new service request, the NEXT_EXECUTION_DATE should be set to NULL.
    1. Use the START_TIME and END_TIME columns to denote the processing window.


## File processing

File processing happens in different folders for import processes, and export files will be generated in the specified path.


### Import process

- Place the files in the source root path based on the EDI type.
- Once the file is placed, it will get auto-processed.
- The first time the process is executed, an `Archive` folder is created automatically.
- After successful processing, the file moves to the `Archive` folder.
- If the file fails due to an exception, it will not move to the `Archive` folder. This indicates that the user needs to review the file.

### Export process:

- Based on the EDI action triggered from the UI, the file will be exported to the specified source root path.

### Running the service

1. Start the EDI service to process import and export actions.
1. For imports, the service automatically picks up files from the specified paths.
1. For exports, the service generates output based on the UI action.

## Logs and Monitoring

To review processing logs, execute the following query:

`SELECT * FROM EDI_SCHEDULE_LOGS ORDER BY 1 DESC;`

This query will return a log of all EDI schedule executions, including:

- **EDI_SCHEDULE_LOG_ID**: Unique log identifier.
- **EDI_SCHEDULE_ID**: Corresponding schedule ID.
- **EDI_TYPE_ID**: Type identifier.
- **LDC_ID**: Identifier for the LDC.
- **TYPE**: Type of execution.
- **DESCRIPTION**: Description of the log entry.
- **EXECUTED_DATE**: Timestamp of execution.
- **EVENT_TYPE**: Type of event (e.g., error, success).

## Summary

This document provides a structured approach for setting up, configuring, and monitoring EDI testing locally.  
By following these steps and utilizing the provided SQL queries, the team can effectively manage EDI operations and ensure successful import and export processes.
