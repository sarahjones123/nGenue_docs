---
hide: toc
---

# Configure an account number

The following article outlines the process for handling an **Inbound account number** change request sent by the utility and applying the updated account number in the application through the [**Electronic Data Interchange (EDI)**](../../../index.md) 814 process.

## Configuration steps

### Step 1: Receive and decrypting the file

1. The utility sends an **Inbound account number change** request file to the marketer FTP.  
2. The EDI service retrieves the inbound file, decrypts the response, and places it in the designated inbound file path.

### Step 2: Process the inbound file

1. The system processes the decrypted inbound file and verifies the existing account number.  
2. The system sends an **acknowledgment response (997)**.  
3. Files are downloaded from the FTP for processing and moved to the archive upon successful processing.

### Step 3: File processing steps

1. Retrieve the inbound file from the FTP location.  
2. Validate and decrypt the file.  
3. Update the activity log and create a task.  
4. Apply the updated account number on the scheduled date.

Processing an **inbound account number change request** ensures the application reflects the most current customer account information. The **814 EDI process** validates and applies the update accurately, preventing billing errors and maintaining data integrity.

---