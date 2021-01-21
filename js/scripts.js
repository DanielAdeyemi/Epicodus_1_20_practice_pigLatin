function pigLatin(user) {
  //let vowels = ['e', 'u', 'i', 'o', 'a'];
  let array = [];
  let sentence;
  if (/[euioa]/i.test(user[0])) {
    sentence = user + "way";
  } else {
    for (let i = 0; i < user.length; i++) {
      if (/[^euioa]/i.test(user[i])) {
        continue;
      } else {
        let user2 = user.slice(0, i);
        let user1 = user.slice(i);
        sentence = user1 + user2 + "ay";
        break;
      }
    }

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