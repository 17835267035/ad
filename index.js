window.onload = function(){
		// 谁  box
		// 最大动画范围  水平方向  垂直方向
		// 悬浮对象
		// 属性：对象的描述
		//       谁、速度是多少、x方向最大的偏移量是多少
		//       this.obj
		// 方法：功能  
		//       动画的功能 move
		//  
		// let box = $('.box')[0];
		// let son = $('.son')[0];   
		// let obj = new Float(box);
		// let obj1 = new Float(son);

		// function Float(obj){
		// 	this.obj = obj;
		// 	this.maxX = window.innerWidth - this.obj.offsetWidth;
		// 	this.maxY = window.innerHeight - this.obj.offsetHeight;
		// 	// console.log(this.maxY);
		// 	this.speedX = 10;
		// 	this.speedY = 15;
		// }
		// Float.prototype.stop = function(){
		// 	clearInterval(this.t);
		// }
		// Float.prototype.resize = function(){
		// 	this.maxX = window.innerWidth - this.obj.offsetWidth;
		// 	this.maxY = window.innerHeight - this.obj.offsetHeight;
		// }
		// Float.prototype.move = function(){
		// 	let that = this;  //this指向box
		// 	this.t = setInterval(function(){  //t是属性  用箭头函数就能用this
		// 		let lefts = that.obj.offsetLeft + that.speedX;
		// 		let rights = that.obj.offsetTop + that.speedY;
		// 		console.log(rights);
		// 		if(lefts >= that.maxX){
		// 			lefts = that.maxX;
		// 			that.speedX *=-1;
		// 		}
		// 		else if(rights >= that.maxY){
		// 			rights = that.maxY;
		// 			that.speedY *= -1;
		// 		}
		// 		if(lefts <= 0){
		// 			lefts = 0;
		// 			that.speedX *=-1;
		// 		}
		// 		else if(rights <= 0){
		// 			rights = 0;
		// 			that.speedY *= -1;
		// 		}
		// 		that.obj.style.left = lefts + 'px';
		// 		that.obj.style.top = rights + 'px';
		// 	},60)
		// }
  //       obj.move();
  //       obj1.move();
  //       box.onmouseover = function(){
  //       	obj.stop();
  //       }
  //       box.onmouseout = function(){
  //       	obj.move();
  //       }
  //       son.onmouseover = function(){
  //       	obj1.stop();
  //       }
  //       son.onmouseout = function(){
  //       	obj1.move();
  //       }
  //       window.onresize = function(){
  //       	obj.resize();
  //       	obj1.resize();
  //       }

}