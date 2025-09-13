---
    hide: toc
---

# PQE configuration requirements
The **Prospect Quote Engine (PQE)** involves converting potential customers (new or existing) by offering competitive natural gas supply, pricing plans, and energy efficiency solutions.

To proceed with the PQE process, certain requirements need to be met such as Local Distribution Company (LDC) setup with pool management, with customized rate class, charge, daily quantity type and others. Meeting these requirements are necessary to define customer specifications regarding the natural gas supply and so to configure PQE.

Following are necessary requirements that must be met:
 
- **User permissions:** The user should have administrative or required access rights to configure PQE.
- **[LDC](../ldcs/ldcs_configure.md):** The relevant LDC must be created and configured within the application.
- **[LDC pool](../ldcs/pool_management/configure_pool_management.md):**
Classifies customers for efficient billing and distribution under a LDC.
- **[LDC rate configuration (LDC rate class)](../ldcs/ldcs_rider/configure_ldcs_riders.md):** Define customer categories (e.g., residential/commercial) and delivery terms for tailored billing.
- **[LDC charge definition](../ldcs/charge_definition.md):** Configure fees (flat/variable) and tiered pricing rules for accurate invoicing.
- **LDC daily quantity types**: Configure MDQ, MDN, MDCQ, etc. and daily allocated amount by LDC. 
- **[PZL configuration](../getting_started/configure_pipeline.md):** Set up pipelines, zones, and interconnects for gas transportation.
- **[Index curve/Values](../etrm/configure_indices_and_curves.md):** Link pricing to market indices dynamically (if applicable).
- **[Meter read configuration](../ldcs//ldcs_configure.md#4-meter-read-cycles-tab):** Determine billing cycles based on meter readings for accurate and transparent customer billing.
- **[Supply region](../getting_started/configure_supply_region.md):** Map supply regions to LDC operations for cost tracking.
- **Price method:** A predefined configuration that specifies how the nGenue calculates charges for billing, based on factors like usage, contract terms, or pricing models.

Once met with the requirements, you can proceed to **configure PQE**.

---
