var tanya = true;

while (tanya) {
    //menangkap pilihan player
    var pilihan = prompt("pilih : gajah, semut, orang");

    //membangitkan pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }
    // console.log(comp);

    //menentukan aturan
    var hasil = "";
    if (pilihan == comp) {
        hasil = "SERI";
    } else if (pilihan == "gajah") {
        hasil = comp == "orang" ? "MENANG" : "KALAH";
    } else if (pilihan == "orang") {
        hasil = comp == "gajah" ? "KALAH" : "MENANG";
    } else if (pilihan == "semut") {
        // if (comp == 'gajah'){
        //     alert(hasil + ' menang')
        // }else{
        //     alert(hasil +' kalah')
        // }
        hasil = comp == "gajah" ? "MENANG" : "KALAH";
    } else {
        alert("memasukkan pilihan yang salah");
    }

    alert(
        "kamu memilih " +
        pilihan +
        " dan musuh memilih " +
        comp +
        "\n maka hasilnya " +
        hasil
    );

    tanya = confirm("lagi?");
}

alert("Terimakasih sudah bermain :)");
