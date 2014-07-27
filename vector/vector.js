var vector2d = function(x,y){
	var vec = {
		vx:x,
		vy:y,
		scale: function(scale){
			vec.vx *= scale;
			vec.vy *= scale;
		},
		add: function(vec2){
			vec.vx += vec2.vx;
			vec.vy += vec2.vy;
		},
		sub: function(vec2){
			vec.vx -= vec2.vx;
			vec.vy -= vec2.vy;
		},
		negate: function(){
			vec.vx = -vec.vx;
			vec.vy = -vec.vy;
		},
		length: function(){
			return Math.sqrt(vec.vx*vec.vx+vec.vy+vec.vy);
		},
		normalize: function(){
			var len = this.length();
			if(len){
				vec.vx /= len;
				vec.vy /= len;
			}
			return len;
		},
		rotate: function(angle){
			angle = angle * Math.PI / 180;
			var vx = vec.vx,
				vy = vec.vy,
				cosVal = Math.cos(angle),
				sinVal = Math.sin(angle);
				vec.vx = vx * cosVal - vy * sinVal;
				vec.vy = vx * sinVal + vy * cosVal;
		},
		toString: function(){
		   return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')';
	    }
	};
	return vec;
}