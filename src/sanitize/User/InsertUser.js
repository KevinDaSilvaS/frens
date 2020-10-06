const validateInsertUser = require('../../validations/user/InsertUser');
const Error = require('../../helpers/Error');
const Cryptography = require('../../helpers/Cryptography');
const Status = require('../../helpers/Status');

const sanitize = async (req, res) => {
    const result = validateInsertUser(req);
    if (result.error) {
        Error(res, Status.BAD_REQUEST, result.error.details);
    }

    const { email, password } = req.body;

    const userCode = Cryptography.generateUserCode(email);
    req.body.email = await Cryptography.encryptData(email);
    req.body.password = await Cryptography.encryptData(password);

    return { ...req.body, userCode };
}

module.exports = sanitize