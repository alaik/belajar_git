function hitung(p1,p2){
    return p1*p2;
}
console.log(hitung(2,4));

let hitung2=function(p1,p2){
    return p1/p2;
}
console.log (hitung2(2,4));

let hitung3=(p1,p2)=>{
    return p1+p2;
}
function manusia(nama,umur){
    this.nama=nama;
    this.usia=umur;
    this.profile=()=>{
        return this.nama+''+this.usia;
    }
}
let satrio= new manusia('satrio',39);
console.log(satrio.profile());