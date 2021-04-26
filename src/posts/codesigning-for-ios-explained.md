---
title: 'Codesigning for iOS Explained Simply'
date: '2021-04-01T09:30:00-05:00'
# bannerImgSrc: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
# bannerImgAlt: 'Ancient Greek Building with Columns'
---

There have been plenty of occasions where I have encountered cryptic error messages in `xcodebuild` scripts. Sometimes, those error messages were a result of the app not being signed.

I wasn't familiar with the concept of signing apps at the time, and I found it difficult to find simple explanations of what a lot of the terms meant for iOS development. So, this post is my attempt at explaining some core concepts simply, so that you and I can refer back to them easily in the future.

## What Is Codesigning?

Signing your code does two things:

1. The app your users install came from you (or another developer on your team)
   - This is referred to as the **"code signature"**
2. That your app's code has not been tampered with since you (or your team) built it
   - This is referred to as the **"code seal"**

If a malicious actor tampered with your app between the time you built it, and the time a user attempts to install it, then the app will not install or launch. 

Codesigning protects your users from installing apps that intend to do them harm.

## What Do You Need To Sign Your App?

There are 3 things you will always need to sign your app:

1. A Signing Certificate
2. A Provisioning Profile
3. Your App's Entitlements

The Signing Certificate establishes your identity as a developer.

The Provisioning Profile grants permissions for your app. It allows access to Entitlements, and allows access to run on certain devices depending on the Signing Certificate.

Entitlements are used to define supported capabilities, like iCloud or Wallet functionality.

## What Types of Signing Certificates Are There?

There are a few Signing Certificates that are used in different contexts. It depends on how you want to distribute your app at that time. 

- Development Certificate
- Distribution Certificate

A Development Certificate would be used if you are building and running on a simulator.

A Distribution Certificate would be used if you are deploying to TestFlight, or to the App Store. Also, if you are distributing an app to users within your organization only, you could be using an Enterprise Distribution Certificate.

## What Is The Codesigning Process When Deploying?

First, you would build your app with your Development Certificate and Provisioning Profile. Then, when you are ready to distribute your app, you export it from Xcode where it is re-signed with your Distribution Certificate.

### References

- What's new in Xcode (WWDC16)
- What's New In Signing for Xcode and Xcode Server (WWDC17)



--------

Codesigning on iOS is confusing. Here is an overview of what some core concepts mean:

- Development Certificate
- Distribution Certificate
- Apple Push Services Certificate
- Provisioning Profile
- Distribution, Development, Ad hoc, and App Store Profiles???


---

- Xcode needs to know:
  - Which certificate to use
  - Which provisioning profile to use

- Automatic signing (Introduced in Xcode 8, 2016)
  - Will select the newest development cert. and provisioning profile on your machine for your selected Team
  - Can still manage this manually if you'd like
  
# What's New In Signing for Xcode and Xcode Server (WWDC17)

> "Why do we code sign? Well, the simple answer is that code signing protects us. It protects us as users, it protects us as developers.
>
> And all of us are users. All of us download apps from the store, and we're sure that, that app came from the developer that wrote it, because  of code signing. And every app that we download from the store, we're sure that Apple has approved that, that app is allowed to use special system services.
>
> We can trust the security and the privacy of our devices because of code signing."
> - Chris D'Angelo: Xcode Engineer at Apple

- When an app runs, it checks a few things
  - The app is valid:
    - It has a valid **code signature**
    - Has not been tampered with since it was signed by the original developer (**code seal**)
    - The app is allowed to use special system services (**entitlements?**)
    - Has the app been *provisioned* for this device?
      - for development, provisioned for a few devices
      - for the App Store, provisioned for any device

## Distribution

- When you're ready to share your app, you need to build an archive
- An archive is a special release build of your app
- When you build it, you use a development certificate
  - So, any developer on your team can easily build an archive without access to special distribution signing certificates
- Xcode will sign your archives with the distribution certificate when you distribute it

- Distribution signing types
  - Ad hoc, share with other people on your team
  - Enterprise, share with other employees in your company
  - others?...