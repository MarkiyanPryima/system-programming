const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(element => element < pivot);
    const middle = arr.filter(element => element === pivot);
    const right = arr.filter(element => element > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
};

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);



const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;
const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}.`);
} else {
    console.log(`Element ${targetValue} not found in the array.`);
}



const fibonacciRecursive = n => (n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2));

const n = 10;

console.log(`Fibonacci at position ${n}: ${fibonacciRecursive(n)}`);



class Queue {
    constructor() {
        this.items = [];
    }

    enqueue = element => {
        this.items.push(element);
    }

    dequeue = () => {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    front = () => {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty = () => {
        return this.items.length === 0;
    }

    size = () => {
        return this.items.length;
    }

    clear = () => {
        this.items = [];
    }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Front element:", myQueue.front());
console.log("Queue size:", myQueue.size());
console.log("Dequeue:", myQueue.dequeue());
console.log("Is empty?", myQueue.isEmpty());

myQueue.clear();
console.log("Is empty?", myQueue.isEmpty());



const isBracketBalanced = expression => {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };

    for (let char of expression) {
        if (brackets[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

const balancedExpression = "{[()]}";
const unbalancedExpression = "{[(])}";

console.log(`Is "${balancedExpression}" balanced? ${isBracketBalanced(balancedExpression)}`);
console.log(`Is "${unbalancedExpression}" balanced? ${isBracketBalanced(unbalancedExpression)}`);


