// https://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */


function convertRgbToHsl(numberR, numberG, numberB){
  
  const ratioR = numberR / 255;
  const ratioG = numberG / 255;
  const ratioB = numberB / 255;
   
  // r /= 255, g /= 255, b /= 255;
  const max = Math.max(ratioR, ratioG, ratioB);
  const min = Math.min(ratioR, ratioG, ratioB);
  
  let ratioH, ratioS, ratioL = (max + min) / 2;

  if(max == min){
    ratioH = ratioS = 0; // achromatic
  } 
  else{
    var diff = max - min;
    ratioS = ratioL > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch(max){
      case ratioR: ratioH = (ratioG - ratioB) / diff + (ratioG < ratioB ? 6 : 0); break;
      case ratioG: ratioH = (ratioB - ratioR) / diff + 2; break;
      case ratioB: ratioH = (ratioR - ratioG) / diff + 4; break;
    }
    ratioH /= 6;
  }

  
  return ({
  	numberH: Math.round(ratioH * 360 * 10)/10, 
  	numberS: Math.round(ratioS * 100 * 10)/10, 
  	numberL: Math.round(ratioL * 100 * 10)/10
  });
}

export default convertRgbToHsl;


