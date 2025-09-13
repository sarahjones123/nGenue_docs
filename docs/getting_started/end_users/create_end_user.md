# Create an end user

In this section, we will walk through the step-by-step process of creating an end user within the nGenue application. After you are done creating an end user, you will need to add their [address](add_address.md), set up a [sales contract](add_sales_contract.md) and [price agreement](add_price_agreement.md), and add facilities to activate the account. Each of these steps is detailed in separate topics on this page.

## Prerequisites

Before proceeding with the configuration of an end user, you must ensure the following prerequisites are met:

* You must have the required permissions to *add* or *modify* the **End user** screen within the application.

## Steps to create an end user

To create an end user in nGenue, follow the below steps:

1.	In the **End user configuration** screen, click on the **Add an end user record** button. 
    ![add_user_record](images/end_user_4.png)
2. The table below provides detailed explanations for each field in the available in the **End user configuration** screen:

    *End user information*

    | Field name | Description |
    |------------|------------|
    | End user ID | A system-generated unique identifier assigned to the end user to track their account and transactions. |
    | Name | The full legal name of the end user or business entity associated with the account. |
    | Payment information | Displays payment-related details for the end user, including payment methods, terms, and history. |
    | LDC acct number | A unique identifier assigned by the Local Distribution Company (LDC) to track gas distribution for the end user. |
    | Alt1 / Alt2 Cust Num | Alternate customer numbers that can be used for cross-referencing within the system. These may be legacy account numbers or IDs used for integration with external systems. |
    | Parent customer (optional) | Allows linking the end user to a parent customer, which can be useful for billing, reporting, and account management purposes. |

    *Sales and service*

    | Field name | Description |
    |------------|------------|
    | Primary rep | The primary sales or service representative responsible for managing the end user's account, handling contracts, and providing support. |
    | CSR | The customer service representative assigned to address customer inquiries, manage complaints, and ensure service quality. |
    | Consultant | A consultant assigned to the end user for advisory purposes, such as helping with gas procurement strategies, compliance, or contract negotiations. |


    *Internal organizational information*

    | Field name | Description |
    |------------|------------|
    | Acctg group / legal entity | The accounting group or legal entity under which the end user’s account is categorized for financial and regulatory tracking. |
    | Business unit | The internal business division or unit responsible for managing the end user’s account, often used for reporting and resource allocation. |
    | Sales region | The geographical region assigned to the end user based on their location or where the sales team manages their contract. |
    | Default portfolio | The default product or service portfolio assigned to the end user, which may include gas supply agreements, pricing plans, or service packages. |
    | Default strategy | The default sales, pricing, or contract strategy that applies to the end user’s account, determining pricing tiers, contract terms, and risk management approaches. |

    ![end_user_configure](images/end_user_5.png)

