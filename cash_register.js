//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
//Note: mathematical operands on floating numbers may give result in unexpected format 

function checkCashRegister(price, cash, cid) {
    let output = {status: "", change: []}
    let change = [];
    let delta = cash - price;
    let total = Math.round(cid.reduce((sum, elem) => sum + elem[1], 0) * 100) / 100;
    console.log(delta);
    console.log(total);
    console.log(delta === total);
    let currencyUnit = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    }
    function getAmount(unit) {
      let amount = 0;
      for (let i in cid) {
        if (cid[i].includes(unit)){
          amount = cid[i][1];
          break;
        }
      }
      return amount;
    }
    function getChange(unit, delta) {
      let unitAmount = getAmount(unit);
      if (delta >= unitAmount) {
        change.push([unit, unitAmount]);
        return Math.round((delta - unitAmount) * 100) / 100;
      } else {
        let unitChange = Math.floor(delta / currencyUnit[unit]) * currencyUnit[unit];
        change.push([unit, unitChange]);
        return Math.round((delta - unitChange) * 100) / 100;
      }
    }
    let val = getChange("PENNY", getChange("NICKEL", getChange("DIME", getChange("QUARTER", getChange("ONE", getChange("FIVE", getChange("TEN", getChange("TWENTY", getChange("ONE HUNDRED", delta)))))))));
    if ((val > 0 && val < delta) || delta > total) {
      output.status = "INSUFFICIENT_FUNDS";
    } else if(val === 0 && delta === total) {
      output.status = "CLOSED";
      output.change = change.map((elem, idx, self) => self[self.length - 1 - idx]);
    } else {
      output.status = "OPEN";
      output.change = change.filter(elem => elem[1] !== 0);
    }
    return output;
  }