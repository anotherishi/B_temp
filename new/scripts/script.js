const err = document.getElementById("err");
const expl = document.getElementById("expl");
const explt = document.getElementById("expl-title");
const explc = document.getElementById("expl-content");

const charsAllowed = {
    bin: "01",
    oct: "01234567",
    dec: "0123456789",
    hex: "0123456789abcdefABCDEF",
};

let ns = ["bin", "oct", "dec", "hex"];

ns.forEach((s) => {
    let ninp = document.getElementById(s + "-input");
    console.log(ninp);
    ninp.value = "0";

    ninp.oninput = (e) => {
        if (ninp.value === "" || ninp.value === "0") {
            e.preventDefault();
            setTimeout(() => {
                e.target.setSelectionRange(1, 1);
            }, 0);
            ns.forEach((s) => {
                document.getElementById(s + "-input").value = "0";
            });
        }

        let l = e.data;
        console.log(e);
        let cursorpos = e.target.selectionStart;
        if (l) {
            if (charsAllowed[s].includes(l)) {
            } else {
                err.style.opacity = "1";
                err.style.right = "0";
                err.textContent = l + " is not allowed";

                setTimeout(() => {
                    err.style.opacity = "0";
                    err.textContent = "";
                    err.style.right = "-100vw";
                }, 1500);
                ninp.value = ninp.value.split(l).join("");
                e.target.setSelectionRange(cursorpos - 1, cursorpos - 1);
            }
        }
    };
});

// conversion functions

const decimal = {
    binary: (number) => {
        let explData = `<h3>Convert (${number})<sub>10</sub> to binary</h3>`;
        explData +=
            '<h4>Step 1:</h4> Repeatedly divide the number by 2 and note down remainders till the dividend becomes 0 <br><table border="1" >';
        let quotient = BigInt(number);
        let divisor = 2n;
        let result = [];
        let remainder;
        while (quotient) {
            remainder = quotient % divisor;
            explData += `<tr><td>2</td> <td>${quotient}</td> <td>${remainder}</td></tr>`;
            quotient = quotient / divisor;
            result.push(remainder.toString());
        }
        explData +=
            '<tr><td></td><td>0</td><td></td></tr></table> <img src="./images/arrow.svg">';
        expl.innerHTML = explData;
        return result.reverse().join("");
    },
};



