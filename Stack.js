class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  };
};

class Stack{
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;

    return node.data;
  }
};

function peek(stack) {
  if (!stack.top) {
    return 'Stack is Empty';
  }

  return stack.top.data;
}

function isEmpty(stack) {
  if (!stack.top) {
    return true;
  }

  return false;
}

function display(stack) {
if (!stack.top) {
    return 'Empty Stack';
  }

  let current = stack.top;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }

  return;
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log('Peek: ', peek(starTrek));

console.log('isEmpty: ', isEmpty(starTrek));

display(starTrek);


//Check for palindromes using a stack
//start with provided code
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const tempStack = new Stack();
  let letters = '';

  for (let i = 0; i < s.length; i++) {
    tempStack.push(s[i]);
  }

  while (!isEmpty(tempStack)) {
    letters += tempStack.pop();
  };

  return letters === s;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//matching parentheses in an expression
function matchParen(string) {
  const testStack = new Stack();

    for (let i = 0; i < string.length; i++) {
        //loop starts
        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            testStack.push(string[i]);
        }
    }

    //console.log(JSON.stringify(testStack, null, 2));
    //while j is less than length
    let j = 0;
    while (j < string.length) {
        if (string[j] === ')' || string[j] === ']' || string[j] === '}') {
            testStack.pop();
        }
        j++;
    }

    //console.log(JSON.stringify(testStack, null, 2));

    if (testStack.top === null) {
        return true;
        //else false
    } else {
        return false;
    }
}

console.log(matchParen('(([{}]))'));  //true
console.log(matchParen('(([{}))')); //false

// Sort Stack - can use another stack but not another structure
function sortStack(stack) {
  let tempStack = new Stack();

  while (!isEmpty(stack)) {
    let temp = stack.pop();
  
    while (!isEmpty(tempStack) && peek(tempStack) < temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }
  return tempStack;
}

console.log('sortStack: ');
display(sortStack(starTrek));

module.exports = Stack;