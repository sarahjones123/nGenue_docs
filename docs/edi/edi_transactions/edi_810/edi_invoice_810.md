---
hide: toc
---

# Understanding Invoice transactions (810)

The **Invoice transactions (810)** process depends on the customer type which may be **Bill ready** or **Rate ready**. This document outlines the workflows for both. 

## Bill ready customers

The invoice workflow for a **Bill ready** customers is described below:

1. **File validation**: System receives and validates monthly usage (867) file.
2. **Acknowledgement**: Sends the confirmation of receipt.
3. **Invoice generation**: Creates an invoice (810) request and status will be updated.


**Invoice outbound process (Supplier to utilities)**

The steps involved in the invoice outbound process are outlined below:

1. **Invoice generation**: The system initiates an **Invoice (810) request** and updates the status to **Not reviewed**.
2. **File transmission**: EDI server retrieves the **invoice (810)** file, an outbound file will be generated and transmitted to the utility.
3. **Review**: Utility reviews the invoice and responds with an **Application review (824)** file indicating either acceptance or rejection.

**Invoice inbound process (Utilities to supplier)**

These steps involved in the invoice inbound process are outlined below:

1. **File retrieval**: EDI server retrieves inbound file from FTP.
2. **File processing**: System processes decrypted inbound files that are downloaded, processed, and archived.
3. **Status update**: Upon receiving **Application review (824)** file, status will be updated to **Reviewed**.
4. **Delivers invoice**: System generates and transmits the final invoice file to the end user.

## Rate ready customers

The invoice workflow for a **Rate ready** customers is described below:

1. **File reception**: **Monthly usage (867)** file and **Invoice (810)** file (with matching **reference ID**) will be received from utility. 
2. **File validation**: System validates reference number against **Monthly usage (867)** file.
3. **Shadow bill generation**: 
    - If the **reference IDs** matches, the system generates a **shadow bill**. 
    - For any discrepancies that exist, an **investigation task** gets created.

As the invoice transaction process varies with bill ready and rate ready customers, upon validation, acknowledgement and generates invoice either through inbound or outbound process for bill ready customers and upon validation, shadow bill gets generated for rate ready customers. EDI Invoice transactions (810) standards ensures secure, accurate and efficient transmission of invoice details to streamline billing.


---