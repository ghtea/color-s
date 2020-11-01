import getContrast from 'get-contrast';
import acColors from "ac-colors";
import colorlab from 'colorlab';




const calculateOne = (listHslExisting, direction, position) => {
	
	let listColorTesting = [];
    
  const colorExisting_acColors = new acColors({"color":listHslExisting, "type":"hsl"});
  const listLabExisting = colorExisting_acColors.lab;
  const colorExisting_colorLab = new colorlab.CIELAB(...listLabExisting);
     
  for (var changeSaturation = -25; changeSaturation <= 25; changeSaturation++){
    if ( (0+changeSaturation) > 100 || (0+changeSaturation) < 0) {
      continue;
    }
    
    for (var changeLightness = 0; changeLightness <= 25; changeLightness++){
      if ( (100+changeLightness) > 100 || (100+changeLightness) < 0) {
        continue;
      }
      
      let listHslTesting = [];
      if (direction === 'up'){
      	listHslTesting = [listHslExisting[0], listHslExisting[1]+changeSaturation, listHslExisting[2]+changeLightness];
      }
      else if (direction === 'down'){
      	listHslTesting = [listHslExisting[0], listHslExisting[1]+changeSaturation, listHslExisting[2]-changeLightness];
      }
      
      // 21 = 1.32 를 11번 곱한것
      const contrastTesting = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(${listHslExisting[0]}, ${listHslExisting[1]}%, ${listHslExisting[2]}%)`);
      
      
      const colorTesting_acColors = new acColors({"color":listHslTesting, "type":"hsl"});
      const listLabTesting = colorTesting_acColors.lab;
      const colorTesting_colorLab = new colorlab.CIELAB(...listLabTesting);
      
      
      const difference = colorlab.CIEDE2000(colorTesting_colorLab, colorExisting_colorLab);
      
      
      const colorTesting = {
        listHsl: listHslTesting,
        listLab: listLabTesting,
        contrast: contrastTesting,
        difference: diff_white
      }
      console.log(colorTesting);
      listColorTesting.push(colorTesting);
      
    }
  }
  
  const contrastGoal = 1.32;
  const differenceGoal = 9.09;
  
  const colorClosest = listColorTesting.reduce(function(colorPrevious, colorCurrent) {
    
    const errorPrevious = Math.pow((colorPrevious.contrast - contrastGoal)/contrastGoal, 2) + Math.pow((colorPrevious.difference - differenceGoal)/differenceGoal, 2)
    const errorCurrent = Math.pow((colorCurrent.contrast - contrastGoal)/contrastGoal, 2) + Math.pow((colorCurrent.difference - differenceGoal)/differenceGoal, 2)
    
    return ( errorCurrent<errorPrevious  ? colorCurrent : colorPrevious);
  });
  
  console.log('colorClosest');
  console.log(colorClosest);
  
  
  
  return new Promise(function (resolve, reject) {
  	
		if (true) {
			resolve(colorClosest.listHsl);
		}

		else {
			reject(Error("calculation error"));
		}
		
	});
  
}



const calculateSeries = async (listHslWhite) => {
		
  const listHsl10 = calculateOne(listHslExisting, direction, position)
  
    
    
    
    
 
 }
 
 
 export default calculateSeries;
 
 
 /*
 
  dispatch( actionsColor.return_REPLACE_COLOR({
    location: ['series', 'itemCurrent', position, 'hsl'],
    replacement: {
      h: colorClosest.listHsl[0],
      s: colorClosest.listHsl[1],
      l: colorClosest.listHsl[2]
    }
  }) )
 
 */