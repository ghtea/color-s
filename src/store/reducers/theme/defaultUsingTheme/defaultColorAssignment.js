import IbmColorTable from './defaultColorAssignment/Ibm';
    
    
const defaultColorAssignment = {
  
  _id: "default"
	, title: "default"
	
  , author: "mbcat"
  , source: 'IBM'
  , tags: ['IBM']
  
  , assignment: {

    // ex: [ [10,10,10], [10,10,10], [10,10,10], ...   ] 총 9개
    basic: IbmColorTable['Cool Gray']
      
    , main: IbmColorTable['Magenta']
    , sub1: IbmColorTable['Cool Gray']
    , sub2: IbmColorTable['Cool Gray']
    , sub3: IbmColorTable['Cool Gray']
    
    , success: IbmColorTable['Blue']
    , failure: IbmColorTable['Red']
    , warning: IbmColorTable['Purple']
    , info: IbmColorTable['Cyan']
  
  }
}


export default defaultColorAssignment;


// https://www.ibm.com/design/language/color/
// 