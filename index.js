function scuberGreetingForFeet(someNumber){
  // must be if and else
  if (someNumber <= 400) {
    return 'This one is on me!';
  } else if (someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someNumber >= 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // ternary
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // switch
  switch (tip) {
    case ('generous') :
      return 'Thank you so much.' ;
      break;
    case ('not as generous') :
      return 'Thank you.' ;
      break;
    default :
      return 'Bye.';
    }
  }