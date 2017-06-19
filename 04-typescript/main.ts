var text = 'teste variavel';

function myFunction(n1, n2) {
    return n1 + n2;
}

//ES 6 ou ES 2015
let num = 2; // let == var
const pi = 3.1415; // const == constant

/**
 * Tipagem de dados
 */
var text: string = "text 01";
var value: any = "any text";
value = 2;

/**
 * Arrow functions
 */
//Pure JS 
var numbers = [1, 2, 3];
numbers.map(function(value){
    return value * 2;
});

//ES 2015
numbers.map(value => value * 2);


/**
 * Class
 */
class Calculator {
    sum(n1, n2) {
        return n1 + n2;
    }
}