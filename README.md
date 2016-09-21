# Blast.js, A jQuery plugin for changing website colors

it makes colors flexable and you can customize all colors in the website by one click

## How it works
Here is a simple Blast.js setup:

###  1- Markup
add this tags to the html page inside "body" tag
```html
<colorsBox>
    <icon>≡</icon>
    <div class="frame">
      <p>change colors</p>
      <div class="colors">
        <div class="color">#3D261A</div>
        <div class="color">#B6B254</div>
        <div class="color">#6B2E56</div>
        <div class="color">#48A871</div>
        <div class="color">#2D1D44</div>
        <div class="color">#3F4E92</div>
        <div class="color">#DCC218</div>
        <div class="color">#F5005E</div>
        <div class="color">#916E30</div>
        <div class="color">#D0A571</div>
        <div class="color">#379AA4</div>
        <div class="color">#216348</div>
        <div class="color">#3B3B3B</div>
        <div class="color">#CF2626 <!-- you can change the color by type it's name or code here --> </div>
      </div>
      <p class="custom-colors">Custom colors</p>
      <input type="color" name="customColor" value="#cf2626">
    </div>
  </colorsBox>
  ```
###   2- css file
add the stylesheet file inside the "head" tag
```html
<link href="blast.min.css" rel="stylesheet" />
```
###   3- js files
add the blast.js file after the jQuery file
```html
<script src="jquery-1.11.3.js"></script>
<script src="blast.min.js"></script>
```

