const fs = require('fs');
const path = require('path');

const directoryPath = path.join('src/', 'routes');
let fileNames = [];

const readDirectory = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err)  return console.log('Unable to scan directory: ' + err); 

        files.forEach((file) => {
            const filePath = getPath(directoryPath, file);
            if(isDirectoryName(filePath)) {
                readDirectory(filePath);
            }else{
                fileNames.push(filePath);
            }
            
        });
    });
}

const isDirectoryName = (filePath) => {
    try {
        return fs.statSync(filePath, () => false).isDirectory()
    } catch (error) {
        return false;
    }; 
}

const getPath = (directoryPath, name) => {
    return path.join(directoryPath, name);
}

readDirectory(directoryPath);
isDirectoryName(directoryPath, 'user');
console.log("FILES", fileNames)