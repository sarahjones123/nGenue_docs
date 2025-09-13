---
hide: toc
---

# Understanding deal management

**Deal management** in the natural gas industry refers to the end-to-end process of creating, negotiating, executing, and monitoring contracts and agreements for natural gas transactions. It involves managing the relationships and terms between marketers, and counter parties to ensure the seamless supply and distribution of natural gas. This process is critical for optimizing operational efficiency, mitigating risks, ensuring regulatory compliance, and maintaining profitability.

## Types of deals in nGenue

![deal_type](./images/deal_types.svg)

### Physical deal

A **physical deal** involves the actual delivery of natural gas from one party to another, often including specific terms for volume, location, and timing. These transactions typically occur between producers, marketers, and end-users, and they require coordination of storage and transportation logistics to ensure fulfillment. Physical deals are foundational to the natural gas market as they ensure the movement of energy resources from supply points to areas of demand.

### Physical retail deal

A **physical retail deal** deal refers to the sale of natural gas directly to end-users, such as residential, commercial, or industrial customers. These deals are typically managed by Local Distribution Companies (LDCs) or retailers and include terms for delivery schedules, pricing structures, and usage metrics. Physical retail deals prioritize reliability and adherence to customer-specific requirements, including regulated pricing in many markets.

### Swap deal

A **swap deal** is a financial agreement where two parties exchange specific elements of their natural gas transactions, such as delivery locations or pricing mechanisms, to mitigate risk or improve logistical efficiency. For example, one party might trade a commitment to deliver gas at a specific location in exchange for receiving it elsewhere. Swap deals are often used to optimize transportation costs and align with market dynamics.

### Future deal

A **future deal** in the natural gas market involves an agreement to buy or sell a specified volume of natural gas at a predetermined price on a future date. These deals are typically traded on exchanges and are used as a hedging tool to manage price volatility. Future deals do not necessarily result in physical delivery, as they can be settled financially based on the market price at expiration.

### Physical natural gas (NG) deal

A **physical natural gas (NG) deal** entails the tangible transfer of natural gas between parties, with specified terms for volume, quality, delivery point, and timing. These deals can occur in wholesale or retail markets and often require coordination with pipelines, storage facilities, and regulatory compliance to fulfill contractual obligations efficiently.

### Production deal

A **production deal** focuses on transactions directly tied to the output from natural gas wells or fields. These deals are typically made between producers and marketers or midstream companies, covering terms for the purchase, sale, and transportation of natural gas immediately after production. Production deals are critical for monetizing upstream activities and ensuring steady supply to downstream markets.

### Cash deal

A **cash deal** involves the immediate or near-term purchase and sale of natural gas with the settlement based on current spot market prices. These deals are often executed to address short-term supply or demand imbalances and are typically completed quickly without the need for long-term contractual commitments.

### Physical wellhead deal

A **physical wellhead deal** refers to the purchase or sale of natural gas directly at the production site or wellhead. These deals often involve producers selling their gas to midstream operators or marketers, with the transaction price influenced by local market conditions and transportation costs to downstream markets. Wellhead deals are fundamental to connecting upstream production with the broader supply chain.

<!-- ## How to access deal management page

You will be able to access deal management page by typing **"deal"** in the quick search available in the nGenue application homepage. Select **Deal management** and this will redirect you to the **Deal management** page.

### Fields and features on the Deal management homepage

You'll see this when you land into the Deal management page.
![alt text](./images/deal_management_1.png)

Let's get to know the main areas of the page:

#### The menu

You see a list of icons with the context in the top-left corner.
![alt text](./images/deal_management_2.png)

| Menu/ Icons | Description |
| ----------- | ----------- |
| File | Title |
| View | Text |
| Imports | Text |
| ![alt text](./images/icons/icon_1.png) | Refresh supply deals record |
| ![alt text](./images/icons/icon_2.png) | Configure grid columns |
| ![alt text](./images/icons/icon_3.png) | Open grid data in excel |
| ![alt text](./images/icons/icon_4.png) | Open supply summary |
| ![alt text](./images/icons/icon_5.png) | Run comprehensive calculation of monthly deals cost |
| ![alt text](./images/icons/icon_6.png) | Manage market and supply links |
| ![alt text](./images/icons/icon_7.png) | Print trader report |
| ![alt text](./images/icons/icon_8.png) | Roll current deal to the next period |
| ![alt text](./images/icons/icon_9.png) | Roll all deals to the next period |
| ![alt text](./images/icons/icon_10.png) | Open template |
| ![alt text](./images/icons/icon_11.png) | Deal activity log |

#### Left navigation bar

On the left-hand side of the page, you see a list of icons with the context in it. These icons are nothing but different types of deals that you can configure in nGenue application.

| Menu/ Icons | Description |
| ----------- | ----------- |
| ![alt text](./images/icons/icon_12.png) | Add physical deal |
| ![alt text](./images/icons/icon_13.png) | Add physical retail deal |
| ![alt text](./images/icons/icon_14.png) | Add swap deal |
| ![alt text](./images/icons/icon_15.png) | Add future deal |
| ![alt text](./images/icons/icon_16.png) | Add future wellhead deal |
| ![alt text](./images/icons/icon_17.png) | Add physical natural gas deal |
| ![alt text](./images/icons/icon_18.png) | Add production deal |
| ![alt text](./images/icons/icon_19.png) | Add cash deal |
| ![alt text](./images/icons/icon_20.png) | Edit current source deal record |
| ![alt text](./images/icons/icon_21.png) | Delete current deal record |
| ![alt text](./images/icons/icon_22.png) | Copy deal record |

#### Main body

The main body is divided into two sections- *Deal query* and *Deals details.* The Deal Query section allows you to search, filter, and view details of deals added in the system. It serves as a centralized interface for you to retrieve specific deal information based on various criteria, such as deal type, counterparty, date range, pipeline path, or status. You can also drill down into individual deals to view or edit details, check associated nominations, and track the deal's status in workflows or audit trails.

The different fields available in **Deal query** section are:

| Fields       | Description |
| :------------ | :------ |
| **Deal query**   |         |
| Instrument   | Displays the list of different types of deals present in nGenue. |
| Date range   | Fill in the start and the end date of the deal. |
| nGenue deal id       | Allows to enter the unique deal id of the deal. |
| nGenue ref id       |  |
| Trader       | The trader of the deal. |
| Counterparty/Supplier | The counterparty or supplier with which the deal is being made.  |
| Description       | The description of the deal as required.  |
| Retail demand pool       |  |
| Hide if confirmations sent       |  |
| Buy or Sell       | Specifies the type of deal, i.e., a buy deal or a sell deal |
| Trade date range       |  |
| Last Updated       | Date on which the deal was last updated. |
| List deal templates only       | On selection, the deal management screen will only display deal templates. |
| Load deal records | Based on the parameters or the filters selected, the available deals will get populated in the **Deal details** section. |
| Deal status | This section displays the status of the deal. |
| **Additional Physical filters section** | |
| Pipeline | The pipeline associated with the deal. |
| Supply Region | The supply region associated with the deal. |
| Meter# | The meter associated with the deal. |
| Supply Region | The supply region associated with the deal.|
| Index type/group |  |
| Baseload deals only | |

#### Deals details

The **Deal details** section populates available deals based on the parameters or filters applied in the Deal query. You can sort the details in ascending or descending order using the various parameters available in this section. Additionally, custom filters can be applied at each parameters level to refine the records.
![alt text](./images/deal_management_4.png)

--- -->