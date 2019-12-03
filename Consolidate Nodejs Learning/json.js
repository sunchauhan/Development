// Try edit message
const data = {
    message : "Hello world",
    bool : false,
    num : 10,
    undef : ['0',1,45,'6'],
    nul : null,
    object : { id : 10 }
  }
  
  console.log(data);
  

  
  
  console.log(JSON.stringify(data));
  
  
  console.log(JSON.parse(JSON.stringify(data)));