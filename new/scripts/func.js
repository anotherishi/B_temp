let hexDef1 = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f",
    },
    hexDef2 = {
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
    },
    hexDef3 = {
        0: "0000",
        1: "0001",
        2: "0010",
        3: "0011",
        4: "0100",
        5: "0101",
        6: "0110",
        7: "0111",
        8: "1000",
        9: "1001",
        a: "1010",
        b: "1011",
        c: "1100",
        d: "1101",
        e: "1110",
        f: "1111",
    },
    hexDef4 = {
        "0000": 0,
        "0001": 1,
        "0010": 2,
        "0011": 3,
        "0100": 4,
        "0101": 5,
        "0110": 6,
        "0111": 7,
        1000: 8,
        1001: 9,
        1010: "a",
        1011: "b",
        1100: "c",
        1101: "d",
        1110: "e",
        1111: "f",
    },
    octDef1 = {
        "000": 0,
        "001": 1,
        "010": 2,
        "011": 3,
        100: "4",
        101: "5",
        110: "6",
        111: "7",
    },
    octDef2 = {
        0: "000",
        1: "001",
        2: "010",
        3: "011",
        4: "100",
        5: "101",
        6: "110",
        7: "111",
    };

const dec = {
    bin(number) {
        let quotient = BigInt(number);
        let divisor = 2n;
        let result = [];
        let remainder;
        while (quotient) {
            remainder = quotient % divisor;
            quotient = quotient / divisor;
            result.push(remainder.toString());
        }
        return result.reverse().join("");
    },
    oct(number) {
        let quotient = BigInt(number);
        let divisor = 8n;
        let result = [];
        let remainder;
        while (quotient) {
            remainder = quotient % divisor;
            quotient = quotient / divisor;
            result.push(remainder.toString());
        }
        return result.reverse().join("");
    },
    hex(number) {
        let quotient = BigInt(number);
        let divisor = 16n;
        let result = [];
        let remainder;
        while (quotient) {
            remainder = quotient % divisor;
            quotient = quotient / divisor;
            result.push(hexDef1[remainder.toString()]);
        }
        return result.reverse().join("");
    },
};

// function decToBin(number) {}

// function decToOct(number) {
//     let quotient = BigInt(number);
//     let divisor = 8n;
//     let result = [];
//     let remainder;
//     while (quotient) {
//         remainder = quotient % divisor;
//         quotient = quotient / divisor;
//         result.push(remainder.toString());
//     }
//     return result.reverse().join("");
// }

// function d_h(number) {
//     let quotient = BigInt(number);
//     let divisor = 16n;
//     let result = [];
//     let remainder;
//     while (quotient) {
//         remainder = quotient % divisor;
//         quotient = quotient / divisor;
//         result.push(hexDef1[remainder.toString()]);
//     }
//     return result.reverse().join("");
// }

function o_b(number) {
    let result = [];
    for (const digit of number) result.push(octDef2[digit]);
    return result.join("");
}

function h_b(number) {
    let result = [];
    for (const digit of number.toLowerCase()) result.push(hexDef3[digit]);
    return result.join("");
}

function h_o(number) {
    return b_o(h_b(number));
}

function o_h(number) {
    return b_h(o_b(number));
}

function b_d(number) {
    let result = 0n;
    Array.from(number)
        .reverse()
        .forEach(
            (digit, index) => (result += BigInt(digit) * 2n ** BigInt(index))
        );
    return result.toString();
}

function o_d(number) {
    let result = 0n;
    Array.from(number)
        .reverse()
        .forEach(
            (digit, index) => (result += BigInt(digit) * 8n ** BigInt(index))
        );
    return result.toString();
}

function h_d(number) {
    let result = 0n;
    let numberArray = [];
    for (const digit of number.toLowerCase()) numberArray.push(hexDef2[digit]);
    numberArray
        .reverse()
        .forEach((digit, index) => (result += digit * 16n ** BigInt(index)));
    return result.toString();
}

function b_o(number) {
    let result = [];
    chunk(number, 3).forEach((chunk) => result.push(octDef1[chunk]));
    return result.join("");
}

function b_h(number) {
    let result = [];
    chunk(number, 4).forEach((chunk) => result.push(hexDef4[chunk]));
    return result.join("");
}

function chunk(number, size) {
    const chunks = [];
    let index = 0;
    let paddedNumber = pad(number, size);
    while (index < paddedNumber.length)
        chunks.push(paddedNumber.slice(index, (index += size)));
    return chunks;
}

function pad(number, size) {
    return "0".repeat(size - (number.length % size)) + number;
}

function removeLeadingZeros(number) {
    return number.replace(/^0+/, "");
}
