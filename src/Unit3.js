import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, Play, CheckCircle, XCircle, Lightbulb, Brain, Rocket, Layers, Zap, RefreshCw } from 'lucide-react';

const Unit3 = ({ darkMode }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizFeedback, setShowQuizFeedback] = useState({});
  const [interactiveValues, setInteractiveValues] = useState({});

  const slides = [
    // ========== TOPIC 3.1: Introduction to Functions ==========
    {
      topic: '3.1',
      topicTitle: 'Introduction to Functions',
      type: 'concept',
      title: '🎯 What are Functions?',
      content: `Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program!`,
      details: [
        '📦 Modularity: Break complex problems into smaller pieces',
        '♻️ Reusability: Write once, use multiple times',
        '🎯 Organization: Keep code clean and maintainable',
        '🐛 Debugging: Easier to find and fix errors',
        '👥 Collaboration: Multiple people can work on different functions'
      ],
      example: `// Without functions - Repetitive code ❌
int main() {
    printf("Hello, Alice\\n");
    printf("Welcome Alice!\\n");
    
    printf("Hello, Bob\\n");
    printf("Welcome Bob!\\n");
    
    printf("Hello, Charlie\\n");
    printf("Welcome Charlie!\\n");
}

// With functions - Clean and reusable ✅
void greet(char name[]) {
    printf("Hello, %s\\n", name);
    printf("Welcome %s!\\n", name);
}

int main() {
    greet("Alice");
    greet("Bob");
    greet("Charlie");
}`
    },
    {
      topic: '3.1',
      topicTitle: 'Introduction to Functions',
      type: 'concept',
      title: '🏗️ Function Anatomy',
      content: `Every function has four main parts - let's break them down!`,
      details: [
        '1️⃣ Return Type: What kind of data the function gives back',
        '2️⃣ Function Name: Descriptive name following naming rules',
        '3️⃣ Parameters: Input values the function receives',
        '4️⃣ Function Body: The actual code that executes'
      ],
      example: `// Function anatomy breakdown:
int calculateSum(int a, int b) {
    int result = a + b;
    return result;
}

// ↓ Breaking it down:
// int          → Return type (returns an integer)
// calculateSum → Function name (verb + what it does)
// (int a, int b) → Parameters (two integers as input)
// { ... }      → Function body (the logic)
// return result → Sends value back to caller

// Calling the function:
int main() {
    int total = calculateSum(10, 20);  // total = 30
    printf("Sum: %d\\n", total);
}`
    },
    {
      topic: '3.1',
      topicTitle: 'Introduction to Functions',
      type: 'interactive',
      title: '🎮 Interactive: Function Machine',
      question: 'Adjust the inputs and see how the function processes them!',
      interactiveType: 'function-machine',
      functionCode: `int multiply(int x, int y) {
    return x * y;
}`,
      inputs: [
        { name: 'x', label: 'First Number', default: 5, min: 1, max: 20 },
        { name: 'y', label: 'Second Number', default: 3, min: 1, max: 20 }
      ]
    },
    {
      topic: '3.1',
      topicTitle: 'Introduction to Functions',
      type: 'question',
      title: '🧩 Function Detective',
      question: 'What will this program print?',
      hint: 'Follow the function calls step by step!',
      code: `int mystery(int n) {
    if (n <= 1) return 1;
    return n + mystery(n - 1);
}

int main() {
    printf("%d", mystery(4));
}`,
      options: ['4', '10', '15', '24'],
      correctAnswer: 1,
      explanation: `Let's trace the execution:
mystery(4) = 4 + mystery(3)
mystery(3) = 3 + mystery(2)
mystery(2) = 2 + mystery(1)
mystery(1) = 1 (base case)

Working backwards:
mystery(2) = 2 + 1 = 3
mystery(3) = 3 + 3 = 6
mystery(4) = 4 + 6 = 10

Output: 10

This calculates the sum: 1+2+3+4 = 10`
    },
    {
      topic: '3.1',
      topicTitle: 'Introduction to Functions',
      type: 'practice',
      title: '💪 Build Your First Function',
      question: 'Create a function that checks if a number is even or odd',
      starter: `#include <stdio.h>

// Create your function here
// Should return 1 for even, 0 for odd


int main() {
    int num = 17;
    
    if (isEven(num)) {
        printf("%d is EVEN\\n", num);
    } else {
        printf("%d is ODD\\n", num);
    }
    
    return 0;
}`,
      solution: `#include <stdio.h>

// Function to check if number is even
int isEven(int number) {
    if (number % 2 == 0) {
        return 1;  // True - it's even
    } else {
        return 0;  // False - it's odd
    }
}

// Shorter version using ternary operator:
// int isEven(int number) {
//     return (number % 2 == 0) ? 1 : 0;
// }

int main() {
    int num = 17;
    
    if (isEven(num)) {
        printf("%d is EVEN\\n", num);
    } else {
        printf("%d is ODD\\n", num);
    }
    
    return 0;
}`,
      output: '17 is ODD'
    },

    // ========== TOPIC 3.2: Function Parameters ==========
    {
      topic: '3.2',
      topicTitle: 'Function Parameters',
      type: 'concept',
      title: '📨 Types of Parameters',
      content: `Parameters are the bridges between functions - they carry data in and out!`,
      details: [
        '✅ Formal Parameters: Variables in function definition',
        '✅ Actual Parameters: Values passed during function call',
        '✅ Default behavior: Pass by value (copies are made)',
        '✅ No limit on parameter count (but keep it reasonable!)',
        '✅ Parameters can be any data type'
      ],
      example: `// Function definition with formal parameters
int power(int base, int exponent) {
    //     ↑        ↑
    // These are formal parameters
    
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    // Function call with actual parameters
    int ans = power(2, 3);  // 2 and 3 are actual parameters
    //              ↑  ↑
    printf("2^3 = %d\\n", ans);  // Output: 8
}`
    },
    {
      topic: '3.2',
      topicTitle: 'Function Parameters',
      type: 'concept',
      title: '🔄 Pass by Value',
      content: `In C, when you pass a variable to a function, a COPY is created. The original remains unchanged!`,
      details: [
        '📋 A copy of the value is made',
        '🔒 Original variable stays safe',
        '⚡ Changes inside function don\'t affect original',
        '💾 Uses more memory (copies are created)',
        '🎯 Good for simple data types'
      ],
      example: `void addTen(int num) {
    num = num + 10;
    printf("Inside function: %d\\n", num);
}

int main() {
    int value = 5;
    
    printf("Before: %d\\n", value);  // 5
    addTen(value);                    // Inside: 15
    printf("After: %d\\n", value);   // Still 5!
    
    // value didn't change because 
    // only a COPY was modified
}`
    },
    {
      topic: '3.2',
      topicTitle: 'Function Parameters',
      type: 'question',
      title: '🎯 Parameter Puzzle',
      question: 'What gets printed?',
      hint: 'Remember: Pass by value creates copies!',
      code: `void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Inside: %d %d\\n", a, b);
}

int main() {
    int x = 10, y = 20;
    swap(x, y);
    printf("Outside: %d %d\\n", x, y);
}`,
      options: [
        'Inside: 20 10, Outside: 20 10',
        'Inside: 20 10, Outside: 10 20',
        'Inside: 10 20, Outside: 20 10',
        'Compilation Error'
      ],
      correctAnswer: 1,
      explanation: `Step by step execution:

1. x = 10, y = 20 in main
2. swap(x, y) called
3. Copies are made: a = 10, b = 20
4. Inside swap: a and b are swapped
   temp = 10, a = 20, b = 10
5. Prints: "Inside: 20 10"
6. Function ends, a and b destroyed
7. Back in main: x and y UNCHANGED
8. Prints: "Outside: 10 20"

Key Point: Only copies were swapped!
Original variables remain unchanged.`
    },
    {
      topic: '3.2',
      topicTitle: 'Function Parameters',
      type: 'practice',
      title: '🎲 Dice Roller Function',
      question: 'Create a function that simulates rolling N dice and returns their sum',
      starter: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Create rollDice function here
// Should roll 'count' dice and return sum


int main() {
    srand(time(0));  // Initialize random seed
    
    int numDice = 3;
    int total = rollDice(numDice);
    
    printf("Rolling %d dice...\\n", numDice);
    printf("Total: %d\\n", total);
    
    return 0;
}`,
      solution: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int rollDice(int count) {
    int sum = 0;
    
    printf("Rolling dice: ");
    for (int i = 0; i < count; i++) {
        int roll = (rand() % 6) + 1;  // 1 to 6
        printf("🎲 %d ", roll);
        sum += roll;
    }
    printf("\\n");
    
    return sum;
}

int main() {
    srand(time(0));
    
    int numDice = 3;
    int total = rollDice(numDice);
    
    printf("Rolling %d dice...\\n", numDice);
    printf("Total: %d\\n", total);
    
    // Try different numbers of dice
    printf("\\nRolling 5 dice:\\n");
    printf("Total: %d\\n", rollDice(5));
    
    return 0;
}`,
      output: 'Rolling 3 dice...\nRolling dice: 🎲 4 🎲 2 🎲 5\nTotal: 11'
    },

    // ========== TOPIC 3.3: Return Values ==========
    {
      topic: '3.3',
      topicTitle: 'Return Values',
      type: 'concept',
      title: '🎁 Returning Data from Functions',
      content: `The return statement sends data back to whoever called the function - like a function's gift to you!`,
      details: [
        '↩️ return keyword sends value back',
        '🛑 Immediately exits the function',
        '🎯 Only ONE value can be returned',
        '❌ void functions return nothing',
        '✅ Return type must match function declaration'
      ],
      example: `// Function that returns a value
int findMax(int a, int b) {
    if (a > b) {
        return a;  // Returns a and exits
    }
    return b;      // Returns b and exits
}

// Function that returns nothing (void)
void printStars(int count) {
    for (int i = 0; i < count; i++) {
        printf("* ");
    }
    printf("\\n");
    // No return needed for void
}

int main() {
    int bigger = findMax(15, 23);
    printf("Max: %d\\n", bigger);  // 23
    
    printStars(5);  // Prints: * * * * *
}`
    },
    {
      topic: '3.3',
      topicTitle: 'Return Values',
      type: 'interactive',
      title: '🎮 Return Value Explorer',
      question: 'See how return statements work in different scenarios!',
      interactiveType: 'return-demo',
      scenarios: [
        {
          name: 'Early Return',
          code: `int checkAge(int age) {
    if (age < 0) return -1;  // Invalid
    if (age < 18) return 0;  // Minor
    return 1;                 // Adult
}`,
          test: 15
        },
        {
          name: 'Multiple Returns',
          code: `char getGrade(int marks) {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    return 'F';
}`,
          test: 85
        }
      ]
    },
    {
      topic: '3.3',
      topicTitle: 'Return Values',
      type: 'question',
      title: '🔍 Return Logic Challenge',
      question: 'What value is returned?',
      hint: 'Trace through each condition carefully!',
      code: `int calculate(int x) {
    if (x < 0) return x * -1;
    if (x < 10) return x * 2;
    if (x < 20) return x + 10;
    return x;
}

int main() {
    printf("%d", calculate(15));
}`,
      options: ['15', '20', '25', '30'],
      correctAnswer: 2,
      explanation: `Let's trace calculate(15):

1. x = 15
2. Is x < 0? → 15 < 0 = FALSE (skip)
3. Is x < 10? → 15 < 10 = FALSE (skip)
4. Is x < 20? → 15 < 20 = TRUE ✓
   return x + 10 = 15 + 10 = 25
5. Function exits, returns 25

Output: 25

The third condition matched!`
    },
    {
      topic: '3.3',
      topicTitle: 'Return Values',
      type: 'practice',
      title: '🏆 Grade Calculator',
      question: 'Create a function that returns letter grade based on percentage',
      starter: `#include <stdio.h>

// Create getLetterGrade function
// A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60


int main() {
    int scores[] = {95, 87, 72, 65, 58};
    int n = 5;
    
    printf("Grade Report:\\n");
    printf("=============\\n");
    
    for (int i = 0; i < n; i++) {
        char grade = getLetterGrade(scores[i]);
        printf("Score %d: %c\\n", scores[i], grade);
    }
    
    return 0;
}`,
      solution: `#include <stdio.h>

char getLetterGrade(int percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

int main() {
    int scores[] = {95, 87, 72, 65, 58};
    int n = 5;
    
    printf("Grade Report:\\n");
    printf("=============\\n");
    
    for (int i = 0; i < n; i++) {
        char grade = getLetterGrade(scores[i]);
        printf("Score %d: %c", scores[i], grade);
        
        // Add emoji based on grade
        if (grade == 'A') printf(" 🌟");
        else if (grade == 'B') printf(" 😊");
        else if (grade == 'C') printf(" 😐");
        else if (grade == 'D') printf(" 😟");
        else printf(" 😢");
        
        printf("\\n");
    }
    
    return 0;
}`,
      output: 'Grade Report:\n=============\nScore 95: A 🌟\nScore 87: B 😊\nScore 72: C 😐\nScore 65: D 😟\nScore 58: F 😢'
    },

    // ========== TOPIC 3.4: Introduction to Recursion ==========
    {
      topic: '3.4',
      topicTitle: 'Introduction to Recursion',
      type: 'concept',
      title: '🌀 What is Recursion?',
      content: `Recursion is when a function calls itself! It's like looking into two mirrors facing each other - infinite reflections!`,
      details: [
        '🔄 Function calls itself to solve smaller problems',
        '🎯 Must have a BASE CASE (stopping condition)',
        '📉 Each call should move closer to base case',
        '💭 Think: "If I solve a smaller version, can I solve this?"',
        '⚠️ Without base case = Infinite loop!'
      ],
      example: `// Recursive countdown
void countdown(int n) {
    // BASE CASE: Stop when we reach 0
    if (n == 0) {
        printf("Blast off! 🚀\\n");
        return;
    }
    
    // RECURSIVE CASE: Print and call with smaller n
    printf("%d... ", n);
    countdown(n - 1);  // Function calls itself!
}

int main() {
    countdown(5);
    // Prints: 5... 4... 3... 2... 1... Blast off! 🚀
}`
    },
    {
      topic: '3.4',
      topicTitle: 'Introduction to Recursion',
      type: 'concept',
      title: '🎯 Recursion vs Iteration',
      content: `Both solve repetitive problems, but in different ways!`,
      details: [
        '🔄 Recursion: Function calls itself repeatedly',
        '➿ Iteration: Loops repeat code blocks',
        '📊 Recursion: More memory (call stack)',
        '⚡ Iteration: Usually faster',
        '🧠 Recursion: More elegant for certain problems',
        '🎓 Some problems naturally fit recursion (trees, fractals)'
      ],
      example: `// Factorial using ITERATION
int factorialIterative(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Factorial using RECURSION
int factorialRecursive(int n) {
    if (n <= 1) return 1;        // Base case
    return n * factorialRecursive(n - 1);  // Recursive
}

// Both calculate: 5! = 5 × 4 × 3 × 2 × 1 = 120`
    },
    {
      topic: '3.4',
      topicTitle: 'Introduction to Recursion',
      type: 'interactive',
      title: '🎮 Recursion Visualizer',
      question: 'Watch how recursion works step by step!',
      interactiveType: 'recursion-viz',
      functionCode: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
      startValue: 4
    },
    {
      topic: '3.4',
      topicTitle: 'Introduction to Recursion',
      type: 'question',
      title: '🧩 Recursion Mystery',
      question: 'What does this recursive function return for fun(3)?',
      hint: 'Draw the recursion tree!',
      code: `int fun(int n) {
    if (n == 1) return 1;
    return n + fun(n - 1);
}`,
      options: ['3', '6', '9', 'Infinite loop'],
      correctAnswer: 1,
      explanation: `Let's trace fun(3):

fun(3) = 3 + fun(2)
fun(2) = 2 + fun(1)
fun(1) = 1 (base case)

Now work backwards:
fun(2) = 2 + 1 = 3
fun(3) = 3 + 3 = 6

Visualized:
        fun(3)
         ↓
    3 + fun(2)
         ↓
    3 + (2 + fun(1))
         ↓
    3 + (2 + 1)
         ↓
    3 + 3 = 6

This calculates: 1 + 2 + 3 = 6`
    },
    {
      topic: '3.4',
      topicTitle: 'Introduction to Recursion',
      type: 'practice',
      title: '🔢 Your First Recursive Function',
      question: 'Create a recursive function to calculate the power (x^n)',
      starter: `#include <stdio.h>

// Create recursive power function
// power(2, 3) should return 8 (2^3)
// Base case: x^0 = 1
// Recursive: x^n = x * x^(n-1)


int main() {
    printf("2^3 = %d\\n", power(2, 3));
    printf("5^2 = %d\\n", power(5, 2));
    printf("3^4 = %d\\n", power(3, 4));
    
    return 0;
}`,
      solution: `#include <stdio.h>

int power(int base, int exp) {
    // BASE CASE: Anything to power 0 is 1
    if (exp == 0) {
        return 1;
    }
    
    // RECURSIVE CASE
    // x^n = x * x^(n-1)
    return base * power(base, exp - 1);
}

// Example trace for power(2, 3):
// power(2, 3) = 2 * power(2, 2)
// power(2, 2) = 2 * power(2, 1)
// power(2, 1) = 2 * power(2, 0)
// power(2, 0) = 1 (base case)
//
// Working back:
// power(2, 1) = 2 * 1 = 2
// power(2, 2) = 2 * 2 = 4
// power(2, 3) = 2 * 4 = 8

int main() {
    printf("2^3 = %d\\n", power(2, 3));  // 8
    printf("5^2 = %d\\n", power(5, 2));  // 25
    printf("3^4 = %d\\n", power(3, 4));  // 81
    
    return 0;
}`,
      output: '2^3 = 8\n5^2 = 25\n3^4 = 81'
    },

    // ========== TOPIC 3.5: Classic Recursive Problems ==========
    {
      topic: '3.5',
      topicTitle: 'Classic Recursive Problems',
      type: 'concept',
      title: '🌟 Fibonacci Sequence',
      content: `The Fibonacci sequence is nature's favorite pattern - each number is the sum of the previous two!`,
      details: [
        '🔢 Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...',
        '📐 Formula: F(n) = F(n-1) + F(n-2)',
        '🌻 Found in: Sunflowers, pinecones, shells',
        '🎨 Golden ratio emerges from Fibonacci',
        '💡 TWO base cases needed!'
      ],
      example: `int fibonacci(int n) {
    // BASE CASES (2 of them!)
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // RECURSIVE CASE
    // Each number is sum of previous two
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Tree for fibonacci(4):
//              fib(4)
//            /        \\
//        fib(3)      fib(2)
//       /     \\      /    \\
//    fib(2) fib(1) fib(1) fib(0)
//    /   \\
// fib(1) fib(0)
//
// Result: 3`
    },
    {
      topic: '3.5',
      topicTitle: 'Classic Recursive Problems',
      type: 'concept',
      title: '🗼 Tower of Hanoi',
      content: `A classic puzzle that shows the true power of recursion!`,
      details: [
        '🎯 Goal: Move N disks from pole A to pole C',
        '📏 Rule 1: Move one disk at a time',
        '📏 Rule 2: Never place larger disk on smaller',
        '🧠 Recursive solution is elegant!',
        '📊 Takes 2^n - 1 moves for n disks'
      ],
      example: `void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }
    
    // Step 1: Move n-1 disks from 'from' to 'aux'
    hanoi(n - 1, from, aux, to);
    
    // Step 2: Move largest disk from 'from' to 'to'
    printf("Move disk %d from %c to %c\\n", n, from, to);
    
    // Step 3: Move n-1 disks from 'aux' to 'to'
    hanoi(n - 1, aux, to, from);
}

// hanoi(3, 'A', 'C', 'B');
// Solves 3-disk Tower of Hanoi!`
    },
    {
      topic: '3.5',
      topicTitle: 'Classic Recursive Problems',
      type: 'question',
      title: '🎯 Fibonacci Challenge',
      question: 'How many times is fibonacci(1) called when calculating fibonacci(4)?',
      hint: 'Draw the recursion tree and count!',
      code: `int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(4);  // How many fib(1) calls?`,
      options: ['2 times', '3 times', '4 times', '5 times'],
      correctAnswer: 1,
      explanation: `Drawing the recursion tree:

                fib(4)
               /      \\
           fib(3)    fib(2)
          /     \\      /   \\
      fib(2)  fib(1) fib(1) fib(0)
      /   \\      ①      ②
  fib(1) fib(0)
    ③

Count the fib(1) calls marked with ①②③:
1. From fib(3) → fib(1) ①
2. From fib(2) right → fib(1) ②  
3. From fib(2) left → fib(1) ③

Total: 3 times

This shows why Fibonacci is inefficient!
Many repeated calculations.`
    },
    {
      topic: '3.5',
      topicTitle: 'Classic Recursive Problems',
      type: 'practice',
      title: '🔄 GCD using Recursion',
      question: 'Implement the Euclidean algorithm recursively to find GCD',
      starter: `#include <stdio.h>

// Greatest Common Divisor using Euclid's algorithm
// GCD(a, b) = GCD(b, a % b)
// Base case: GCD(a, 0) = a


int main() {
    printf("GCD(48, 18) = %d\\n", gcd(48, 18));
    printf("GCD(100, 50) = %d\\n", gcd(100, 50));
    printf("GCD(17, 13) = %d\\n", gcd(17, 13));
    
    return 0;
}`,
      solution: `#include <stdio.h>

int gcd(int a, int b) {
    // BASE CASE: When b becomes 0, a is the GCD
    if (b == 0) {
        return a;
    }
    
    // RECURSIVE CASE: GCD(a, b) = GCD(b, a % b)
    return gcd(b, a % b);
}

// Trace for gcd(48, 18):
// gcd(48, 18) → gcd(18, 48%18) → gcd(18, 12)
// gcd(18, 12) → gcd(12, 18%12) → gcd(12, 6)
// gcd(12, 6)  → gcd(6, 12%6)   → gcd(6, 0)
// gcd(6, 0)   → 6 (base case)
//
// Answer: 6

int main() {
    printf("GCD(48, 18) = %d\\n", gcd(48, 18));   // 6
    printf("GCD(100, 50) = %d\\n", gcd(100, 50)); // 50
    printf("GCD(17, 13) = %d\\n", gcd(17, 13));   // 1
    
    // Bonus: Show the algorithm steps
    printf("\\nSteps for GCD(48, 18):\\n");
    int a = 48, b = 18;
    while (b != 0) {
        printf("gcd(%d, %d)\\n", a, b);
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("Result: %d\\n", a);
    
    return 0;
}`,
      output: 'GCD(48, 18) = 6\nGCD(100, 50) = 50\nGCD(17, 13) = 1'
    },

    // ========== TOPIC 3.6: Advanced Recursion ==========
    {
      topic: '3.6',
      topicTitle: 'Advanced Recursion',
      type: 'concept',
      title: '🎯 Tail Recursion',
      content: `Tail recursion is when the recursive call is the LAST operation in the function - it's more efficient!`,
      details: [
        '✅ Last operation is the recursive call',
        '⚡ Can be optimized by compiler',
        '💾 Uses less stack space',
        '🔄 Easy to convert to iteration',
        '🎓 Preferred in production code'
      ],
      example: `// NOT tail recursive (operation after recursive call)
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // Multiplication AFTER
}

// Tail recursive (helper function with accumulator)
int factorialHelper(int n, int acc) {
    if (n <= 1) return acc;
    return factorialHelper(n - 1, n * acc);  // LAST operation
}

int factorialTail(int n) {
    return factorialHelper(n, 1);
}

// Both calculate 5! = 120
// But tail recursive is more efficient!`
    },
    {
      topic: '3.6',
      topicTitle: 'Advanced Recursion',
      type: 'question',
      title: '🔍 Indirect Recursion',
      question: 'What does this program print?',
      hint: 'Functions calling each other!',
      code: `void functionA(int n);
void functionB(int n);

void functionA(int n) {
    if (n > 0) {
        printf("A%d ", n);
        functionB(n - 1);
    }
}

void functionB(int n) {
    if (n > 0) {
        printf("B%d ", n);
        functionA(n - 1);
    }
}

int main() {
    functionA(3);
}`,
      options: [
        'A3 B2 A1',
        'A3 A2 A1 B3 B2 B1',
        'A3 B3 A2 B2 A1 B1',
        'Infinite loop'
      ],
      correctAnswer: 0,
      explanation: `Trace execution:

main() calls functionA(3)
→ A3 printed, calls functionB(2)
  → B2 printed, calls functionA(1)
    → A1 printed, calls functionB(0)
      → functionB(0): n=0, doesn't print, returns
    ← back to functionA(1), done
  ← back to functionB(2), done
← back to functionA(3), done

Output: A3 B2 A1

This is INDIRECT RECURSION:
A calls B, B calls A!`
    },
    {
      topic: '3.6',
      topicTitle: 'Advanced Recursion',
      type: 'practice',
      title: '🌳 Binary Search (Recursive)',
      question: 'Implement binary search using recursion',
      starter: `#include <stdio.h>

// Recursive binary search
// Returns index if found, -1 if not found
int binarySearch(int arr[], int left, int right, int target) {
    // Your code here
    
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
    int n = 11;
    
    int index = binarySearch(arr, 0, n - 1, 23);
    if (index != -1) {
        printf("Found at index %d\\n", index);
    } else {
        printf("Not found\\n");
    }
    
    return 0;
}`,
      solution: `#include <stdio.h>

int binarySearch(int arr[], int left, int right, int target) {
    // BASE CASE: Element not found
    if (left > right) {
        return -1;
    }
    
    // Find middle element
    int mid = left + (right - left) / 2;
    
    // BASE CASE: Found the target!
    if (arr[mid] == target) {
        return mid;
    }
    
    // RECURSIVE CASES:
    // If target is smaller, search left half
    if (arr[mid] > target) {
        return binarySearch(arr, left, mid - 1, target);
    }
    
    // If target is larger, search right half
    return binarySearch(arr, mid + 1, right, target);
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
    int n = 11;
    
    printf("Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n\\n");
    
    // Test cases
    int searches[] = {23, 2, 78, 50};
    for (int i = 0; i < 4; i++) {
        int target = searches[i];
        int index = binarySearch(arr, 0, n - 1, target);
        
        if (index != -1) {
            printf("✓ Found %d at index %d\\n", target, index);
        } else {
            printf("✗ %d not found\\n", target);
        }
    }
    
    return 0;
}`,
      output: '✓ Found 23 at index 5\n✓ Found 2 at index 0\n✓ Found 78 at index 10\n✗ 50 not found'
    }
  ];

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setShowSolution(false);
      setShowQuizFeedback({});
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setShowSolution(false);
      setShowQuizFeedback({});
    }
  };

  const handleQuizAnswer = (answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [currentSlideIndex]: answerIndex });
    setShowQuizFeedback({ ...showQuizFeedback, [currentSlideIndex]: true });
  };

  const getQuizFeedback = () => {
    if (!showQuizFeedback[currentSlideIndex]) return null;
    return quizAnswers[currentSlideIndex] === currentSlide.correctAnswer ? 'correct' : 'incorrect';
  };

  const renderInteractive = () => {
    if (currentSlide.interactiveType === 'function-machine') {
      const values = interactiveValues[currentSlideIndex] || currentSlide.inputs.reduce((acc, input) => {
        acc[input.name] = input.default;
        return acc;
      }, {});

      const result = values.x * values.y; // For the multiply function example

      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-lg border-2 border-dashed ${
            darkMode ? 'border-purple-500/50 bg-purple-900/20' : 'border-purple-300 bg-purple-50'
          }`}>
            <h4 className={`font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-900'}`}>
              <Zap className="w-5 h-5" />
              Interactive Function Machine
            </h4>
            
            {currentSlide.inputs.map((input) => (
              <div key={input.name} className="mb-4">
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {input.label}: {values[input.name]}
                </label>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  value={values[input.name]}
                  onChange={(e) => {
                    setInteractiveValues({
                      ...interactiveValues,
                      [currentSlideIndex]: {
                        ...values,
                        [input.name]: parseInt(e.target.value)
                      }
                    });
                  }}
                  className="w-full"
                />
              </div>
            ))}

            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <pre className="text-green-400 text-sm">
                <code>{currentSlide.functionCode}</code>
              </pre>
            </div>

            <div className={`mt-4 p-6 rounded-lg text-center ${
              darkMode ? 'bg-green-900/30 border-2 border-green-500' : 'bg-green-100 border-2 border-green-500'
            }`}>
              <div className={`text-sm mb-2 ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                Result:
              </div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                {result}
              </div>
              <div className={`text-xs mt-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                multiply({values.x}, {values.y}) = {result}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'concept':
        return (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg border-l-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-500' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500'
            }`}>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {currentSlide.content}
              </p>
            </div>
            {currentSlide.details && (
              <div className={`p-6 rounded-lg shadow-sm border ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <h4 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Key Points
                </h4>
                <ul className="space-y-2">
                  {currentSlide.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {currentSlide.example && (
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-white">Example</h4>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{currentSlide.example}</code>
                </pre>
              </div>
            )}
          </div>
        );

      case 'interactive':
        return renderInteractive();
        
      case 'question':
        const feedback = getQuizFeedback();
        const userAnswer = quizAnswers[currentSlideIndex];
        
        return (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg border-l-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500' 
                : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-500'
            }`}>
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {currentSlide.question}
                  </h4>
                  {currentSlide.hint && (
                    <p className={`text-sm italic ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                      💡 Hint: {currentSlide.hint}
                    </p>
                  )}
                </div>
              </div>
              {currentSlide.code && (
                <div className={`p-4 rounded-lg mt-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{currentSlide.code}</code>
                  </pre>
                </div>
              )}
            </div>
            <div className="space-y-3">
              {currentSlide.options.map((option, idx) => {
                const isSelected = userAnswer === idx;
                const isCorrect = idx === currentSlide.correctAnswer;
                let bgColor = darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white hover:bg-gray-50';
                if (feedback) {
                  if (isCorrect) bgColor = darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500';
                  else if (isSelected) bgColor = darkMode ? 'bg-red-900/30 border-red-500' : 'bg-red-100 border-red-500';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(idx)}
                    disabled={feedback !== null}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${bgColor} ${
                      isSelected ? 'border-blue-500' : darkMode ? 'border-gray-700' : 'border-gray-200'
                    } disabled:cursor-not-allowed flex items-center gap-3`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-blue-500 bg-blue-500 text-white' : darkMode ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className={`flex-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{option}</span>
                    {feedback && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {feedback && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </button>
                );
              })}
            </div>
            {feedback && (
              <div className={`p-6 rounded-lg border ${
                feedback === 'correct' 
                  ? darkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'
                  : darkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-50 border-orange-200'
              }`}>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  {feedback === 'correct' ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className={darkMode ? 'text-green-400' : 'text-green-800'}>🎉 Excellent! You got it!</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-5 h-5 text-orange-600" />
                      <span className={darkMode ? 'text-orange-400' : 'text-orange-800'}>Let's understand why:</span>
                    </>
                  )}
                </h4>
                <p className={`whitespace-pre-line ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {currentSlide.explanation}
                </p>
              </div>
            )}
          </div>
        );
        
      case 'practice':
        return (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg border-l-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-green-900/30 to-teal-900/30 border-green-500' 
                : 'bg-gradient-to-r from-green-50 to-teal-50 border-green-500'
            }`}>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Practice Challenge
                  </h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{currentSlide.question}</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-white">Code Editor</h4>
                </div>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{showSolution ? currentSlide.solution : currentSlide.starter}</code>
              </pre>
            </div>
            {showSolution && currentSlide.output && (
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-700'}`}>
                <h4 className="font-semibold text-white mb-2">Expected Output:</h4>
                <pre className="text-gray-300 text-sm">
                  <code>{currentSlide.output}</code>
                </pre>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  return (
    <div className="space-y-6">
      <div className={`rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-700/50' : 'bg-gray-300'}`}>
        <div 
          className="h-full bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
        }`}>
          Topic {currentSlide.topic}: {currentSlide.topicTitle}
        </span>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Slide {currentSlideIndex + 1} of {slides.length}
        </span>
      </div>

      <div className={`backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-white/5' : 'bg-white'
      }`}>
        <div className="p-8">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            {currentSlide.title}
          </h3>
          {renderSlideContent()}
        </div>

        <div className="px-8 pb-8">
          <div className={`flex items-center justify-between pt-6 border-t transition-colors duration-300 ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit3;