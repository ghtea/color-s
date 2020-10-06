import colorTableIbm from './colorTables/Ibm';
    
    
const defaultColorScheme = {
  
  author: "mbcat"
  , title: "test"
  
  , color: {

    // ex: [ [10,10,10], [10,10,10], [10,10,10], ...   ] 총 9개
    basic: colorTableIbm['Warm Gray']
      
    , main: colorTableIbm['Teal']
    , sub1: colorTableIbm['Cool Gray']
    , sub2: colorTableIbm['Cool Gray']
    , sub3: colorTableIbm['Cool Gray']
    
    , success: colorTableIbm['Green']
    , failure: colorTableIbm['Red']
    , warning: colorTableIbm['Purple']
    , info: colorTableIbm['Cyan']
  }
  
}


export default defaultColorScheme;


// https://www.ibm.com/design/language/color/
// 