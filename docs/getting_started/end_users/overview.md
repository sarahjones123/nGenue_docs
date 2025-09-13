---
hide:
 - toc
---

<!-- # Understanding end users

The **end users** of nGenue can be anyone who is involved in the natural gas industry, including:

- **Natural gas marketers** - Individuals or companies invloved in buy and sell natural gas.

- **Natural gas producers**: Companies that extract natural gas from the ground.
- **Natural gas distributors**: Companies that transport natural gas to customers.
- **Local distribution companies (LDC)**: These are companies that distribute natural gas to end-use customers.
- **Utilities**: Companies that provide essential services to customers, such as electricity, gas, and water.
- **Pipelines**: Companies that transport natural gas over long distances.

Basically, anyone who is involved in the buying, selling, transporting, or distributing of natural gas could be an end user of nGenue application.


## Key tasks performed by end users

The key tasks that end users perform within the nGenue application depend on their specific role and the module they are using. However, some common tasks may include:

- **Data entry** - Entering data into the system, such as customer information, pricing data, or transaction details.

- **Data analysis** - Analyzing data to identify trends, patterns, and insights.
- **Reporting** - Generating reports to track performance, identify areas for improvement, and make informed decisions.
- **Transaction processing** - Processing transactions, such as sales, purchases, and payments.
- **Customer management** - Managing customer relationships, including handling inquiries and complaints.
- **Inventory management** - Managing inventory levels and tracking stock movements.
- **Regulatory compliance** - Ensuring compliance with relevant regulations and industry standards.

The specific tasks that end users perform will vary depending on their job function and the specific requirements of their organization.

## How are access levels and security settings managed for end users?

Each of nGenue’s software modules is designed for the enforcement of standard security protocols, adhering to several layers of security.

- nGenue recommends a windows-based authentication model for user access to all data. This places access to data directly under the authority of client network administrators. nGenue recommends a network role be set up for all nGenue application users. Within that role, access can be granted as needed at various levels (Read only, Admin, Reporting, etc.).
- Within nGenue, those with the administrator role can create any number of operational user groups that will be using nGenue. Every user interface screen within nGenue is then granted or denied access based on the role to which a user belongs. 
- Within specific user interface screen layouts, certain actions are further restricted based on the permissions granted.
- At the most granular level, the nGenue database allows the use of row level security (RLS) whereby certain users are restricted at the row level based on whether they are part of a given group. 

For example, if Jane Smith works in New Jersey and is not allowed to see information related to Pennsylvania, she can be restricted at the row level (as part of the database architecture) to see only information that is related to New Jersey. Though she has access to an *end user volume* screen, the database would only return data related to New Jersey.

--- -->

# Understanding nGenue end users

nGenue is a comprehensive natural gas software solution used by multiple stakeholders in the natural gas industry. These stakeholders, or end users, play different roles in the natural gas value chain—from production to consumption. Each type of end user interacts with the nGenue platform in specific ways to fulfill their business and operational responsibilities.

## Who are nGenue end users

### 1. Natural gas marketers

**Who they are:**
Natural gas marketers are individuals or companies that buy and sell natural gas. They often act as intermediaries between producers and end-use customers, including utilities and large industrial users.

**Responsibilities:**

* Buy gas from producers or pipelines.
* Sell gas to LDC, industrial users, or retailers.
* Manage pricing, delivery, and contractual obligations.

**How they use nGenue:**

* Enter and manage supply and sales contracts.
* Forecast demand and schedule nominations.
* Track deliveries and generate invoices.
* Monitor regulatory compliance and generate reports.

**Example scenario:**
A marketer contracts to supply 50,000 dekatherms (dth) of gas per month to a factory in Ohio. They use nGenue to track the agreement, forecast delivery volumes, nominate supplies through pipelines, and invoice the customer monthly.

### 2. Natural gas producers

**Who they are:**
These are upstream companies that extract natural gas from underground reserves through drilling and related processes.

**Responsibilities:**

* Produce and process raw natural gas.
* Sell gas to marketers or pipelines.
* Manage output forecasts and nominations.

**How they use nGenue:**

* Track wellhead production.
* Coordinate delivery schedules.
* Monitor storage and pricing trends.

