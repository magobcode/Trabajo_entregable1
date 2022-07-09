let numero = ''

do{
    numero = prompt('Escoge un numero del 1 al 10 y descubre tu premio o ingresa 0 para salir')

    if(numero =='0'){
        continue
    }
    switch (numero) {
        case '1':
            alert('1: tu premio es un millon de dolares')
            break;
        case '2' :
            alert('2: tu premio es una casa en Miami')
            break;
        case '3' :
            alert('3: tu premio es un iphone')
            break;
        case '4':
            alert('4: tu premio es un viaje a Bariloche, Argentina')
            break;
        case '5':
            alert('5: tu premio es una ps5')
            break;
        case '6':
            alert('6: tu premio es un audi 0km')
            break;
        case '7':
            alert('7: tu premio es un desayuno en Puerto Madero')
            break;
        case '8':
            alert('8: tu premio es un juego de 24 fibrones')
            break;
        case '9':
            alert('9: tu premio es una cena en Paris')
            break;
        case '10':
            alert('10: tu premio es un Refresco')
            break;    
        default:
            alert('numero invalido!')
            break;
    }
}while (numero !='0')