3. The **End user configuration** screen is also divided into multiple tabs, each designed to capture specific details required for end user configuration. 

    Below is a detailed explanation of each tab:

    ### 1. General tab

    *LDC information*

    | Field name | Description |
    |------------|------------|
    | LDC | The local distribution company responsible for delivering gas to the end user. |
    | Current rate/rider | The current rate plan or rider assigned to the end user. |
    | Default pool account | The default pool account linked to the end user’s gas supply. |
    | Previous rate/rider prior to | Displays the previous rate plan or rider that was assigned before the current one. |
    | LDC rep | The representative from the LDC assigned to manage the end user's account. |

    *Retail billing method and description*

    | Field name | Description |
    |------------|------------|
    | Billing method name | Specifies the billing method used for the end user, determining how invoices are generated and sent. The available options are: <br> **Rate Ready** – The supplier sets a predefined rate, and the LDC calculates the bill based on usage. This method ensures consistency but requires accurate rate setup in advance. <br> **Bill Ready** – The supplier provides the entire bill calculation, and the LDC only delivers the invoice to the customer. This offers more control over billing but requires additional data management by the supplier. <br> **Dual Bill** – The supplier and the LDC generate separate invoices for their respective charges. This is used when both entities need to bill the customer directly. <br> **Single Bill** – A consolidated bill where the supplier and LDC charges are combined into a single invoice, simplifying the payment process for the end user. |
    | Broker fee reminder | Indicates whether a broker fee reminder is set for this account. |
    | Campaign ID | Identifies if the end user is part of a specific marketing or pricing campaign. |
    | Parent customer comments | Additional notes related to the parent customer, if applicable. |

    *End user management*

    | Field name | Description |
    |------------|------------|
    | Status | Displays the current management status of the end user, which affects their ability to receive gas supply and billing. The options include: <br> **Prospect** – The end user is in the initial setup phase and has not yet been activated for service. <br> **Setup/Pending** – The account setup is in progress, but certain steps (such as contract approval or LDC confirmation) are still required. <br> **Active** – The end user is fully enrolled, and service is currently being provided. They will be billed according to their selected billing method. <br> **Credit Hold** – The account is temporarily suspended due to credit issues, preventing further gas supply or transactions. This status requires resolution of outstanding balances or credit approval. <br> **Terminated** – The end user's service has been permanently discontinued. No further transactions or billing will occur. |
    | Contract status | Indicates the progress of the end user’s contract in the enrollment process. The status impacts service activation and billing. The options are: <br> **Awaiting LDC Confirmation** – The supplier has submitted the enrollment request, and the LDC must confirm the activation before service begins. <br> **Awaiting Credit Approval** – The contract is pending credit evaluation. If the end user does not meet credit requirements, additional guarantees or deposits may be needed. <br> **Awaiting Enrollment Complete** – The contract has been processed, but final enrollment steps (such as validation of meter setup or additional documentation) are still pending. <br> **Enrollment Complete** – The contract is fully executed, and the end user is officially enrolled in the system, allowing gas supply and billing to begin. |
    | Default metering interval | Defines the frequency at which the end user’s meter readings are recorded, which impacts how often billing and consumption tracking occur. The available options are: <br> **Daily** – Meter readings are taken every day, providing the most detailed consumption data. This is useful for high-usage customers who require precise tracking. <br> **Calendar Monthly** – Readings are recorded once per calendar month, typically on a fixed date. This standard approach aligns with most billing cycles. <br> **Cycle Monthly** – Meter readings follow a specific billing cycle rather than the calendar month, which may vary based on LDC-defined schedules. <br> **Bill Cycle; Manage Daily** – Allows for daily meter readings, but the billing cycle follows a predefined schedule. This provides detailed usage tracking while maintaining structured billing periods. |
    | Active fac | Shows the number of active facilities linked to the end user. |
    | # Facilities | Displays the total number of facilities associated with the end user. |
    | Default storage target | Specifies the default storage target assigned to the end user. |
    | Storage target override | Enables the user to override the default storage target if necessary. |
    | Enable daily pricing | Indicates whether daily pricing is enabled for the end user’s account. |

    ![end_user_general_tab](images/end_user_6.png)

    ### 2. Billing settings

    The table below provides detailed explanations for each field available in the **Billing Settings** tab.

    | Field name | Description |
    |------------|------------|
    | Bill format | Specifies the format in which the bill is generated. The available options may include **Standard, Summary, or Detailed**, determining the level of detail included in the invoice. The selected format impacts how charges, usage details, and line items appear on the final invoice. |
    | Line detail level | Defines the level of detail displayed in the invoice line items. Options may include **Summary, Partial Detail, and Full Detail**, affecting how gas usage, fees, and adjustments are presented to the customer. Choosing a more detailed level ensures transparency but may make the invoice longer. |
    | Billing hold | Allows users to temporarily hold bills from being printed within a specified date range. This prevents invoice generation during certain periods, ensuring corrections or adjustments can be made before finalizing the billing process. |
    | Message on invoice | A customizable message that appears on the customer’s invoice. This can be used for general communication, promotions, or important billing-related notes. |
    | Recurring PO # | Allows entry of a recurring purchase order (PO) number that will be associated with every invoice. This is useful for corporate or contractual billing where a PO is required for invoice processing. |
    | Report volumes in | Determines the unit of measurement for reporting gas volumes on the invoice. The options may include **Therms, Dekatherms (Dth), Cubic Feet (CCF), or MMBtu**. Selecting the correct unit is crucial for compliance with contractual agreements and industry standards. |
    | Use alternate billing entity | Enables selection of a different billing entity to generate the invoice instead of the primary supplier. This is useful when a third party is responsible for billing, such as a parent company or financial institution. |
    | Round volumes to | Specifies the rounding method for gas volume calculations. Options may include **No Rounding, Round to Whole Number, Round to Nearest 0.1, or Round to Nearest 0.01**. Rounding helps maintain consistency and avoids minor discrepancies in billing calculations. |

    *Invoice printing options*

    | Field name | Description |
    |------------|------------|
    | Print prior balances | Enables printing of any outstanding balances from previous billing cycles on the invoice. This helps customers track unpaid amounts. |
    | Don't print with controller | Prevents invoices from being printed through the standard controller system, allowing for manual intervention if needed. |
    | Print summary page for multi-facility invoices | If enabled, generates a summary page for invoices covering multiple facilities, providing a consolidated view of charges. |
    | Bundle LDC charges onto 1 line | Consolidates all Local Distribution Company (LDC) charges into a single line item on the invoice, simplifying the bill layout. |

    *Billing line item options*

    | Field name | Description |
    |------------|------------|
    | Hold bills until all facilities have volumes | Prevents invoices from being generated until meter readings for all associated facilities are available. This ensures complete and accurate billing. |
    | Suppress nGenue generated 3rd party charges | Hides any third-party charges that are automatically generated by the nGenue system, providing a cleaner invoice view if third-party charges are not relevant to the customer. |

    *Credit details*

    | Field name | Description |
    |------------|------------|
    | Credit limit | The maximum credit amount assigned to the end user. This determines the allowed outstanding balance before further transactions are restricted. |
    | Credit rating | Displays the creditworthiness of the end user based on predefined criteria. Options may include **Excellent, Good, Fair, or Poor**, affecting eligibility for payment terms and credit-based transactions. |
    | Default margin | The standard margin percentage applied to the end user's charges, representing the supplier’s profit markup. |
    | Last reviewed on | The last date when the end user’s credit details were reviewed. Regular reviews help ensure that credit limits and terms remain appropriate. |
    | SIC code | The Standard Industrial Classification (SIC) code identifying the industry in which the end user operates. This may impact contract terms and risk assessment. |
    | NAICS | The North American Industry Classification System (NAICS) code for categorizing the end user’s business type. Used for regulatory and reporting purposes. |
    | Office | Specifies the office location responsible for managing the end user’s account. This may impact billing jurisdiction and customer service handling. |
    | Industry title | The industry category associated with the end user, typically aligned with the SIC or NAICS classification. |

    ![end_user_billing_settings_tab](images/end_user_7.png)

    ### 3. A/R (Accounts Receivable)

    The table below provides detailed explanations for each field available in the **A/R (Accounts Receivable)** tab.

    *Payment processing*

    | Field name | Description |
    |------------|------------|
    | Mail checks to | Specifies the address where physical checks should be mailed for payment processing. Ensuring this field is correctly populated helps avoid delays in receiving payments. |
    | Wire funds to | Defines the designated bank account for wire transfers. This is crucial for customers opting for electronic payments. |
    | A/R Acct | Indicates the accounts receivable (A/R) account where customer payments are recorded. This ensures proper financial tracking and reconciliation. |
    | Sales acct | Specifies the sales account associated with the customer, helping in revenue tracking and financial reporting. |
    | Security deposit required | A checkbox that indicates whether the customer is required to provide a security deposit before service activation. |
    | Deposit amount | The amount of security deposit required from the customer. This may vary based on credit history, contract terms, or company policies. |
    | Date received | The date when the security deposit was received. Keeping track of this ensures proper financial accounting and refund processing. |
    | Re-apply cash receipts | A function that allows reapplying previously recorded cash receipts in case of adjustments or corrections. |
    | Payment terms | Defines the payment terms agreed upon with the customer, such as **Net 30, Due on Receipt, or Custom Terms**. Selecting appropriate terms impacts the due date and financial planning. |
    | Min days | The minimum number of days allowed for the payment cycle. This setting helps define due dates and late fee applications. |
    | Cash receipt method | Specifies the method by which payments are received. Options may include **Check, Wire Transfer, ACH, or Credit Card**. Choosing the right method ensures proper payment allocation. |
    | Form of payment | Defines the acceptable payment method for the customer, such as **Direct Debit, Credit Card, or Bank Transfer**. This impacts transaction processing and reconciliation. |

    *Late charges and collections*

    | Field name | Description |
    |------------|------------|
    | Finance method | Determines how late payment charges are calculated. Options include: <br><br> **None** – No finance charges are applied to late payments. <br> **Defined rate x balance due** – Applies a fixed interest rate to the outstanding balance. Useful for standard late fee structures. <br> **Defined rate x # of days** – Charges interest based on the number of days the balance is overdue. Helps in time-sensitive penalty calculations. <br> **Custom rate x balance due** – Uses a user-defined interest rate on the total outstanding balance. This provides flexibility in fee application. <br> **Custom rate x # of days** – Allows a customized rate to be applied based on the number of overdue days. Suitable for variable late fee structures. |
    | Late penalty | A checkbox that enables the application of late fees on overdue invoices. When selected, the finance method will determine the charge calculation. |
    | In collections | Specifies whether the customer’s account is in the collections process. This is crucial for identifying overdue accounts. |
    | Date referred | The date on which the customer’s account was referred to collections. This helps track the aging of delinquent accounts. |
    | Waive fees | Allows authorized users to waive late fees for the customer. Useful in cases of disputes or goodwill adjustments. |
    | Custom APR | A user-defined annual percentage rate (APR) for late payment penalties. This overrides standard rates when applicable. |
    | Minimum late fee | The lowest possible late fee that can be charged, ensuring small balances still incur a penalty. |
    | Block all collection letters | Prevents the system from automatically sending collection notices to the customer. Useful when negotiating payment terms outside the system. |
    | Stop all late fee calculation | Disables any late fee assessment for the customer, regardless of overdue balances. Useful for customers with special agreements or disputes. |

    ![end_user_a/r_tab](images/end_user_8.png)

    ### 4. Misc settings

    The table below provides detailed explanations for each field available in the **Misc settings** tab.

    | Field name | Description |
    |------------|------------|
    | Short name | A brief identifier or nickname for the end user. Used internally for quick reference. |
    | Enable cycle/financial storage | Allows the end user to participate in cycle-based or financial storage programs. This is typically used for balancing supply and demand in gas storage management. |
    | Annual storage percent | Defines the percentage of annual storage allocated to the end user. This field is enabled only when **Enable cycle/financial storage** is checked. |
    | Enable estimated meter read billing | Enables billing based on estimated meter readings instead of actual readings. Useful when meter data is unavailable or delayed. |
    | End user is allowed to participate in supply transactions | Grants the end user permission to engage in supply transactions, such as purchasing or transferring gas supplies. |
    | Enable budget billing | Activates budget billing for the end user, allowing them to pay a fixed amount each billing cycle based on estimated annual usage. Helps in managing seasonal fluctuations in billing. |

    *Initial sales forecast*  

    | Field name | Description |
    |------------|------------|
    | Annual usage | The projected annual consumption of the end user. Helps in forecasting supply needs. |
    | Margin | The expected profit margin applied to the end user's usage. This can impact pricing and revenue calculations. |
    | Start date | The date when the sales forecast begins. This helps in tracking usage projections over time. |
    | Term (Months) | The duration (in months) for which the forecasted values apply. Typically set to 12 months for annual projections. |

    *Additional settings*  

    | Field name | Description |
    |------------|------------|
    | Self-nominating | Allows the end user to nominate (select) their own supply sources instead of relying on default allocations. Useful for customers managing their own gas procurement. |
    | Block facility proration | Prevents the system from prorating facility charges for the end user. This ensures that facility-related costs remain consistent regardless of usage variations. |


7. Click **Save** to save the record. You have successfully created an end user in the nGenue application.

---