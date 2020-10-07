const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const generateUserCode = () => {
    return uuidv4();
}

const encryptData = async (data) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(data, salt);
}

module.exports = { generateUserCode, encryptData }