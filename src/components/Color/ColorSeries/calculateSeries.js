import getContrast from 'get-contrast';
import acColors from "ac-colors";
import colorlab from 'colorlab';




const calculateOne = (listHslPrevious, listHslStart, listHslEnd, indexAll, size) => {
	
	let listColorTesting = [];
    
  const colorPrevious_acColors = new acColors({"color":listHslPrevious, "type":"hsl"}); 
  const listLabPrevious = colorPrevious_acColors.lab; 
  const colorPrevious_colorLab = new colorlab.CIELAB(...listLabPrevious);
  
  const colorStart_acColors = new acColors({"color":listHslStart, "type":"hsl"}); 
  const listLabStart = colorStart_acColors.lab; 
  const colorStart_colorLab = new colorlab.CIELAB(...listLabStart);
  
  const colorEnd_acColors = new acColors({"color":listHslEnd, "type":"hsl"}); 
  const listLabEnd = colorEnd_acColors.lab; 
  const colorEnd_colorLab = new colorlab.CIELAB(...listLabEnd);
  
  
  for (var changeSaturation = -20; changeSaturation <= 20; changeSaturation++){
    if ( (listHslPrevious[1]+changeSaturation) > 100 || (listHslPrevious[1]+changeSaturation) < 0) {
      continue;
    }
    
    for (var changeLightness = 0; changeLightness >= -20; changeLightness--){
      if ( (listHslPrevious[2]+changeLightness) > 100 || (listHslPrevious[2]+changeLightness) < 0) {
        continue;
      }
      
      
      const listHslTesting = [listHslPrevious[0], listHslPrevious[1]+changeSaturation, listHslPrevious[2]+changeLightness];
      const colorTesting_acColors = new acColors({"color":listHslTesting, "type":"hsl"});
      const listLabTesting = colorTesting_acColors.lab;
      const colorTesting_colorLab = new colorlab.CIELAB(...listLabTesting);
      
      //console.log('listHslTesting')
      //console.log(listHslTesting)
      //console.log(listHslPrevious)
      
      // 21 = 1.32 를 11번 곱한것
      const contrast_Testing_Previous = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(${listHslPrevious[0]}, ${listHslPrevious[1]}%, ${listHslPrevious[2]}%)`);
      const contrast_Testing_Start = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(${listHslStart[0]}, ${listHslStart[1]}%, ${listHslStart[2]}%)`);
      const contrast_Testing_End = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(${listHslEnd[0]}, ${listHslEnd[1]}%, ${listHslEnd[2]}%)`);
      
      const difference_Testing_Previous = colorlab.CIEDE2000(colorTesting_colorLab, colorPrevious_colorLab);
      const difference_Testing_Start = colorlab.CIEDE2000(colorTesting_colorLab, colorStart_colorLab);
      const difference_Testing_End = colorlab.CIEDE2000(colorTesting_colorLab, colorEnd_colorLab);
      
      
      const colorTesting = {
        listHsl: listHslTesting,
        listLab: listLabTesting,
        
        contrast_Testing_Previous: contrast_Testing_Previous,
        difference_Testing_Previous: difference_Testing_Previous,
        
        contrast_Testing_Start: contrast_Testing_Start,
        difference_Testing_Start: difference_Testing_Start,
        
        contrast_Testing_End: contrast_Testing_End,
        difference_Testing_End: difference_Testing_End
      }
      //console.log(colorTesting);
      listColorTesting.push(colorTesting);
      
    }
  }
  
  const contrastAll = getContrast.ratio(`hsl(${listHslStart[0]}, ${listHslStart[1]}%, ${listHslStart[2]}%)`, `hsl(${listHslEnd[0]}, ${listHslEnd[1]}%, ${listHslEnd[2]}%)`);
  const differenceAll = colorlab.CIEDE2000(colorStart_colorLab, colorEnd_colorLab);

  const contrastGoal_Testing_Previous = Math.pow(contrastAll, 1/(size-1));
  const differenceGoal_Testing_Previous = differenceAll/(size-1);
  
  const contrastGoal_Testing_Start = Math.pow(contrastAll, (indexAll-0)/(size-1));
  const differenceGoal_Testing_Start = differenceAll/(size-1) * (indexAll-0);
  const contrastGoal_Testing_End = Math.pow(contrastAll, ((size-1)-indexAll)/(size-1));
  const differenceGoal_Testing_End = differenceAll/(size-1) * ((size-1)-indexAll);
  
  const colorClosest = listColorTesting.reduce(function(colorPrevious, colorCurrent) {
    
    const errorPrevious = 
      Math.pow((colorPrevious.contrast_Testing_Previous - contrastGoal_Testing_Previous)/contrastGoal_Testing_Previous, 2) + 
      Math.pow((colorPrevious.difference_Testing_Previous - differenceGoal_Testing_Previous)/differenceGoal_Testing_Previous, 2) +
      
      Math.pow((colorPrevious.contrast_Testing_Start - contrastGoal_Testing_Start)/contrastGoal_Testing_Start, 2) + 
      Math.pow((colorPrevious.difference_Testing_Start - differenceGoal_Testing_Start)/differenceGoal_Testing_Start, 2) +
      
      Math.pow((colorPrevious.contrast_Testing_End - contrastGoal_Testing_End)/contrastGoal_Testing_End, 2) + 
      Math.pow((colorPrevious.difference_Testing_End - differenceGoal_Testing_End)/differenceGoal_Testing_End, 2);
      
      
      
    const errorCurrent = 
      Math.pow((colorCurrent.contrast_Testing_Previous - contrastGoal_Testing_Previous)/contrastGoal_Testing_Previous, 2) + 
      Math.pow((colorCurrent.difference_Testing_Previous - differenceGoal_Testing_Previous)/differenceGoal_Testing_Previous, 2) +
      
      Math.pow((colorCurrent.contrast_Testing_Start - contrastGoal_Testing_Start)/contrastGoal_Testing_Start, 2) + 
      Math.pow((colorCurrent.difference_Testing_Start - differenceGoal_Testing_Start)/differenceGoal_Testing_Start, 2) +
      
      Math.pow((colorCurrent.contrast_Testing_End - contrastGoal_Testing_End)/contrastGoal_Testing_End, 2) + 
      Math.pow((colorCurrent.difference_Testing_End - differenceGoal_Testing_End)/differenceGoal_Testing_End, 2);
      
    return ( errorCurrent < errorPrevious  ? colorCurrent : colorPrevious);
  });
  
  
  console.log('colorClosest');
  console.log(colorClosest);
  
  return new Promise(function (resolve, reject) {
  	
		if (colorClosest.listHsl) {
			resolve(colorClosest.listHsl);
		}

		else {
			reject(Error("calculation error"));
		}
		
	});
  
};



const calculateSeries = async (listHslStart, listHslEnd, size) => {
	
	console.log('listHslStart');
	console.log(listHslStart);
	console.log(listHslEnd);
	
	let listIndexAll = []    // [1, 2, 3, 4, ...] (start, end 제외)
  for (var indexAll=1; indexAll < size-1; indexAll++){
    listIndexAll.push(indexAll);
  }
  
  
	
	let listColorHslBetween = []; // (start, end 제외)
  for (const indexAll of listIndexAll) {  // listIndexAll: [1, 2, 3, 4, ...] (start, end 제외)
    if (indexAll===1){
      const listHsl = await calculateOne(listHslStart, listHslStart, listHslEnd, indexAll, size);
      listColorHslBetween.push(listHsl);
    }
    else {
      const listHsl = await calculateOne(listColorHslBetween[indexAll-2], listHslStart, listHslEnd, indexAll, size); 
      listColorHslBetween.push(listHsl);
    }
  }
  
  const listColorHslAll = [listHslStart, ...listColorHslBetween, listHslEnd]
  console.log('Done!');
  console.log(listColorHslAll)

  return listColorHslAll;
  
 }
 
 
 export default calculateSeries;
 
 /*
  const listHsl10 = await calculateOne(listHslStart, 'up', '10', 1);
  const listHsl20 = await calculateOne(listHsl10, 'up', '20', 2);
  const listHsl30 = await calculateOne(listHsl20, 'up', '30', 3);
  const listHsl40 = await calculateOne(listHsl30, 'up', '40', 4);
  const listHsl50 = await calculateOne(listHsl30, 'up', '50', 5);
  const listHsl60 = await calculateOne(listHsl40, 'up', '60', 6);
  const listHsl70 = await calculateOne(listHsl50, 'up', '70', 7);
  const listHsl80 = await calculateOne(listHsl60, 'up', '80', 8);
  const listHsl90 = await calculateOne(listHsl70, 'up', '90', 9);
  const listHsl100 = await calculateOne(listHsl80, 'up', '100', 10);
  
 */
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