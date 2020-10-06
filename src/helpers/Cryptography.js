const bcrypt = require('bcrypt');
const { krypt } = require('../../kcrypt/kcrypt');

const generateUserCode = (data) => {
    return krypt(data, '-');
}

const encryptData = async (data) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(data, salt);
}

module.exports = { generateUserCode, encryptData }