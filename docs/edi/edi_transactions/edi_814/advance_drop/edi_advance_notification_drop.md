---
hide: toc
---

# Understanding Advance notification drop (814) request

The **Advance notification drop (814) request** is an inbound transaction sent by a utility to the **nGenue** application to schedule a future service termination. This process logs the pending drop in advance of the effective termination date.

To raise an advance notification drop request, you must have the following information:

- **A valid account number**: This ensures the request is linked to the correct customer account.
- **Drop request date**: The date on which the service should be discontinued.
- **Future termination date** (if applicable): If the drop is scheduled for a future period, provide the exact termination date to allow proper scheduling and notification to all relevant parties.

## Process workflow

1. **File reception and initial handling**
    1. Once a utility sends an advance notification file, the **nGenue** application receives and decrypts the inbound file. 
    2. The application performs initial validation, and the **acknowledgment (997 response)** will be sent to utility's FTP.
    3. EDI service retrieves the decrypted file and upon processing, file is then moved to designated inbound path.  

2. **File processing** 
    1. The system retrieves file from FTP site. 
    2. The file will be decrypted and validated as per utility requirements.
    3. Upon successful file processing, it is moved to **archive**. 

3. **Process outcome**

    1. If the advance notification drop request is successful: 

        - Future drop confirmation and provided cancellation date will be displayed in **Activity log**.
        - Transaction details can be found in the **EDI session history** of **Import** tab. 
        - Facility status will be updated to **Terminated** on effective date.
        
    2. If the request is rejected: 

        - Rejection details will be recorded in **Activity log**.
        - Creates review **task**.
        - Files will be archived for audit purpose.

        !!!note "Note"

            - All processed files are automatically archived for record-keeping.
            - Rejected transactions require manual review and corrective action before reprocessing.
            - Effective date updates are applied during scheduled daily service runs.

--- 