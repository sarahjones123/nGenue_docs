---
hide: toc
---

# Understanding EDI Drop transactions (814)

The **Electronic Data Interchange (EDI) Drop transactions (814)**  is initiated when a marketer or customer asks for the cancellation of an ongoing service. The procedure guarantees proper deactivation of the customer's account from the **Local Distribution Company (LDC)** to prevent further transactions. 

## EDI Drop transactions workflow

The **EDI Drop transactions** request consists of a systematic workflow, which involves: 

1. **Validation of significant account information**: The system verifies key identifiers such as **account number**, **service address**, **rate code**, and **contract reference** to ensure that the drop request applies to a valid and active account. 

2. **Automatic or manual drop request processing**: The Drop requests can be created in two ways:  
    1. **Manual initiation**: A user submits a drop request through the system UI when a customer cancels service or switches providers.  
    2. **Automated initiation**: Predefined triggers, such as contract expiration or a switch request from another supplier, automatically generate the drop request.

3. **System updates to indicate the status of termination**: Based on the utility’s response, the system updates the transaction status to “**Accepted**”, “**Rejected**”, or “**Pending**”. Accepted drops lead to deactivation of the customer’s account, while rejected requests remain in queue for correction and resubmission.

## Purpose of EDI Drop transactions

The use of **EDI Drop transactions** is essential for:  

* **Maintaining accurate customer records**: Ensures that customers who no longer receive service are promptly removed from the active system.  
* **Preventing unauthorized activity**: Eliminates the risk of service being added or billed to an inactive or terminated account.  
* **Supporting compliance with utility regulations**: Ensures that drops are communicated in a timely and standardized manner, following the rules established by the utility and regulatory bodies.  
* **Enabling seamless supplier switching**: Facilitates smooth transitions when customers move to a new supplier without overlap or disputes.  

The **EDI Drop transactions** request can be initiated manually by a user or automatically in response to predefined triggers. All requests are transmitted and processed through a standardized outbound–inbound data exchange framework to ensure consistency and interoperability.

---