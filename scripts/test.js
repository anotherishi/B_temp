const hk1 = {
  0: 0n,
  1: 1n,
  2: 2n,
  3: 3n,
  4: 4n,
  5: 5n,
  6: 6n,
  7: 7n,
  8: 8n,
  9: 9n,
  a: 10n,
  b: 11n,
  c: 12n,
  d: 13n,
  e: 14n,
  f: 15n,
  A: 10n,
  B: 11n,
  C: 12n,
  D: 13n,
  E: 14n,
  F: 15n,
};

const hk2 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};

function htod(number) {
  let digits = Array.from(number).map((f) => hk1[f]);
  let s = 0n;
  let l = BigInt(digits.length - 1);
  for (let i = 0n; i < l + 1n; i++) {
    s += digits[i] * 16n ** (l - i);
  }
  return s.toString();
}

function otod(number) {
  let digits = Array.from(number).map(BigInt);
  let s = 0n;
  let l = BigInt(digits.length - 1);
  for (let i = 0n; i < l + 1n; i++) {
    s += digits[i] * 8n ** (l - i);
  }
  return s.toString();
}

function btod(number) {
  let digits = Array.from(number).map(BigInt);
  let s = 0n;
  let numberLength = BigInt(digits.length - 1);
  for (let i = 0n; i < l + 1n; i++) {
    s += digits[i] * 2n ** (l - i);
  }
  return s.toString();
}

function dtob(number) {
  let quotient = BigInt(number);
  let divisor = 2n;
  let s = "";
  let remainder;
  while (q) {
    remainder = quotient % divisor;
    quotient = quotient / divisor;
    s += remainder.toString();
  }
  return Array.from(s).reverse().join("");
}

function dtoo(number) {
  let quotient = BigInt(number);
  let divisor = 8n;
  let s = "";
  let remainder;
  while (quotient) {
    remainder = quotient % divisor;
    quotient = quotient / divisor;
    s += remainder.toString();
  }
  return Array.from(s).reverse().join("");
}

function dtoh(number) {
  let quotient = BigInt(number);
  let divisor = 16n;
  let s = "";
  let remainder;
  while (quotient) {
    remainder = quotient % divisor;
    quotient = quotient / divisor;
    s += hk2[remainder.toString()];
  }
  return Array.from(s).reverse().join("");
}

const hex = {
  dec: (number) => {
    let digits = Array.from(number).map((f) => hk1[f]);
    let result = 0n;
    let numberLength = BigInt(digits.length - 1);
    for (let i = 0n; i < numberLength + 1n; i++) {
      result += digits[i] * 16n ** (numberLength - i);
    }
    return result.toString();
  },
  oct: (number) => {},
  bin: (number) => {
    let d = Array.from(number).map((f) => hk1[f].toString());
    let resultant = [];
    d.forEach((g) => {
      resultant.push(pad(dec.bin(g), 4));
    });
    return resultant.join("");
  },
};

const dec = {
  to: (number, numberBase) => {
    let quotient = BigInt(number);
    let divisor = BigInt(numberBase);
    let resultant = "";
    let remainder;
    if (numberBase == 16)
      while (quotient) {
        remainder = quotient % divisor;
        quotient = quotient / divisor;
        resultant += hk2[remainder.toString()];
      }
    else
      while (quotient) {
        remainder = quotient % divisor;
        quotient = quotient / divisor;
        resultant += remainder.toString();
      }
    return Array.from(resultant).reverse().join("");
  },
  hex: (number) => dec.to(number, 16),
  oct: (number) => dec.to(number, 8),
  bin: (number) => dec.to(number, 2),
};

const oct = {
  hex: (number) => {},
  dec: (number) => {},
  bin: (number) => {
    let d = Array.from(number);
    let resultant = [];
    d.forEach((g) => {
      resultant.push(pad(dec.bin(g), 3));
    });
    return resultant.join("");
  },
};

const bin = {
  hex: (number) => {
    d = chunkSubstr(pad(number, 4), 4);
    s=''
    d.forEach(r=>{
        s+= hk2[bin.dec((r))]
    })
    return s
  },
  dec: (number) => {
    n = BigInt(number.length);
    s = 0n;
    for (let i = 0n; i < n; i++) {
      s += BigInt(number[i]) * 2n ** (n - i - 1n);
    }
    return s.toString();
  },
  oct: (number) => {},
};

function pad(number, sliceSize) {
  if (BigInt(number.length) % BigInt(sliceSize)) {
    return pad("0" + number, sliceSize);
  }
  return number;
}

function pad2(number, sliceSize) {
  g = chunkSubstr(number, sliceSize);
  d = sliceSize - (g.slice(-1)[0].length);
  return "0".repeat(d) + number;
}

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}
