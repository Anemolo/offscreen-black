// THis is my comment

var secondVar = 0x000000
const myVariable = 0x000000
const obj = {
	a: 50,
	b: "leet",
	"foo": "bar"
}
const arr = [1,2,3,4, '50']
class other {
	constructor(){
		this.test = true;
	}
}
class testing extends other {
	constructor(){}
}
function addVec3(gui, vec3) {
  gui.add(vec3, "0", 0, 1, 0.01).name("x");
  gui.add(vec3, "1", 0, 1, 0.01).name("y");
  gui.add(vec3, "2", 0, 1, 0.01).name("z");
}

function exportSinPalette(palette) {
	return `
		  c0: new Color(${palette.c0.value.toString()}),
		  c1: new Color(${palette.c1.value.toString()}),
		  c2: new Color(${palette.c2.value.toString()}),
		  c3: new Color(${palette.c3.value.toString()}),
	  `;
  }