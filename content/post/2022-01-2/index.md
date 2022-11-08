+++
title = "**fix** VirtualBox installer fails on Windows 11 (program compatibility issue)"
description = "Article shows you how to run the VirtualBox 6.1.30 on Windows 11"
date = "2022-01-09"
draft = "false"
categories = ["Windows"]
tags = ["VirtualBox","Windows 11","hyper-v"]
thumbnail = "/img/logo/virtualbox.png"
lead = "Article shows you how to run the VirtualBox 6.1.30 on Windows 11 and get around the compatibility issue."
+++

{{<figure src="img/unsplash.jpg" width="100%" class="aligncenter round-img-border imgframe-left-pad" >}}

### What is this article about?

When you try to install VirtualBox v.6.1.30 on Windows 11, you will see the following error:

<blockquote>
This app can't run on this device:

This app can't run because it causes security performance issue on Windows. A new version may be available. Check with your software provider for an updated version that runs on this version of Windows.
</blockquote>

{{<figure src="img/VirtualBoxWindowsCompatabilityError.png" height="100%" class="aligncenter round-img-border imgframe-left-pad" >}}

It will further prevent you from executing the installer. 

This article show you how to address this issue and proceed with the VirtualBox installer.

### Step-1: Turn off Hyper-V on Windows-11

Hyper-V is an optional feature in Windows 10 that can be used to run virtual machines (VMs) and perform other virtualization duties, such as supporting Credential Guard and Windows Sandbox.

To turn off the Hyper-V, open a PowerShell (as an Administrator), and run the following:

<pre><code class="language-shell line-numbers">Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Hypervisor -All

DISM /Online /Disable-Feature:Microsoft-Hyper-V

bcdedit /set hypervisorlaunchtype off

</code></pre>

**IMPORTANT:** Shut down your computer. Wait for 10 seconds and then turn power back ON. Login back into Windows before proceeding to the next step. 

### Step-2: Turn off Memory Integrity setting in Windows

Note: Turning off the " Memory Integrity" setting makes your system vulnerable. But if you need VirtualBox for your Kubernetes/minikube development, then you need to temporarily turn it off.

You can also open the Core isolation page by selecting **Start**  > **Settings**  > **Update & Security**  > **Windows Security**  > **Device Security** and then under **Core isolation**, selecting **Core isolation details**.

Under the Core isolation page in Windows Security, turn the **Memory integrity** setting **Off** if it isn't already. You'll need to restart your computer for the changes to take effect.

Or follow the link <a href="https://support.microsoft.com/en-us/windows/a-driver-can-t-load-on-this-device-8eea34e5-ff4b-16ec-870d-61a4a43b3dd5" target="_blank">here</a>.

**IMPORTANT:** Shut down your computer. Wait for 10 seconds and then turn power back ON. Login back into Windows before proceeding to the next step. 

### Step-3: Run your VirtualBox installer and you should be good


### Step-4: Set yourself a reminder to turn ON the "Memory Integrity" setting back ON at a future date.

<hr>

<a href="https://www.buymeacoffee.com/vguhesan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### Today's Quote

{{<figure src="/img/logo/thiruvalluvar.png" caption="" width="100" class="alignleft round-img-border imgframe-left-pad" >}}
<br/>
Those who pretend to know what they don't, will be thought ignorant of even what they know.<br/>
**- <a href="https://en.wikipedia.org/wiki/Thiruvalluvar" target="_blank">Thiru Valluvar</a>** ( <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">His Work</a> )


&nbsp;