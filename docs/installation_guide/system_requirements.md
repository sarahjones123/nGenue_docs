# nGenue system requirements

This document outlines the detailed system requirements for installing and running the nGenue application. The specifications are categorized for **small (S), medium (M), and large (L)** end-user database sizes, allowing users to provision infrastructure tailored to their business needs.

## 1. Database sizes

Before planning infrastructure, it's essential to understand the size of your database. Database size influences the choice of storage, hardware resources, backup strategies, and overall scalability. Accurately estimating this ensures you provision enough capacity without overspending.

| Database size | Storage range |
|---|---|
| Small (S) | 10 GB – 500 GB |
| Medium (M) | 500 GB – 2 TB |
| Large (L) | 2 TB – 10 TB or more |

## 2. Hardware requirements

The hardware setup directly impacts the performance, responsiveness, and reliability of the nGenue system. Proper sizing according to database load helps avoid bottlenecks and ensures smooth operations even under heavy use.

### 2.1 Processor speed and type

A strong processor ensures that SQL operations, reporting, and large transactions are processed efficiently.

| Database size | Processor speed | Processor type | Core count |
|---|---|---|---|
| Small (S) | 2.0 GHz min | Dual-core or quad-core processor | 2–4 cores |
| Medium (M) | 2.5 GHz min | Quad-core or hexa-core processor | 4–6 cores |
| Large (L) | 3.0 GHz min | High-performance octa-core or more processor| 8 cores or more |

### 2.2 Memory (RAM)

Sufficient RAM allocation ensures faster query processing and reduces reliance on disk-based operations.

| Database size | Recommended memory | Minimum memory |
|---|---|---|
| Small (S) | 8 GB | 4 GB |
| Medium (M) | 16 GB | 8 GB |
| Large (L) | 32 GB or more | 16 GB |

### 2.3 Storage (Disk type and size)

Fast and redundant storage solutions improve database I/O and backup speeds, while preventing data loss.

| Database size | Storage size | Disk type  | Disk configuration |
|---|---|---|---|
| Small (S) | 100 GB to 500 GB | SSD (recommended) | Single disk or RAID 1 |
| Medium (M) | 500 GB to 2 TB | SSD (primary), HDD (backups) | RAID 5 or RAID 10 |
| Large (L) | 2 TB to 10 TB or more | SSD (primary), RAID 10 (for high performance) | RAID 10 or RAID 6 |

## 3. Operating System (OS) requirements

The choice of operating system influences system security, stability, and compatibility with the latest software releases.

| Database size | Supported Windows OS | Supported Linux OS |
|---|---|---|
| Small (S) | Windows Server 2016 or later, Windows 10 Pro | RHEL 7 or later, Ubuntu 18.04 or later |
| Medium (M) | Windows Server 2016 or later | RHEL 7 or later, Ubuntu 20.04 or later |
| Large (L) | Windows Server 2019 or 2022 (recommended) | RHEL 7/8, Ubuntu 20.04/22.04, CentOS 8/9|

## 4. Software requirements
Correct database and SQL server configurations help avoid performance issues and ensure data security.

### 4.1 DB server version requirements

Selecting the correct SQL server version ensures long-term support and security patch availability.

| Database size | Recommended version  | Minimum version |
|---|---|---|
| Small (S) | SQL Server 2016 or 2017 Standard edition | SQL Server 2014 Standard edition |
| Medium (M) | SQL Server 2017 or 2019 Standard edition | SQL Server 2016 Standard edition |
| Large (L) | SQL Server 2022 or 2019 Enterprise edition | SQL Server 2017 Standard edition |

### 4.2 SQL server configuration details

Optimizing SQL Server configurations enhances throughput and reduces downtime.

| Database size | MAXDOP | Memory allocation | TempDB configuration | Backup strategy  |
|---|---|---|---|---|
| Small (S) | 4 | 4 GB–8 GB | 2 data files (1 GB each) | Daily full backups, hourly transaction log backups |
| Medium (M) | 8 | 8 GB–16 GB | 4 data files (2 GB each) | Daily full, hourly log backups, weekly differential backups |
| Large (L) | 16+ | 16 GB or more | 8 data files (5–10 GB each) | Multiple full daily backups, frequent transaction log, weekly differential|

## 5. Network requirements

A fast and redundant network setup ensures high availability and uninterrupted data flow.

| Database size | Bandwidth requirement | Latency expectation | Redundancy recommendations |
|---|---|---|---|
| Small (S) | Minimum 100 Mbps | Under 50 ms | Dual network interfaces if possible |
| Medium (M) | 1 Gbps recommended | Under 30 ms | Redundant NICs and failover setups |
| Large (L) | 10 Gbps recommended | Under 20 ms | Redundant NICs, load balancing |

## 6. Security requirements

Security considerations help safeguard sensitive data, meet compliance standards, and prevent unauthorized access.

| Database size | Antivirus/Endpoint protection | OS and SQL patching frequency | Access control recommendations |
|---|---|---|---|
| Small (S) | Standard endpoint protection suite | Monthly  | Strong passwords, limited SQL access |
| Medium (M) | Advanced endpoint protection with monitoring| Bi-weekly  | Role-based access controls (RBAC) |
| Large (L) | Advanced security suite with real-time alerts| Weekly  | Multi-factor authentication (MFA) |

## 7. Backup and disaster recovery

Proper backup policies and disaster recovery setups prevent data loss and ensure business continuity during system failures or data corruption events.

| Database size | Backup frequency | Retention policy | Disaster recovery setup |
|---|---|---|---|
| Small (S) | Daily full, hourly transaction logs | 7-day retention for full backups | Local backups and offsite weekly copies|
| Medium (M) | Daily full, hourly logs, weekly differentials | 30-day retention for full backups | Offsite backups with daily sync |
| Large (L) | Multiple daily full backups, frequent logs | 90-day retention, monthly archival | Hot standby systems and geo-replication|

---