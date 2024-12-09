# Nominations overview

Nominations refer to the scheduling and allocation of natural gas quantities across various points in the supply chain. Nominations ensure proper coordination between buyers, sellers, pipelines, interconnects, and storage facilities to meet contractual obligations and operational requirements.

## Types of nominations

1. **Buy or sell nominations**<br>
    * Represents transactions where gas is purchased or sold.<br>
    * Example: Buying from suppliers or selling to LDCs.
    
2. **Receipt or delivery interconnects**
    * Receipt interconnects: Points where gas is received into the pipeline system.<br>
    * Delivery interconnects: Points where gas is delivered to end-users or other pipelines.

3. **Receipt or delivery pools**
    * Receipt Pools: Aggregates of gas sourced from multiple receipt points.
    * Delivery Pools: Aggregates of gas delivered to multiple delivery points.

4. **Storage nominations**
    * Involves injecting gas into or withdrawing gas from storage facilities.

## Prerequisites for creating a nomination

Before creating a nomination, ensure the following:

* The required contracts (buy, sell, transportation, or storage) have been created and approved in the system.
* Receipt and delivery interconnects are configured.
* The pipeline path for the deal is established.
* You have access rights to create and manage nominations in the **nGenue** application.

## Procedure to create a nomination in nGenue

### Step 1: Access the Nomination Module

1. Navigate to the **Nomination Management** section in nGenue.  
2. Select the appropriate **pipeline** or **LDC** (Local Distribution Company) for which the nomination is being created.

### Step 2: Initiate the Nomination Process

1. Click **Create New Nomination** to open the nomination entry screen.  
2. Choose the **nomination type** (e.g., Buy/Sell, Receipt/Delivery Interconnect, Receipt/Delivery Pool, or Storage).

### Step 3: Configure Nomination Details

1. **General Details:**
    2. Specify the **nomination date range** (start and end dates).  
    3. Select the **cycle** (Timely, Evening, Intraday 1, Intraday 2, etc.).  

2. **Point Information:**  
    1. For **Buy/Sell Nominations**, specify the **counterparty** and **contract number**.  
    2. For **Receipt/Delivery Interconnects**, provide details such as **location**, **rate**, and **transport path**.  
    3. For **Storage Nominations**, indicate whether the transaction is an **injection** or **withdrawal**, along with the **storage facility** name and capacity.  

3. **Quantity Details:**  
    1. Enter the nominated volume (in MMBtu or desired unit).  
    2. Allocate volumes across receipt or delivery points, as applicable.

### Step 4: Validate and Submit

1. Click **Validate** to check for errors or inconsistencies in the nomination.  
1. Resolve any validation issues before proceeding.  
2. Once validated, click **Submit** to finalize the nomination.  
1. The nomination is now sent for processing by the pipeline or LDC.

### Step 5: Review and Confirm

1. Access the **Nomination Summary** tab to review the submitted nomination details.  
2. Confirm the status of the nomination (e.g., Confirmed, Scheduled, or Pending).