const fs = require('fs');
const path = require('path');

const directoryPath = path.join('src/', 'routes');
let paths = [];
let props = {}

const readDirectory = async (directoryPath) => {
    await fs.readdir(directoryPath, (err, files) => {
        if (err) console.log('Unable to scan directory: ' + err); 

        paths = paths.concat(iterateFiles(files));
        setProp(paths)
    });
}

const iterateFiles = (files) => {
    const fileNames = [];
    files.forEach(async (file) => {

        const filePath = getPath(directoryPath, file);
        if(isDirectoryName(filePath)) {
            await readDirectory(filePath);
        }else{
            fileNames.push(filePath);
        }
    });
    return fileNames;
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

const setProp = (prop) => {
    props.routes = prop;
}

const exec = async () => {
    await readDirectory(directoryPath);
    setTimeout(() => {
        //console.log("---------->",props)
    }, 10)
    return props;
}

module.exports = exec();

