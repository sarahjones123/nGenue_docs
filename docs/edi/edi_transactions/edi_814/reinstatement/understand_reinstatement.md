---
hide: toc
---

# Understanding Reinstatement transactions (814)
The **Reinstatement transactions (814)** is a **cancel pending drop request** submitted through the EDI system. It is used when a supplier wants to **stop the termination of service** that has already been scheduled for a customer (end user). This is a critical transaction because it helps maintain continuity of service for customers who either resolved outstanding issues or renewed their agreement with the supplier.

<!-- The Reinstatement transaction (814) processing workflow includes:

1. **Request submission**: Once required details has been provided to the system, the cancel pending drop request will be initiated.
2. **EDI processing**: The system processes the logged request in EDI schedule.
3. **Outbound file generation**: Generated outbound file will be sent to the utility.
4. **Validation**: The utility validates the file based on the utility requirements.
5. **Status update**: Based on utility response, the system will update the status. -->

To successfully process a reinstatement request, the following details are mandatory:

* **Account number**: Unique identifier assigned to the end user by the utility.  
* **Price agreement**: Indicates the commercial arrangement between the supplier and the end user.  
* **Rate code**: Specifies the applicable utility rate plan.  

<!-- Once the reinstatement request is submitted:  
- The request is logged in the **EDI schedule**.  
- An **outbound file** is generated and transmitted to the utility.  
- The utility reviews and validates the request.  
- The system updates the status accordingly.  

If the utility accepts the reinstatement, the service remains **active**. If rejected, the service drop continues as scheduled, and the request is flagged for **manual review**. -->

## Reinstatement transaction (814) workflow

The Reinstatement transaction (814) follows a defined workflow:

1. **Request submission**  
    1. The user provides the required details (**account number**, **price agreement**, and **rate code**) in the **nGenue** application.  
    1. The system checks for completeness before initiating the transaction.  

2. **EDI processing**  
    1. The request is automatically queued in the **EDI schedule**.  
    1. During daily service runs, the EDI service picks up the request for processing.  

3. **Outbound file generation**  
    1. A structured **EDI 814 transaction file** is created.  
    1. This file contains details of the reinstatement request and is transmitted to the appropriate utility via established communication protocols.  

4. **Utility validation**  
    1. The utility receives the reinstatement request and performs validation.  
    1. Checks include:  
        1. Whether the account number exists and is active.  
        1. Whether the drop request is still pending (that is, not completed).
        1. Whether the provided rate code and agreement match utility records.  

5. **Status update**  
    1. The system updates the reinstatement transaction status based on the utility’s response:  
        * **Accepted**: The service remains active, and the pending drop is cancelled.  
        * **Rejected**: The reinstatement is not processed, and the scheduled drop will continue.  
        * **Awaiting response**: The system holds the request until a utility response is received.  

## Key points to remember

* A reinstatement can only be processed if the **drop request is still pending**. Once the drop is executed, reinstatement is not possible.  
* Incomplete or incorrect details (for example, invalid account number) will cause **rejection** at the utility stage.  
* Manual intervention may be required if the reinstatement fails validation.  

---
