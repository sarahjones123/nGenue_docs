# Add price agreement

A **price agreement** in nGenue is a formal arrangement that defines how the price of natural gas is determined between two parties — typically a **seller (e.g., marketer or producer)** and a **buyer (e.g., LDC, utility, or end customer)**. It serves as the foundation for billing, forecasting, deal execution, and reporting. Price agreements can be fixed, index-based, or a combination of both, and they help automate how prices are calculated for various types of deals and transactions within nGenue.

Price agreements ensure consistency and accuracy in pricing across different contracts and allow users to manage complex pricing rules for multiple customers and delivery scenarios.

## Key purposes

* Standardizes the way prices are applied to deals, nominations, and invoices.
* Links directly with contracts and delivery schedules.
* Supports fixed, floating, and formula-based pricing mechanisms.
* Enables accurate revenue tracking, profit margin analysis, and forecasting.
* Supports regulatory and audit requirements through traceable pricing logic.

<!-- ## Types of pricing methods supported

- **Fixed pricing**: A set price for a defined period.
- **Index-based pricing**: Based on published gas indices (e.g., Henry Hub, NYMEX).
- **Formula pricing**: Combines index values with premiums, discounts, or formulas.
- **Tiered pricing**: Different prices based on volume thresholds.
- **Seasonal pricing**: Varies by season or month.

--- -->

## Example scenario

**Scenario**: A marketer signs a 6-month deal with an LDC to supply gas at an index-based price plus a $0.15 premium.

1. The marketer sets up a price agreement in nGenue.
1. The index is "Platts Gas Daily – Chicago Citygate".
1. The agreement adds $0.15/MMBtu over the index rate.
1. Every month, nGenue automatically pulls the index rate and applies the premium.
1. The marketer generates an invoice using this dynamic rate.


<!-- ## Where it is used in nGenue

- **Deal management**: Links to contracts and terms.
- **Nominations**: Ensures pricing aligns with scheduled volumes.
- **Invoicing and settlements**: Uses the price agreement to calculate charges.
- **Reporting**: Provides data for pricing analytics and margin calculations.

--- -->

## Why it is important

* Avoids manual entry errors in pricing.
* Ensures all parties are aligned on rate expectations.
* Enables quick response to market price changes.
* Helps forecast revenue and assess profitability.
* Plays a critical role in audit and compliance.

## Steps to add a price agreement

This section outlines the steps to add a price agreement for an end user within the application.  

1. In the **End user configuration** screen, select the user for whom you want to create a contract.  
2. Click the **Price agreement** icon in the top header. This opens the **End user pricing agreement** screen.
3. The **End user pricing agreement** screen is divided into two sections: **Agreement query** and **Price agreement configuration.**
    1. The **Agreement query** section allows users to search, filter, and view existing price agreements. It provides a structured way to locate agreements based on parameters such as LDC (Local Distribution Company), end user type, and agreement status (current, past, or future). This section is essential for managing active agreements, reviewing historical contracts, and ensuring compliance with pricing structures.

    2. The **Price agreement configuration** section defines the terms, conditions, and pricing structure for an agreement. It includes details such as contract duration, pricing methodology, applicable supply regions, and organizational groupings. This section is crucial for establishing clear pricing guidelines, managing risk, and ensuring contract compliance with business and regulatory requirements.

4. Click on **Add a price agreement record** icon to create a new record. 

