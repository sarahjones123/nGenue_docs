---
hide:
 - toc
---

# ETRM overview

**ETRM** stands for *Energy, Trade, and Risk Management.*

ETRM in nGenue focuses on managing the full lifecycle of wholesale natural gas transactions. It integrates trading, transportation, risk management, and reporting capabilities into a unified platform, tailored to the unique requirements of wholesale operations.

**Key wholesale processes supported by nGenue's ETRM include**:

* **Trading**: Facilitates the buying and selling of natural gas in wholesale markets.
* **Contract Management**: Manages long-term and short-term contracts with suppliers, buyers, and transporters.
* **Transportation Logistics**: Optimizes pipeline scheduling, nominations, and storage.
* **Risk Assessment**: Monitors price volatility, credit exposure, and operational risks.
* **Regulatory Compliance**: Ensures adherence to industry standards and legal requirements.
![nGenue_ETRM](./images/nGenue_etrm.png)

## ETRM Workflow

Let's understand the workflow of ETRM in nGenue through below plantuml diagram:

<!-- This is commented out. 
### Workflow 1

```puml
@startuml

skinparam backgroundColor #F9F9F9
skinparam participantBackgroundColor #D6EAF8
skinparam participantBorderColor #2874A6
skinparam sequenceArrowColor #2874A6
skinparam noteBackgroundColor #FAD7A0
skinparam noteBorderColor #D35400

actor Trader #yellow
participant "ETRM System" as System #lightgreen

note over Trader, System
The process starts with creating a deal and verifying configurations.
Prerequisite configurations are mandatory before proceeding.
end note

Trader -> System: Create a Deal
alt Are configurations complete?
    System -> System: Proceed to Configure Prerequisites
    loop Configure Prerequisites
        System -> System: Configure Legal Entity, Business Unit, Strategy, and Portfolio
        System -> System: Configure Supply Region
        System -> System: Configure Pipeline
        System -> System: Configure Pipeline Location
        System -> System: Configure Pipeline Zone
        System -> System: Configure Counterparty
        System -> System: Create Rate Schedule
    end
    System -> Trader: Configurations Completed
else Configurations are complete
    System -> Trader: Proceed to Deal type selection
end

alt Buy Deal
    Trader -> System: Create Buy Deal
else Sell Deal
    Trader -> System: Create Sell Deal
end

System -> System: Create Transport Contract
note right of System: The transport contract outlines terms for gas movement.

System -> System: Proceed to Nominations
loop Create Nominations
    Trader -> System: Select Nomination Type
    note right 
    Nomination types:
    - Buy Nominations: Requests related to purchased energy being transported or stored.
    - Sell Nominations: Requests related to sold energy being transported to the buyer.
    - Interconnects: Nominations specifying energy flow between different pipeline systems or facilities.
    - Pool and Storage: Nominations involving injection into or withdrawal from storage facilities or pooling points.
end note
    System -> System: Process Nomination
end
System -> System: Finalize Nomination

System -> System: Perform Settlement Process
note right of System: Reconcile financials and operational data.

System -> Trader: Print Settlement Report

@enduml
```
-->

```puml

@startuml

skinparam backgroundColor #F9F9F9
skinparam activityBackgroundColor #D6EAF8
skinparam activityBorderColor #2874A6
skinparam arrowColor #2874A6
skinparam noteBackgroundColor #FAD7A0
skinparam noteBorderColor #D35400

start

:Create a Deal;
note right
The process starts with creating a deal and verifying configurations.
end note

if (Are configurations complete?) then (No)
  :Configure Prerequisites;
  note right
  Prerequisite configurations are mandatory before proceeding.
  
  Prerequisites include:
  - Configure Legal Entity, Business Unit, Strategy, and Portfolio
  - Configure Supply Region
  - Configure Pipeline, Pipeline Location, and Pipeline Zone
  - Configure Counterparty
  - Create Rate Schedule
  end note
  :Configurations Completed;
else (Yes)
  :Proceed to Deal Type Selection;
endif

if (Deal Type?) then (Buy Deal)
  :Create Buy Deal;
else (Sell Deal)
  :Create Sell Deal;
endif

:Create Transport Contract;
note right
Defines terms for natural gas movement.
end note

:Proceed to Nominations;
  repeat
  :Select Nomination Type;
  note right
  Nomination types available:
  
    - **Buy Nominations**: Requests related to purchased natural gas being transported or stored.
    - **Sell Nominations**: Requests related to sold natural gas being transported to the buyer.
    - **Interconnects**: Nominations specifying natural gas flow between different pipeline systems or facilities.
    - **Pool and Storage**: Nominations involving injection into or withdrawal from storage facilities or pooling points.
  end note
  :Process Nomination;
  repeat while (More Nominations?)

:Finalize Nomination;

:Perform Settlement Process;
note right
Reconcile financial and operational data.
end note

:Print Settlement Report;

stop
@enduml
```

