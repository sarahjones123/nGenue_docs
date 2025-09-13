# Evergreen deals

The **Evergreen Deals** screen in nGenue is a specialized interface that enables users to seamlessly manage long-term gas supply contracts by allowing extensions to the deal’s end date with just a few clicks. This feature is especially valuable for contracts that are set to automatically renew unless explicitly terminated.

Evergreen deals are typically used in recurring contracts with reliable counterparties or in retail aggregations where monthly or periodic rollovers are standard business practice.

## Prerequisites

To use the evergreen deals functionality, ensure the following prerequisites are met:

* Users must have **valid login credentials** and be assigned appropriate **access permissions** for the **Evergreen deals** screen.
* [Internal book structure (legal entity, business unit, portfolio, strategy)](../getting_started/configure_book_structure.md) is configured.
* [Pipeline zone location (PZL)](../getting_started/pipeline.md) screen and all required fields are configured (pipeline, zone, location, rate schedule, charge definition, fuel, and rate).
* Physical and financial deals are created in the [**Deal management**](../deal_management/overview.md) screen with defined internal and external counterparties.
* The **Evergreen Deal** checkbox must be selected for each deal that qualifies for auto-renewal. This setting is available in the [**Deal management**](../deal_management/overview.md) screen.

## How to create an evergreen deal

1. Log in to the nGenue application using your credentials.
2. Click the **Search** icon and enter *Evergreen deals* in the search bar.
3. Select **Evergreen deals.**
4. The next screen is divided into two sections: *Evergreen deals query* and *Evergreen deals details.*

### Evergreen deals query

This section enables filtering and retrieving deals based on selected criteria.

**Available fields in Evergreen deals query**

| Field | Description |
|------------|------------|
| Instrument | Displays the list of different deals available in the system. Options include: <br> - **Physical NG**: Physical natural gas contracts <br> - **Futures**: Future contracts for gas <br> - **Swap**: Financial agreements to exchange cash flows <br> - **Physical NG - Option**: Gas options for future transactions <br> - **Retail Demand Requirements**: Gas supply agreements based on demand <br> - **Wellhead NG**: Gas purchased directly from a production well <br> - **Production**: Deals related to gas production <br> - **Cash**: Spot market gas purchases or sales |
| Month & Year | Allows users to specify month and year to filter evergreen deals based on their effective period. |
| nGenue Deal ID | Allows users to enter a **unique deal ID** to search for a specific deal in the system. |
| Internal Ref ID | A reference ID used internally within the organization for tracking deals. |
| Trader | Displays the trader responsible for managing the deal. |
| [Counterparty/Supplier](../getting_started/counterparty/create_counterparty.md) | The counterparty or supplier with whom the deal is being made. |
| Description | A brief description of the deal, providing relevant details as required. |
| Retail demand pool | Specifies the **demand pool** where the retail gas requirements are grouped for trading and supply. |
| ‘Hide if confirmations sent’ Checkbox | If checked, deals for which confirmations have already been sent will be **hidden** from the query results. |
| ‘List deal templates only’ Checkbox | If checked, the **Deal Management Screen** will display **only deal templates**, excluding executed deals. |
| Buy or sell | Indicates whether the deal is a **BUY** deal (purchase of gas) or a **SELL** deal (sale of gas). |
| Trade date | Filters deals based on the trade execution date, allowing users to enter a **start date** and **end date**. |
| Last updated | Displays the **last updated date** of the deal, indicating when it was last modified. |
| Contract type | Specifies the type of contract associated with the deal (e.g., **Firm, Interruptible, Indexed, Fixed Price**). |
| Deal source | Identifies the origin of the deal, whether it was **imported, manually created, or auto-generated** by the system. |

**Deal status section**

This section displays the current status of the deal, which can include the following states:

| Deal status | Description |
|------------|------------|
| Partially pathed | The deal is in progress but has not been fully assigned to a pipeline path. |
| Created | The deal has been **entered into the system** but is not yet confirmed. |
| Confirmed | The deal has been **finalized and approved** by all parties. |
| What-if | A **hypothetical deal** used for analysis without committing to execution. |
| Active | The deal is currently **valid and operational**. |
| Physical scheduled | The gas deliveries for this deal have been scheduled for physical transport. |
| Physical pathed | The deal has been fully assigned to a **pipeline path** for execution. |
| Canceled | The deal has been **voided and is no longer active**. |

**Additional physical filters section**

| Field | Description |
|------------|------------|
| [Pipeline](../getting_started/configure_pipeline.md) | Displays the **pipeline** associated with the deal, which is responsible for gas transportation. |
| [Supply region](../getting_started/configure_supply_region.md) | The **geographical region** from which the gas is supplied. |
| Baseload deals only | If selected, the system will filter deals that are **Baseload** (steady supply contracts without fluctuations). |
| Baseload deals only | Defines the **pricing index or group** used for setting gas prices. |

### Evergreen deal details

Once you select the relevant filters in the **Evergreen deals query** section and click on the **Load evergreen deals record** button, the system retrieves and displays the corresponding deals in the **Evergreen deal details** section.

## What happens next?

Once the deals are loaded:

1. Select a deal from the displayed results.  
2. Open the calendar control under the **End date** field and choose a new date.
3. Click the **Extend deals** button to apply the change.

The system automatically updates the selected deal with the new end date. No manual modifications or backend entries are required. The update is logged, ensuring transparency and traceability. This automated extension process minimizes operational errors, reduces administrative burden, and improves contract lifecycle management, particularly for long-term recurring gas supply agreements.