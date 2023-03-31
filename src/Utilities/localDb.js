//get bookmarks value From local storage
const getBookmarksFromDB=()=>{
  let value={};
  const storageValue=localStorage.getItem("book-marks");
  if(storageValue){
    value=JSON.parse(storageValue);
  }
  return value;
}
//add bookmarks value to local storage
const addBookmarksToDB=(id,value)=>{
  let valueObject=getValueFromDB("book-marks");
  valueObject[id]=value;
  localStorage.setItem(key,JSON.stringify(valueObject));
}

//get time  From local storage
const getTimeFromDB=(key)=>{
  let totalTime=0;
  const storageValue=JSON.parse(localStorage.getItem("time")); 
  if(storageValue){
    const timeDB=storageValue["total-time"];
    
    totalTime+=parseInt(timeDB);
  }
  return totalTime;
}
//add time to local storage
const addTimeToDB=(time)=>{
  let totalTime=getTimeFromDB("time");
  const valueObject={};
  if(!totalTime){
    valueObject['total-time']=time;
  }
  else{
    totalTime+=time;
    valueObject['total-time']=totalTime;
  }
  localStorage.setItem("time",JSON.stringify(valueObject));
}


export{
  getBookmarksFromDB,
  addBookmarksToDB,
  getTimeFromDB,
  addTimeToDB
}