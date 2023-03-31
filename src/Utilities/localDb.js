const getValueFromDB=(key)=>{
  let value={};
  const storageValue=localStorage.getItem(key);
  if(storageValue){
    value=JSON.parse(storageValue);
  }
  return value;
}
const addValueToDB=(id,value,key)=>{
  let valueObject=getValueFromDB(key);
  valueObject[id]=value;
  localStorage.setItem(key,JSON.stringify(valueObject));
}


// const addTimeToDB=(id,time)=>{
//   let readBlog=getTotalTimeFromDB();
//   readBlog[id]=time;
//   localStorage.setItem('total-time',JSON.stringify(readBlog));
// }

export{
  getValueFromDB,
  addValueToDB
}