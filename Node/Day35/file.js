import fs from 'fs'


export const createFile = ()=>{


    fs.writeFile("data.txt","My First File Text",(err)=>{
     
        if(err){
            console.log(err);
            return
        }

        console.log('File Created Successfully');
        
    })


    

}


export const readFileData = ()=>{


    fs.readFile("data.txt","utf-8",(err,data)=>{
        if(err){
            console.log('something error',err);
            return
        }

        console.log(data);
        
    })

} 