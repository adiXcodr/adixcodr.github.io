
const saveUserData = (data) => {
    return {
        type: 'SET_USER',
        payload: data
    };
};

export {
    saveUserData
};