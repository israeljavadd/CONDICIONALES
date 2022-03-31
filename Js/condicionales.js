 
    var pie = prompt(" Hola! ¿Quiere hacer un pie de manzana? ");
    var manzana = prompt(" ¿Cuantas manzanas tienes? ");

    switch (pie) {
        case "Israel":
            document.write("> Hola Israel!")
            break;
        case "Karen":
            document.write("> Hola Karen!");
            break;
        default:
            document.write("> Hola "+pie);
            break;
    }
    if (manzana >= 10) {
        document.write("Excelente! Vamos a prepararlo");
        
    } else{

        document.write("No es posible hacer el pie, necesitas mas manzanas!!");
    };
