# Understanding pipeline, pipeline locations, and pipeline zones  

Pipelines, pipeline locations, and pipeline zones are essential components for managing the transportation and distribution of gas. Below is an explanation of each term, why they are required, and how they differ from one another.

## Understanding pipeline

A **pipeline** is a physical infrastructure used to transport natural gas from one location to another. It is the backbone of the natural gas supply chain, connecting production fields, storage facilities, and end-users.

### Why it is required

- Facilitates the efficient transportation of natural gas over long distances.  
- Ensures the delivery of gas to markets, storage facilities, and distribution systems.  
- Reduces transportation costs compared to alternatives like trucking.  
- Supports regional and cross-border supply needs.

!!!example "Example"
    A pipeline such as **"Mainline 101"** transports gas from **State A** field to **State B** hubs.

## Understanding pipeline location

A **pipeline location** refers to a specific physical or operational point along a pipeline where gas is measured, transferred, or allocated. It could represent a receipt point (where gas enters the pipeline) or a delivery point (where gas exits the pipeline).

### Why it is required

- Identifies key points for gas transactions such as input (receipt) and output (delivery).  
- Tracks gas volumes for billing, reporting, and balancing purposes.  
- Ensures accurate measurement and allocation of transported gas.

!!!example "Example"
    * **Receipt location:** A production field where gas is introduced into the pipeline.
    * **Delivery location:** A city gate where gas is delivered to a local distribution company (LDC).

## Understanding pipeline zone

A **pipeline zone** is a segment or region of a pipeline defined for operational or commercial purposes. Pipelines are divided into zones to manage transportation contracts, pricing, and capacity allocation.

### Why it is required

- Helps in determining transportation rates and tariffs for specific pipeline segments.  
- Facilitates capacity management and ensures efficient use of the pipeline infrastructure.  
- Supports regulatory compliance and reporting based on geographic or operational boundaries.

!!!example "Example"
    A pipeline is divided into three zones:<br>
        1. **Zone 1:** Production field to the first compressor station.  
        2. **Zone 2:** Compressor station to the storage facility.  
        3. **Zone 3:** Storage facility to the end-user distribution hub.


## **Differences between pipeline, pipeline location, and pipeline zone**  

| **Aspect** | **Pipeline** | **Pipeline location** | **Pipeline zone** |
|---|---|---|---|
| **Definition** | Physical infrastructure for gas transport. | Specific points along the pipeline for receipt or delivery. | Segmented regions of the pipeline for operational or commercial purposes. |
| **Purpose** | Transport gas from one location to another. | Measure, transfer, or allocate gas. | Manage transportation rates, capacity, and contracts. |
| **Scope** | Entire pipeline network. | Individual points on the pipeline. | Sections or regions within the pipeline.  |
| **Example** | "Mainline 101" pipeline. | A receipt point at a production field. | "Zone 2" for the mid-section of the pipeline. |

## Configure pipeline, pipeline location, and pipeline zone

### Prerequisites

* You must have the necessary permissions to add or modify pipeline configuration screen.

### Procedure

#### Step 1: Navigate to PZL configuration screen

1.	Log in to the **nGenue** application.
2.	Click the **Search** icon and enter *PZL* in the search bar.  
3.	Double-click **PZL configuration** to open the respective screen.
![pzl_navigation](./images/pipeline_1.png)
4. The next screen is divided into two sections: **Pipeline selection** and **Supporting pipeline configuration and rates.**
    ![pzl_structure](./images/pipeline_2.png)
    1. The **Pipeline selection** section lists existing pipelines configured where you can either edit, delete the existing pipeline records or create a new one. The table below describes the available icons and their functions:

        | Icons      | Description                          |
        | ----------- | ------------------------------------ |
        | ![alt text](./images/icons/add_record_icon.png)        | Add a new pipeline record |
        | ![alt text](./images/icons/edit_record_icon.png)    | Edit the pipeline record detail. |
        | ![alt text](./images/icons/save_icon.png)        |  Save the pipeline record. |
        | ![alt text](./images/icons/edit_current_icon.png)  | Cancel the updates being made to the pipeline record. |
        | ![alt text](./images/icons/delete_icon.png)  | Delete a pipeline record. |

    2. The **Supporting pipeline configuration and rates** section allows you to perform additional pipeline configurations such as create, edit, or delete pipeline zones, interconnects, rates and pipeline locations.

#### Step 2: Create a new pipeline record

1. In the **PZL configuration** screen, click the **Add pipeline record** button.
![add_ a_record](./images/pipeline_3.png)
2. Enter a name for the legal entity and a unique identifier in the **Legal entity name** and **Code** fields, respectively.
    
    !!! example "Example"

        If the legal entity name is **"ABC legal entity,"** the code could be **"ABCL."**

3. To designate this entity as the default legal entity, select the **"This entity is the default entity"** checkbox. Once selected, this legal entity will automatically be pre-selected whenever a new deal is initiated in the **"Deal Management"** screen. This eliminates the need to manually select a legal entity for each deal, streamlining the deal creation process. Setting a default legal entity is particularly useful for traders that primarily operate under a single entity or have a high volume of transactions associated with a specific legal entity.

## Summary

- **Pipeline**: Represents the entire physical system for transporting natural gas.  
- **Pipeline Location**: Represents specific points where gas enters or exits the pipeline.  
- **Pipeline Zone**: Represents segments or regions within the pipeline for operational or commercial management.

Each of these elements plays a critical role in ensuring the efficient, accurate, and cost-effective transportation of natural gas.
