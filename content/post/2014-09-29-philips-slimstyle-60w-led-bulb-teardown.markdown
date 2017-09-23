---
author: vguhesan
categories:
- Embedded Systems
- Tear-Down
- Technology
comments: true
date: 2014-09-29T01:25:33Z
excerpt: 'Tear-down of Philips SlimStyle 60W LED bulb. Shows you the internals of
  the circuit that makes this one attractive. '
link: http://mythinkpond.com/2014/09/28/philips-slimstyle-60w-led-bulb-teardown/
slug: philips-slimstyle-60w-led-bulb-teardown
tags:
- AC-DC Circuits
- AC2DC
- Electronics
- IC
- LED Driver Circuit
- Philips SlimStyle LED 60W bulb
- teardown
title: Philips SlimStyle 60W LED bulb teardown
url: /2014/09/29/philips-slimstyle-60w-led-bulb-teardown/
wordpress_id: 724
---

While I was visiting Home Depot, I saw a Philips SlimStyle 60W LED bulb on clearance for two-dollars. I could not resist buying it for a tear-down to see how it's built. I always wondered how they convert the 120VAC to a regulated DC voltage with high-current feed for lighting up those LED's. So here is the first version of the tear-down showing you what's inside the bulb. I will blog more about the current and voltage at the LED junction on a subsequent blog.

Picture of the bulb before the tear-down. You can see the unique flat shape.

![](https://lh6.googleusercontent.com/-W4h2m6iNZ2w/VCiJFzWY4hI/AAAAAAAAMi4/OPq_kVVZusk/w354-h500-no/BulbImage.JPG)

Packaging front

![](https://lh4.googleusercontent.com/-Z0tee4l9A7k/VCiAAcYowII/AAAAAAAAMiY/udlEM3QHIxs/w474-h840-no/IMAG0531.jpg)

Packaging back

![](https://lh6.googleusercontent.com/-RFqLuIi37So/VCiADNOL7wI/AAAAAAAAMig/bwl-0J8rUZo/w474-h840-no/IMAG0532.jpg)

What you expect to find is a custom version of what is called in Electrical Engineering as an [LED Driver Circuit](http://www.futureelectronics.com/en/drivers/led-driver.aspx) (and [here](https://www.google.com/search?q=LED+Driver+Circuit&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=sb)). What makes this one interesting is how they made this all fit inside a tiny little base. And the flat design with the beveled plastic aids in efficient heat dissipation. So you don't see the big metal base you find in other LED bulb models.

Plastic encasing removed (cut using a band-saw)

![](https://lh6.googleusercontent.com/-mJ1iIlGAUfg/VCh9i8l9PdI/AAAAAAAAMeY/4dGic7TKHac/w1358-h766-no/IMAG0518.jpg)

You can see the LED's placed in a radial manner front and back. Although the placement allows you to distribute the light you still end up with a shadow effect. (I think the incandescent light was the perfect design)

Front face of the PCB board which makes up the base of the bulb:

![](https://lh3.googleusercontent.com/-BisX7VXgkGk/VCh9Cz1ANKI/AAAAAAAAMc4/gnycnaNfUfw/w1358-h766-no/IMAG0510.jpg)

Transformer........... EE13302-162 B (KEE 1412) ([closest neighbor to this transformer](http://www.rhombus-ind.com/cats/magcat.pdf))

Black capacitor... S103

Orange rectangular piece bottom left (with Westinghouse logo) is a standard ceramic-fuse.

The black (labeled-N)  and white wires (labeled-L) gets soldered to the bulb metallic base (120VAC inputs)

Back of the PCB board:

![](https://lh4.googleusercontent.com/-UmOE4qLRfTA/VCh-8GjaYKI/AAAAAAAAMgE/aWFFskD4K2g/w1358-h766-no/IMAG0527.jpg)

D1300 is a standard NPN transitor.

More to come in the next blogs. Stay tuned.
