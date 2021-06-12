const errf = {};
const nsInp = {};

const charsAllowed = {
    bin: "01",
    oct: "01234567",
    dec: "0123456789",
    hex: "0123456789abcdefABCDEF",
};

let nss = ["bin", "oct", "dec", "hex"];

nss.forEach((ns) => {
    let g = ns + "Input";
    nsInp[g] = document.getElementById(ns);
    errf[ns] = document.getElementById(ns + "-err");
    let ninp = nsInp[g];
    ninp.value = "0";

    // errf[ns].setAttribute('hidden', "")

    ninp.oninput = (e) => {
        if (ninp.value === "" || ninp.value === "0") {
            e.preventDefault();
            setTimeout(() => {
                e.target.setSelectionRange(1, 1);
            }, 0);
            nss.forEach((ns) => {
                nsInp[ns + "Input"].value = "0";
            });
        }
        let l = e.target.selectionStart;
        Array.from(ninp.value).forEach((i) => {
            if (!charsAllowed[ns].includes(i)) {
                errf[ninp.id].style.display = "block";
                setTimeout(() => {
                    errf[ninp.id].style.display = "none";
                }, 1500);
                ninp.value = ninp.value.split(i).join("");
                e.target.setSelectionRange(l - 1, l - 1);
            }
        });
        if (ninp.value.startsWith("0")) ninp.value = removeLeadingZeros(ninp.value);
        if (ninp.value === "0" && e.target.selectionStart === 0) {
            alert("hg");
        }
        update(ninp.value, ninp.id);
    };
});


function update(num, b) {
    rem(nss, b).forEach((r) => {
        nsInp[r + "Input"].value = removeLeadingZeros(window[b][r](num));
    });
}

function rem(arr, item) {
    let n = [];
    arr.forEach((r) => {
        if (r !== item) n.push(r);
    });
    return n;
}

function removeLeadingZeros(number) {
    let stringedNumber = number.toString()
    if (stringedNumber.toString().startsWith("0") && stringedNumber.length > 1) {
        return removeLeadingZeros(stringedNumber.slice(1));
    }
    return stringedNumber;
}
