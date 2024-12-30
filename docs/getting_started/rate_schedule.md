---
hide:
 - toc
---

# Rates and tariff overview

Rates and tariffs are crucial for calculating settlements and nominations as they define the applicable charges and their corresponding rates. Rate schedules and rates are located within the **PZL configuration** screen and are used to determine fuel losses, commodity charges, pipeline fees, and other associated costs. It provides a comprehensive framework for defining charge components, calculating fuel usage, and establishing rate schedules tailored to different customer segments and service agreements. By leveraging this module, users can ensure accurate billing, streamline cost allocation, and maintain compliance with regulatory and contractual requirements.

## Prerequisites

Before configuring **Rates and tariff**, ensure the following are in place:

* **Pipeline setup:** The associated pipeline and its locations (e.g., points, interconnects, city gates) are correctly configured.
* **Charge definitions:** All applicable charges (e.g., transportation, storage, and balancing fees) are clearly identified and outlined.
* **Rate schedules:** The rate schedules defines the rate schedules and applicable charge types for the selected pipeline. These would include both firm and interruptive services for transportation, storage, park and loan and other pipeline services.


## Procedure to configure

When building tariff information for a [new pipeline,](./pipeline.md) start by defining the charge definitions, including settlement types and parameters. Then, configure the rate schedule by adding charge definitions to specific rate schedules. Finally, populate the fuel and rates tab with the necessary fuel rates and associated rate schedule charges.

For detailed step-by-step instructions on configuring a new pipeline, refer to [How to configure pipeline, pipeline location, and pipeline zone.](./pipeline.md)

The **Rates and tariff** are defined in the **PZL configuration** screen on three rate related tabs:

|Charge definitions | Rate schedules | Fuel and rates |
|--- |--- |---|
|1. Focuses on establishing charge parameters critical for settlement and nomination calculations.<br> 2. Define the charge categories, such as commodity charges, pipeline fees, or additional tariffs charges.<br> 3. Specify the settlement type to ensure proper allocation and calculation of charges. | 1. This tab is essential for defining rate schedules based on the pipeline services for transport, storage or other pipeline offerings.<br> 2. Specify the rate schedule according to the applicable pipeline tariff and contract. Capture effective start and end dates. | 1. Captures the detailed fuel and rate information.<br>2. Input the applicable charges for each service offering or transaction.<br>3. Specify fuel rates to account for transportation losses or adjustments.<br>4. Enter rates for accurate settlement calculations. |

### Step 1: Define the charge definitions

The **Charge definitions** tab lists and defines the various charges applicable to a selected pipeline. The data captured in this tab is the basis for defining how a rate schedule is applied to nominations and settlements. The details help determine when a charge is applied: seasonally, against usage, as a fixed fee, as part of storage or transport, etc.

### Step 2: Setup rates schedules

The **Rate schedules** simply defines the rate schedules and applicable charge types for the selected pipeline. These would include both firm and interruptive services for transportation, storage, park and loan and other pipeline services. 


### Step 3: Setup fuels and rates

The **Fuel and rates** tab is the final step in building out the rate schedules. This tab captures the applicable charges (including in-kind fuel) that is updated each time a new rate is published by the pipeline. It allows users to input charges for various services or transactions, specify fuel rates to account for transportation losses, and applicable rates for precise settlement calculations.

The **Fuel and rates** tab contains three sub-tabs: *Pipeline charges rate data, test rate calculations, and rate matrix.*

#### Pipeline charges rate data

This tab provides two core functionalities: filtering existing rates and manage rates.<br>

* **Filtering existing rates:** You can apply filters to refine rate data displayed.
* **Manage rates:** Use the **Add** or **Edit** button located under the filter section to manage rates.
<br>

#### Test rate calculation

The **Test rate calculations** tab allows users to verify the effective rates based on the charges configured in the Pipeline Charges Rate Data. Users can input specific details and calculate the effective rate for accuracy before applying it to transactions.
<br>

#### Rate matrix

The **Rate matrix** tab utilizes the required filters to quickly create rate records based on the receipt and delivery types (location, zone, etc.).  Please note that all filters must be selected to utilize this feature.