# Install and configure Microsoft SQL Server Reporting Services (SSRS)

This document provides a comprehensive, step-by-step guide to setting up Microsoft SQL Server Reporting Services (SSRS). It covers the installation of **SQLServerReportingServices.exe** and the configuration of the report server using **Report Server Configuration Manager.** Additionally, you'll learn how to generate reports effectively, ensuring smooth integration with your SQL Server environment.

## Install SQL Server Reporting Services

1. Download the installer from the Microsoft Download Center here: [Microsoft SQL Server 2019 Reporting Services.](https://www.microsoft.com/en-us/download/details.aspx?id=100122)
2. Run the **SQLServerReportingServices.exe** executable file to launch the setup wizard.
1. On the setup wizard's first screen, select **Install Reporting Services** to begin the installation.
   ![post_1](./images/post_1.png)
1. If using a paid edition, enter a valid product key. Alternatively, select the **Free Developer Edition** radio button. Click **Next** to continue.
   ![post_2](./images/post_2.png)
1. Agree to the license terms by selecting the **I accept the license terms** checkbox. Click **Next.**
   ![post_3](./images/post_3.png)
1. You will be reminded that an installed SQL Server is required to configure the SSRS server. At this stage, you will see an option to install Reporting Services. Click **Next.**
   ![post_4](./images/post_4.png)
1. By default, SSRS installs on the **"C:\"** drive. You can change the installation directory if needed.
2. Click **Install** to begin the installation process.
   ![post_5](./images/post_5.png)
   ![post_6](./images/post_6.png)
3. Congratulations! The SSRS is successfully installed.

## Configure the report server using Report Server Configuration Manager

Once SSRS is installed, it's time to complete some basic configurations before using it:

1. Click **Configure report server** to open the **Configuration Manager** screen.
   ![post_7](./images/post_7.png)
2. The **Report Servers Configuration Manager** windows will display the installed SQL server instance.
3. Verify the information is correct. Click **Connect** to establish a connection to the SSRS server.
   ![post_8](./images/post_8.png)
4. In the **Service Account** window, configure the service account for reporting services.
    5. Choose between a *built-in* account or a *custom account* depending on your requirements.
    6. Click **Apply** to save settings.
      ![post_9](./images/post_9.png)

    !!! note "Note"
         If the Apply button is disabled, select **Use another account**, then re-check **Use built-in account**.

5. In the **Web Service URL** window, the default TCP port is set to **80** (can be changed).
2. Click **Apply** to save changes.
   ![post_10](./images/post_10.png)
   ![post_11](./images/post_11.png)

1. Click on the **Database** tab. Here, you create the databases ReportServer and ReportServerTempDB.
    1. Click **Change Database** to select or create a new database.
    ![post_12](./images/post_12.png)
    2. To create a fresh installation of SSRS, leave the **Create a new report server database** radio button checked. Or, select the **Choose an existing report server database** radio button to point Reporting Services to an existing set of databases. Click **Next.**
      ![post_13](./images/post_13.png)
    3. Before proceeding with database creation, it's a good idea to verify that the connection to the SQL Server is successful using your credentials. To do so, click **Test Connection**.
      ![post_14](./images/post_14.png)
    4. If the connection is successful, click **OK.**
      ![post_15](./images/post_15.png)
    5. Next, enter a name for your database.
    6. Keep the remaining fields as default. Click **Next.**
      ![post_16](./images/post_16.png)
    7. In the **Credentials** window, keep the **Authentication Type** as **Service Credentials.**
    8. Click **Next.**
      ![post_17](./images/post_17.png)

    8. In the **Summary** window, verify the information is correct before proceeding with the database creations. If everything looks good, click **Next** to proceed with the database creation.
      ![post_18](./images/post_18.png)
    9. Ensure the steps shows **Success** in the **Progress and Finish** window. Once confirmed, click **Finish** to complete the database creation setup.
      ![post_19](./images/post_19.png)

2. Go to the **Web Portal URL** window and click **Apply.** The SSRS will restart to apply the changes.
   ![post_20](./images/post_20.png)

3. Verify the URL created:
    4. Go to the **Web Service URL** tab, and click on the URL link. You should see the default browser open to the **Report Server** screen.
    ![post_21](./images/post_21.png)
    ![post_22](./images/post_22.png)
    1. Go to the **Web Portal URL** tab, and click on the URL link. You should see the default browser open to the **Reporting Service** screen.
    ![post_23](./images/post_23.png)
    ![post_24](./images/post_24.png)

You have now a fully functional SSRS installation that is ready to deploy reports.

## Configuring the SQL Server Reporting Services

In this step, we'll upload the necessary files to SQL Server Reporting Services and configure them accordingly.

1. Download the following files to your local machine. These files will be available on a SharePoint site provided by your organization. Please contact the nGenue administrator to get the SharePoint link.

    The required files are:  
    **`ReportAPI.zip, nTrackdatastructure.rds, settlementinvoice.rdl`**, and **`Styles.rsd.`**

2. In the SSRS application, go to the **Web Portal URL** section.  
3. Click on the **Web Portal URL** link. This will launch the default browser and take you to the **Reporting Service** homepage.  
   ![post_23](./images/post_23.png)

4. In the **Reporting Service** portal, go to **New (+) > Folder** and create the following folders:
    * DataSource  
    * Datasets  
    * Images  
    * Reports  
   ![post_37](./images/post_37.png)

5. Go to the **DataSource** folder and upload the **`nTrackdatastructure.rds`** file.  
6. Now, configure the **`nTrackdatastructure.rds`** file by doing the following:  
    1. Click on **More info** and choose **Manage.**  
       ![post_38](./images/post_38.png)  
    2. Under the **Connection** tab, enter the following details in the **Connection string** field:  
        * **Data Source:** Provide your server instance name. If you’re unsure, you can find it on the SQL Server Management Studio (SSMS) login screen.  
        * **Initial Catalog:** Enter the target database name.  
         ![post_39](./images/post_39.png)  
    3. In the **Credentials** tab, choose **Windows user name and password.**  
    4. Enter your system username and password, then click **Test connection** to verify.  
    5. If the connection is successful, click **Apply** to save the settings.  
       ![post_40](./images/post_40.png)

7. Return to the **Home** page.  
8. Navigate to the **Datasets** folder and upload the **`styles.rds`** file.  
9. Configure the **`styles.rds`** file:  
    1. Click on **More info** and select **Manage.**  
    2. Go to the **Data Sources** tab and select the **`nTrackDataSource`** file from the **DataSource** folder.  
       ![post_41](./images/post_41.png)  
    3. Click **Apply** to save the configuration.  

10. Go back to the **Home** page and open the **Reports** folder.  
11. Upload the **`settlementinvoice.rdl`** file.  
12. Configure the **`settlementinvoice.rdl`** file:  
    1. Click on **More info** and choose **Manage.**  
       ![post_42](./images/post_42.png)  
    2. In the **Data Sources** tab, browse and select **`nTrackDataSource`** from the **DataSource** folder.  
       ![post_43](./images/post_43.png)  
    3. In the **Shared datasets** tab, browse and select **`Styles`** from the **Datasets** folder.  
       ![post_44](./images/post_44.png)  
    4. Save the settings.  

13. Return to the **Home** page.  
14. Open the **Reports** folder and click on the uploaded **`settlementinvoice.rdl`** file.  
15. Enter the required parameters to run the report.  
16. Click on **View Report**. The report should be generated successfully.  
   ![post_45](./images/post_45.png)  
   ![post_46](./images/post_46.png)


## Enable Microsoft Internet Information Services (IIS) components

nGenue requires that IIS and specific IIS components be enabled on supported Windows operating systems. The setup will not proceed if IIS is not detected and specific IIS components are not enabled.

To enable IIS and the required IIS components on Windows Server 2016, Windows Server 2019, and Windows Server 2022, complete the following steps:

1. Open **Control Panel** and click **Programs >** **Programs and Features > Turn Windows features on or off.**
   ![post_25](./images/post_25.png)
2. Enable the following services:
    3. **.NET Framework 3.5 (includes .NET 2.0 and 3.0).** 
        * Expand the **.NET Framework 3.5 (includes .NET 2.0 and 3.0)** feature and select all sub-options.
    4. Enable  **.NET Framework 4.8 Advanced Services** feature and select all its sub-options.
    5. Enable **Internet Information Services (IIS).**
        * Expand **Internet Information Services (IIS)** feature and select all available options. 
    7. Similarly, enable **Internet Information Services Hostable Web Core** service.
      ![post_26](./images/post_26.png)

8. Once all the required features are selected, click **OK.** 
9. Windows will apply the changes, and you may be prompted to restart your computer for the features to take effect.

## Add Report API folder to IIS

After you enable IIS and the required features, you will need to add the **Report API** folder to the IIS server. To do so, follow the below steps:

1. Navigate to the IIS web root folder: `C:\inetpub\wwwroot`
2. Copy the **ReportAPI.zip** file an save it in your desktop or preferred location. This file which can be found in the SharePoint foder shared by nGenue admin team previously (Refer step-1 under the [Configuring the SQL Server Reporting Services](ssrs_configure.md#configuring-the-sql-server-reporting-services) section).
3. Unzip the **ReportAPI.zip** file. Copy the ReportAPI folder.
3. Now, go to `C:\inetpub\wwwroot.` This is the default folder where IIS hosts its websites.
4. In the `wwwroot` folder, paste the ReportAPI folder you copied earlier.

## IIS Manager configuration

To configure IIS:

1. Run the **IIS Manager** by pressing the **Windows** key, type **IIS,** and select **Internet Information Services (IIS) Manager** from the search results.
2. In the **Connections** pane, right-click the **Sites** node in the tree view, and then click **Add Web Site.**
   ![post_27](./images/post_27.png)
3. In the **Add Web Site** dialog box, type a *friendly name* for your Web site in the **Web site name** box. Example: *Report API.*
4. In the **Physical path** box, type the *physical path* of the Web site's folder, or click the **browse** button (...) to browse the file system to find the folder.
5. Type **5722** as the port number in the **Port** text box. This will ensure that the Report API is accessed through this specific port. 
6. After setting the port, click **OK** to complete the configuration. 
   ![post_28](./images/post_28.png)

## Configure IIS Application Pools

To set up the IIS Application Pools:

1. In the left navigation panel of **IIS Manager**, click on the **Application Pools** node.  
2. From the list of application pools, select **Report API**.  
3. In the **Actions** pane, click **Advanced Settings** to open the pool's configuration window.  
   ![post_29](./images/post_29.png)

4. In the **Advanced Settings** window, scroll to **Process Model > Identity** to view more options.  
   ![post_30](./images/post_30.png)

5. Change the identity to **Custom account**, then click the **Set** button.  
   ![post_31](./images/post_31.png)

6. In the **Set Credentials** pop-up, enter your system *username* and *password*, then click **OK**.  
   ![post_32](./images/post_32.png)

7. The identity should now reflect the username you provided.  
   ![post_33](./images/post_33.png)

8. Change the **Load User Profile** setting from *True* to **False**.  
9. Also, change the **Ping Enabled** setting from *True* to **False**.  
   ![post_34](./images/post_34.png)

10. Click **OK** to save your updates.

## Configure `web.config` file

With IIS now configured, the next step is to update the `web.config` file so that the Report API can connect correctly to your database and report server.

1. Navigate to the following path to find the `web.config` file: **Local Disk (C:) > inetpub > wwwroot > Report API > Report API**  
2. Right-click on the `web.config` file and open it using **Notepad++** (or any preferred text editor).  
3. Locate the `<connectionStrings>` section and modify it with the following values:  

    ```
    connectionString="Server=~<Your_server_instance_name>; 
    Database=<Your_database_name>; 
    User Id=<Your_system_username>; 
    Password=<Your_system_password>"
    ```

    ![post_47](./images/post_47.png)

    where:

    * `<Your_server_instance_name>`: Provide the name of your SQL server instance. Example: NGILAP0723063  
    * `<Your_database_name>`: Specify the target database name. Example: nGenueMainlineQA  
    * `<Your_system_username>`: Input your system username. Example: dipender.sharma  
    * `<Your_system_password>`: Input your system password.  

4. Find the `<reportServerUrl>` tag and replace its value with the **Web Services URL** listed in the **Report Server Configuration Manager**.  
   ![post_21](./images/post_21.png)  
   ![post_48](./images/post_48.png)

5. Save the changes to the `web.config` file.

## Browse the website

With the application pool settings configured, you can now restart the website and verify if the website is working.

1. In the **IIS Manager's** left navigation tree, expand the **Sites** node and select **Report API.**
2. Select **Restart** under the **Actions** pane. This will restart the site and apply all the changes. 
   ![post_35](./images/post_35.png)
3. Browse the Report API website, by clicking  on **Browser *:5722 (http)** link under **Actions > Browser Website** section.
   ![post_36](./images/post_36.png)
4. A web screen should open in your browser. This confirms that the Report API is now properly configured and running on port **5722.**
   ![post_49](./images/post_49.png)
   ![post_50](./images/post_50.png)

---   