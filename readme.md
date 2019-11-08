# Pixel Sticky Element Jquery Plugin
### Options 
| Option key | Option value | Default value | Description |
|------------|--------------|---------------|-------------|
| `container` | jQuery Element | $('body') | In which element you want to add sticky class. (*Default:* body) |
| `top`		| intiger value	 | 0		 | Top position value from where sticky class add or remove. (*Default:* 0) |
| `classes`   | string		 |	sticky   | Class to add on container when position received. (*Default:* sticky) |
### Example to use

#### Basic usage
```
$(window).pixelSticky() 
``` 
This is a basic use of this plugin. Just add or remove `sticky` class from body when window scroll.
#### Advance usage 
``` 
$('#foo').pixelSticky({
	container: $('#foo-container'),
	top: 0,
	classes: 'foo-sticky-class'
}); 
```

In above example `$('#foo')` element when scrolled and *top* position of `$('#foo')` when greater then *0* then  'foo-sticky-class' will add
to `$('#foo-container')`.

### Author
- Niladri Shekhar Mondal *- Initial work* *-[Pixel Solutionz](https://pixelsolutionz.com)
