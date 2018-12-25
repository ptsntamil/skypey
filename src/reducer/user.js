import { generateUser } from '../data/static-data';

const user = (state = generateUser(), action) => {
    return state;
};

export default user;