const HelperService = {
  getLoginUserData(key) {
    const localdata = JSON.parse(localStorage.getItem("UserData") || "");
    return localdata[key];
  },
};
export default HelperService;
