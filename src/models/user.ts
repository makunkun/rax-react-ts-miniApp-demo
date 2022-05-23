export default {
  state: {
    token: null,
    name: null,
  },
  reducers: {
    setUserInfo(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    updateUserInfo(payload) {
      const { token, name } = payload;
      dispatch.user.setUserInfo({
        token,
        name,
      });
    },
  }),
};
