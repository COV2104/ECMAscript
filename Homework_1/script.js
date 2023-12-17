// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
    },
    decrement: function () {
      counter--;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(element, className) {
  if (element === null) {
    return null;
  }
  if (element.classList.contains(className)) {
    return element;
  }

  for (let child of element.children) {
    const foundElement = findElementByClass(child, className);
    if (foundElement !== null) {
      return foundElement;
    }
  }
  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
