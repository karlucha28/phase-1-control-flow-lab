function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<400){
    return 'This one is on me!'
  } else if (distance<2000)
  {return 'That will be twenty bucks.'
  } else if (distance<2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(apologice){
  // Write your code here!
  switch(apologice) {
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous': 
    return 'Thank you.';
    break;
  default:
    return 'Bye.'
    break;}

}