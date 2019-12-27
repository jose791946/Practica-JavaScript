function abrir(){
    var ventana=open();
    ventana.document.write("estoy escribiendo en la nueva ventana <br> ");
    ventana.document.write("Segunda Linea");
}
function abrirParametros(){
    var ventana=open('','','status=yes, width=400, height=250, menubar=yes');
    ventana.document.write("Esto es lo primero que aparece");
}
function mostrarAlerta(){
    alert("esta ventana ya la utilizamos");
}
function confirmar(){
    var respuesta=confirm("Presione alguno de los dos botones");
    if(respuesta==true){
        alert("PRECIONO ACEPTAR");
    }else{
        alert("PRECIONO CANCELAR");
    }
}
function cargarCadena(){
    var cad=prompt("Cargue una cadena", "");
    alert("Usted ingreso: "+cad);
}