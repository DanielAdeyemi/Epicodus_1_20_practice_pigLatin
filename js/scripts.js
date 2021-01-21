function pigLatin(user) {
  let vowels = ['e', 'u', 'i', 'o', 'a'];
  let array = [];
  let sentence;
  if (/[euioa]/i.test(user[0])) {
    sentence = user + "way";
  } else {
    for (let i = 0; i < user.length; i++) {
      if (/[^euioa]/i.test(user[i])) {
        array.push(user[i])
      } else {
        let user1 = user.slice(i);
        break;
      }
    }


    //sentence = "not here";
  }
  // TODO



  return sentence;
}


$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('input').val();
    let out = pigLatin(user);
    $('.output').text(out);
  });
});