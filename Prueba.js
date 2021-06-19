var objeto1 = {
    nombre: "pepe",
    apellido: "grillo",
}


var objeto2 = {...objeto1, edad:23};
//                  ^
//       Al hacer "los 3 puntitos" (spread operator)
//       copiamos en el objeto2, el contenido del objeto1

//                       {
//                        nombre: "pepe",
//  objeto2 va a ser ->   apellido: "grillo",
//                        edad: 23
//                       }


objeto2 = {...objeto2, edad:50}      
//                  ^
//        Al hacer esto, le decimos a objeto2 le asignemos lo mismo que tenia antes
//        PERO, que cambie la edad por 50 (antes era 23)


//                       {
//                        nombre: "pepe",
//  objeto2 va a ser ->   apellido: "grillo",
//                        edad: 50
//                       }


var estado1 = ["pepe", "bart", "homero"]


var estado2 = [...estado1, "agregado", "agregado 2"]
//                          ^
//              Asignamos a estado 2, el contenido de "estado1" MAS los agregados

//  estado2 va a ser -> ["pepe", "bart", "homero", "agregado", "agregado 2"]

