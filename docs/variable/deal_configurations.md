2. Define **Transaction information**:  
    1. **Deal type:** Choose the deal type, i.e., buy or sell deal.
    1. **Deal date:** Input the start and the end date of the deal.
    1. **Trader:** Select the trader from the dropdown list and the trading initiated date.
    1. **Delivery schedule:** Define the delivery schedule, including start and end dates, and specify daily or monthly volumes.
    1. **Volume units:** Enter the gas volume in the appropriate unit (in MMBtu or other units) and define the Btu rate.
    1. **Pricing type:** Enter the relevant pricing terms, including pricing type such as deal based, or location based, and specify daily or monthly pricing period.
    1. **Supply region:** Choose the supply region for the pipeline from the dropdown list.
    1. **Deal terms:** Select the relevant deal terms, including deal source type, deal status (e.g., active, cancelled), group identifier and deal group type from the dropdown list.

        !!! note "Note"

            The **Deal Source** field defaults to **Manual**. If deals are fetched through an integration, select the appropriate integration type from the dropdown. 

    1.  Enter the last updated date and time and the details of the person who made the changes in the **Date/Time Updated** and **Updated By** fields, respectively.  

    1. The **Date/Time Created** field is automatically populated based on the deal's configuration. If you are creating the deal, enter your name in the **Created By** field, or specify the appropriate person.
    
2. Assign **Pipeline and location**:  
    1. **Pipeline:** Select the pipeline with which the deal is carried out.
    1. **Pipeline path:** Specify the pipeline path for gas transportation by selecting from the available options.
    1. **Meter id:** Select the **Use meter id** checkbox to enable the **Meter #** field. This will assign a unique identifier at an user location or a point in the distribution network. This is useful to track and manage consumption, billing, and other operational details.

1. Assign **Counterparty configuration**:  
    1. **Counterparty:** Select the counterparty from the dropdown list.
    1. **Counterparty details:**
        1. Select the counterparty relevant information such as legal entity, and business unit.
        2. Select the associated contract and agreement.

1. Define **Report groupings**:  
    1. **Legal entity, business unit, portfolio:** Select the relevant report groupings involved in the deal including legal entity, business unit and portfolio.
    1. **Strategy:** Choose the associated strategy for the above portfolio from the drop down list.

1. Additional **Deal configurations**:
    1. **This deal is a template**: Select the **This deal is a template** checkbox to designate the current deal as a template within the nGenue application. When this option is selected, the deal becomes a reusable framework that can be copied or referenced to streamline the creation of similar deals in the future.
    2. **Physical autonom**: Enable the **Physical autonom** checkbox to enable the **Autonom location** and **Autonom contract** fields. These automatically generate and submit nominations based on predefined deal parameters, reducing manual input and associated errors.
    3. Additional **deal settings:**
        1. Select the relevant deal settings checkboxes from the list, including:  
            * **Base load deal**
            * **Allow scheduling**
            * **Child deal allocation**
            * **Is deal locked**
            * **Trigger rights**
            * **Evergreen deal**

6. **Validate and confirm:**
    1. Review all entered details for accuracy.
    1. Provide any additional terms or conditions related to the deal including deals confirmation date/time stamp, and confirmation number.
    1. Click **Save.**

7. You will navigate to the **Deal summary** tab where a concise overview of a deal is displayed.