var field = function(width,height){
    this.width = width;
    this.height = height;
    this.element = {};
    this.init = function(){
        var p = document.createElement('div');
        var pD = $(p);
        pD.attr('id','view');
        pD.css('width',this.width);
        pD.css('height',this.height);
        $('body').append(pD);
        this.element = pD;
    };
    this.init();
};


function findNodes()
{

}




var finishSquare = function(top,left,w,h,color,index){
    this.top = top;
    this.left = left;
    this.width = w;
    this.height = h;
    this.color = color;
    this.element = {};
    this.index = index;
    this.init = function(){
        var p = document.createElement('div');
        var pD = $(p);
        pD.attr('class','finish');
        pD.css('top',this.top);
        pD.css('left',this.left);
        pD.css('height',this.width);
        pD.css('width',this.height);
        pD.css('background',this.color);
        pD.html(index);
        $('#view').append(pD);
        this.element = pD;
    };


    this.init();
};

var player = function(bottom,left,field){
    this.bottom = bottom;
    this.left = left;
    this.element = {};
    this.speed = 1;
    this.field = field;
    this.init = function(){
        var p = document.createElement('div');
        var pD = $(p);
        pD.attr('class','player');
        pD.css('left',this.left);
        pD.css('bottom',this.bottom);
        $('#view').append(pD);
        this.element = pD;
    };
    this.checkCollision = function(){

    };
    this.draw = function(){
        this.element.animate({
            bottom:this.bottom,
            left:this.left
        },1);
    };
    this.moveUp = function(length){
        for(var k = 0;k<length;k++){
            if(this.bottom < this.field.height - 15){
                this.bottom+=this.speed;
                this.draw();
            }

        }
    };
    this.moveDown = function(length){
            for(var k = 0;k<length;k++){
                if(this.bottom > 0){
                    this.bottom-=this.speed;
                    this.draw();
            }
        }
    };
    this.moveLeft = function(length){
        for(var k = 0;k<length;k++){
            if(this.left > 0){
                this.left-=this.speed;
                this.draw();
            }
        }
    };
    this.moveRight = function(length){
        for(var k = 0;k<length;k++){
            if(this.left < this.field.width - 15){
                this.left+=this.speed;
                this.draw();
            }
        }
    };



    this.init();
};

















