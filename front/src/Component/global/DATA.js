export function GetData(url){

  return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'GET'
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        resolve(responseJson)
      })
      .catch((err)=>{
        reject(err);
      });
    });

  }