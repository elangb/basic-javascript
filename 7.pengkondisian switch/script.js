// var angka = parseInt(prompt('masukkan angka')) 

// switch(angka){
//     case 1 :
//         alert('anda memasukkan angka 1')
//         break
//     case 2 :
//         alert('anda memasukkan angka 2')
//         break;
//         alert('anda memasukkan angka 3')
//     case 3:
//         break;
//     default :
//         alert('anda memasukkan angka yang salah')
//         break
// }



var item = prompt('masukkan makanan atau minuman : \n (contoh : nasi, daging, susu, burger, softdrink)')

switch (item) {
    case 'nasi':
        alert('makanan sehat')
        break;
    case 'daging':
        alert('makanan sehat')
        break
    case 'susu':
        alert('minuman sehat')
        break
    case 'burger':
        alert('makanan tidak sehat')
        break
    case 'softdrink':
        alert('minuman tidak sehat')
        break
    default:
        alert('anda memasukkan makanan atau minuman yang salah')
        break;
}