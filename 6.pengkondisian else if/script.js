// var angka = prompt('masukkan angka')

// if(angka % 2 == 0){
//     alert(angka+' merupakan bilangan genap')
// }else if (angka % 2 == 1){
//     alert(angka+' merupakan bilangan ganjil')
// } else{
//     alert('yang anda masukkan bukan angka')
// }

var jmlAngkot = 10
var angkotBeroperasi = 6
var noAngkot = 1
 

// for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

//     if(noAngkot <= 6 ){
//         console.log('angkot no '+noAngkot+' beroperasi dengan baik');
//     }
//     else if (noAngkot === 8 || noAngkot === 10){
//         console.log('angkot no '+noAngkot+' sedang lembur');
//     }
//     else {
//         console.log('angkot no '+noAngkot+' tidak beroperasi dengan baik');
        
//     }

// }

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

    if(noAngkot <= 6 && noAngkot !== 5 ){
        console.log('angkot no '+noAngkot+' beroperasi dengan baik');
    }
    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('angkot no '+noAngkot+' sedang lembur');
    }
    else {
        console.log('angkot no '+noAngkot+' tidak beroperasi dengan baik');
        
    }

}