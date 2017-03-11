# Blast.js, The cest jQuery plugin for changing website colors

it makes colors flexable and you can customize all colors in the website by one click

demo = http://men3m.me/blastjs

## How it works
Here is a simple Blast.js setup:

###  1- Markup
add this tags to the html page inside "body" tag
```html
<div class="blast-box">
    <div class="blast-icon">≡</div>
    <div class="blast-frame">
      <p>change colors</p>
      <div class="blast-colors">
        <div class="blast-color">#3D261A</div>
        <div class="blast-color">#B6B254</div>
        <div class="blast-color">#6B2E56</div>
        <div class="blast-color">#48A871</div>
        <div class="blast-color">#2D1D44</div>
        <div class="blast-color">#3F4E92</div>
        <div class="blast-color">#DCC218</div>
        <div class="blast-color">#F5005E</div>
        <div class="blast-color">#916E30</div>
        <div class="blast-color">#D0A571</div>
        <div class="blast-color">#379AA4</div>
        <div class="blast-color">#216348</div>
        <div class="blast-color">#3B3B3B</div>
        <div class="blast-color">#CF2626</div>
      </div>
      <p class="blast-custom-colors">Custom colors</p>
      <input type="color" name="blastCustomColor" value="#cf2626" placeholder="color code...">
    </div>
  </div>
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

### 4- change colors
there are 3 types of change colors in the page
#### • text color
to change the text color add this attribute to the element
```html
data-blast="color"
```
#### • background color
to change the background color add this attribute to the element
```html
data-blast="bgColor"
```
#### • border color
to change the border color add this attribute to the element
```html
data-blast="borderColor"
```
####Example
```html
<p data-blast="color"> this code change the text color </p>
<div data-blast="bgColor"> this code change the background color </div>
<p data-blast="borderColor"> this code change the border color </p>
```
##Blast types
###Fixed blast colors
you can change these colors by edit the color name or code
```html
<div class="blast-colors">
        <div class="blast-color">#3D261A</div>
        <div class="blast-color">#B6B254</div>
        <div class="blast-color">#6B2E56</div>
        <div class="blast-color">#48A871</div>
        <div class="blast-color">#2D1D44</div>
        <div class="blast-color">#3F4E92</div>
        <div class="blast-color">#DCC218</div>
        <div class="blast-color">#F5005E</div>
        <div class="blast-color">#916E30</div>
        <div class="blast-color">#D0A571</div>
        <div class="blast-color">#379AA4</div>
        <div class="blast-color">#216348</div>
        <div class="blast-color">#3B3B3B</div>
        <div class="blast-color">#CF2626 <!-- you can change the color by type it's name or code here --> </div>
      </div>
```
###custom blast colors
you can change the colors for unlimited times and choose any color

#Changelog
* `v 1.0` - Initial Release
* `v 1.1` - If you change the website colors and refresh the page all changes will be saved

### Download, Fork and Commit.
If you think you can make this better, please Download, Fork, & Commit. We'd love to see your ideas.
