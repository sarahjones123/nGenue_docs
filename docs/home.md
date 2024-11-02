---
hide:
 - toc
---

# nGenue overview

nGenue is a comprehensive software platform designed to streamline and optimize the operations of natural gas marketers, utilities, and suppliers. Built specifically for the natural gas industry, nGenue integrates multiple functionalities into a single, robust solution, empowering businesses to efficiently manage their sales, marketing, billing, and customer service processes. With nGenue, companies can reduce operational complexity, ensure regulatory compliance, and improve profitability through automated workflows and real-time data insights.

![alt text](assets/images/ngenue_overview.png)

## Key functionalities

The nGenue platform supports several core functionalities for Distributors, LDCs, Utilities, and Pipelines in the natural gas sector, including:

-  **Automated Pricing** </br>
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

4. **Customer Management**</br>
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

6. **Integration with EDI Systems** </br>
   Seamlessly integrates with Electronic Data Interchange (EDI) systems for secure exchange of information related to transactions, customer data, and payments.
   ```puml

    @startuml
    package "nGenue" {
        [nGenue System]
    }
    package "EDI System" {
        [EDI Interface]
    }
    package "Utility Data Systems" {
        [Customer Database]
        [Payment Records]
    }

    [nGenue System] --> [EDI Interface]
    [EDI Interface] --> [Customer Database]
    [EDI Interface] --> [Payment Records]
    @enduml
   ```

<!--
For more information about *nGenue*, visit their [official website](https://ngenue.com/ldcs-natural-gas-software-solution/).

-->
