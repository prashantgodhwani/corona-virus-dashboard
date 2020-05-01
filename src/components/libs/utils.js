export function timeSince(timeStamp) {
  timeStamp = new Date(timeStamp.toString());
  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  console.log(timeStamp, parseInt(secondsPast) + 's');
  if (secondsPast < 60) {
    console.log(parseInt(secondsPast) + 's');
    return parseInt(secondsPast) + 's';
  }
  if (secondsPast < 3600) {
    console.log(parseInt(secondsPast) + 's');
    return parseInt(secondsPast / 60) + 'm';
  }
  if (secondsPast <= 86400) {
    console.log(parseInt(secondsPast) + 's');
    return parseInt(secondsPast / 3600) + 'h';
  }
  if (secondsPast > 86400) {
    var day = timeStamp.getDate();
    var month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    var year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
    console.log(parseInt(secondsPast) + 's');
    return day + " " + month + year;
  }
}

export function commafy(num) {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}