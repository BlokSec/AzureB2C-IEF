# AzureB2C-IEF
Repository for Azure B2C Identity Experience Framework

# Instruction to setup BlokSec for Azure B2C Signup and Signin
## Overview
1. [Register application on BlokSec](./README.md#1-register-application-on-bloksec)
2. [Configure policy key on Azure B2C](./README.md#2-configure-policy-key-on-azure-b2c)
3. [Register application on Azure B2C](./README.md#3-register-application-on-azure-b2c)
4. [Upload Custom IEF xml files](./README.md#4-upload-custom-ief-xml-files)
5. [Update client application](./README.md#5-update-client-application)

## 1. Register application on BlokSec
Refer [Azure B2C - Partner Integration - BlokSec](https://docs.microsoft.com/en-us/azure/active-directory-b2c/partner-bloksec?pivots=b2c-custom-policy#part-1---create-an-application-registration-in-bloksec) to register an application on BlokSec

## 2. Configure policy key on Azure B2C
Refer [Azure B2C - Partner Integration - BlokSec](https://docs.microsoft.com/en-us/azure/active-directory-b2c/partner-bloksec?pivots=b2c-custom-policy#part-2---create-a-policy-key)

## 3. Register application on Azure B2C
Refer [Azure Samples](https://github.com/Azure-Samples/ms-identity-b2c-javascript-spa#registration)

## 4. Upload Custom IEF xml files
Use the IEF xml files in this repository. Update the following
1. TenentId on all xml files
2. On TrustFrameworkExtensions.xml update
   - auth_token --> BlokSec Application Client Secret
   - account.appDID --> BlokSec Application appDID
   - ClientId --> BlokSec Application appDID
   - client_id --> Azure B2C ProxyIdentityExperienceFramework Application Id (2 instances)
   - IDTokenAudience --> Azure B2C IdentityExperienceFramework Application Id (2 instances)

**Refer comments on the xml files**

## 5. Update client application
Use the sample Client SPA from this repository. 
1. Update authConfig.js
   -  clientId --> Application Id of Azure B2C app registered in Step 3
 
