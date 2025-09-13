---
hide: toc
---

# Understanding Acknowledgment transactions (997)

The **Acknowledgement transactions (997)** acts as a receipt and confirmation of an [**Electronic Data Interchange (EDI)**](../../index.md) transaction set (for example, Transaction 867 for natural gas monthly usage). It verifies that the sender’s EDI file was received and provides feedback on whether the file passed or failed validation checks.

The acknowledgment is generated in response to EDI transactions such as:

* [Enrollment (814) (request/response)](../edi_814/enrollment/configure.md)
* Usage data (867) ([Monthly usage](../edi_867/monthly_867/mu_transactions.md)/[Historical usage](../edi_867/historical_usage_867/hu_transactions.md))
* [Invoice (810)](../edi_810/edi_invoice_810.md)

## Acknowledgement transactions workflow

1. **Utility receives EDI transaction**
    2. The utility receives an EDI file, such as an **EDI 814 enrollment request**, from a supplier through the outbound process.

2. **Utility validates the file**
    3. The utility validates the file’s syntax, data completeness (for example, account number, rate code, Meter Read Cycle (MRC)), and business rules.
    4. It flags errors such as an invalid account number.

3. **Utility generates the Acknowledgment 997**
    4. The utility creates an EDI 997 to confirm:
        5. **Accepted:** File passed validation.
        6. **Rejected/Partially accepted**: Errors found (with error codes).

4. **Utility transmitting the 997 to supplier**
    5. The utility sends the 997 back to the supplier’s **nGenue** FTP/portal through the inbound process.

5. **Supplier processes the 997**
    6. **If accepted**:
        7. The **EDI Activity log** updates the transaction status to **Awaiting confirmation**.
    8. **If rejected**:
        9. The **Activity log** or tasks notify the end-user.
        10. The end-user updates required facility details and re-sends the transaction.

6. **Audit and record-keeping**

    7. Both parties archive the 997 in **EDI session history** (import session tab) for compliance.

The **Acknowledgment transactions (997)** plays a vital role in the EDI workflow by ensuring transparency and accuracy in data exchange between suppliers and utilities. It acts as a receipt that confirms whether a transaction was successfully validated or requires correction. By promptly addressing rejections and archiving acknowledgments, organizations maintain data integrity, streamline communication, reduce errors, and ensure smooth processing of critical EDI transactions.

---