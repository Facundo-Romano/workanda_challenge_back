import throwError from "../throwError.js";

const validateId = (id) => {
    if (typeof parseInt(id) !== 'number' || isNaN(id)) throwError('Invalid id', 400);
};

export default validateId;