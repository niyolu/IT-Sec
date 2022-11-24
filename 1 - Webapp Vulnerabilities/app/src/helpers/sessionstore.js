const store = {};
save_session = (user, SID) => {
    store[user] = SID;
};
get_session = (user) => store[user];

module.exports = {
    save_session,
    get_session
};