const create = (data) => {
    const values = Object.values(data);
    
    const createdToken = values.reduce((token = "", value) => `${token}#!#${value}`);
    const date = new Date().getTime();
    return `${createdToken}#!#${date}`;
}

module.exports = create;