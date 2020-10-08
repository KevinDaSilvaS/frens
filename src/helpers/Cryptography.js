const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = "$2b$10$k6XxkOiU99WipSPOafcuku";

const generateUserCode = () => {
    return uuidv4();
}

const encryptData = async (data) => {
    return await bcrypt.hashSync(data, salt);
}

module.exports = { generateUserCode, encryptData }