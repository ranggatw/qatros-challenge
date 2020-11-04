// Change the value  
let panjang = 10; 
let lebar = 13;
let tinggi = 13;

function vol  () {
  let vol = panjang * lebar * tinggi;
  let calc = vol * 1 / 1000
  console.log(calc + ' ' + 'Liter');
}

vol();