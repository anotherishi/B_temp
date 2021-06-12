// let hexKeys1 = {
//     10: "a",
//     11: "b",
//     12: "c",
//     13: "d",
//     14: "e",
//     15: "f",
// };
// let hexKeys2 = {
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13,
//     e: 14,
//     f: 15,
// };

// window.hex = {
//     dec: (num) => {
//         h = num.length;
//         s = 0;
//         for (let i = 0; i < h; i++) {
//             n = num.slice(i, i + 1);
//             s += (Object.keys(hexKeys2).includes(n) ? hexKeys2[n] : n) * 16 ** (h - i - 1);
//         }
//         return s;
//     },
//     oct: (num) => dec.oct(hex.dec(num)),
//     bin: (num) => {
//         s = "";
//         Array.from(num).forEach((d) => {
//             s += pad(dec.bin(Object.keys(hexKeys2).includes(d) ? hexKeys2[d] : d), 4);
//         });
//         return s;
//     },
// };

// window.dec = {
//     h: (num, b) => {
//         s = "";
//         q = num;
//         if (b == 16)
//             while (q) {
//                 r = q % b;
//                 q = parseInt(q / b);
//                 s += r > 9 ? hexKeys1[r] : r;
//             }
//         else
//             while (q) {
//                 r = q % b;
//                 q = parseInt(q / b);
//                 s += r;
//             }
//         return Array.from(s).reverse().join("");
//     },
//     hex: (num) => dec.h(num, 16),
//     oct: (num) => dec.h(num, 8),
//     bin: (num) => dec.h(num, 2),
// };

// window.oct = {
//     hex: (num) => dec.hex(oct.dec(num)),
//     dec: (num) => {
//         f = num.toString();
//         h = f.length;
//         s = 0;
//         for (let i = 0; i < h; i++) {
//             s += f.slice(i, i + 1) * 8 ** (h - i - 1);
//         }
//         return s;
//     },
//     bin: (num) => {
//         s = "";
//         Array.from(num).forEach((d) => {
//             s += pad(dec.bin(d), 3);
//         });
//         return s;
//     },
// };

// window.bin = {
//     h: (num, b) => {
//         d = num.toString();
//         s = "";
//         if (b == 16)
//             slice(d, 4).forEach((e) => {
//                 g = 0;
//                 for (let i = 0; i < 4; i++) {
//                     g += e.slice(i, i + 1) * 2 ** (3 - i);
//                 }
//                 s += g > 9 ? hexKeys1[g] : g;
//             });
//         else
//             slice(d, 3).forEach((e) => {
//                 g = 0;
//                 for (let i = 0; i < 3; i++) {
//                     g += e.slice(i, i + 1) * 2 ** (2 - i);
//                 }
//                 s += g;
//             });
//         return s;
//     },
//     hex: (num) => bin.h(num, 16),
//     dec: (num) => {
//         f = num.toString();
//         h = f.length;
//         s = 0;
//         for (let i = 0; i < h; i++) {
//             s += f.slice(i, i + 1) * 2 ** (h - i - 1);
//         }
//         return s
//     },
//     oct: (num) => bin.h(num, 8),
// };

// function pad(number, sliceSize) {
//     let numberOfSlices = number.length % sliceSize;
//     return numberOfSlices ? pad("0" + number, sliceSize) : number;
// }

// function slice(number, sliceSize) {
//     let paddedNumber = pad(number, sliceSize);
//     let slices = [];
//     for (let digitCount = 0; digitCount < paddedNumber.length; digitCount += sliceSize) {
//         slices.push(paddedNumber.slice(digitCount, digitCount + sliceSize));
//     }
//     return slices;
// }


let hexKeys1 = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
};
let hexKeys2 = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
};

window.hex = {
    dec: (n) => {
        num=n.toLowerCase()
        h = num.length;
        s = 0;
        for (let i = 0; i < h; i++) {
            n = num.slice(i, i + 1);
            s += (Object.keys(hexKeys2).includes(n) ? hexKeys2[n] : n) * 16 ** (h - i - 1);
        }
        return s.toString();
    },
    oct: (num) => dec.oct(hex.dec(num)),
    bin: (n) => {
        num=n.toLowerCase()
        s = "";
        Array.from(num).forEach((d) => {
            s += padder(dec.bin(Object.keys(hexKeys2).includes(d) ? hexKeys2[d] : d), 4);
        });
        return s;
    },
};

window.dec = {
    h: (num, b) => {
        s = "";
        q = num;
        if (b == 16)
            while (q) {
                r = q % b;
                q = parseInt(q / b);
                s += r > 9 ? hexKeys1[r] : r;
            }
        else
            while (q) {
                r = q % b;
                q = parseInt(q / b);
                s += r;
            }
        return Array.from(s).reverse().join("");
    },
    hex: (num) => dec.h(num, 16),
    oct: (num) => dec.h(num, 8),
    bin: (num) => dec.h(num, 2),
};

window.oct = {
    hex: (num) => dec.hex(oct.dec(num)),
    dec: (num) => {
        f = num.toString();
        h = f.length;
        s = 0;
        for (let i = 0; i < h; i++) {
            s += f.slice(i, i + 1) * 8 ** (h - i - 1);
        }
        return s.toString();
    },
    bin: (num) => {
        s = "";
        Array.from(num).forEach((d) => {
            s += padder(dec.bin(d), 3);
        });
        return s;
    },
};

window.bin = {
    h: (num, b) => {
        d = num.toString();
        s = "";
        if (b == 16)
            splitter(padder(d, 4), 4).forEach((e) => {
                g = 0;
                for (let i = 0; i < 4; i++) {
                    g += e.slice(i, i + 1) * 2 ** (3 - i);
                }
                s += g > 9 ? hexKeys1[g] : g;
            });
        else
            splitter(padder(d, 3), 3).forEach((e) => {
                g = 0;
                for (let i = 0; i < 3; i++) {
                    g += e.slice(i, i + 1) * 2 ** (2 - i);
                }
                s += g;
            });
        return s;
    },
    hex: (num) => bin.h(num, 16),
    dec: (num) => {
        f = num.toString();
        h = f.length;
        s = 0;
        for (let i = 0; i < h; i++) {
            s += f.slice(i, i + 1) * 2 ** (h - i - 1);
        }
        return s.toString();
    },
    oct: (num) => bin.h(num, 8),
};

function padder(num, n) {
    let f = num.length % n;
    if (f) {
        return padder("0" + num, n);
    } else {
        return num;
    }
}

function splitter(num, n) {
    if (num.length % n) {
        return;
    } else {
        let h = [];
        for (let i = 0; i < num.length; i += n) {
            h.push(num.slice(i, i + n));
        }
        return h;
    }
}

// function remTrail0(num) {
//     if (num.startsWith('0'))
//         if (num.length > 1) {
//             return remTrail0(num.slice(1))
//         }
//     return num
// }