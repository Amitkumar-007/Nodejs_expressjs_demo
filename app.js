
const {readFile,writeFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data)=>{
        if(err) reject(err);
        else resolve(data);
        })
    })
}

const writeText = (path) =>{
    return new Promise((resolve, reject) => {
        writeFile(path, 'hello guy',{flag: 'a', encoding: 'utf8'}, (err, data)=>{
        if(err) reject(err);
        else resolve(path);
        })
    })
}

getText('./first.txt')
.then((result)=> console.log(result))
.catch((err)=> console.log(err))

writeText('./first.txt')
.then((result)=> console.log(result))
.catch((err)=> console.log(err,"hii"))