import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, Play, CheckCircle, XCircle, Lightbulb, Brain, Rocket } from 'lucide-react';

const Unit2 = ({ darkMode }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizFeedback, setShowQuizFeedback] = useState({});

  const slides = [
    // ========== TOPIC 2.1: Arithmetic Operators ==========
    {
      topic: '2.1',
      topicTitle: 'Arithmetic Operators',
      type: 'concept',
      title: 'What are Arithmetic Operators?',
      content: `Arithmetic operators are the building blocks of mathematical calculations in C programming.`,
      details: [
        '+ (Addition): Combines two numbers → 5 + 3 = 8',
        '- (Subtraction): Finds the difference → 10 - 4 = 6',
        '* (Multiplication): Multiplies values → 6 * 7 = 42',
        '/ (Division): Divides first by second → 15 / 3 = 5',
        '% (Modulus): Returns remainder → 17 % 5 = 2'
      ],
      example: `int a = 10, b = 3;
printf("Sum: %d\\n", a + b);        // 13
printf("Difference: %d\\n", a - b);  // 7
printf("Product: %d\\n", a * b);     // 30
printf("Quotient: %d\\n", a / b);    // 3
printf("Remainder: %d\\n", a % b);   // 1`
    },
    {
      topic: '2.1',
      topicTitle: 'Arithmetic Operators',
      type: 'question',
      title: '🧩 The Birthday Cake Problem',
      question: 'You have 23 candies to distribute equally among 5 friends. How many candies will be left after equal distribution?',
      hint: 'Think about the modulus operator!',
      code: `int candies = 23;
int friends = 5;
int leftover = ?;  // What operation gives leftover?`,
      options: ['3 candies', '4 candies', '5 candies', '2 candies'],
      correctAnswer: 0,
      explanation: `Using the modulus operator:
leftover = 23 % 5 = 3

Each friend gets 4 candies (23 / 5 = 4)
Total distributed: 4 × 5 = 20 candies
Leftover: 23 - 20 = 3 candies

The % operator directly gives us the remainder!`
    },
    {
      topic: '2.1',
      topicTitle: 'Arithmetic Operators',
      type: 'question',
      title: '🎯 Operator Precedence Challenge',
      question: 'A store gives a 10% discount, then adds 8% tax. On a ₹100 item, what\'s the final price?',
      hint: 'Calculate step by step: first discount, then tax',
      code: `int price = 100;
int afterDiscount = price - (price * 10 / 100);
int finalPrice = afterDiscount + (afterDiscount * 8 / 100);
printf("%d", finalPrice);`,
      options: ['₹97', '₹98', '₹99', '₹102'],
      correctAnswer: 0,
      explanation: `Step-by-step calculation:
1. Original price: ₹100
2. 10% discount = 100 × 10/100 = ₹10
3. After discount: 100 - 10 = ₹90
4. 8% tax on ₹90 = 90 × 8/100 = ₹7
5. Final price: 90 + 7 = ₹97

Order matters! Discount first, then tax.`
    },
    {
      topic: '2.1',
      topicTitle: 'Arithmetic Operators',
      type: 'practice',
      title: '💰 Money Exchange Calculator',
      question: 'Create a program that converts rupees into coins: ₹10, ₹5, ₹2, ₹1 using minimum coins',
      starter: `#include <stdio.h>

int main() {
    int amount = 93;  // Amount to convert
    int coins10, coins5, coins2, coins1;
    
    // Calculate minimum coins needed
    // Your code here
    
    printf("₹10 coins: %d\\n", coins10);
    printf("₹5 coins: %d\\n", coins5);
    printf("₹2 coins: %d\\n", coins2);
    printf("₹1 coins: %d\\n", coins1);
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int amount = 93;
    int coins10, coins5, coins2, coins1;
    
    // Greedy approach - use largest coins first
    coins10 = amount / 10;
    amount = amount % 10;  // Remaining after ₹10 coins
    
    coins5 = amount / 5;
    amount = amount % 5;   // Remaining after ₹5 coins
    
    coins2 = amount / 2;
    amount = amount % 2;   // Remaining after ₹2 coins
    
    coins1 = amount;       // Whatever is left
    
    printf("₹10 coins: %d\\n", coins10);  // 9
    printf("₹5 coins: %d\\n", coins5);    // 0
    printf("₹2 coins: %d\\n", coins2);    // 1
    printf("₹1 coins: %d\\n", coins1);    // 1
    
    // Total: 9 + 0 + 1 + 1 = 11 coins
    return 0;
}`,
      output: '₹10 coins: 9\n₹5 coins: 0\n₹2 coins: 1\n₹1 coins: 1'
    },

    // ========== TOPIC 2.2: Relational & Logical Operators ==========
    {
      topic: '2.2',
      topicTitle: 'Relational & Logical Operators',
      type: 'concept',
      title: 'Making Decisions with Comparisons',
      content: `Relational operators help your program make intelligent decisions by comparing values.`,
      details: [
        '== (Equal): Are both values the same?',
        '!= (Not Equal): Are values different?',
        '> (Greater): Is left bigger than right?',
        '< (Less): Is left smaller than right?',
        '>= (Greater or Equal): Left is bigger or same',
        '<= (Less or Equal): Left is smaller or same'
      ],
      example: `int score = 85, passing = 40;

if (score > passing) {
    printf("Passed!\\n");  // This executes
}

if (score == 100) {
    printf("Perfect!\\n");  // This doesn't execute
}`
    },
    {
      topic: '2.2',
      topicTitle: 'Relational & Logical Operators',
      type: 'question',
      title: '🎮 Game Level Unlock Logic',
      question: 'A game unlocks Level 3 if: score > 500 AND lives > 0 OR hasGoldenKey == 1. Player has score=450, lives=2, key=0. Can they unlock?',
      hint: '&& has higher precedence than ||',
      code: `int score = 450, lives = 2, hasGoldenKey = 0;
if ((score > 500 && lives > 0) || hasGoldenKey == 1) {
    printf("UNLOCKED");
} else {
    printf("LOCKED");
}`,
      options: ['UNLOCKED', 'LOCKED', 'Compilation Error', 'Depends on compiler'],
      correctAnswer: 1,
      explanation: `Let's evaluate step by step:
1. score > 500: 450 > 500 = FALSE
2. lives > 0: 2 > 0 = TRUE
3. (FALSE && TRUE) = FALSE
4. hasGoldenKey == 1: 0 == 1 = FALSE
5. FALSE || FALSE = FALSE

Result: LOCKED

To unlock, player needs EITHER:
- Both score > 500 AND lives > 0, OR
- The golden key`
    },
    {
      topic: '2.2',
      topicTitle: 'Relational & Logical Operators',
      type: 'question',
      title: '🎯 The Mysterious Output',
      question: 'What gets printed?',
      hint: 'C treats any non-zero value as TRUE!',
      code: `int x = 5, y = 0, z = -3;
if (x && !y || z) {
    printf("A");
} else {
    printf("B");
}`,
      options: ['A', 'B', 'Nothing', 'Error'],
      correctAnswer: 0,
      explanation: `Breaking it down:
1. x = 5 (non-zero means TRUE)
2. y = 0 (zero means FALSE)
3. z = -3 (non-zero means TRUE)

Now evaluate:
- !y = !FALSE = TRUE
- x && !y = TRUE && TRUE = TRUE
- TRUE || z = TRUE || TRUE = TRUE

Result: A is printed

Remember: In C, any non-zero = TRUE, zero = FALSE!`
    },
    {
      topic: '2.2',
      topicTitle: 'Relational & Logical Operators',
      type: 'practice',
      title: '🎓 Scholarship Eligibility Checker',
      question: 'Create a program to check scholarship eligibility: (Marks >= 85 AND attendance >= 75%) OR (Sports == 1 AND marks >= 70)',
      starter: `#include <stdio.h>

int main() {
    int marks = 82;
    float attendance = 80.5;
    int isSportsPlayer = 1;
    
    // Write scholarship eligibility logic
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int marks = 82;
    float attendance = 80.5;
    int isSportsPlayer = 1;
    
    printf("=== Scholarship Eligibility ===\\n");
    printf("Marks: %d\\n", marks);
    printf("Attendance: %.1f%%\\n", attendance);
    printf("Sports Player: %s\\n\\n", isSportsPlayer ? "Yes" : "No");
    
    // Academic Excellence Path
    int academicPath = (marks >= 85 && attendance >= 75.0);
    
    // Sports Excellence Path
    int sportsPath = (isSportsPlayer == 1 && marks >= 70);
    
    // Check eligibility
    if (academicPath || sportsPath) {
        printf("✓ ELIGIBLE for scholarship!\\n\\n");
        
        if (academicPath) {
            printf("Reason: Academic Excellence\\n");
        }
        if (sportsPath) {
            printf("Reason: Sports Excellence\\n");
        }
    } else {
        printf("✗ NOT ELIGIBLE\\n\\n");
        printf("Requirements:\\n");
        printf("Path 1: Marks >= 85 AND Attendance >= 75%%\\n");
        printf("Path 2: Sports Player AND Marks >= 70\\n");
    }
    
    return 0;
}`,
      output: '✓ ELIGIBLE for scholarship!\nReason: Sports Excellence'
    },

    // ========== TOPIC 2.3: Conditional Statements ==========
    {
      topic: '2.3',
      topicTitle: 'Conditional Statements',
      type: 'concept',
      title: 'Teaching Your Program to Make Choices',
      content: `Conditional statements let your program take different paths based on conditions - like a "choose your own adventure" book!`,
      details: [
        'if: Do something only when condition is true',
        'if-else: Choose between two options',
        'else-if: Check multiple conditions in order',
        'nested if: if inside another if for complex logic',
        'switch: Choose from many specific values'
      ],
      example: `int temperature = 35;

if (temperature > 30) {
    printf("Hot day! 🌞\\n");
} else if (temperature > 20) {
    printf("Pleasant! 😊\\n");
} else {
    printf("Cold! 🥶\\n");
}`
    },
    {
      topic: '2.3',
      topicTitle: 'Conditional Statements',
      type: 'question',
      title: '🎪 The Tricky Nested If',
      question: 'What gets printed for age=16, hasTicket=1?',
      hint: 'Follow the nested structure carefully!',
      code: `int age = 16, hasTicket = 1;

if (age >= 18) {
    printf("Adult entry");
} else {
    if (hasTicket) {
        printf("Child with ticket");
    } else {
        printf("Child without ticket");
    }
}`,
      options: ['Adult entry', 'Child with ticket', 'Child without ticket', 'Nothing'],
      correctAnswer: 1,
      explanation: `Step-by-step execution:
1. Check: age >= 18 → 16 >= 18 = FALSE
2. Go to else block
3. Check: hasTicket → 1 = TRUE
4. Print "Child with ticket"

The nested structure matters!
- Outer if: Checks age
- Inner if: Checks ticket (only if age < 18)

Age < 18 + Has ticket = "Child with ticket"`
    },
    {
      topic: '2.3',
      topicTitle: 'Conditional Statements',
      type: 'question',
      title: '🎯 The Grade Mystery',
      question: 'A student has marks=75. What grade do they get?',
      hint: 'First matching condition wins!',
      code: `int marks = 75;

if (marks >= 90) printf("A+");
else if (marks >= 80) printf("A");
else if (marks >= 70) printf("B");
else if (marks >= 60) printf("C");
else printf("F");`,
      options: ['A+', 'A', 'B', 'C'],
      correctAnswer: 2,
      explanation: `else-if ladder evaluation:
1. marks >= 90? → 75 >= 90 = FALSE (skip)
2. marks >= 80? → 75 >= 80 = FALSE (skip)
3. marks >= 70? → 75 >= 70 = TRUE ✓

STOP! First TRUE condition wins!
Print "B" and exit

Marks 75 falls in range [70, 80), so Grade B.

Important: Order matters in else-if chains!`
    },
    {
      topic: '2.3',
      topicTitle: 'Conditional Statements',
      type: 'practice',
      title: '🎰 Rock Paper Scissors Game',
      question: 'Create a Rock-Paper-Scissors game: Rock=0, Paper=1, Scissors=2. Determine winner based on rules.',
      starter: `#include <stdio.h>

int main() {
    int player = 0;    // 0=Rock, 1=Paper, 2=Scissors
    int computer = 2;   // 0=Rock, 1=Paper, 2=Scissors
    
    // Write game logic here
    // Rock beats Scissors
    // Scissors beats Paper
    // Paper beats Rock
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int player = 0;    // Rock
    int computer = 2;  // Scissors
    
    // Display choices
    char *choices[] = {"Rock", "Paper", "Scissors"};
    printf("Player: %s\\n", choices[player]);
    printf("Computer: %s\\n\\n", choices[computer]);
    
    // Determine winner
    if (player == computer) {
        printf("🤝 It's a TIE!\\n");
    } 
    else if ((player == 0 && computer == 2) ||  // Rock beats Scissors
             (player == 1 && computer == 0) ||  // Paper beats Rock
             (player == 2 && computer == 1)) {  // Scissors beats Paper
        printf("🎉 PLAYER WINS!\\n");
    } 
    else {
        printf("💻 COMPUTER WINS!\\n");
    }
    
    // Explain why
    printf("\\nWhy?\\n");
    if (player == 0 && computer == 2) {
        printf("Rock crushes Scissors!\\n");
    } else if (player == 1 && computer == 0) {
        printf("Paper covers Rock!\\n");
    } else if (player == 2 && computer == 1) {
        printf("Scissors cuts Paper!\\n");
    }
    
    return 0;
}`,
      output: 'Player: Rock\nComputer: Scissors\n\n🎉 PLAYER WINS!\n\nWhy?\nRock crushes Scissors!'
    },

    // ========== TOPIC 2.4: Loops ==========
    {
      topic: '2.4',
      topicTitle: 'Looping Constructs',
      type: 'concept',
      title: 'The Power of Repetition',
      content: `Loops let you repeat tasks without writing the same code multiple times - like a robot following instructions!`,
      details: [
        'for loop: When you know how many times to repeat',
        'while loop: Repeat while condition is true',
        'do-while loop: Repeat at least once, then check condition',
        'Nested loops: Loop inside another loop (for patterns, matrices)'
      ],
      example: `// Print 1 to 5
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5

// Factorial using while
int n = 5, fact = 1;
while (n > 0) {
    fact *= n;
    n--;
}
printf("Factorial: %d", fact);  // 120`
    },
    {
      topic: '2.4',
      topicTitle: 'Looping Constructs',
      type: 'question',
      title: '🔢 The Counting Puzzle',
      question: 'How many numbers get printed?',
      hint: 'Watch the increment carefully!',
      code: `for (int i = 5; i <= 20; i += 3) {
    printf("%d ", i);
}`,
      options: ['5 numbers', '6 numbers', '7 numbers', '8 numbers'],
      correctAnswer: 1,
      explanation: `Let's trace the loop:
i = 5  → Print 5  (5 <= 20 ✓)
i = 8  → Print 8  (8 <= 20 ✓)
i = 11 → Print 11 (11 <= 20 ✓)
i = 14 → Print 14 (14 <= 20 ✓)
i = 17 → Print 17 (17 <= 20 ✓)
i = 20 → Print 20 (20 <= 20 ✓)
i = 23 → Stop (23 > 20 ✗)

Printed: 5, 8, 11, 14, 17, 20
Total: 6 numbers

Formula: (20 - 5) / 3 + 1 = 6`
    },
    {
      topic: '2.4',
      topicTitle: 'Looping Constructs',
      type: 'question',
      title: '🎨 Pattern Logic Challenge',
      question: 'How many stars (*) are printed in total?',
      hint: 'Count stars in each row, then sum!',
      code: `for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        printf("* ");
    }
    printf("\\n");
}`,
      options: ['8 stars', '10 stars', '12 stars', '16 stars'],
      correctAnswer: 1,
      explanation: `Let's count row by row:

Row 1 (i=1): j runs 1 time  → 1 star
Row 2 (i=2): j runs 2 times → 2 stars
Row 3 (i=3): j runs 3 times → 3 stars
Row 4 (i=4): j runs 4 times → 4 stars

Total = 1 + 2 + 3 + 4 = 10 stars

Pattern printed:
* 
* * 
* * * 
* * * * 

Formula: n(n+1)/2 = 4(5)/2 = 10`
    },
    {
      topic: '2.4',
      topicTitle: 'Looping Constructs',
      type: 'practice',
      title: '🔢 Fibonacci Series Generator',
      question: 'Generate first N Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13...',
      starter: `#include <stdio.h>

int main() {
    int n = 10;  // Generate first 10 numbers
    int first = 0, second = 1;
    
    printf("Fibonacci Series:\\n");
    
    // Your code here
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int n = 10;
    int first = 0, second = 1, next;
    
    printf("Fibonacci Series (first %d numbers):\\n", n);
    
    for (int i = 1; i <= n; i++) {
        if (i == 1) {
            printf("%d ", first);
            continue;
        }
        if (i == 2) {
            printf("%d ", second);
            continue;
        }
        
        next = first + second;
        printf("%d ", next);
        
        // Update for next iteration
        first = second;
        second = next;
    }
    
    printf("\\n");
    return 0;
}`,
      output: 'Fibonacci Series (first 10 numbers):\n0 1 1 2 3 5 8 13 21 34'
    },

    // ========== TOPIC 2.5: Break & Continue ==========
    {
      topic: '2.5',
      topicTitle: 'Break & Continue',
      type: 'concept',
      title: 'Controlling Loop Flow',
      content: `break and continue give you fine control over loops - like having pause and skip buttons!`,
      details: [
        'break: Immediately exit the loop (stop completely)',
        'continue: Skip rest of current iteration (go to next)',
        'break in nested loops: Only exits innermost loop',
        'Use break: When you found what you\'re looking for',
        'Use continue: When you want to skip certain cases'
      ],
      example: `// Find first even number
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        printf("Found: %d", i);
        break;  // Stop searching
    }
}

// Print only odd numbers
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) continue;  // Skip evens
    printf("%d ", i);
}
// Output: 1 3 5`
    },
    {
      topic: '2.5',
      topicTitle: 'Break & Continue',
      type: 'question',
      title: '🎯 The Break Mystery',
      question: 'What is the final value of sum?',
      hint: 'break exits the loop immediately!',
      code: `int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
    if (sum > 10) {
        break;
    }
}
printf("%d", sum);`,
      options: ['10', '15', '21', '55'],
      correctAnswer: 1,
      explanation: `Let's trace step by step:

i=1: sum = 0+1 = 1  (1 > 10? No, continue)
i=2: sum = 1+2 = 3  (3 > 10? No, continue)
i=3: sum = 3+3 = 6  (6 > 10? No, continue)
i=4: sum = 6+4 = 10 (10 > 10? No, continue)
i=5: sum = 10+5 = 15 (15 > 10? YES! BREAK)

Loop exits immediately.
Final sum = 15

Without break, sum would be 55 (1+2+...+10)`
    },
    {
      topic: '2.5',
      topicTitle: 'Break & Continue',
      type: 'question',
      title: '🔢 Continue Logic Puzzle',
      question: 'What gets printed?',
      hint: 'continue skips the printf for even numbers!',
      code: `for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);
}`,
      options: ['1 3 5', '2 4 6', '1 2 3 4 5 6', '1 3'],
      correctAnswer: 0,
      explanation: `Trace execution:

i=1: 1%2=1 (odd), skip continue, print 1
i=2: 2%2=0 (even), continue → skip printf
i=3: 3%2=1 (odd), skip continue, print 3
i=4: 4%2=0 (even), continue → skip printf
i=5: 5%2=1 (odd), skip continue, print 5
i=6: 6%2=0 (even), continue → skip printf

Output: 1 3 5

continue skips to next iteration, so even numbers never get printed!`
    },
    {
      topic: '2.5',
      topicTitle: 'Break & Continue',
      type: 'practice',
      title: '🎰 Number Guessing Game',
      question: 'Create a number guessing game: Player has 5 attempts to guess the secret number',
      starter: `#include <stdio.h>

int main() {
    int secret = 42;
    int guess;
    int attempts = 5;
    
    printf("🎰 Number Guessing Game!\\n");
    printf("Guess a number between 1-100\\n");
    printf("You have %d attempts\\n\\n", attempts);
    
    // Your game logic here
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int secret = 42;
    int guess;
    int attempts = 5;
    
    printf("🎰 Number Guessing Game!\\n");
    printf("Guess a number between 1-100\\n");
    printf("You have %d attempts\\n\\n", attempts);
    
    for (int i = 1; i <= attempts; i++) {
        printf("Attempt %d: Enter your guess: ", i);
        scanf("%d", &guess);
        
        if (guess == secret) {
            printf("\\n🎉 CORRECT! You won in %d attempts!\\n", i);
            break;  // Exit loop - game won!
        }
        
        if (i == attempts) {
            printf("\\n😞 Game Over! Secret was %d\\n", secret);
            break;
        }
        
        // Give hints
        if (guess < secret) {
            printf("📈 Too low! Try higher...\\n\\n");
        } else {
            printf("📉 Too high! Try lower...\\n\\n");
        }
    }
    
    return 0;
}`,
      output: 'Attempt 1: Enter your guess: 50\n📉 Too high! Try lower...\n\nAttempt 2: Enter your guess: 42\n\n🎉 CORRECT! You won in 2 attempts!'
    },

    // ========== TOPIC 2.6: 1D Arrays ==========
    {
      topic: '2.6',
      topicTitle: 'One-Dimensional Arrays',
      type: 'concept',
      title: 'Arrays: Your Data Organization Tool',
      content: `Think of an array as a row of lockers - each locker (element) has a number (index) and stores one item!`,
      details: [
        'Declaration: int arr[5]; creates 5 integer slots',
        'Indexing: First element is arr[0], last is arr[n-1]',
        'Initialization: int arr[] = {1, 2, 3, 4, 5};',
        'Access: Use index to read/write → arr[2] = 10;',
        'Size: Fixed at declaration, cannot change later'
      ],
      example: `int scores[5] = {85, 92, 78, 95, 88};

// Access elements
printf("First: %d\\n", scores[0]);   // 85
printf("Last: %d\\n", scores[4]);    // 88

// Modify
scores[2] = 100;  // Change 78 to 100

// Loop through
for (int i = 0; i < 5; i++) {
    printf("%d ", scores[i]);
}`
    },
    {
      topic: '2.6',
      topicTitle: 'One-Dimensional Arrays',
      type: 'question',
      title: '🎯 Array Mystery Output',
      question: 'What gets printed at the end?',
      hint: 'Arrays are 0-indexed!',
      code: `int arr[5] = {10, 20, 30, 40, 50};
arr[2] = arr[0] + arr[4];
arr[0] = arr[2] - arr[1];
printf("%d", arr[0]);`,
      options: ['30', '40', '50', '60'],
      correctAnswer: 1,
      explanation: `Let's trace step by step:

Initial: [10, 20, 30, 40, 50]
         [0]  [1] [2] [3] [4]

Step 1: arr[2] = arr[0] + arr[4]
        arr[2] = 10 + 50 = 60
Array: [10, 20, 60, 40, 50]

Step 2: arr[0] = arr[2] - arr[1]
        arr[0] = 60 - 20 = 40
Array: [40, 20, 60, 40, 50]

Final arr[0] = 40`
    },
    {
      topic: '2.6',
      topicTitle: 'One-Dimensional Arrays',
      type: 'question',
      title: '🔍 Finding the Pattern',
      question: 'What is the sum of elements at even indices?',
      hint: 'Even indices: 0, 2, 4...',
      code: `int arr[6] = {5, 10, 15, 20, 25, 30};
int sum = 0;
for (int i = 0; i < 6; i += 2) {
    sum += arr[i];
}
printf("%d", sum);`,
      options: ['45', '50', '60', '105'],
      correctAnswer: 0,
      explanation: `Elements at even indices:

i = 0: arr[0] = 5
i = 2: arr[2] = 15
i = 4: arr[4] = 25

Sum = 5 + 15 + 25 = 45

Remember: i += 2 means i increases by 2 each time
So we only visit indices 0, 2, 4 (all even)`
    },
    {
      topic: '2.6',
      topicTitle: 'One-Dimensional Arrays',
      type: 'practice',
      title: '📊 Student Grade Analyzer',
      question: 'Analyze class performance: find average, highest, lowest, and count students above average',
      starter: `#include <stdio.h>

int main() {
    int marks[8] = {85, 72, 90, 68, 95, 78, 88, 92};
    int n = 8;
    
    // Calculate statistics
    // Your code here
    
    return 0;
}`,
      solution: `#include <stdio.h>

int main() {
    int marks[8] = {85, 72, 90, 68, 95, 78, 88, 92};
    int n = 8;
    
    // Calculate sum and average
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += marks[i];
    }
    float average = sum / (float)n;
    
    // Find highest and lowest
    int highest = marks[0];
    int lowest = marks[0];
    for (int i = 1; i < n; i++) {
        if (marks[i] > highest) highest = marks[i];
        if (marks[i] < lowest) lowest = marks[i];
    }
    
    // Count students above average
    int aboveAverage = 0;
    for (int i = 0; i < n; i++) {
        if (marks[i] > average) {
            aboveAverage++;
        }
    }
    
    // Display results
    printf("📊 Class Performance Analysis\\n");
    printf("================================\\n");
    printf("Total Students: %d\\n", n);
    printf("Average Score: %.2f\\n", average);
    printf("Highest Score: %d\\n", highest);
    printf("Lowest Score: %d\\n", lowest);
    printf("Above Average: %d students\\n", aboveAverage);
    
    return 0;
}`,
      output: '📊 Class Performance Analysis\n================================\nTotal Students: 8\nAverage Score: 83.50\nHighest Score: 95\nLowest Score: 68\nAbove Average: 5 students'
    },

    // ========== TOPIC 2.7: 2D Arrays ==========
    {
      topic: '2.7',
      topicTitle: 'Two-Dimensional Arrays',
      type: 'concept',
      title: 'Arrays in 2D: Tables and Matrices',
      content: `2D arrays are like spreadsheets - rows and columns forming a grid of data!`,
      details: [
        'Declaration: int matrix[3][4]; → 3 rows, 4 columns',
        'Access: matrix[row][col] → both start from 0',
        'Nested loops: Outer for rows, inner for columns',
        'Use cases: Tables, game boards, images, matrices'
      ],
      example: `int grid[2][3] = {
    {1, 2, 3},    // Row 0
    {4, 5, 6}     // Row 1
};

// Access element
printf("%d", grid[1][2]);  // 6

// Print entire grid
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", grid[i][j]);
    }
    printf("\\n");
}`
    },
    {
      topic: '2.7',
      topicTitle: 'Two-Dimensional Arrays',
      type: 'question',
      title: '🎯 Matrix Sum Puzzle',
      question: 'What is the sum of the main diagonal?',
      hint: 'Main diagonal: elements where row == column',
      code: `int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
int sum = 0;
for (int i = 0; i < 3; i++) {
    sum += mat[i][i];
}
printf("%d", sum);`,
      options: ['12', '15', '18', '21'],
      correctAnswer: 1,
      explanation: `Main diagonal elements (where i == i):

i=0: mat[0][0] = 1
i=1: mat[1][1] = 5
i=2: mat[2][2] = 9

Visualize:
[1] 2  3
 4 [5] 6
 7  8 [9]

Sum = 1 + 5 + 9 = 15

The main diagonal goes from top-left to bottom-right!`
    },
    {
      topic: '2.7',
      topicTitle: 'Two-Dimensional Arrays',
      type: 'question',
      title: '🔢 Nested Loop Challenge',
      question: 'How many times does printf execute?',
      hint: 'Outer loop × Inner loop',
      code: `int mat[3][4];
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        printf("* ");
    }
}`,
      options: ['7 times', '12 times', '16 times', '20 times'],
      correctAnswer: 1,
      explanation: `Let's count systematically:

Outer loop runs 3 times (i = 0, 1, 2)
Inner loop runs 4 times per outer iteration

Total = Outer × Inner = 3 × 4 = 12 times

Breakdown:
i=0: j runs 4 times (4 prints)
i=1: j runs 4 times (4 prints)
i=2: j runs 4 times (4 prints)

Total: 4 + 4 + 4 = 12 prints`
    },
    {
      topic: '2.7',
      topicTitle: 'Two-Dimensional Arrays',
      type: 'practice',
      title: '🎮 Tic-Tac-Toe Board Checker',
      question: 'Create a function to check if a player won in Tic-Tac-Toe (check rows, columns, diagonals)',
      starter: `#include <stdio.h>

int main() {
    char board[3][3] = {
        {'X', 'O', 'X'},
        {'O', 'X', 'O'},
        {'O', 'X', 'X'}
    };
    
    // Check for winner
    // Your code here
    
    return 0;
}`,
      solution: `#include <stdio.h>

void printBoard(char board[3][3]) {
    printf("\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("-----------\\n");
    }
    printf("\\n");
}

int main() {
    char board[3][3] = {
        {'X', 'O', 'X'},
        {'O', 'X', 'O'},
        {'O', 'X', 'X'}
    };
    
    char winner = ' ';
    
    // Check rows
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && 
            board[i][1] == board[i][2] && 
            board[i][0] != ' ') {
            winner = board[i][0];
        }
    }
    
    // Check columns
    for (int j = 0; j < 3; j++) {
        if (board[0][j] == board[1][j] && 
            board[1][j] == board[2][j] && 
            board[0][j] != ' ') {
            winner = board[0][j];
        }
    }
    
    // Check main diagonal
    if (board[0][0] == board[1][1] && 
        board[1][1] == board[2][2] && 
        board[0][0] != ' ') {
        winner = board[0][0];
    }
    
    // Check anti-diagonal
    if (board[0][2] == board[1][1] && 
        board[1][1] == board[2][0] && 
        board[0][2] != ' ') {
        winner = board[0][2];
    }
    
    printBoard(board);
    
    if (winner != ' ') {
        printf("🎉 Player %c WINS!\\n", winner);
    } else {
        printf("🤝 It's a DRAW or game continues!\\n");
    }
    
    return 0;
}`,
      output: 'Board displayed with X winning on main diagonal!'
    },

    // ========== TOPIC 2.8: Strings ==========
    {
      topic: '2.8',
      topicTitle: 'Character Arrays & Strings',
      type: 'concept',
      title: 'Working with Text in C',
      content: `Strings are arrays of characters ending with a special '\\0' character - like beads on a string!`,
      details: [
        'String = char array + null terminator (\\0)',
        'Declaration: char name[20]; for 19 chars + \\0',
        'Input: scanf("%s", name); or gets(name);',
        'Common functions: strlen, strcmp, strcpy, strcat',
        'Each character accessible via index'
      ],
      example: `char name[20] = "Alice";
// Stored as: 'A','l','i','c','e','\\0'

printf("Length: %d\\n", strlen(name));  // 5

// Character access
printf("First: %c\\n", name[0]);  // 'A'

// String comparison
if (strcmp(name, "Alice") == 0) {
    printf("Names match!\\n");
}`
    },
    {
      topic: '2.8',
      topicTitle: 'Character Arrays & Strings',
      type: 'question',
      title: '🔤 String Length Mystery',
      question: 'What is the value of len?',
      hint: 'strlen counts until \\0, not including it!',
      code: `char word[] = "Hello";
int len = strlen(word);
printf("%d", len);`,
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      explanation: `Let's see what's in memory:

word[] = {'H', 'e', 'l', 'l', 'o', '\\0'}
         [0]  [1]  [2]  [3]  [4]  [5]

strlen() counts characters UNTIL it hits \\0
It does NOT count the \\0 itself

H → 1
e → 2
l → 3
l → 4
o → 5
\\0 → STOP counting

Length = 5

Array size is 6, but string length is 5!`
    },
    {
      topic: '2.8',
      topicTitle: 'Character Arrays & Strings',
      type: 'question',
      title: '🎯 Vowel Counter Challenge',
      question: 'How many vowels are in "Programming"?',
      hint: 'Check each character: a, e, i, o, u',
      code: `char str[] = "Programming";
int vowels = 0;
for (int i = 0; str[i] != '\\0'; i++) {
    char ch = str[i];
    if (ch=='a' || ch=='e' || ch=='i' || 
        ch=='o' || ch=='u') {
        vowels++;
    }
}
printf("%d", vowels);`,
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
      explanation: `Let's check each character in "Programming":

P - consonant
r - consonant
o - VOWEL ✓ (1st)
g - consonant
r - consonant
a - VOWEL ✓ (2nd)
m - consonant
m - consonant
i - VOWEL ✓ (3rd)
n - consonant
g - consonant

Total vowels: 3 (o, a, i)

Note: We're only checking lowercase vowels here!`
    },
    {
      topic: '2.8',
      topicTitle: 'Character Arrays & Strings',
      type: 'practice',
      title: '🔐 Password Strength Checker',
      question: 'Create a program to check password strength: needs uppercase, lowercase, digit, and length >= 8',
      starter: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char password[50] = "Pass123";
    
    // Check password strength
    // Your code here
    
    return 0;
}`,
      solution: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char password[50] = "Pass123";
    int length = strlen(password);
    
    // Initialize flags
    int hasUpper = 0, hasLower = 0, hasDigit = 0;
    
    // Check each character
    for (int i = 0; i < length; i++) {
        if (isupper(password[i])) hasUpper = 1;
        if (islower(password[i])) hasLower = 1;
        if (isdigit(password[i])) hasDigit = 1;
    }
    
    // Calculate strength
    int score = 0;
    if (length >= 8) score++;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasDigit) score++;
    
    // Display results
    printf("🔐 Password Strength Checker\\n");
    printf("============================\\n");
    printf("Password: %s\\n\\n", password);
    
    printf("✓ Checks:\\n");
    printf("  Length >= 8: %s\\n", length >= 8 ? "✓" : "✗");
    printf("  Has uppercase: %s\\n", hasUpper ? "✓" : "✗");
    printf("  Has lowercase: %s\\n", hasLower ? "✓" : "✗");
    printf("  Has digit: %s\\n\\n", hasDigit ? "✓" : "✗");
    
    printf("Strength: ");
    if (score == 4) {
        printf("🟢 STRONG\\n");
    } else if (score >= 2) {
        printf("🟡 MEDIUM\\n");
    } else {
        printf("🔴 WEAK\\n");
    }
    
    return 0;
}`,
      output: '🔐 Password Strength Checker\n============================\nPassword: Pass123\n\nStrength: 🟡 MEDIUM'
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
                      <span className={darkMode ? 'text-green-400' : 'text-green-800'}>🎉 Correct! Well done!</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-5 h-5 text-orange-600" />
                      <span className={darkMode ? 'text-orange-400' : 'text-orange-800'}>Not quite! Let's learn why:</span>
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
                    Practice Problem
                  </h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{currentSlide.question}</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-white">Your Code</h4>
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
      {/* Progress Bar */}
      <div className={`rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-700/50' : 'bg-gray-300'}`}>
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Topic Badge */}
      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
        }`}>
          Topic {currentSlide.topic}: {currentSlide.topicTitle}
        </span>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Slide {currentSlideIndex + 1} of {slides.length}
        </span>
      </div>

      {/* Main Content */}
      <div className={`backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-white/5' : 'bg-white'
      }`}>
        <div className="p-8">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            {currentSlide.title}
          </h3>
          {renderSlideContent()}
        </div>

        {/* Navigation */}
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
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
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

export default Unit2;