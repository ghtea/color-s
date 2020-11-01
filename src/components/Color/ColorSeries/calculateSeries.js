import getContrast from 'get-contrast';
import acColors from "ac-colors";
import colorlab from 'colorlab';




const calculateOne = (listHslExisting, direction, position, index) => {
	
	let listColorTesting = [];
    
  const colorExisting_acColors = new acColors({"color":listHslExisting, "type":"hsl"});
  const listLabExisting = colorExisting_acColors.lab;
  const colorExisting_colorLab = new colorlab.CIELAB(...listLabExisting);
  
  const colorWhite_colorLab = new colorlab.CIELAB([100, 0, 0]);
  const colorBlack_colorLab = new colorlab.CIELAB([0, 0, 0]);
  
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
      const contrast_Testing_Existing = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(${listHslExisting[0]}, ${listHslExisting[1]}%, ${listHslExisting[2]}%)`);
      const contrast_Testing_White = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(0, 0%, 100%)`);
      const contrast_Testing_Black = getContrast.ratio(`hsl(${listHslTesting[0]}, ${listHslTesting[1]}%, ${listHslTesting[2]}%)`, `hsl(0, 0%, 0%)`);
      
      
      const colorTesting_acColors = new acColors({"color":listHslTesting, "type":"hsl"});
      const listLabTesting = colorTesting_acColors.lab;
      const colorTesting_colorLab = new colorlab.CIELAB(...listLabTesting);
      
      
      const difference_Testing_Existing = colorlab.CIEDE2000(colorTesting_colorLab, colorExisting_colorLab);
      const difference_Testing_White = colorlab.CIEDE2000(colorTesting_colorLab, colorWhite_colorLab);
      const difference_Testing_Black = colorlab.CIEDE2000(colorTesting_colorLab, colorBlack_colorLab);
      
      
      const colorTesting = {
        listHsl: listHslTesting,
        listLab: listLabTesting,
        
        contrast_Testing_Existing: contrast_Testing_Existing,
        difference_Testing_Existing: difference_Testing_Existing,
        
        contrast_Testing_White: contrast_Testing_White,
        difference_Testing_White: difference_Testing_White,
        
        contrast_Testing_Black: contrast_Testing_Black,
        difference_Testing_Black: difference_Testing_Black
      }
      console.log(colorTesting);
      listColorTesting.push(colorTesting);
      
    }
  }
  
  const contrastGoal_Testing_Existing = Math.pow(21, 1/11);
  const differenceGoal_Testing_Existing = 100/11;
  
  const contrastGoal_Testing_White = Math.pow(21, index/11);
  const differenceGoal_Testing_White = 100/11 * index;
  const contrastGoal_Testing_Black = Math.pow(21, (11-index)/11);
  const differenceGoal_Testing_Black = 100/11 * (11-index);
  
  const colorClosest = listColorTesting.reduce(function(colorPrevious, colorCurrent) {
    
    const errorPrevious = 
      Math.pow((colorPrevious.contrast_Testing_Existing - contrastGoal_Testing_Existing)/contrastGoal_Testing_Existing, 2) + 
      Math.pow((colorPrevious.difference_Testing_Existing - differenceGoal_Testing_Existing)/differenceGoal_Testing_Existing, 2) +
      
      Math.pow((colorPrevious.contrast_Testing_White - contrastGoal_Testing_White)/contrastGoal_Testing_White, 2) + 
      Math.pow((colorPrevious.difference_Testing_White - differenceGoal_Testing_White)/differenceGoal_Testing_White, 2) +
      
      Math.pow((colorPrevious.contrast_Testing_Black - contrastGoal_Testing_Black)/contrastGoal_Testing_Black, 2) + 
      Math.pow((colorPrevious.difference_Testing_Black - differenceGoal_Testing_Black)/differenceGoal_Testing_Black, 2);
      
      
      
    const errorCurrent = 
      Math.pow((colorCurrent.contrast_Testing_Existing - contrastGoal_Testing_Existing)/contrastGoal_Testing_Existing, 2) + 
      Math.pow((colorCurrent.difference_Testing_Existing - differenceGoal_Testing_Existing)/differenceGoal_Testing_Existing, 2) +
      
      Math.pow((colorCurrent.contrast_Testing_White - contrastGoal_Testing_White)/contrastGoal_Testing_White, 2) + 
      Math.pow((colorCurrent.difference_Testing_White - differenceGoal_Testing_White)/differenceGoal_Testing_White, 2) +
      
      Math.pow((colorCurrent.contrast_Testing_Black - contrastGoal_Testing_Black)/contrastGoal_Testing_Black, 2) + 
      Math.pow((colorCurrent.difference_Testing_Black - differenceGoal_Testing_Black)/differenceGoal_Testing_Black, 2);
      
    return ( errorCurrent < errorPrevious  ? colorCurrent : colorPrevious);
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
  
};



const calculateSeries = async (listHslWhite) => {
	
	let listColor = [];
	
	const listHsl10 = await calculateOne(listHslWhite, 'up', '10', 1);
  const listHsl20 = await calculateOne(listHsl10, 'up', '20', 2);
  const listHsl30 = await calculateOne(listHsl20, 'up', '30', 3);
  const listHsl40 = await calculateOne(listHsl30, 'up', '40', 4);
  const listHsl50 = await calculateOne(listHsl30, 'up', '50', 5);
  const listHsl60 = await calculateOne(listHsl40, 'up', '60', 6);
  const listHsl70 = await calculateOne(listHsl50, 'up', '70', 7);
  const listHsl80 = await calculateOne(listHsl60, 'up', '80', 8);
  const listHsl90 = await calculateOne(listHsl70, 'up', '90', 9);
  const listHsl100 = await calculateOne(listHsl80, 'up', '100', 10);
  
  return [
    listHsl10, 
    listHsl20, 
    listHsl30, 
    listHsl40, 
    listHsl50, 
    listHsl60, 
    listHsl70, 
    listHsl80, 
    listHsl90, 
    listHsl100
  ];
  
 }
 
 
 export default calculateSeries;
 
 /*
  const listHsl10 = await calculateOne(listHslWhite, 'up', '10', 1);
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