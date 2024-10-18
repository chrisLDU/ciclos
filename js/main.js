document.write ("hola mundo");
document.write ("hola mundo");
document.write ("hola mundo" +"<br>");
/* for es un ciclo en el cual tiene 3 parametros 
funcion es repetir un bloque de codigo las veces necesarias
sintaxis basica
for(condicion){
    bloque de codigo
}*/

for(i=3; i<=15; i++){
    //document.write("hola desde JS" +"<br>");
document.write(i+"<br>")
if(i%2==0){
    document.write("numeros par "  +i +"<br>")
}
}