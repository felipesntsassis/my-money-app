const userKey = '_mymoney_user';
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALID':
            if (action.payload) {
                return { ...state, validToken: true };
            } else {
                localStorage.removeItem(userKey);
                return { ...state, user: null, validToken: false };
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload));
            return { ...state, user: action.payload, validToken: true }
        default:
            return state;
    }
};
