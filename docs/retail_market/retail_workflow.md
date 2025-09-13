---
hide:
 - toc
---

# Retail workflow

Let's explore the retail workflow in nGenue with the following diagram:

```puml

@startuml

scale max 1000 width

skinparam backgroundColor #F5F5F3
skinparam Shadowing 10
skinparam BoundaryBackgroundColor #ffffff
skinparam BoundaryBorderColor #4ca0d9
skinparam DiagramBorderColor #F5F5F3
skinparam BoundaryFontColor #0079c9
skinparam BoundaryFontStyle bold
skinparam defaultTextAlignment center
skinparam SequenceMessageAlign center
skinparam ReferenceBorderThickness 2
skinparam padding 2
skinparam roundCorner 20
skinparam ActorShadowing false
skinparam TitleFontColor #000000
skinparam TitleFontSize 18
skinparam BoxPadding 10

skinparam default {
  FontName Inter-SemiBold, SansSerif, sans-serif
  FontStyle plain
  FontSize 12
}

skinparam actorStyle awesome

skinparam sequence {

'Users and boundries (DBS for example)
    ActorBorderThickness 1
    ActorBorderColor ##0079c9
    ActorBackgroundColor #0079c9
    ActorFontColor #0079c9
    ActorFontName Roboto, SansSerif, sans-serif
    ActorFontStyle bold

    AgentBackgroundColor red

'Arrows
    ArrowFontColor #616161
    ArrowColor #616161
    ArrowThickness 2

    RectangleBorderThickness 3


'Capability
    BoxFontColor #000000
    BoxFontName Roboto, SansSerif, sans-serif
    BoxFontStyle bold
    BoxFontSize 14

    BoxBackgroundColor #e9eaeb
    BoxBorderColor transparent

    BoundaryBackgroundColor #1281ac
    BoundaryBorderColor #1281ac
    BoundaryFontColor #1281ac
    BoundryFontName Roboto, SansSerif, sans-serif
    BoundaryStereotypeFontColor #616161

    ClassBorderColor #1281ac
    ComponentBorderColor #1281ac

' Lifelines and dividers/separators
    DividerBackgroundColor #f5f5f5
    DividerBorderColor #a2a2a2
    DividerBorderThickness 1
    DividerFontColor #616161
    DividerFontName Roboto, SansSerif, sans-serif

    LifeLineBorderColor #4ca0d9

' Loops but not the title text
    GroupBorderColor #4CA0D9
    GroupBorderThickness 1
    GroupFontName Roboto, SansSerif, sans-serif
    GroupFontColor #0079c9
    GroupBackgroundColor #D9EBF6
    GroupBodyBackGroundColor #FFFFFF

'Title text for loops
    GroupHeaderFontColor #000000
    GroupHeaderFontName Roboto, SansSerif, sans-serif
    GroupHeaderFontStyle bold

'Services
    ParticipantBorderColor #4ca0d9
    ParticipantBackgroundColor white
    ParticipantFontSize 12
    ParticipantFontStyle bold
    ParticipantFontName Roboto, SansSerif, sans-serif
    ParticipantFontColor #0079c9
    ParticipantBorderThickness 1
    StereotypeFontColor #616161

    ReferenceBorderThickness 2


'   SwimlaneBorderThickness 2

    TitleFontColor #1281ac
    TitleFontName Roboto, SansSerif, sans-serif
    TitleFontSize 18
    TitleBorderThickness 5

}
skinparam interface {
  BackgroundColor #FFFFFF
  BorderColor #1281ac
  BorderThickness 1
  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 14
  FontStyle bold

}

skinparam note {

  BackgroundColor #d9ebf6
  BorderColor #1281ac
  BorderThickness 1

  RoundCorner 0

  StartColor #00548c
  BarColor #00548c
  EndColor #00548c

  FontColor #000000
  FontStyle plain
  FontSize 12
  FontName Roboto, SansSerif, sans-serif

}

skinparam activity {

  BackgroundColor #FFFFFF
  DiamondBackgroundColor #FFFFFF
  DiamondBorderColor #1281ac
  BorderColor #1281ac
  BorderThickness 4

  DiamondFontColor #1281ac
  DiamondFontName Roboto, SansSerif, sans-serif
  DiamondFontSize 12

  StartColor #1281ac
  BarColor #1281ac
  EndColor #1281ac

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 14
  FontStyle bold

}

skinparam rectangle {

    BorderColor #4ca0d9
    BackgroundColor white
    FontSize 12
    FontStyle bold
    FontName Roboto, SansSerif, sans-serif
    FontColor #0079c9
    BorderThickness 1

  StartColor #00548c
  BarColor #00548c
  EndColor #00548c

}

skinparam cloud {

  BackgroundColor #FFFFFF

  BorderColor #1281ac
  BorderThickness 4

  StartColor #1281ac
  BarColor #1281ac
  EndColor #1281ac

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 14
  FontStyle bold

}

skinparam class {

  BackgroundColor #FFFFFF

  BorderColor #1281ac
  BorderThickness 1

  StartColor #1281ac
  BarColor #1281ac
  EndColor #1281ac

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 14
  FontStyle bold



}

'For services
skinparam component {

    BorderColor #4ca0d9
    BackgroundColor white
    StereotypeFontColor #616161

    FontSize 12
    FontStyle bold
    FontName Roboto, SansSerif, sans-serif
    FontColor #0079c9
    BorderThickness 1

}



'databases
skinparam database {

  BackgroundColor #ffffff

  BorderColor #4ca0d9
  BorderThickness 1

  FontColor #0079c9
  FontName Roboto, SansSerif, sans-serif
  FontSize 12
  FontStyle bold

}


'For Capabilities
skinparam frame {

  StereotypeFontColor #616161

  BorderColor #4CA0D9
  BorderThickness 1
  FontName Roboto, SansSerif, sans-serif
  FontColor #0079c9
  FontStyle bold
  BackgroundColor #FFFFFF
  BodyBackGroundColor #FFFFFF
}

' External systems in architecture diagrams
skinparam node {

  BorderThickness 1
  BackgroundColor #FFFFFF
  BorderColor #4ca0d9

  FontColor #0079c9
  FontName Roboto, SansSerif, sans-serif
  FontSize 12
  FontStyle bold

}

skinparam package {
  BorderThickness 1
  BackgroundColor #FFFFFF
  BorderColor #1281ac

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 12
  FontStyle bold

}

' Activity diagrams, for different capabilities

skinparam partition {

  BackgroundColor #f3f3f3

  BorderColor #1281ac
  BorderThickness 2

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 12
  FontStyle bold

}


skinparam file {
  BorderThickness 1
  BackgroundColor #FFFFFF
  BorderColor #1281ac

  FontColor #1281ac
  FontName Roboto, SansSerif, sans-serif
  FontSize 12
  FontStyle bold

}

' ref (erences)
skinparam sequenceReferenceBorderColor #4ca0d9
skinparam sequenceReferenceBackgroundColor #ffffff
skinparam sequenceReferenceHeaderBackgroundColor #d9ebf6

skinparam queue {
    BackgroundColor #ffffff
    BorderThickness 1
    BorderColor #4ca0d9
    FontColor #0079c9
    FontStyle italic
}

skinparam legend {
BackgroundColor #ffffff
}

@startuml

actor Supplier
actor Customer

Supplier -> (LDC Configuration): Configures Local Distribution Companies (LDCs).
note right of (LDC Configuration): Defines charge definitions and rate classes.
  
(LDC Configuration) --> (Pool Configuration): Sets up pools for gas distribution.

(Pool Configuration) --> (End User Configuration): Associates end users with pools.
note right of (End User Configuration): Configures pricing agreements and stores addresses.

(End User Configuration) --> (Price Agreement): Defines price agreements.

(End User Configuration) --> (Facility Setup): Links end users to facilities.

rectangle "Data Management" {
  (Facility Setup) --> (Meter Reading): Records gas consumption.
  (Meter Reading) --> (Invoice Generation): Generates invoices.
  (Invoice Generation) --> (Customer): Customer receives invoices and makes payments.
}

@enduml


```

