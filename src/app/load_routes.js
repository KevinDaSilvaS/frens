const fs = require('fs');
const path = require('path');

const directoryPath = path.join('src/', 'routes');
let paths = [];

const readDirectory = async (directoryPath) => {
    const filePaths = await fs.readdir(directoryPath, async (err, files) => {
        if (err) return console.log('Unable to scan directory: ' + err); 

        paths = await paths.concat(iterateFiles(files));
        console.log(paths)
        return paths;
    });
    console.log(filePaths)
    return filePaths;
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
    return fileNames
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