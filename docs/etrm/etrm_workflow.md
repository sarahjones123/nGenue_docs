---
hide:
 - toc
---

# ETRM workflow

Let's understand the workflow of ETRM in nGenue through below flow diagram:

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

start

:Create a deal;
note right
The process starts with creating a deal and verifying configurations.
end note

if (Are configurations complete?) then (No)
  :Configure prerequisites;
  note right
  Prerequisite configurations are mandatory before proceeding.
  
  Prerequisites include:
  - Configure legal entity, business unit, strategy, and portfolio
  - Configure supply region
  - Configure pipeline, pipeline location, and pipeline zone
  - Configure counterparty
  - Create rate schedule
  end note
  :Configurations completed;
else (Yes)
  :Proceed to deal type selection;
endif

if (Deal type?) then (buy deal)
  :Create buy deal;
else (sell deal)
  :Create sell deal;
endif

:Create transport contract;
note right
Defines terms for natural gas movement.
end note

:Proceed to nominations;
  repeat
  :Select nomination type;
  note right
  Nomination types available:
  
    - **Buy nominations**: Requests related to purchased natural gas being transported or stored.
    - **Sell nominations**: Requests related to sold natural gas being transported to the buyer.
    - **Interconnects**: Nominations specifying natural gas flow between different pipeline systems or facilities.
    - **Pool and storage**: Nominations involving injection into or withdrawal from storage facilities or pooling points.
  end note
  :Process nomination;
  repeat while (More nominations?)

:Finalize nomination;

:Perform settlement process;
note right
Reconcile financial and operational data.
end note

:Print settlement report;

stop
@enduml
```

## Workflow explanation

Here is the detailed workflow sequence for the ETRM process, reflecting the flow described in the above diagram.

1. **Create a deal**

    1. The process begins when the trader initiates [creating a deal](../deal_management/create_deal.md).
    2. The system verifies whether all prerequisite configurations are completed.

2. **Check configurations**<br>
If configurations are incomplete, the trader must complete them:
    {% include-markdown "../variable/etrm_prerequisities.md" %}
    <br>

    Once configurations are complete, the system allows proceeding to deal type selection.

3. **Select deal type**

    1. Based on the trader's choice, the system creates either:
        1. [Buy deal:](../deal_management/overview.md) Represents the purchase of natural gas.
        1. [Sell deal:](../deal_management/overview.md) Represents the sale of natural gas.

4. **Create transport contract**

    1. After selecting the deal type, the trader creates a [transport contract.](../getting_started/transport_contract.md)
    2. The contract outlines the terms and conditions for transporting natural gas.

5. **Proceed to nominations**<br>
The system moves to the [nominations](../etrm/pipeline_scheduling.md) phase to schedule the movement of natural gas.

6. **Select nomination type**

    1. Traders select from various nomination types:
        1. **Buy nominations**: Requests for purchased natural gas being transported or stored.
        2. **Sell nominations**: Requests for sold natural gas being transported to buyers.
        3. **Interconnects**: Specify gas flow between different pipeline systems or facilities.
        4. **Pool and storage nominations**: Include injection into or withdrawal from storage facilities or pooling points.

7. **Create and finalize nomination**
    1. The system processes the selected nominations, allowing for adjustments if necessary.
    2. Once all required nominations are complete, the system finalizes them.

8. **Perform scheduling process**<br>
The system reconciles financial and operational data as part of the pipeline scheduling process. [Learn more.](../etrm/pipeline_scheduling.md)

9. **Print settlement report**<br>
The workflow concludes with the trader printing a settlement report for record-keeping and compliance.

---

## Related topics that you might be interested

<div class="grid cards" markdown>

-   :material-format-paint:{ .lg .middle } __Understanding ETRM__

    ---

    Understand the basics of ETRM and what are its key components.


    [:octicons-arrow-right-24: Know more](./index.md)

-   :material-format-paint:{ .lg .middle } __How nGenue addresses ETRM aspect__

    ---

    Learn how nGenue addresses ETRM aspect.

    [:octicons-arrow-right-24: Know more](./addressing_etrm_aspects.md)    

</div>