## Workflow explanation

The **nGenue retail gas workflow** outlines the step-by-step process involved in configuring gas distribution, managing customers, and handling billing. The workflow follows a structured approach, starting from **supplier-side configurations** to **customer invoicing and payments**.

1. **LDC configuration**
    1. The **supplier** configures **Local Distribution Company (LDC)** to define charge definitions and rate classes.
    1. This step ensures that gas distribution is categorized appropriately based on pricing structures and market regulations.

2. **Pool configuration**
    1. Pools are set up to manage **gas distribution** efficiently.
    1. A pool groups multiple end users, allowing streamlined gas allocation and usage tracking.

3. **End user configuration**
    1. End users (customers receiving gas supply) are assigned to respective pools.
    1. This step involves configuring **pricing agreements** and **storing end-user addresses**.

4. **Price agreement**
    1. These agreements ensure transparency in billing and compliance with regulatory standards.
    1. Price agreements are defined based on **contractual terms, market rates, and business policies**.

5. **Facility setup**
    1. Facilities (customer locations) are linked to respective **end users**.
    1. This setup is necessary to track gas consumption at a granular level for accurate billing.

6. **Data management**
This section handles the operational aspects of **meter readings, invoicing, and customer billing**.

    1. ***Meter reading***
        - Gas consumption is recorded based on periodic **meter reads**.
        - These readings form the foundation for **accurate billing and usage tracking**.

    2. ***Invoice generation***
        - Based on the recorded meter readings, invoices are generated.
        - The system applies the appropriate charges, taxes, and rate calculations as per the **LDC configurations and price agreements**.

    3. ***Customer interaction***
        - The **customer receives invoices** for the gas consumed.
        - They **make payments** based on the generated invoices, completing the billing cycle.

## Conclusion

This workflow ensures an **organized, efficient, and transparent** approach to retail gas distribution. By systematically configuring LDCs, pools, end users, and facilities, the system streamlines the entire process from **gas distribution to invoicing and payment collection**.
