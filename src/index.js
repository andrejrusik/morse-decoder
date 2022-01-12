const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  let char = "";
  let charMorse = "";

  for (let i = 0; i < expr.length; i += 10) {
    char = expr.slice(i, i + 10);
    if (char === '**********') {
      result += " ";
    }
    for (let j = 0; j < 10; j += 2) {
      switch (char[j] + char[j + 1]) {
        case "10":
          charMorse += ".";
          break;
        case "11":
          charMorse += "-";
          break;
      }
    }
    for (const key in MORSE_TABLE) {
      key === charMorse ? result += MORSE_TABLE[key] : "";
    }
    charMorse = '';
  }
  return result ;
}

module.exports = {
  decode,
};
