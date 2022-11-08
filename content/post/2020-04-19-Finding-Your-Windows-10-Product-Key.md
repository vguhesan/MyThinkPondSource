+++
title = "Finding your Windows-10 Product Key and tips to upgrade your hardware"
description = "How to find your Windows 10 Product Key?"
date = "2020-04-19"
categories = ["Windows 10"]
tags = ["Windows 10","Product Key","Windows 10 Product Key","License","Upgrade","System Support"]
thumbnail = "/img/logo/windows10.png"
+++

> **tl;dr** Easiest way to find out your Windows 10 Product Key for reinstallation or reimaging your computer. As an added bonus, I'll talk about two tips on how you can upgrade your computers hardware to give it a second life.

{{<figure src="/img/logo/windows10.png" caption="" width="150" class="alignleft round-img-border imgframe-left-pad" >}}

Lately for adults, "work from home" (WFH) has become the new norm and with kids attending classes online - having a good, clean setup of your laptop or computer has become a necessity. And so a lot of folks are trying to reinstall Windows onto their computers and get rid of all the malware and spam window pop-ups to give it a fresh start. Or you may be trying to take inventory of your system to know which computer or laptop has a certain Windows license applied. In either case, the first step is to inventory your current setup to find out the Windows 10 product key so that you can use the same key to reinstall. This will save you some money from having to buy another license of Windows when you already have a licensed version tied to your computer.

If you are trying to install a fresh copy of Windows 10, you can download the ISO image here from Microsoft:
<a href="https://www.microsoft.com/en-us/software-download/windows10" target="_blank">Windows 10 ISO</a>

Since this article is not about Windows 10 reinstall, we'll stick to our goal which is to identify the Product Key. Finding the Windows Product Key is not straight forward. With earlier versions of Windows, the OEM manufactures affixed the Product Key sticker on the back of the computer. This led to hackers stealing Product Key by simply taking a photograph of your affixed sticker and selling it online. To prevent this, a lot of OEM manufacturers stopped affixing the Product Key stickers and instead placed the Windows Product Key inside the BIOS registry. And you just need a tool that can read it and provide you with the key. If you Google it you may find all sorts of hacks and things to download and try out. And a lot of them end up putting additional Malware onto your computer and so you need a trusted source for such a tool.

{{<figure src="/img/2020/04/19/Windows-10-Enter-a-product-key.png" caption="Windows 10 Prompt for entering your Product Key" class="aligncenter round-img-border" >}}

My recommendation is NirSoft's Product Key Tool available here:
<a href="https://www.nirsoft.net/utils/product_cd_key_viewer.html" target="_blank">NirSoft Produkey</a> Utility.

*Note*: When you download the tool, most virus scanners classify this tool as Malware and they may quarantine it immediately. I feel that this tool should be in your systems toolkit. I assure you that there is no virus or malware or trojan that's bundled along with the tools. I have used NirSoft's tools for over many, many years and also check out [this link](https://www.nirsoft.net/contact-new.html) from NirSoft site letting you know it's legit. You may need to whitelist this download so that you can unzip and extract the contents (including the executable). The other tools I highly recommend for your toolbox can be found at the end of this article under "Recommended tools for your toolbox" section.

After you extract and you can run "ProduKey" executable and it will produce an output similar to the screen-shot below:

{{<figure src="/img/2020/04/19/nirsoft.png" caption="NirSoft ProduKey Screenshot displaying the Windows 10 Product Key(s)" width="1024" class="aligncenter round-img-border" >}}

As you can see from the image above, I had a BIOS OEM Key that came with my Dell Laptop but unfortunately I didn't have this utility handy with me back then and so I dropped a new version of my purchased Windows 10. The next time, I reimage this laptop, I will switch back to the OEM Product Key and use my spare Windows license somewhere else.

It will also be beneficial to create a "PID.txt" file with the Product Key in "C:\" (root of your C-Drive) so that when you reinstall Windows 10, the installation process will look for the file and read in the Product Key saving you a step in the process. The contents of the PID.txt file needs to adhere to the following format:

<pre><code class="language-bash line-numbers">[PID]
Value=XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
</code></pre>
where XXXXX-XXXXX-XXXXX-XXXXX-XXXXX is the product key.

Before we end this article, I would like to provide you with a few tips to consider when you upgrade your hardware.

### Tips on upgrading your hardware

#### Add more memory to your system (approx. cost : $30-$40 for two-DIMM3 sticks)
- Use the HWiNFO tool (listed below) to determine your current memory capacity used.
- Then use <a href="https://www.crucial.com/store/advisor" target="_blank">Crucial's Upgrade Advisor Online Tool</a> to determine the maximum supported memory and type (DIMM3 vs DIMM2, etc) for your system. 
- You can then shop around online/at store at places like Amazon, MicroCenter, BestBuy, Office Depot, Staples to buy your additional memory.

This will give you the first improvement (and second life) to your system.

#### Swap out your spinning harddrive to a SSD harddrive (approx. cost : $45-$85 for middle-grade SSD from Samsung)
- Again use the HWiNFO tool (listed below) to determine if you have SATA3 (or greater) support and you can order a SSD (or hybrid harddrive).
- You can then shop around online/at store at places like Amazon, MicroCenter, BestBuy, Office Depot, Staples to buy your SSD harddrive. *note: There is no need to get a SSD that is identical in size. As long as the new SSD is same or greater in capacity will work.*
**Recommendation:**
<a href="https://www.amazon.com/dp/B0781Z7Y3S/ref=cm_sw_em_r_mt_dp_U_gIiNEbHMWTCWV" target="_blank">Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM) from Amazon.com</a> (not an affiliate and I don't get paid for recommending). Typically runs at around $85.

- To swap out your drive, I would recommend this drive cloner tool from <a href="https://www.wavlink.com/en_us/product/ST334UC.html" target="_blank">WavLink</a> (available at Walmart or Amazon for about $30) (Please note that this made in China product lacks good instructions but works awesome and saves you a good deal of money. Follow this <a href="https://youtu.be/DhvIdwzu9Hw" target="_blank">YT video</a> for how to use it.) Here are my notes on the instructions:
Press and hold the offline clone button for 3 seconds, the LED indicator will light up. **Then quickly press the offline clone button once again immediately and the offline clone operation will start.** Each LED represents 25% completion. It is only when every 25% of HDD A is offline clone to HDD B that such LED will remain constantly on. When offline clone operation is fully completed, all LEDs will constant on until the device is power off.
- At this point, your primary drive (typically C Drive) will be identically cloned and now it will be a matter of swapping them out. 
*Note: When you boot up Windows for the first time, you will see an "Unexpected Store Exception". This is normal. Simply reboot your computer once again and it will boot back into Windows without the error.*

Hopefully with the above two upgrades, you will be able to extend the life of your computer for another few years.

### Recommended tools for your toolbox
- [NirSoft ProduKey](https://www.nirsoft.net/utils/product_cd_key_viewer.html)
- <a href="https://www.hiren.info/pages/bootcd" target="_blank">Hiren's Boot CD</a>
- Another version created by Hiren's fans <a href="https://www.hirensbootcd.org/" target="_blank">here</a>
- <a href="https://www.hwinfo.com/download/" target="_blank">HwiNFO</a> shows your hardware setup so that you can determine if you have SATA3 support to upgrade your hard drive to a faster SSD hard drive. 

If you find this article useful, consider bookmarking, subscribing and/or sharing it on your favorite social channels so that others can also find and read these articles. I do this out of love and passion to share my ideas, thoughts, findings and knowledge with others. So the more you help me share the more my content can reach others. Thank you for helping spread the word and find your passion and inspiration today!

