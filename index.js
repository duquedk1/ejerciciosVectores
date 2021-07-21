/* 1. Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.*/
function buscarMaxMin(arr){
    let mayor=0
    let menor=arr[0]
    let sum=0
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i]
        if(arr[i]>mayor){
            mayor=arr[i]
        }else if(arr[i]<=menor){
            menor
            menor=arr[i]
        } 
    }
    let prom=sum/arr.length
    return `El valor mayor del arreglo es ${mayor}, el menor es ${menor} y el promedio es ${prom}`
}
let arr=[9,3,6,4,8]
console.log(buscarMaxMin(arr))

/* 2. dado 2 los siguentes arrays: 
[1,2,3,4,5,6] y ["1", "2", "3"]
Concatenar ambos arrays en uno solo*/
function unirArr(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
      arr1.push(arr2[i])
    }
    return arr1
}
let arr1=[1,2,3,4,5,6]
let arr2=["1", "2", "3"]
console.log(unirArr(arr1,arr2))

/*3. En este ejercicio vas a escribir el código en el editor online. Intenta realizar el siguiente script :

Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual

El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente */

let clasificaciones=["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"] 
console.log(clasificaciones)
clasificaciones.splice(2,0,"Celia")
clasificaciones.splice(4,1)
clasificaciones.splice(5,1)
clasificaciones.splice(1,0,"Roberto","Amaya")
clasificaciones.splice(0,0,"Marta")
console.log(clasificaciones)