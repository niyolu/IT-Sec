const store = {};
save_session = (user, SID) => {
    store[user] = SID;
};

get_session = (user) => store[user];
get_user = (SID) => {
    for (user in store)
        if (store[user] == SID)
            return user;
};

module.exports = {
    save_session,
    get_session,
    get_user,
};