5. In the **Price agreement configuration** screen, fill in the required details as described in the table below. 

    | Field name | Description |
    |------------|------------|
    | ID (auto-generated) | A unique identifier assigned to the price agreement. Required for tracking and referencing specific agreements. Useful for auditing, reporting, and ensuring contract traceability. |
    | Effective date | Defines the start date when the price agreement becomes active. Required for determining the contract's validity period. Useful for financial planning, billing cycles, and service activation. |
    | Apply term to | Specifies how the pricing agreement applies to deliveries (e.g., calendar delivery). Required for aligning pricing structures with contract terms. Useful for ensuring accurate rate application and compliance with agreements. |
    | Governed by master agreement | Indicates if the price agreement is linked to a master contract. Required for maintaining consistency with overarching contractual obligations. Useful for managing hierarchical contract structures and ensuring compliance. |
    | Currency | Specifies the currency used for the pricing agreement. Required for accurate financial transactions. Useful for cross-border agreements and financial reporting. |
    | Supply region | Defines the geographical region where the supply applies. Required for determining pricing conditions based on location. Useful for regional pricing strategies and compliance with regulatory requirements. |
    | Price agreement type | Specifies the type of pricing agreement (e.g., commodity pricing). Required for categorizing agreements based on pricing methodologies. Useful for contract management and determining applicable price calculations. |
    | Pricing campaign | An optional field that links the agreement to a specific pricing campaign. Useful for promotional pricing strategies and aligning agreements with marketing efforts. |
    | Enable alternate billing cycle volume source | Allows the selection of an alternative billing volume source. Useful when standard billing cycles do not align with contractual agreements. |
    | End user meter interval | Specifies whether the end user is daily metered or part of a pool. Required for defining how consumption data is collected. Useful for accurate billing and demand forecasting. |
    | This agreement’s tiers will be applied to the following volume | Specifies the volume tiering structure, such as city gate delivery. Required for determining price applicability. Useful for volume-based pricing strategies and compliance with supply contracts. |
    | How will fuel loss be calculated? | Defines how fuel loss will be accounted for in the agreement. Required for determining accurate billing amounts. Useful for cost allocation and transparency in fuel usage. |
    | WACOG will be applied to | Specifies whether the weighted average cost of gas (WACOG) is applied to a specific element of the contract. Useful for standardizing cost calculations across agreements. |
    | Enable single weighted average price (WACOG) billing | Allows billing to be calculated using a single WACOG method. Useful for simplifying cost structures and ensuring consistency in gas pricing. |

    *Organizational, risk and positional grouping section*
    
    | Field name | Description |
    |------------|------------|
    | Legal entity | Specifies the legal entity under which the agreement is created. Required for regulatory compliance. Useful for financial reporting and legal accountability. |
    | Business unit | Defines the business unit responsible for the agreement. Useful for internal tracking, budgeting, and performance analysis. |
    | Portfolio | Identifies the portfolio to which the agreement belongs. Useful for organizing agreements based on business segments. |
    | Strategy | Specifies the strategy governing the agreement. Useful for aligning contracts with corporate objectives. |
    | LDC pricing product | An optional field for selecting the applicable pricing product. Useful for pricing customization. |
    | Rate code | Specifies a predefined rate code that applies to the agreement. Useful for standardizing pricing models. |
    | Quote ID | Stores an identifier for the pricing quote associated with the agreement. Useful for tracking the origin of pricing terms. |

6. The **Price agreement configuration** screen is also divided into multiple tabs, each designed to capture specific details required for price agreement configuration. 

    Below is a detailed explanation of each tab:

    **1. Pricing tier tab**

    *Contract requirements:*<br>
    Specifies the key contractual obligations, including volume commitments. Required for ensuring compliance with contract terms. Useful for operational planning and financial forecasting.

    | Field name | Description |
    |------------|------------|
    | Monthly contract volume | Defines the volume of gas contracted on a monthly basis. Required for setting supply commitments. Useful for supplier scheduling and demand management. |
    | Swing | Specifies the allowable variation in the contracted volume. Required for managing supply flexibility. Useful for balancing supply fluctuations and avoiding penalties. |
    | Contract MDQ | Represents the maximum daily quantity (MDQ) allowed under the contract. Required for defining delivery limits. Useful for pipeline scheduling and capacity planning. |
    | Date of first flow | Defines the date when gas deliveries start under the agreement. Required for scheduling supply obligations. Useful for operational planning and ensuring timely execution. |
    | Special provisions | Allows for the inclusion of any additional contractual terms. Useful for capturing unique conditions that apply to the agreement. |

    *Pricing tiers: Defined quantities and pricing mechanism*<br>
    Defines the structured pricing levels within the agreement. In this section, you will be able to create a new pricing tier, or edit or delete the existing ones. The detailed explanation on how to configure a new tier is explained in a separate article.

    **2. Monthly cashout (Disable) tab**

    To be added.

    **3. WASP tab**

    To be added.

    **4. Renewal, provisions and cost**

    To be added.

    **5. Lock history**

    To be added.

    **6. Retail cashouts**

    To be added.

4. Click **Save** to save the configuration and close the **End user pricing agreement** screen.

---