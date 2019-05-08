const args = process.argv[2];

const countBottles = (dollars) => {
  let bottles = Math.floor(dollars/2);
  let numOfEmptyBottles = bottles;
  let numOfCaps = bottles;
  let storeEmptyBottles = 0;
  let storeCaps = 0;
  while(numOfCaps >= 4 || numOfEmptyBottles >= 2) {
    let emptyBottlesRedeemed = Math.floor(numOfEmptyBottles/2);
    let capsReedeemed = Math.floor(numOfCaps/4);
    bottles = bottles + capsReedeemed + emptyBottlesRedeemed;
    numOfCaps = numOfCaps - 3*capsReedeemed + emptyBottlesRedeemed;
    numOfEmptyBottles = numOfEmptyBottles - emptyBottlesRedeemed + capsReedeemed;
    storeEmptyBottles += emptyBottlesRedeemed;
    storeCaps += capsReedeemed;
  }
  return [bottles,storeEmptyBottles,storeCaps,numOfEmptyBottles,numOfCaps];
}

const makeMessage = (dollars) =>{
  const [bottles,emptyBottlesRedeemed,capsReedeemed,numOfEmptyBottles,numOfCaps] = countBottles(dollars);
  return `Total Bottles : ${bottles}
              Remaining Bottles : ${numOfEmptyBottles}
              Remaining Caps : ${numOfCaps}
              Total Earned:
              Bottles : ${emptyBottlesRedeemed}
              Caps : ${capsReedeemed}`;
}






console.log(makeMessage(args));