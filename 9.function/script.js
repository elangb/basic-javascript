function jumlahvolumekubus(a, b){
    var total, volumeA,volumeB

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total
}

// console.log(jumlahvolumekubus(5,10));
alert(jumlahvolumekubus(5,10))
alert(jumlahvolumekubus(6,12))
alert(jumlahvolumekubus(7,14))
alert(jumlahvolumekubus(8,16))