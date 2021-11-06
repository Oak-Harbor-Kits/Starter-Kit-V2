# Starter-Kit-V2
This is a new and improved website starter kit that takes advantage of a new responsive system I implemented using ems and vw units to scale everything.  This is a truly 100% responsive custom coded HTML and CSS website starter template.


HOW DOES IT WORK  

This new starter kit is based on ems for more responsive design.  I have utilized the LESS preprocessor to use it's ability to do em calculations.  I use the Koala App to choose the css file I want to watch and I click the .less files I want to auto compile and hit the compile button.  This will now continuously watch for changes in your .less file inside the css folder and compile the .less into it's own .css file. 

Here is the link to download:

http://koala-app.com/

You can have it watch multiple .less files and multiple folders at once.  You just have to select each .less file individually and hit the compile button.



CALCULATING THE EM UNITS

Introduction:
As you may or may not know, em units are based on the font size of its parent element. If the parent element does not have a declared font size in your css, then the next parent element with a declared font size will be it's base.  Since I am not declaring a font size on any containers, literally everything on the page will look up to the body tag for a font size, and since we declared a font size of 20px that is what they will divide themselves by to get the em value.  So I just set the font size on the <body> to be 15px on mobile, tablet, and small desktop up to 1023px wide.  Then on 1024px wide it is set 20 the actual default of 20px.
  
Explanation
What happens here, is every single element's measurements that would be in pixels will now be in ems divided 20 (the default font size on desktop).  So when we have an element that is 100px wide, in the .less file we write it as 100/20em, and the compiler will compile it in css as 5em.  Since that em calculation is based on the 20px, when we change the body font size to 15px it will shrink EVERYTHING because the em calculations are on a smaller font size, and will scale down proportionally.  
  
For example, if an element is 20px wide, it will be written as 20/20em in your .less file, and compile to 1em in your .css file.  That is it's ratio.  When we change the font size of the body (the main parent of everything) to a smaller number on mobile (15px), it's scaling the size of 1em to fit in a 15px based font instead of a 20px.  1em would technically be 15/15em, which means by reducing the font size of the body by 5px, EVERYTHING that is based off it's 20px font size will also reduce themselves by 5px in scale.  
  
Both instances of 15/15 and 20/20 result in 1em. The base font size of the parent determines how big the 1em value is scaled up or down by default.  Think of ems as the ratio of the measurement and it's parent font size.  We are setting the ratio to be based on desktop styles and measurements em ratio.  The higher the <body> font size, the larger 1em is scaled by.  Smaller font sizes scale down the size of 1em.  This is how we can control mobile scaling.  You don't have to write separate css styles for your mobile and make larger sizes on desktop.  By writing all our css properties' px values in x/20em, everything will scale itself down on mobile and grow into it's final em scale size at the 20px font size.  
  
  
  
IMPORTANT!! ******* MUST READ AND UNDERSTAND HOW TO MAKE THIS WORK

For this to work properly and scale PRECISELY, we need the .less calculation system to make this easier.  So if we have an H1 text that is supposed to be 50px, we would write it as 50/20em.  Just like we would normally.  HOWEVER, any of it's properties and children need to be divided by the new declared font size.  So if it has a margin-bottom of 20px, it will be 20/50em, NOT 20/20em.  Their parent has their own font size declared now. Here's an example of how this will look in .less:

'''
h2 {
    color: #fff;
    font-size: 24/20em; <--- new declared font size
    line-height: 28/24;
    margin-bottom: 15/24em; <--- Everything inside the h1 is divided by this new font size

    span {
        display: block;
        color: #fff;
        margin-bottom: 50/24em; <--- Everything inside the h1 is divided by this new font size
    }
'''
  
  
Also, if this span had a different font size than the h1, we set the new font size divided by the parents new font size.

h2 {
    font-size: 24/20em; <--- new font size

    span {
        display: block;
        color: #fff;
        font-size: 50/24em  <--- new font size declared, divided by the parents' font size
        margin-bottom: 50/50em; <--- Everything inside the span is divided by this new font size
    }
} 
                                     
This is what we have to do to maintain the ratio.  The h1 font size is based on the body, and since it has a new font size, its properties and children will now be based on its new font size, and so on.  Think of them all as working together.  The spans font size is getting their information from the H1s font size, and that H1 is getting its info from the body.  This maintains the proportions of what 1em is scaled to. 
                                     
THE PAYOFF - HOW TO GET 100% TRUE RESPONSIVE BEHAVIOR
Why is this important? Because at 1500px or however wide your design ends up being, you can set the body font size to 1vw, which is the width of the viewport (screen).  When the body size is now determined by the screen size, EVERY element will now grow proportionally with the growth of the screen size.  This is what I mean when I say TRUELY 100% responsive - it responds to the size of the screen and every single element on the page will grow proportionally with each to fit the screen size.  
          
MORE USES FOR THE VW UNIT
Lets say you have a section of 4 cards that you'd like to have displayed in 2 rows of two on mobile.  When you write the styles with the desktop sizes and do yuor flexboxing but the boxes are still too big fit next to each other on a mobile screen, you can use vw units to scale down the elements.  On the parent container for the items, set the font size with a min/max calculation here:

LESS min/max calculation
font-size:~"min(1.4vw, 1em)";

This is how you have to do calulations in LESS, because otherwise it wont work.  What's happening is we are setting the minimum font size to be the 1.4vw unit, and we can make it however big or small we need.  The smaller the value, the smaller the entire section scales down and vice versa.  1em is the maximum.  So it will start small, and scale up until it reaches the size it's supposed to be at 1em (the body font size) and stop.  
                                 
So instead of writing new css styles to shrink every element to be smaller, all we have to do is write one line of code and the entire container shrinks proportionally together and maintains their scale.  This is the true power of using ems properly and mathematically. 
