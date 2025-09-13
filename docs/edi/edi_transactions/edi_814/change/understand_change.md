---
hide:
 - toc
---

# Understanding Change transactions (814)

Change requests update customer billing, rate codes, commodity pricing, and tax exemptions. The system sends an outbound request file via [**Electronic Data Interchange (EDI)**](../../../index.md) and receives a response from the [**Local Distribution Company (LDC)**](../../../../ldcs/ldcs_overview.md). If accepted, the system applies the changes; if rejected, it creates a task for review.
<!-- ![Change](../images/change_814.png) -->

To initiate a change transaction request, you must have the following information:

* **A valid account number**: This ensures the request is linked to the correct customer account.
* Configure any necessary changes on the [**End user**](../../../../getting_started/end_users/overview.md) screen before initiating a change request from the [**Facility**](../../../../facility_management/overview.md) screen.


## Types of change requests

* [**Change bill type**](./change_bill_type.md): Configure a bill type in the application and initiate an EDI 814 request to update the bill type with the LDC.  
* [**Change rate code**](./change_rate_code.md): Update a rate code in the application and initiate an EDI 814 request to send the update to the LDC.  
* [**Change commodity price**](./change_commodity_price.md): Update the commodity price in the application and initiate an EDI 814 request to communicate the change to the LDC.  
* [**Change customer tax rate**](./change_customer_tax_rate.md): Update the customer’s tax rate in the application and initiate an EDI 814 request to notify the LDC.  
* [**Change account number**](./change_account_number.md): Process an inbound account number change request sent by the utility, applying the updated account number in the application through the EDI 814 process.  

## Post submitting a change request

Once a change request is submitted in the application, the following sequence of actions takes place:

* [**Outbound process**](./outbound_and_inbound.md): The system sends the EDI 814 change transaction from the supplier to the utility.
* [**Inbound process**](./outbound_and_inbound.md): The system receives the response from the utility, applies the changes if accepted, or creates a review task if rejected.

---