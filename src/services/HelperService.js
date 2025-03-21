const HelperService = {
  getLoginUserData(key) {
    const localdata = JSON.parse(localStorage.getItem("UserData") || "");
    return localdata[key];
  },
  getAmountInWord(key) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    if (key === 0) return "Zero";

    let word = '';
    let num = parseInt(key);
    let numStr = num?.toString();
    let numLength = numStr?.length;
    let groupCount = 0;

    while (numLength > 0) {
      let group = numStr.substring(Math.max(0, numLength - 3), numLength);
      let groupNum = parseInt(group);
      if (groupNum > 0) {
        let groupWord = '';
        if (groupNum % 100 < 20 && groupNum % 100 > 10) {
          groupWord = teens[groupNum % 10] + " ";
        } else {
          groupWord = tens[Math.floor((groupNum % 100) / 10)] + " " + units[groupNum % 10] + " ";
        }
        if (Math.floor(groupNum / 100) > 0) {
          groupWord = units[Math.floor(groupNum / 100)] + " Hundred " + groupWord;
        }
        word = groupWord + thousands[groupCount] + " " + word;
      }
      groupCount++;
      numLength -= 3;
    }

    return word.trim();
  },
};
export default HelperService;
