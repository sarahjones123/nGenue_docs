---
hide: toc
---

# Understanding EDI message formats and protocols 

It outlines the different **message formats and protocols** utilized to exchange data between various [**Local Distribution Company (LDC)**](.././ldcs/ldcs_overview.md) and their associated systems. The formats can be classified into **Electronic Data Interchange (EDI)** and **Non-EDI formats**, along with the protocols utilized for transmit the data without manual intervention. 

<!--image must be added-->

## EDI message formats
**EDI message formats** are standardized structures that define how business data is organized, encoded, and represented in an electronic data interchange. These formats structure data while enforcing syntax rules, message boundaries and validation criteria by adhering to authorized format, to ensure accurate and efficient data exchange.

**EDI formats**

* The **X12 format** is a common EDI standard for exchanging business data, regularly used for transactions and events such as enrollment, drop request, rate change, and historical consumption request. 
* **Extensible Markup Language (XML)** is a flexible format for exchanging structured data. XML is easier to debug and read compared to conventional EDI. It requires agreed-upon schema between trading partners.

**Non-EDI formats**

* **Delimited files (CSV, Tab)** are a common way to exchange data when EDI is not warranted. These file format are easy to parse and best suitable to format billing, consumption, and enrollment data. 
* **Excel file format (XLS, XLSX)** can be exchanged when the data is more complicated and multiple sheets or formatting is required. This file format best supports billing, consumption, and transactional data representation. 
* **XML** is a versatile format for exchanging structured data. XML is often used for non-EDI transactions where the data needs to be strongly structured and validated. 


## EDI protocols 
**EDI protocols** are standardized communication method used to securely and reliably transmit electronic data interchange messages between trading partners. While message formats define how business data is structured, EDI protocols determine how that data is packaged, transmitted, encrypted, and acknowledged during exchange.

**FTP and SFTP** 

* **File Transfer Protocol (FTP)** and **Secure File Transfer Protocol (SFTP)** are often used to transfer files between systems. These protocols are secure and reliable, making them suitable for sending large files or sensitive data. FTP still used inside secure internal network and with legacy systems. Whereas SFTP works well for automated batch EDI file exchanges that ensures integrity check and strong decryption.

**Website and E-mail** 

* Some LDC use **websites** or **e-mail** for data exchange, especially for smaller files or when real-time data transfer is not required. Sending EDI or other structured files as email attachment to trading partners. It supports low volume EDI, and partners can log in to upload and download EDI or non-EDI files.

---