const getTotalTimeFromDB=()=>{
  let readBlog={};
  const storageReadBlog=localStorage.getItem('total-time');
  if(storageReadBlog){
    readBlog=JSON.parse(storageReadBlog);
  }
  return readBlog;
}
const addTimeToDB=(id,time)=>{
  let readBlog=getTotalTimeFromDB();
  readBlog[id]=time;
  console.log("adding");
  localStorage.setItem('total-time',JSON.stringify(readBlog));
}

export{
  getTotalTimeFromDB,
  addTimeToDB
}