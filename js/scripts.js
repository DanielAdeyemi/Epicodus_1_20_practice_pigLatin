function pigLatin(user) {
  let vowels = ['e', 'u', 'i', 'o', 'a'];
  let sentence;
  if (/[euioa]/i.test(user[0])) {
    sentence = user + "way";
  } else {
    sentence = "not here";
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