precision highp float;
#define PI 3.141592653589793

varying vec2 vUv;
uniform vec3 uColorBG;
uniform vec3 uPalette0;
uniform vec3 uPalette1;
uniform vec3 uPalette2;
uniform vec3 uPalette3;
uniform float uPaletteOffset;

float ease(float t) {
return -0.5 * (cos(PI * t) - 1.0);
}
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ){
	return a + b*cos( 6.28318*(c*t+d) );
  }
void main() {
	vec2 uv= vUv;
	vec3 color = vec3(0.);
	color = vec3(uv.x);

	vec3 sinColors = palette(vUv.x + uPaletteOffset, 
		  uPalette0, uPalette1,	uPalette2,	uPalette3);

	color = mix(sinColors,uColorBG, cos( vMUv.x * PI * 2.)   );
	color = mix(uColorBG, color, ease(vUv.y)  );

	gl_FragColor = vec4(color,1.0);
}