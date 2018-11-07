/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {

    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }

}
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива,
 который будет передан в параметре array
 */
function map(array, fn) {
    var NewArray = [];

    for (var i = 0; i < array.length; i++) {
        NewArray[i] = fn(array[i], i, array);
    }
    
    return NewArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива,
 который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их
 имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    var arr = [];

    for (var prop in obj) {
        prop = prop.toUpperCase();
        arr.push(prop);
    }
    
    return arr;

}
upperProps({ name: 'Сергей', lastName: 'Петров' });

/*
  Задание 5 *:

  Напишите аналог встроенного метода slice для работы с массивами
  Посмотрите как работает slice и повторите это поведение для массива,
  который будет передан в параметре array
  */

// var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function slice(array, from = 0, to = array.length) {

    var newArray = [];

    if (from < 0 && Math.abs(from) > array.length) {
        from = 0;
    } else if (from < 0 && Math.abs(from) <= array.length) {
        from = array.length + from;
    } else if (from > array.length) {
        from = array.length;
    }

   if (to < 0 && Math.abs(to) < array.length) {
        to = array.length + to;
    } else if (to > array.length) {
        to = array.length;
    }


    for (var i = from; i < to; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

// console.log(array.slice(-3, 12));
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть
 Proxy для этого объекта. Proxy должен
 перехватывать все попытки записи значений
 свойств и возводить это значение в квадрат

var obj = {
    a: 1,
    b: 2
};
*/
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;
            return true;
        }
    });

}




// console.log(createProxy());
export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
