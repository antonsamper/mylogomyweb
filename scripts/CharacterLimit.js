var CharacterLimit = new Class({
	options: {
    	warning: '#f00',
    	counter: 'counter',
    	element: 'caption'
    },
    
    initialize: function(options){
    	this.max = $(this.options.counter).get('text');
    	this.color = $(this.options.counter).getStyle('color');
    	this.element = $(this.options.element);
    	this.counter = $(this.options.counter);
    	this.warning = this.options.warning;
    	this.element.addEvent('keyup',this.keyuplistener.bind(this));
    },
    
    keyuplistener: function(){
    	this.text = this.element.value;
    	this.length = this.text.length;
    	this.remaining = this.max - this.length;
    	this.counter.set('text', this.remaining);
    	
    	if(this.remaining<=10){
    		$$([this.counter, this.counter.getParent()]).setStyle('color', this.warning);
    	} else {
    		$$([this.counter, this.counter.getParent()]).setStyle('color', this.color);
    	}
    	
    	if(this.length>this.max){
    		this.element.value = this.element.value.substring(0, this.max);
    		this.remaining = 0;
    		this.counter.set('text', this.remaining);
    	}
    }
});