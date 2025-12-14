# 🎮 GCMS – Game Center Management System

![Made with C#](https://img.shields.io/badge/Made%20with-C%23-blue?logo=csharp&style=flat-square)
![.NET Framework](https://img.shields.io/badge/.NET%20Framework-4.8-brightgreen?style=flat-square)
![SQL Server](https://img.shields.io/badge/Database-SQL%20Server-red?style=flat-square)
![Windows Forms](https://img.shields.io/badge/UI-Windows%20Forms-yellow?style=flat-square)
![License MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square)

GCMS is a powerful C# .NET Framework application designed to streamline and automate the operations of a game center. It handles everything from in-store and take-home game rentals, inventory and product sales, to customer management and administrative controls. Built on a robust SQL Server backend, GCMS ensures secure, efficient, and real-time management of all game center activities.

---

## 📸 Screenshots

Here are some snapshots of GCMS in action:

- **Dashboard:**  
  ![Dashboard](assets/dashboard.png)

- **Store:**  
  ![Rentals](assets/Store.png)

- **Store Management:**  
  ![Store](assets/Store_Management.png)

- **Reports:**  
  ![Reports](assets/Reports.png)

## 🧭 Overview

GCMS allows game centers to efficiently manage:

- In-store and external game rentals (pool, chess, PlayStation, etc.)
- Customer payments, debts, and active rental tracking
- Administrative operations like user management and login logs
- In-store product sales with shopping cart and checkout
- Reporting for sales, rentals, and financial tracking

It provides a **complete end-to-end solution** for daily operations, billing, and reporting.

---

## ✨ Key Features

### 🎯 Rental Management

- Track in-store and external game rentals in real-time
- Handle rental debts and delayed payments
- Monitor all active rentals and rental history

### 🧍‍♂️ Customer & User Management

- Add, edit, activate, or ban renters
- Manage system users and supervisors
- View/export login logs as PDF
- Change username, password, and access levels

### 🏪 In-Store Shop

- Manage categories and products
- Shopping cart and checkout logic
- Track and report daily and total sales

### 📊 Reporting System

- Generate **rental** and **sales** reports
- Export reports to **Excel** or **PDF**

### ⚙️ Administration

- Add/edit games and set rental prices
- Activate/deactivate games dynamically
- Centralized dashboard for all operations

---

## 🧱 Architecture & Technical Concepts

**Multi-layered architecture:**
Presentation Layer → Business Layer → Data Access Layer , Infrastructure Layer

```
/
├── GCMS/                        # Presentation Layer (WinForms UI)
├── GCMS_Business/               # Business Logic Layer
├── GCMS_DataAccess/             # Data Access Layer
├── GCMS_Infrastructure/         # Support  Other Layers
├── Database/                    # Contains The Database Script
├── README.md                    # Project documentation
```

**Core Technologies & Frameworks:**

- C# (.NET Framework 4.8)
- Windows Forms (WinForms)
- SQL Server / T-SQL (variables, CTEs, procedures, transactions)
- ADO.NET for database communication
- App.config for database connection
- Cryptography for secure credentials
- Event Log for application errors
- Asynchronous programming, delegates, and events
- User Controls for reusable UI components

---

## 🗄️ Database Setup

(you can view the database diagram after setting up the database)

1. Open **SQL Server Management Studio (SSMS)**
2. Run the script:
3. Creates all tables, relationships, constraints, and default admin user:
   Username: admin
   Password: admin123

## ⚙️ Configuration

Edit your `App.config` connection string:

```xml
<connectionStrings>
    <add name="GCMS_ConnectionString"
         connectionString="Data Source=.;Initial Catalog=GCMS;User ID=YOUR_USER;Password=YOUR_PASSWORD;"
         providerName="System.Data.SqlClient" />
</connectionStrings>
```

## 🚀 How to Run

1. Clone the repository
2. Open in Visual Studio
   3.Restore NuGet packages (automatic on build)
   4.Update connection string in App.config
   5.Build and run the application

## 🧠 Key Concepts Implemented

- Multi-layered architecture for separation of concerns
- Database normalization, transactions, and constraints
- Event-driven UI with asynchronous programming
- Secure credentials and logging
- Reporting with PDF & Excel export
- Reusable components (User Controls)
- User roles with access validation (Supervisor, Admin, User)
- Interactive reports and dashboards

## 📈 Future Enhancements

- Web & Mobile Front-End
  Extend GCMS beyond Windows Forms with a web or mobile interface for remote access and real-time updates.
- Cloud-Based Database Support
  Enable cloud hosting for scalability, multi-center synchronization, and backup automation.
- Enhanced Reporting
  Customizable reports, automated scheduling, and export to multiple formats (PDF, Excel, CSV).
- Integration with Payment Gateways
  Support online payments for in-store rentals and products to modernize transactions.
- Notification System
  Alerts for overdue rentals, low stock, or upcoming events to streamline management.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

📧 moneebcodebase@gmail.com
🌐 www.linkedin.com/in/moneeb-al-zakoot
💻 https://github.com/moneebcodebase

Feel free to reach out or contribute via GitHub.
