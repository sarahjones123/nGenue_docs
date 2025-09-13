---
hide: toc
---

# Post change request configuration

Once a change request is submitted in the application, the system follows a structured sequence of actions to ensure that the request is transmitted to the utility, validated, and updated in the nGenue system. The process includes **outbound** and **inbound** communication, with clear tracking at each stage.

## Outbound process (Supplier to utility)

The outbound process begins immediately after the change request submission:

1. **Request added to EDI schedule** 
    1. The request is placed in the **EDI schedule**, where it awaits processing.
    1. The scheduling ensures that requests are transmitted according to the predefined service run times configured for the utility.

2. **EDI service processes the request**  
    1. During the next scheduled EDI run, the system collects pending requests from the queue.
    1. The EDI service validates the request format and ensures all mandatory fields are populated.

3. **Outbound file generation and transmission**  
    1. The **nGenue** system generates an outbound EDI transaction file (typically an 814 Change Request).      
    1. This file is encrypted and transmitted to the utility’s EDI server using the configured communication protocol (example: SFTP, AS2).

4. **Status update in the Facility screen**  
    1. The [**Facility**](../../../../facility_management/overview.md) screen updates the **EDI status** to **Awaiting response**.      
    1. This status indicates that the request has been successfully sent and is awaiting confirmation from the utility.

## Inbound process (Utility to supplier)

Once the utility processes the outbound file, they respond with an inbound EDI transaction:

1. **Utility sends response file**  
    1. The utility sends an EDI 814 response file indicating acceptance or rejection of the change request.

2. **EDI server decryption and processing**  
    1. The inbound file is decrypted and parsed by the EDI server.  
    1. The system matches the response to the original outbound request using unique transaction IDs.

3. **If the response is accepted:**  
    1. The **Activity log** records a successful update, including a timestamp and utility reference number.  
    1. The **Facility** screen updates the **EDI status** to **Accepted**.  
    1. This confirms that the requested changes have been successfully applied by the utility.

4. **If the response is rejected:**  
    1. The rejection reason code and description are recorded in the **Activity log** for troubleshooting.  
    1. A review task is automatically created and assigned to the relevant operations team.  
    1. The rejected EDI file is archived for audit and reference.

Following these steps ensures that every change request is processed, validated, and recorded in compliance with utility requirements. The clear inbound and outbound workflows help maintain billing accuracy, track request status, and support timely resolution of any rejections.

---