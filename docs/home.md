---
hide:
 - toc
---

# nGenue overview

nGenue is a comprehensive software platform designed to streamline and optimize the operations of natural gas marketers, utilities, and suppliers. Built specifically for the natural gas industry, nGenue integrates multiple functionalities into a single, robust solution, empowering businesses to efficiently manage their sales, marketing, billing, and customer service processes. With nGenue, companies can reduce operational complexity, ensure regulatory compliance, and improve profitability through automated workflows and real-time data insights.

## Key functionalities

The nGenue platform supports several core functionalities for distributors, LDCs, utilities, and pipelines in the natural gas sector, including:

-  **Automated pricing** </br>
   Automatically calculates and applies pricing based on contracts, consumption, and market conditions. </br>
   The below flowchart shows data inputs (market conditions, contracts) leading to price calculations, resulting in customer pricing outputs.
   ```puml

   @startuml
   start
   :Input Market Conditions;
   :Input Contracts;
   :Calculate Price;
   :Output Customer Pricing;
   stop
   @enduml
   ```

2. **Billing** </br>
   Automates billing processes, generating accurate invoices that reflect actual consumption and contractual agreements.</br>

3. **Scheduling** </br>
   Manages the scheduling of deliveries and services, optimizing resource allocation and ensuring timely distribution of gas.

4. **Customer management**</br>
   Centralizes customer data, facilitating effective communication, account management, and personalized service.

5. **Compliance**</br>
   Automates compliance tracking and reporting, helping organizations adhere to industry regulations and avoid penalties.
   ```puml

    @startuml
    start
    :Collect Data;
    :Generate Reports;
    :Submit for Review;
    :Audit Process;
    stop
    @enduml
   ```

6. **Integration with EDI systems** </br>
   Seamlessly integrates with Electronic Data Interchange (EDI) systems for secure exchange of information related to transactions, customer data, and payments.
   ```puml
    @startuml
package "nGenue" {
    [nGenue System] #LightBlue
}
package "EDI System" {
    [EDI Interface] #Yellow
}
package "Utility Data Systems" {
    [Customer Database] #LightGreen
    [Payment Records] #LightGreen
}

[nGenue System] --> [EDI Interface] : "Data Flow" #Blue
[EDI Interface] --> [Customer Database] : "Customer Info" 
[EDI Interface] --> [Payment Records] : "Payment Info" 
    @enduml
   ```

<!--
For more information about *nGenue*, visit their [official website](https://ngenue.com/ldcs-natural-gas-software-solution/).

-->
