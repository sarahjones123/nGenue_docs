---
hide: toc
---

# Understanding Write-off transactions (248)

A **Write-off transactions (248)** discards unpaid or un-collectible accounts from financial records. In utilities, the **Write-Off (248) file** identifies eligible accounts for collection and un-collectible deemed accounts. It helps to maintain and track financial reports and outstanding balances with accuracy and efficiency.

The **Write-off transactions** process workflow includes:

1. **File receipt** 
    - LDC sends **Write-Off (248)** file through EDI, **nGenue** automatically processes the inbound file.

2. **Discrepancy handling** 
    - The system compares the inbound files against [**810 invoice**](../edi_810/edi_invoice_810.md) to ensure the files are consistent with the invoice. 
    - Upon mismatch, an **investigation task** will be created.

3. **File forwarding** 
    - The file will be directed to pre-configured contact and original **Write-Off (248)** file will be sent as an email attachment, delivered through **nGenue** without modifications.

4. **Acknowledgment**
    - [**Acknowledgment transactions (997)**](../edi_997/acknowledgment_997.md) will be generated and returns confirmation to originating utility.

Upon completion of the above **Write-off transactions** process, the unpaid, un-collectible accounts will be removed. This process helps in maintaining accurate reporting and reflects a true picture of **nGenue** receivables.


---