**Example scenario:**
A producer in Texas delivers gas to three buyers. Using nGenue, they forecast output from wells, input daily production figures, match volumes with contracts, and notify pipelines of nominated quantities.

### 3. Natural gas distributors

**Who they are:**
Distributors are responsible for transporting natural gas from pipelines or city gates to residential, commercial, or industrial end users.

**Responsibilities:**

* Maintain regional distribution infrastructure.
* Manage metering, billing, and emergency services.
* Ensure steady, safe delivery of gas.

**How they use nGenue:**

* Monitor customer usage and meter data.
* Generate bills and track payments.
* Schedule maintenance and address outages.

**Example scenario:**
A distributor handles 80,000 residential connections. In winter, gas usage spikes. They use nGenue to pull meter data, calculate bills, and adjust supply nominations accordingly.

### 4. Local distribution company (LDC)

**Who they are:**
LDC are regulated entities that receive natural gas from pipelines at city gates and deliver it to homes and businesses.

**Responsibilities:**

* Manage storage, distribution, and billing.
* Predict demand and nominate gas volumes accordingly.
* Serve residential, commercial, and industrial customers.

**How they use nGenue:**

* Nominate and balance gas deliveries.
* Monitor pipeline capacity and city gate usage.
* Invoice customers based on actual consumption.

**Example scenario:**
An LDC in Illinois anticipates cold weather demand. Using nGenue, they schedule gas withdrawals from storage, send nominations to pipeline operators, and reconcile volumes with metered usage.

### 5. Utilities

**Who they are:**
Utilities are companies (public or private) that deliver essential services such as electricity, water, and gas. In many cases, gas utilities also function as LDC.

**Responsibilities:**

* Ensure affordable, continuous gas supply to consumers.
* Comply with local, state, and federal regulations.
* Maintain pricing transparency and infrastructure.

**How they use nGenue:**

* Manage tariffs, rates, and customer accounts.
* Forecast demand and track delivery performance.
* Generate compliance and regulatory reports.

**Example scenario:**
A municipal utility serving 40,000 households uses nGenue to forecast monthly demand, generate customer bills from meter reads, and submit performance metrics to regulatory agencies.

### 6. Pipeline operator

**Who they are:**
Pipeline operators manage high-pressure pipelines that move gas from production areas to city gates or large end-users across long distances.

**Responsibilities:**

* Operate and maintain interstate/intrastate pipelines.
* Schedule and track gas movements.
* Ensure system safety, integrity, and capacity balancing.

**How they use nGenue:**

* Accept nominations from shippers.
* Monitor flow rates and pressure points.
* Reconcile actual vs. nominated volumes.
* Issue imbalance notices and perform cash-outs if needed.

**Example scenario:**
A pipeline operator receives nominations from multiple LDC. Using nGenue, they allocate capacity, validate nominations, monitor delivery points, and notify marketers of imbalances.

## Summary of interconnection between nGenue end users

| End user | Role and responsibilities| How they interact with others|
|---|---|---|
| Producers| Extract natural gas from underground reserves. Manage production forecasts and delivery commitments.| Sell gas to marketers or directly to pipelines. Coordinate delivery schedules with pipeline operators.|
| Marketers| Buy and sell natural gas. Manage supply contracts, demand forecasts, and customer billing.| Buy from producers, sell to LDC, industrial users, or utilities. Submit nominations to pipelines for transportation. |
| Pipelines| Transport natural gas across long distances via interstate or intrastate pipelines. Manage flow and capacity.| Receive nominations from marketers and LDC. Transport gas from producers to LDC and utilities. Monitor and report imbalances.|
| LDC | Deliver gas from the city gate to homes, businesses, and industrial users. Manage storage, billing, and demand forecasts. | Receive gas from pipelines. Purchase from marketers or producers. Bill end users based on actual usage.|
| Distributors | Operate local pipeline infrastructure. Handle metering, service delivery, and outage response. | Work closely with LDC to ensure timely and safe gas delivery. Maintain customer and meter data for billing and operations. |
| Utilities| Provide essential services like gas, electricity, or water. Maintain infrastructure and regulatory compliance. | Sometimes function as LDC. Use pipeline services and purchase gas via marketers. Coordinate with regulators and customers.|

Each end user leverages nGenue for specific modules and workflows, such as contract management, billing, scheduling, forecasting, trading, and regulatory reporting.

---
