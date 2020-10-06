
// https://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
*/


function convertHslToRgb(numberH, numberS, numberL){
  let ratioR = 0; 
	let ratioG = 0;  
	let ratioB = 0; 
	
	const ratioH = numberH/360;
	const ratioS = numberS/100;
	const ratioL = numberL/100;
	
  if(ratioS == 0){
    ratioR = ratioG = ratioB = ratioL; // achromatic
  } 
  else {
    
    const convertHueToRgb = function convertHueToRgb(p, q, t){
	    if (t < 0) t += 1;
	    if (t > 1) t -= 1;
	    if (t < 1/6) return p + (q - p) * 6 * t;
	    if (t < 1/2) return q;
	    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	    return p;
	  }

	  const q = ratioL < 0.5 ? ratioL * (1 + ratioS) : ratioL + ratioS - ratioL * ratioS;
	  const p = 2 * ratioL - q;
	  
	  ratioR = convertHueToRgb(p, q, ratioH + 1/3);
	  ratioG = convertHueToRgb(p, q, ratioH);
	  ratioB = convertHueToRgb(p, q, ratioH - 1/3);
  }

  return ({
  	numberR: Math.round(ratioR * 255), 
  	numberG: Math.round(ratioG * 255), 
  	numberB: Math.round(ratioB * 255)
  });
}

export default convertHslToRgb;