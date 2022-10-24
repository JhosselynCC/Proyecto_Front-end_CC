
function calculo(){

const nombre=document.getElementById('firtsname').value;

const apellido= document.getElementById('lastname').value;
const correo= document.getElementById('email').value;
const categorias=document.getElementById('categoria').value;
const precio=200;
const cantidad=document.getElementById('cantidad').value;
const descuento=descuentos(categorias);
const total=Math.round(cantidad*(precio*(1-(descuento/100))));


function descuentos(categorias){

    if (categorias=="Estudiante") {
        a=80;  
   } else if (categorias=="Trainee") {
        a=50;
   }  else if (categorias=="Junior") {
        a=15;  
   } else a=0 
   
   return (a);
}

document.getElementById('Resultado').value= "Total a pagar:$"+' '+total;
console.log(nombre,apellido,correo,categorias,
    precio,cantidad,descuento,total);

}   

    
function Borrar(){
    document.getElementById("Form").reset();
   
} 

