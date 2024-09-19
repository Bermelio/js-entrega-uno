//const and init
const tareas = ['dormir temprano', 'comer a horario'];
salir = true;
const salirPregunta = () => salir = confirm('¿Desea realizar otra tarea?');


//main menu
alert('bienvenido al sistema de guardado de tareas');
alert('Acontinucion seleccione un numero en el menu');

while(salir){

    menuInicio();

    switch(numeroMenu){
        case 1:
            alert('presione F12 para ver en consola sus tareas');
            mostrar();
            salirPregunta();
            break;
        case 2:
            ingresoTarea();
            salirPregunta();
            break;
        case 3:
            eliminarTarea();
            salirPregunta();
            break;
        case 4:
            alert('Hasta luego :)');
            salir = false;
            break;
        default:
            alert('No deberias llegar aca... en ese caso Felicitaciones!');
    }

}

//functions

function mostrar(){
    console.table(tareas);
    console.log(tareas);
}

function menuInicio(){
    do {
        numeroMenu=parseFloat(prompt('Consultar tareas |1| --- agregar tarea |2| --- eliminar tarea |3| --- Salir |4|'));
    } while (!numeroMenu);
}

function ingresoTarea(){
    do {
        entradaTarea=prompt('Tomando nota...');
        tareas.push(entradaTarea);
        alert('ingreso con exito! WAOS') ;
        ingresoAgain=confirm('Desea agregar otra tarea?');  
    } while (ingresoAgain);
}

function eliminarTarea(){
    mostrar();
    salida=true;
    alert('Presione f12 para visualizar sus tareas en la consola');
    do {
        indexNuevo=parseInt(prompt('Ingrese el index del elemento a eliminar...'));
        if( indexNuevo >= 0 && indexNuevo < tareas.length){
            tareas.splice(indexNuevo, 1);
            alert('Tarea realizada con exito!');
            mostrar();
            salida=confirm('Desea realizar otra eliminacion?');
        }else{
            alert('ERROR ERROR [[[[index error]]]] ERROR ERROR ERROR');
        }
    } while (salida);
}

//se puede hacer mas optimo y me quedo un poco spaguetti 
//pero para una primera impresion y lo que sabemos creo que esta bien
//se me hizo entretenido y buen ejercicio