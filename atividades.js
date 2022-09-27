const atv1 = value => {
    console.log("ATIVIDADE 1", value);
};
atv1("teste");

const atv2 = value => {
    if (value === true) {
        console.log("ATIVIDADE 2", "Bom-dia");
    } else {
        console.log("ATIVIDADE 2", "Boa-noite");
    }
};
atv2(false);

const atv3 = value => {
    let arr = [];

    for (let index = 0; index < value.length; index++) {
        arr.push({ valor: value[index], posicao: index });
    }

    console.log("ATIVIDADE 3", arr);
};
atv3([5, 4, 3, 2, 2, 1]);

const atv4 = ({ value, rate }) => {
    console.log(
        "ATIVIDADE 4",
        `Foi colocado ${(value / rate).toFixed(2)} litros de combustivel`
    );
};
atv4({ value: 100, rate: 6.7 });

const atv5 = value => {
    console.log(
        "ATIVIDADE 5",
        `O valor do prato é $${((value - 0.2) * 12).toFixed(2)} reais`
    );
};
atv5(1.23);

const atv6 = ({ value1, value2, value3 }) => {
    console.log(
        "ATIVIDADE 6",
        `A média é de ${((value1 * 1 + value2 * 2 + value3 * 3) / 6).toFixed(
            2
        )}`
    );
};
atv6({ value1: 6, value2: 4, value3: 6 });

const atv7 = ({ valueP, valueM, valueG }) => {
    console.log(
        "ATIVIDADE 7",
        `Valor final arreacadado é de $${
            valueP * 10 + valueM * 12 + valueG * 15
        }`
    );
};
atv7({ valueP: 10, valueM: 20, valueG: 7 });

const atv8 = value => {
    for (let index = 0; index <= value; index++) {
        setTimeout(() => {
            console.log("ATIVIDADE 8", index + " indo até " + value);
        }, 1000 * (index + 1));
    }
};
atv8(10);
