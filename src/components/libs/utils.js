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

export function commafy(number) {
  var toCommafy = Math.floor(Math.abs(number / 1000));
  var modulo = (Math.abs(number % 1000));
  var sign = number < 0 ? '-' : '';
  if (toCommafy) {
    return sign + commafy(toCommafy) + ',' + (modulo < 10 ? '00' : (modulo < 100 ? '0' : '')) + modulo;
  } else {
    return sign + modulo.toString();
  }
}