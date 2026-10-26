The Official Website of the HACK Webcomic by Mitsuki Youko

---

The original website was coded back in late-2020/early-2021 and it was the first website I've ever coded.

In fact, I learned coding specifically so I could code this site..

It is now late-2026 and I've become a better coder/programmer so it's time to refactor this site with DRY principles in mind and revamp it as I embark on the 2nd phase of pre-production for HACK.

# Devlog - sort of...

### To Do's:
Code:
- Rethink the HTML - use the box method..
- Redo all CSS - cus back then you didn't know what you're doing and that is why some of the CSS is jank..
- redo all the JS - instead of individually adding the hexagons as HTML elements directly, do this in js and make a list of all the images and text that go with each hexagon and use a loop to have it generate the html elements from JS so that the code is very DRY. 
- Replace some of the hexagons with some other characters - like melody and Shiro/Nori with Maple and Mocha, and replace Ziah and Inko with Lime and Cuupo.. or instead of replace just add them...
- Rework the settings section so that it has a nice map first which can then be drilled down to individual settings (this one is fancy and will take a while..)
- Make the site work on mobile
- Link Acggoods, Printify, BuyMeACoffee on the website, (later add Lulu PoD as well) - add all links to the footer...

Art:
- Do the front/back art for all the characters
- Do/redo the character expression art for the mcs?
- Update the hexagon art for some of the characters.. or just redo them
- Actually make some real comp'd animations for the main characters at least..
- resize all the images so that they are of a reasonable size from the beginning rather than it being huge then sized down.

### Refactor notes.. (Things I fixed/updated):

Oct 24, 2026

1. Instead of having headers manually copied and pasted, I learned about HTMLElement Templates and made use of that..

I also imported the JS file without "defer" so that it loads before or at the same time as the HTML.

2. Dynamically replaced the banners with a banner component in JS using window.location (With some help from gemini since I've not done this before..)

### Things I Learned
- For github pages to work, all links to files must be relative.

Bad: `/img/avatar/maxus_avatar.gif`
GOOD: `img/avatar/maxus_avatar.gif`

If you put a / in front of the path (or css file or js file) it won't work (with github pages).

For fonts, you need to put ../ in front of the path not just /

Bad:`/fonts/BungeeHairline-Regular.ttf`
GOOD: `../fonts/BungeeHairline-Regular.ttf`