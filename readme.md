# Lazy Loading With Javascript

### Loads images only when they are close to viewport ###


__Instructions:__
* Link lazyload.js to your html
* Add "lazy" class to your images
* Leave "src" attribute empty , *src=""*
* Add "data-src" attribute with real link to image



###Example###
```
<img class="lazy" src="" data-src="linkToYourImage">
```


__Last Update:__
- Performance Issues Fixed with Throttling
- Executes on both Scroll and Resize events
