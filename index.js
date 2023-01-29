const storage = document.querySelector(".storage__input");
const transfer = document.querySelector(".transfer__input");

const storageNumber = document.querySelector(".storage__storage-number");
const transferNumber = document.querySelector(".transfer__transfer-number");

let size = 0;


function showscale(event) {

    storageNumber.innerHTML = storage.value;
    transferNumber.innerHTML = transfer.value;

    document.querySelector(".level__scale1").style.cssText = `width: ${backblaze()}%;`;
    document.querySelector(".number1").innerHTML = backblaze() + "$";

    document.querySelector(".level__scale2").style.cssText = `width: ${bunny()}%;`;
    document.querySelector(".number2").innerHTML = bunny() + "$";

    document.querySelector(".level__scale3").style.cssText = `width: ${scaleway()}%;`;
    document.querySelector(".number3").innerHTML = scaleway() + "$";

    document.querySelector(".level__scale4").style.cssText = `width: ${vultr()}%;`;
    document.querySelector(".number4").innerHTML = vultr() + "$";

}

function backblaze() {
    let size = Math.round((Number(storage.value) * 0.005) + (Number(transfer.value) * 0.01));
    if (size <= 7) {
        return 7;
    }
    return size;
}

function bunny() {
    const hdd = document.querySelector("#HDD");
    const sdd = document.querySelector("#SSD");
    if (hdd.checked) {
        size = Math.round((Number(storage.value) * 0.01) + (Number(transfer.value) * 0.01));
    } if (sdd.checked) {
        size = Math.round((Number(storage.value) * 0.02) + (Number(transfer.value) * 0.01));
    };

    if (size < 10) {
        return size;
    };

    return 10;
}

function scaleway() {
    const multi = document.querySelector("#Multi");
    const single = document.querySelector("#Single");
    let storageSize = storage.value <= 75 ? 0 : Number(storage.value) - 75;
    let transferSize = transfer.value <= 75 ? 0 : Number(transfer.value) - 75;

    if (multi.checked) {
        size = Math.round((storageSize * 0.06) + (transferSize * 0.02));
    } if (single.checked) {
        size = Math.round((storageSize * 0.03) + (transferSize * 0.02));
    };

    return size;
}

function vultr() {
    let size = Math.round((Number(storage.value) * 0.01) + (Number(transfer.value) * 0.01));
    if (size <= 5) {
        return 5;
    }
    return size;
}