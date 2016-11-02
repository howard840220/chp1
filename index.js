(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1314,
	height: 740,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._03button = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._03button1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03button2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._03button3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._03button4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._101n1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._101n1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._101n2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._101n2_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._10L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._10luxgen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._10nissan = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._10R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._111back = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._111 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._111L = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._111LW = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._111M = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._111R = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.car = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.齒輪 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.提示 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.現在位置 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.首頁 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.補間動畫13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button();
	this.instance.setTransform(-650,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650,-252.5,1300,505);


(lib.補間動畫11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03();
	this.instance.setTransform(-657,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-657,-370,1314,740);


(lib._03chapter4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button4();
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,500,500);


(lib._03chapter3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button3();
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,500,500);


(lib._03chapter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button2();
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,500,500);


(lib._03chapter1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03button1();
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,500,500);


(lib._4setting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.齒輪();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._3now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.現在位置();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._2hint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.提示();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib._1main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.首頁();
	this.instance.setTransform(-39.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39.5,80,80);


(lib.補間動畫27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10L();
	this.instance.setTransform(-450,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-370,900,740);


(lib.補間動畫25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10R();
	this.instance.setTransform(-415,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415,-370,830,740);


(lib.nissannext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17,x:-17.2,y:-4.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:6.9,y:1.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.nissan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


(lib.nissan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


(lib.nissanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._101n1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1300,300);


(lib._111Rr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111R();
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-300,400,600);


(lib._111Mm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111M();
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-300,400,600);


(lib._111Ll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111L();
	this.instance.setTransform(-199.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-300,400,600);


(lib._111L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-16.4,y:-24.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:14.8,y:22.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib._111back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111back();
	this.instance.setTransform(-93.5,-18.6,0.752,0.752);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgBBRQgJAAgLgDQgegIgQgcQgPgbAIgcQAIgfAbgQQAbgPAdAIQAeAIAQAbQAFAJACAKACaAAQAAA/gtAuQggAggpAJQgSAEgSAAQg+AAgugtQgtguAAg/QAAg/AtgtQAugtA+AAQASAAASADQApAKAgAgQAtAtAAA/gAAyAeIgOg0IAiAJIAUAGIgfAeIgDADIgBAAIAAAAAA7AXIgEAD");
	this.shape.setTransform(-74.1,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgagaIAgAKIAVAFIgeAeIgDADIgBABIgEAEgAgGAWIADgDIgDADgAgDATg");
	this.shape_1.setTransform(-67.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgBBhQgMAAgMgEQgkgJgTghQgTggAKgjQAKglAggTQAggSAjAKQAkAJATAgQAGALACAMIAYAHIglAlIgEADAC4AAQAABMg2A2QgmAmgyALQgUAFgWAAQhLAAg2g2Qg2g2AAhMQAAhLA2g2QA2g2BLAAQAWAAAUAEQAyAMAmAmQA2A2AABLgAA8AkIgRg/IAoALABGAcIgEADIAAAAIgBAB");
	this.shape_2.setTransform(-88.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfgfIAnALIAYAHIgkAkIgEAEIAAAAIgGAFgAgIAbIAEgEIgDAEgAgIAbg");
	this.shape_3.setTransform(-80.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ACaAAQAAA/gtAuQggAggpAJQgSAEgSAAQg+AAgugtQgtguAAg/QAAg/AtgtQAugtA+AAQASAAASADQApAKAgAgQAtAtAAA/gAgBBRQgJAAgLgDQgegIgQgcQgPgbAIgcQAIgfAbgQQAbgPAdAIQAeAIAQAbQAFAJACAKIAUAGIgfAeIgEADIAAAAAAyAeIgOg0IAiAJAA7AXIgDADIgBAA");
	this.shape_4.setTransform(-74.1,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgagaIAgAKIAVAFIgeAeIgDADIgBABIgEAEgAgGAWIADgDIgDADgAgGAWg");
	this.shape_5.setTransform(-67.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance,p:{scaleX:0.896,scaleY:0.896,x:-111.5,y:-22.3}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{scaleX:0.752,scaleY:0.752,x:-93.5,y:-18.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-18.6,188,38.3);


(lib._111_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._111();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


(lib.nissan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10nissan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-20.8,y:-25},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:16.1,y:19.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.luxgen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10luxgen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09,x:-25.7,y:-21.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:23.5,y:19.6},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._10car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car();
	this.instance.setTransform(-249.5,-249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-249.5,500,500);


(lib._111LW_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// word
	this.instance = new lib._111LW();
	this.instance.setTransform(-499.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// back
	this.back = new lib._111back_1();
	this.back.setTransform(-622.3,181.4);
	this.back._off = true;
	new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib._111back_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(18).to({_off:false},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.5,-299.5,1000,600);


(lib._10底 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._4setting("synched",0);
	this.instance.setTransform(1258.4,56.9,1,1,0,0,0,0.5,0.5);

	this.instance_1 = new lib._3now("synched",0);
	this.instance_1.setTransform(1169.4,56.9,1,1,0,0,0,0.5,0.5);

	this.instance_2 = new lib._2hint("synched",0);
	this.instance_2.setTransform(1080.4,56.9,1,1,0,0,0,0.5,0.5);

	this.instance_3 = new lib._1main("synched",0);
	this.instance_3.setTransform(991.4,56.9,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib._03chapter1();
	this.instance_4.setTransform(199.3,293.5,0.564,0.564,0,0,0,0.6,0.4);

	this.instance_5 = new lib._03chapter2();
	this.instance_5.setTransform(499.1,293.5,0.564,0.564,0,0,0,0.5,0.4);

	this.instance_6 = new lib._03chapter3();
	this.instance_6.setTransform(798.4,293.6,0.564,0.564,0,0,0,0.6,0.5);

	this.instance_7 = new lib._03chapter4();
	this.instance_7.setTransform(1100.1,293.6,0.564,0.564,0,0,0,0.5,0.5);

	this.instance_8 = new lib.補間動畫13("synched",0);
	this.instance_8.setTransform(657,483.4);

	this.instance_9 = new lib.補間動畫11("synched",0);
	this.instance_9.setTransform(657,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314,740);


// stage content:



(lib.chp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.chapter1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_56.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_56()
		{
			this.gotoAndPlay(75);
		}
	}
	this.frame_123 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.right.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_57.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_57()
		{
			this.gotoAndPlay(125);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.left.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_58.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_58()
		{
			this.gotoAndPlay(125);
		}
	}
	this.frame_129 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.nissan.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_59.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_59()
		{
			this.gotoAndPlay(131);
		}
	}
	this.frame_329 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.nissannext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_60.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_60()
		{
			this.gotoAndPlay(331);
		}
		
		
		/*按一下前往影格並播放
		在特定元件實體上按一下，會將播放磁頭移到時間軸中的特定影格，並從該影格繼續播放。
		亦可用於主時間軸或影片片段時間軸。
		
		指示:
		1. 決定您希望按一下元件實體時，播放磁頭前往的影格編號，並在下方程式碼中，將數字 5 取代為該編號。
		2. EaselJS 中的影格編號從 0 開始，而非 1
		*/
		
		this.nissan2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_61.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_61()
		{
			this.gotoAndPlay(331);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(50).call(this.frame_123).wait(6).call(this.frame_129).wait(200).call(this.frame_329).wait(202));

	// 常駐
	this.setting = new lib._4setting();
	this.setting.setTransform(1259.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.setting, 0, 1, 1);

	this.local = new lib._3now();
	this.local.setTransform(1170.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.local, 0, 1, 1);

	this.hint = new lib._2hint();
	this.hint.setTransform(1081.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.hint, 0, 1, 1);

	this.home = new lib._1main();
	this.home.setTransform(992.1,57.2,1,1,0,0,0,0.5,0.5);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},48).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},25).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},50).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},209).to({state:[]},1).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},29).to({state:[{t:this.home},{t:this.hint},{t:this.local},{t:this.setting}]},30).to({state:[]},1).wait(137));

	// 車
	this.instance = new lib._10car();
	this.instance.setTransform(657.7,823.9,0.415,0.415,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:436.3,y:762.7},9).to({x:216.7,y:674.5},9).to({y:508.9},8).to({alpha:0.5},11).to({_off:true},1).wait(490));

	// 開頭
	this.instance_1 = new lib._10底();
	this.instance_1.setTransform(657.7,370.3,1,1,0,0,0,657,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:0.301},11).to({_off:true},1).wait(490));

	// 目標R
	this.right = new lib.補間動畫25();
	this.right.setTransform(585.3,-370);
	this.right._off = true;

	this.timeline.addTween(cjs.Tween.get(this.right).wait(35).to({_off:false},0).to({x:915,y:370},14).to({_off:true},1).wait(481));

	// 目標L
	this.left = new lib.補間動畫27();
	this.left.setTransform(746.1,1106.2);
	this.left._off = true;

	this.timeline.addTween(cjs.Tween.get(this.left).wait(35).to({_off:false},0).to({x:450,y:370},14).to({_off:true},1).wait(481));

	// 藍天白雲
	this.nissan = new lib.nissan();
	this.nissan.setTransform(110.2,108.7);
	new cjs.ButtonHelper(this.nissan, 0, 1, 2, false, new lib.nissan(), 3);

	this.luxgen = new lib.luxgen();
	this.luxgen.setTransform(640.2,240);
	new cjs.ButtonHelper(this.luxgen, 0, 1, 2, false, new lib.luxgen(), 3);

	this.instance_2 = new lib._10();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.luxgen},{t:this.nissan}]},50).to({state:[{t:this.instance_2},{t:this.luxgen},{t:this.nissan}]},5).to({state:[]},1).wait(475));

	// 裕隆前話
	this.nissanword = new lib.nissanword();
	this.nissanword.setTransform(657.7,642.1,1,1,0,0,0,650,150);
	this.nissanword.alpha = 0.5;
	this.nissanword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissanword).wait(65).to({_off:false},0).to({alpha:1},34).wait(70).to({_off:true},1).wait(361));

	// 裕隆前
	this.nissan1 = new lib.nissan1();
	this.nissan1.setTransform(657.7,370.3,1,1,0,0,0,657,370);
	this.nissan1.alpha = 0.5;
	this.nissan1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan1).wait(56).to({_off:false},0).to({alpha:1},23).wait(90).to({_off:true},1).wait(361));

	// 下一頁
	this.nissannext = new lib.nissannext();
	this.nissannext.setTransform(1206.5,705,1,1,0,0,0,100,25.5);
	this.nissannext._off = true;
	new cjs.ButtonHelper(this.nissannext, 0, 1, 2, false, new lib.nissannext(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nissannext).wait(253).to({_off:false},0).wait(2).to({_off:true},1).wait(275));

	// 裕隆前2
	this.nissan2 = new lib.nissan2();
	this.nissan2.setTransform(657.7,370.3,1,1,0,0,0,657,370);
	this.nissan2.alpha = 0.5;
	this.nissan2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nissan2).wait(170).to({_off:false},0).to({alpha:1},20).wait(65).to({_off:true},1).wait(275));

	// 嚴慶齡
	this.chin = new lib._111L_1();
	this.chin.setTransform(256.2,384.2,1,1,0,0,0,200,300);
	this.chin.alpha = 0;
	this.chin._off = true;
	new cjs.ButtonHelper(this.chin, 0, 1, 2, false, new lib._111L_1(), 3);

	this.instance_3 = new lib._111Ll();
	this.instance_3.setTransform(256.2,384.2,1,1,0,0,0,0.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chin).wait(256).to({_off:false},0).to({alpha:0.301},14).to({alpha:1},15).to({_off:true,regX:0.5,regY:0},1).wait(245));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(285).to({_off:false},1).to({regX:0.4,scaleX:0.63,scaleY:0.63,x:167.4,y:291.3},19).to({_off:true},1).wait(225));

	// 齡word
	this.www = new lib._111LW_1();
	this.www.setTransform(799.1,409.1,1,1,0,0,0,0.5,0.5);
	this.www.alpha = 0.5;
	this.www._off = true;

	this.timeline.addTween(cjs.Tween.get(this.www).wait(297).to({_off:false},0).to({alpha:1},8).to({_off:true},1).wait(225));

	// 吳舜文
	this.wenn = new lib._111Mm();
	this.wenn.setTransform(656.4,387.4,1,1,0,0,0,0.5,0);
	this.wenn.alpha = 0;
	this.wenn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wenn).wait(256).to({_off:false},0).to({alpha:0.301},14).to({alpha:0.5},15).to({_off:true},1).wait(245));

	// 嚴凱泰
	this.taii = new lib._111Rr();
	this.taii.setTransform(1056.4,384.2,1,1,0,0,0,0.5,0);
	this.taii.alpha = 0;
	this.taii._off = true;

	this.timeline.addTween(cjs.Tween.get(this.taii).wait(256).to({_off:false},0).to({alpha:0.301},14).to({alpha:0.5},15).to({_off:true},1).wait(245));

	// bg
	this.instance_4 = new lib._111_1("synched",0);
	this.instance_4.setTransform(657,370.6,1,1,0,0,0,657,370);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(256).to({_off:false},0).to({alpha:0.5},14).to({alpha:1},15).to({startPosition:0},1).wait(170).to({startPosition:0},0).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(657.7,370.3,1314,927.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;