### Workflow explanation

Here is the detailed workflow sequence for the ETRM process, reflecting the flow described in the the above PlantUML diagram.

1. **Create a deal**

    1. The process begins when the trader initiates [**creating a deal**](../deal_management/physical_deal.md).
    2. The system verifies whether all prerequisite configurations are completed.

2. **Check configurations**<br>
If configurations are incomplete, the trader must complete them:
    {% include-markdown "../variable/etrm_prerequisities.md" %}
    <br>

    Once configurations are complete, the system allows proceeding to deal type selection.

3. **Select deal type**

    1. Based on the trader's choice, the system creates either:
        1. **Buy Deal**: Represents the purchase of natural gas.
        1. **Sell Deal**: Represents the sale of natural gas.

4. **Create transport contract**

    1. After selecting the deal type, the trader creates a [**Transport contract**.](../user_management/transport_contract.md)
    2. The contract outlines the terms and conditions for transporting natural gas.

5. **Proceed to nominations**<br>
The system moves to the [**Nominations**](../etrm/nominations.md) phase to schedule the movement of natural gas.

6. **Select nomination type**

    1. Traders select from various nomination types:
        1. **Buy Nominations**: Requests for purchased natural gas being transported or stored.
        2. **Sell Nominations**: Requests for sold natural gas being transported to buyers.
        3. **Interconnects**: Specify gas flow between different pipeline systems or facilities.
        4. **Pool and storage nominations**: Include injection into or withdrawal from storage facilities or pooling points.

7. **Create and finalize nomination**
    1. The system processes the selected nominations, allowing for adjustments if necessary.
    2. Once all required nominations are complete, the system finalizes them.

8. **Perform [settlement process](../etrm/settlements.md)**<br>
The system reconciles financial and operational data as part of the settlement process.

9. **Print [settlement report](../etrm/settlements.md)**<br>
The workflow concludes with the trader printing a settlement report for record-keeping and compliance.

## How nGenue addresses ETRM aspects

Below is a detailed explanation of how nGenue addresses key aspects of ETRM:

### 1. Deal and contract management

- **What it manages**: Centralizes the management of trading deals and contracts across the value chain.

* **Capabilities**:

    * Facilitates deal creation, execution, and settlement for both physical and financial trades.  
    * Tracks contract terms, pricing structures, and expiration dates.  
    * Supports hedging strategies to mitigate market risks.

- **Benefits**: Streamlines trading operations and ensures contractual compliance.

### 2. Pipeline path operations

- **What it manages**: Tracks and optimizes the movement of natural gas through pipeline networks. 

- **Capabilities**:

    - Configures pipeline paths to ensure the seamless flow of gas from suppliers to end users.  
    - Supports nomination, scheduling, and balancing to maximize throughput efficiency.  
    - Provides detailed analytics to monitor and address pipeline constraints in real time. 

- **Benefits**: Minimizes transportation costs and ensures reliable gas delivery.

### 3. LDC configurations

- **What it manages**: Customizes configurations for Local Distribution Companies (LDCs). 

- **Capabilities**:  
    - Manages contracts between LDCs and suppliers or marketers.  
    - Tracks volumes, delivery schedules, and rate structures specific to LDC agreements.  
    - Automates compliance with LDC-specific operational rules and regulations.

- **Benefits**: Enhances efficiency in serving LDCs and reduces manual intervention.

### 4. Storage and distribution

- **What it manages**: Handles the storage and distribution of natural gas to balance supply and demand. 

- **Capabilities**:  
    - Supports inventory management for gas stored in underground or off-site facilities.  
    - Optimizes withdrawal and injection cycles based on market conditions.  
    - Provides tools to allocate storage costs to relevant contracts or deals.  
- **Benefits**: Ensures energy availability during peak demand and maximizes storage profitability.

### 5. Risk management

- **What it manages**: Identifies, assesses, and mitigates risks associated with trading and operations.  
- **Capabilities**:  
    - Monitors market volatility and provides price forecasting tools.  
    - Enables scenario analysis to evaluate the impact of market changes on profitability.  
    - Tracks credit and operational risks associated with counterparties and logistics.  
- **Benefits**: Protects against financial losses and promotes informed decision-making.

nGenue’s ETRM platform empowers businesses to achieve operational excellence while staying competitive in an ever-changing energy market.
