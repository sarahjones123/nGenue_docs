---
hide: toc
---

# EDI transactions error handling and resolution  

The application provides visibility into both **successful** and **failed EDI transactions** by sending automated email notifications.  
For any failed transactions, the cause of failure can be reviewed in the **Task manager** and in the **EDI session history** under **EDI schedules**. This ensures that users can quickly identify and address issues to maintain smooth data exchange with utilities.


## Review and address EDI errors

1. When a utility rejects a transaction after submission, the rejection is logged in both **Task manager** and **Session history**, along with the failure reason.  
2. Review the rejection details, then update the relevant fields or configurations in the appropriate screen.
3. EDI will automatically re-attempts unsuccessful transactions at the scheduled time using the same outbound and inbound process. If the errors are corrected, the transaction will process successfully.  
4. For invoice-related issues:
    1. Go to **Pending EDI transactions** screen.
    2. Apply filters to select the **Transaction type**, then click **Load** to display relevant records.
    3. Review the **Task description** and **Task notes** to identify the required corrections.
    4. Make the necessary updates in the appropriate screen.
    5. Return to **Pending EDI transactions** and reload the file, select the **task** and click **Reprocess**.
    6. In the notification menu, click **OK**.
    7. The file will be reprocessed and logged into the **EDI schedule**, and removed from the **Pending transactions list**.

## Best practices for EDI error handling

- Regularly monitor **Task manager** and **EDI session history** to address issues proactively.  
- Correct all data and configuration issues before reprocessing to avoid repeated failures.  
- Use the rejection reason codes provided by the utility as a guide for making targeted corrections.  
- Maintain a history of resolved errors for audit and training purposes.

---