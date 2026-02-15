import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, BookOpen, Trophy, Play, CheckCircle, XCircle, Lightbulb, Brain, Rocket } from 'lucide-react';

const Unit2LearningApp = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizFeedback, setShowQuizFeedback] = useState({});

  const topics = [
    {
      id: '2.1',
      title: 'Arithmetic Operators and Operator Precedence',
      icon: '➕',
      color: 'from-blue-500 to-cyan-500',
      slides: [
        {
          type: 'concept',
          title: 'What are Arithmetic Operators?',
          content: `Arithmetic operators are used to perform mathematical operations on numbers.`,
          details: [
            '+ (Addition): Adds two values',
            '- (Subtraction): Subtracts second value from first',
            '* (Multiplication): Multiplies two values',
            '/ (Division): Divides first value by second',
            '% (Modulus): Returns remainder of division'
          ],
          example: `int a = 10, b = 3;
int sum = a + b;        // 13
int diff = a - b;       // 7
int product = a * b;    // 30
int quotient = a / b;   // 3
int remainder = a % b;  // 1`
        },
        {
          type: 'concept',
          title: 'Operator Precedence',
          content: `When multiple operators appear in an expression, precedence determines the order of evaluation.`,
          details: [
            '1. Parentheses () - Highest priority',
            '2. Multiplication *, Division /, Modulus %',
            '3. Addition +, Subtraction - - Lowest priority',
            'Same precedence: Left to right evaluation'
          ],
          example: `int result1 = 5 + 3 * 2;      // 11 (not 16)
int result2 = (5 + 3) * 2;    // 16
int result3 = 10 / 2 * 3;     // 15
int result4 = 10 % 3 + 2 * 5; // 11`
        },
        {
          type: 'question',
          title: 'Challenge Question',
          question: 'What will be the output of this expression?',
          code: `int x = 15;
int y = 4;
int result = x % y + x / y * 2;
printf("%d", result);`,
          options: ['9', '10', '11', '12'],
          correctAnswer: 0,
          explanation: `Step by step:
x % y = 15 % 4 = 3
x / y = 15 / 4 = 3 (integer division)
3 * 2 = 6 (multiplication first)
3 + 6 = 9 (then addition)

Output: 9`
        },
        {
          type: 'practice',
          title: 'Hands-On Practice',
          question: 'Write a C program to calculate the result of: (a + b) * c - d / e',
          starter: `#include <stdio.h>

int main() {
    int a = 10, b = 5, c = 3, d = 20, e = 4;
    int result;
    
    // Write your code here
    
    printf("Result: %d\\n", result);
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int a = 10, b = 5, c = 3, d = 20, e = 4;
    int result;
    
    result = (a + b) * c - d / e;
    // Step by step:
    // (10 + 5) * 3 - 20 / 4
    // 15 * 3 - 5
    // 45 - 5 = 40
    
    printf("Result: %d\\n", result);
    return 0;
}`,
          output: 'Result: 40'
        }
      ]
    },
    {
      id: '2.2',
      title: 'Relational and Logical Operators',
      icon: '⚖️',
      color: 'from-purple-500 to-pink-500',
      slides: [
        {
          type: 'concept',
          title: 'Relational Operators',
          content: `Relational operators compare two values and return true (1) or false (0).`,
          details: [
            '== (Equal to): Checks if two values are equal',
            '!= (Not equal to): Checks if two values are different',
            '> (Greater than): Left value is larger',
            '< (Less than): Left value is smaller',
            '>= (Greater than or equal to)',
            '<= (Less than or equal to)'
          ],
          example: `int a = 5, b = 10;
printf("%d\\n", a == b);  // 0 (false)
printf("%d\\n", a != b);  // 1 (true)
printf("%d\\n", a < b);   // 1 (true)
printf("%d\\n", a > b);   // 0 (false)`
        },
        {
          type: 'concept',
          title: 'Logical Operators',
          content: `Logical operators combine multiple conditions.`,
          details: [
            '&& (AND): Both conditions must be true',
            '|| (OR): At least one condition must be true',
            '! (NOT): Reverses the boolean value'
          ],
          example: `int age = 20, hasLicense = 1;

if (age >= 18 && hasLicense) {
    printf("Can drive\\n");
}

if (age < 18 || !hasLicense) {
    printf("Cannot drive\\n");
}`
        },
        {
          type: 'question',
          title: 'Logic Challenge',
          question: 'What is the output?',
          code: `int x = 5, y = 10, z = 15;
if ((x < y) && (y < z) || (x > z)) {
    printf("TRUE");
} else {
    printf("FALSE");
}`,
          options: ['TRUE', 'FALSE', 'Compilation Error', 'Runtime Error'],
          correctAnswer: 0,
          explanation: `Step by step:
(x < y) = true
(y < z) = true
(x > z) = false
(true && true) || false = true

Output: TRUE`
        },
        {
          type: 'practice',
          title: 'Real-World Problem',
          question: 'Check if student passes: Math >= 40, Science >= 40, Average >= 50',
          starter: `#include <stdio.h>

int main() {
    int math = 45, science = 38, english = 60;
    float average;
    
    // Write your code here
    
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int math = 45, science = 38, english = 60;
    float average = (math + science + english) / 3.0;
    
    if (math >= 40 && science >= 40 && average >= 50) {
        printf("PASS\\n");
    } else {
        printf("FAIL\\n");
        if (math < 40) printf("Math below 40\\n");
        if (science < 40) printf("Science below 40\\n");
        if (average < 50) printf("Avg below 50\\n");
    }
    return 0;
}`,
          output: 'FAIL\nScience below 40\nAvg below 50'
        }
      ]
    },
    {
      id: '2.3',
      title: 'Conditional Statements',
      icon: '🔀',
      color: 'from-green-500 to-teal-500',
      slides: [
        {
          type: 'concept',
          title: 'if Statement',
          content: `The if statement executes code only when a condition is true.`,
          details: [
            'Syntax: if (condition) { /* code */ }',
            'Condition must be in parentheses',
            'Code block in curly braces',
            'Executes only when condition is true'
          ],
          example: `int age = 20;

if (age >= 18) {
    printf("You are an adult\\n");
}`
        },
        {
          type: 'concept',
          title: 'if-else Statement',
          content: `if-else provides an alternative path when condition is false.`,
          details: [
            'Syntax: if (condition) { } else { }',
            'Exactly one block executes',
            'else executes when if condition is false'
          ],
          example: `int marks = 75;

if (marks >= 50) {
    printf("Pass\\n");
} else {
    printf("Fail\\n");
}`
        },
        {
          type: 'concept',
          title: 'else-if Ladder',
          content: `Multiple conditions checked using chained if-else.`,
          details: [
            'else-if: Chain multiple conditions',
            'Conditions checked top to bottom',
            'First true condition executes'
          ],
          example: `int marks = 85;

if (marks >= 90) {
    printf("Grade: A+\\n");
} else if (marks >= 80) {
    printf("Grade: A\\n");
} else if (marks >= 70) {
    printf("Grade: B\\n");
} else {
    printf("Grade: F\\n");
}`
        },
        {
          type: 'question',
          title: 'Quick Quiz',
          question: 'What will be printed?',
          code: `int num = 15;
if (num > 10)
    if (num < 20)
        printf("A");
    else
        printf("B");
else
    printf("C");`,
          options: ['A', 'B', 'C', 'Nothing'],
          correctAnswer: 0,
          explanation: `num > 10: true
num < 20: true
Output: A`
        },
        {
          type: 'practice',
          title: 'Tax Calculator',
          question: 'Calculate tax: 0% if ≤2.5L, 5% if ≤5L, 20% if ≤10L, 30% if >10L',
          starter: `#include <stdio.h>

int main() {
    float income = 6.5;
    float tax = 0;
    
    // Write tax calculation
    
    printf("Tax: %.2f\\n", tax);
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    float income = 6.5;
    float tax = 0;
    
    if (income <= 2.5) {
        tax = 0;
    } else if (income <= 5) {
        tax = (income - 2.5) * 0.05;
    } else if (income <= 10) {
        tax = (2.5 * 0.05) + (income - 5) * 0.20;
    } else {
        tax = (2.5*0.05) + (5*0.20) + (income-10)*0.30;
    }
    
    printf("Tax: %.2f lakhs\\n", tax);
    return 0;
}`,
          output: 'Tax: 0.43 lakhs'
        }
      ]
    },
    {
      id: '2.4',
      title: 'Looping Constructs',
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
      slides: [
        {
          type: 'concept',
          title: 'for Loop',
          content: `The for loop repeats code a specific number of times.`,
          details: [
            'Syntax: for (init; condition; increment)',
            'Best when iterations are known',
            'All three parts are optional'
          ],
          example: `for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5`
        },
        {
          type: 'concept',
          title: 'while Loop',
          content: `The while loop repeats while a condition is true.`,
          details: [
            'Syntax: while (condition) { }',
            'Condition checked before each iteration',
            'May not execute at all'
          ],
          example: `int count = 1;
while (count <= 5) {
    printf("%d ", count);
    count++;
}`
        },
        {
          type: 'concept',
          title: 'do-while Loop',
          content: `Executes at least once, then checks condition.`,
          details: [
            'Syntax: do { } while (condition);',
            'Condition checked after execution',
            'Always executes at least once'
          ],
          example: `int num = 12345;
do {
    printf("%d ", num % 10);
    num = num / 10;
} while (num > 0);`
        },
        {
          type: 'question',
          title: 'Loop Challenge',
          question: 'How many iterations?',
          code: `int i = 1;
while (i <= 10) {
    if (i % 3 == 0) i += 2;
    else i += 1;
}`,
          options: ['7', '8', '9', '10'],
          correctAnswer: 1,
          explanation: `i=1→2→3→5→6→8→9→11
Total: 8 iterations`
        },
        {
          type: 'practice',
          title: 'Pattern Printing',
          question: 'Print a right-angled triangle with *',
          starter: `#include <stdio.h>

int main() {
    int height = 5;
    
    // Write code here
    
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int height = 5;
    
    for (int i = 1; i <= height; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`,
          output: '*\n* *\n* * *\n* * * *\n* * * * *'
        }
      ]
    },
    {
      id: '2.5',
      title: 'Break and Continue',
      icon: '⏯️',
      color: 'from-indigo-500 to-purple-500',
      slides: [
        {
          type: 'concept',
          title: 'break Statement',
          content: `Immediately exits the innermost loop.`,
          details: [
            'Exits loop immediately',
            'Works with for, while, do-while',
            'Only exits innermost loop'
          ],
          example: `for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        printf("%d\\n", i);
        break;  // Exit loop
    }
}`
        },
        {
          type: 'concept',
          title: 'continue Statement',
          content: `Skips current iteration, moves to next.`,
          details: [
            'Skips rest of current iteration',
            'Loop continues with next iteration',
            'Condition is re-evaluated'
          ],
          example: `for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);
}
// Output: 1 3 5 7 9`
        },
        {
          type: 'concept',
          title: 'break vs continue',
          content: `Understanding the difference.`,
          details: [
            'break: Terminates loop entirely',
            'continue: Skips to next iteration',
            'break: Control goes outside loop',
            'continue: Control stays in loop'
          ],
          example: `// break: 1 2
for (int i=1; i<=5; i++) {
    if (i==3) break;
    printf("%d ", i);
}

// continue: 1 2 4 5
for (int i=1; i<=5; i++) {
    if (i==3) continue;
    printf("%d ", i);
}`
        },
        {
          type: 'question',
          title: 'Control Flow',
          question: 'What is the output?',
          code: `int count = 0;
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    count++;
}
printf("%d", count);`,
          options: ['3', '4', '5', '7'],
          correctAnswer: 1,
          explanation: `i=1: odd, ≤7, count=1
i=3: odd, ≤7, count=2
i=5: odd, ≤7, count=3
i=7: odd, ≤7, count=4
i=9: odd, >7, break
Output: 4`
        },
        {
          type: 'practice',
          title: 'Prime Checker',
          question: 'Check if a number is prime using break',
          starter: `#include <stdio.h>

int main() {
    int num = 29;
    int isPrime = 1;
    
    // Write code here
    
    printf("%d is %s\\n", num, isPrime ? "prime" : "not prime");
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int num = 29;
    int isPrime = 1;
    
    if (num <= 1) isPrime = 0;
    else {
        for (int i = 2; i*i <= num; i++) {
            if (num % i == 0) {
                isPrime = 0;
                break;
            }
        }
    }
    
    printf("%d is %s\\n", num, isPrime ? "prime" : "not prime");
    return 0;
}`,
          output: '29 is prime'
        }
      ]
    },
    {
      id: '2.6',
      title: 'One-Dimensional Arrays',
      icon: '📊',
      color: 'from-yellow-500 to-orange-500',
      slides: [
        {
          type: 'concept',
          title: 'What is an Array?',
          content: `Collection of elements of same type in contiguous memory.`,
          details: [
            'Fixed size collection',
            'Same data type for all elements',
            'Zero-based indexing',
            'Fast access using index'
          ],
          example: `int marks[5];
int scores[5] = {85, 90, 78, 92, 88};
int nums[5] = {1, 2};  // Rest are 0
int ages[] = {20, 21, 19};  // Size is 3`
        },
        {
          type: 'concept',
          title: 'Accessing Elements',
          content: `Use index in square brackets.`,
          details: [
            'Syntax: arrayName[index]',
            'Index starts from 0',
            'Last index is size-1'
          ],
          example: `int marks[5] = {85, 90, 78, 92, 88};
printf("%d\\n", marks[0]);  // 85
marks[2] = 95;  // Modify

for (int i = 0; i < 5; i++) {
    printf("%d ", marks[i]);
}`
        },
        {
          type: 'concept',
          title: 'Array Operations',
          content: `Common operations on arrays.`,
          details: [
            'Traversal: Visit each element',
            'Sum/Average: Aggregate operations',
            'Max/Min: Finding extremes',
            'Search: Find specific element'
          ],
          example: `int arr[5] = {10, 25, 8, 30, 15};
int sum = 0, max = arr[0];

for (int i = 0; i < 5; i++) {
    sum += arr[i];
    if (arr[i] > max) max = arr[i];
}`
        },
        {
          type: 'question',
          title: 'Array Quiz',
          question: 'What gets printed?',
          code: `int arr[6] = {2, 4, 6, 8, 10, 12};
int sum = 0;
for (int i = 0; i < 6; i += 2) {
    sum += arr[i];
}
printf("%d", sum);`,
          options: ['18', '20', '24', '42'],
          correctAnswer: 0,
          explanation: `i=0: sum=2
i=2: sum=8
i=4: sum=18
Output: 18`
        },
        {
          type: 'practice',
          title: 'Array Reversal',
          question: 'Reverse an array in-place',
          starter: `#include <stdio.h>

int main() {
    int arr[6] = {1, 2, 3, 4, 5, 6};
    int n = 6;
    
    // Write reversal code
    
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int arr[6] = {1, 2, 3, 4, 5, 6};
    int n = 6;
    
    int left = 0, right = n - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    return 0;
}`,
          output: '6 5 4 3 2 1'
        }
      ]
    },
    {
      id: '2.7',
      title: 'Two-Dimensional Arrays',
      icon: '📐',
      color: 'from-pink-500 to-rose-500',
      slides: [
        {
          type: 'concept',
          title: 'What is a 2D Array?',
          content: `Array of arrays, representing rows and columns.`,
          details: [
            'Matrix-like structure',
            'Declaration: type name[rows][cols]',
            'Access: array[row][column]',
            'Both indices start from 0'
          ],
          example: `int matrix[3][4];
int mat[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};`
        },
        {
          type: 'concept',
          title: 'Accessing 2D Elements',
          content: `Use two indices: row and column.`,
          details: [
            'Syntax: array[row][column]',
            'Use nested loops for traversal'
          ],
          example: `int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

printf("%d\\n", mat[1][2]);  // 6

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", mat[i][j]);
    }
    printf("\\n");
}`
        },
        {
          type: 'concept',
          title: 'Matrix Operations',
          content: `Addition, multiplication, transpose.`,
          details: [
            'Addition: Add corresponding elements',
            'Transpose: Swap rows and columns',
            'Diagonal: Elements where i == j'
          ],
          example: `int A[2][2] = {{1,2},{3,4}};
int B[2][2] = {{5,6},{7,8}};
int C[2][2];

for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
        C[i][j] = A[i][j] + B[i][j];`
        },
        {
          type: 'question',
          title: '2D Array Challenge',
          question: 'What is printed?',
          code: `int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
int sum = 0;
for (int i = 0; i < 3; i++)
    sum += mat[i][2-i];
printf("%d", sum);`,
          options: ['12', '15', '18', '21'],
          correctAnswer: 1,
          explanation: `Anti-diagonal:
i=0: mat[0][2]=3
i=1: mat[1][1]=5
i=2: mat[2][0]=7
Sum: 15`
        },
        {
          type: 'practice',
          title: 'Matrix Transpose',
          question: 'Find transpose of 3×3 matrix',
          starter: `#include <stdio.h>

int main() {
    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int trans[3][3];
    
    // Write transpose code
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
            printf("%d ", trans[i][j]);
        printf("\\n");
    }
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int trans[3][3];
    
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            trans[j][i] = mat[i][j];
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
            printf("%d ", trans[i][j]);
        printf("\\n");
    }
    return 0;
}`,
          output: '1 4 7\n2 5 8\n3 6 9'
        }
      ]
    },
    {
      id: '2.8',
      title: 'Character Arrays and Strings',
      icon: '📝',
      color: 'from-teal-500 to-green-500',
      slides: [
        {
          type: 'concept',
          title: 'Character Arrays',
          content: `Arrays that store sequences of characters.`,
          details: [
            'Array of char type',
            'Each element stores one character',
            'Accessed like regular arrays'
          ],
          example: `char letters[5] = {'H','e','l','l','o'};

for (int i = 0; i < 5; i++)
    printf("%c", letters[i]);`
        },
        {
          type: 'concept',
          title: 'Strings in C',
          content: `Null-terminated character arrays.`,
          details: [
            'String ends with \\0 (null)',
            'Extra space needed for \\0',
            'Use %s format specifier'
          ],
          example: `char name[6] = "Hello";  // H e l l o \\0
char city[] = "Delhi";

printf("Enter: ");
scanf("%s", str);  // No & needed
printf("Hello, %s\\n", str);`
        },
        {
          type: 'concept',
          title: 'String Functions',
          content: `Library functions for string operations.`,
          details: [
            'strlen(): Find length',
            'strcpy(): Copy string',
            'strcat(): Concatenate',
            'strcmp(): Compare strings'
          ],
          example: `#include <string.h>

char s1[20] = "Hello";
char s2[20] = "World";

int len = strlen(s1);  // 5
strcpy(s1, "Hi");
strcat(s1, s2);  // "HiWorld"
int cmp = strcmp(s1, s2);`
        },
        {
          type: 'question',
          title: 'String Logic',
          question: 'What is the output?',
          code: `char str[] = "Programming";
int count = 0;
for (int i = 0; str[i] != '\\0'; i++) {
    if (str[i]=='a'||str[i]=='e'||
        str[i]=='i'||str[i]=='o'||str[i]=='u')
        count++;
}
printf("%d", count);`,
          options: ['2', '3', '4', '5'],
          correctAnswer: 1,
          explanation: `Vowels in "Programming":
o, a, i = 3 vowels
Output: 3`
        },
        {
          type: 'practice',
          title: 'String Reversal',
          question: 'Reverse a string without library functions',
          starter: `#include <stdio.h>

int main() {
    char str[100] = "Hello World";
    
    // Write reversal code
    
    printf("Reversed: %s\\n", str);
    return 0;
}`,
          solution: `#include <stdio.h>

int main() {
    char str[100] = "Hello World";
    int len = 0;
    
    while (str[len] != '\\0') len++;
    
    int left = 0, right = len - 1;
    while (left < right) {
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    
    printf("Reversed: %s\\n", str);
    return 0;
}`,
          output: 'Reversed: dlroW olleH'
        }
      ]
    }
  ];

  const currentTopic = topics[currentTopicIndex];
  const currentSlide = currentTopic.slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < currentTopic.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setShowSolution(false);
    } else if (currentTopicIndex < topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      setCurrentSlideIndex(0);
      setShowSolution(false);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setShowSolution(false);
    } else if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      setCurrentSlideIndex(topics[currentTopicIndex - 1].slides.length - 1);
      setShowSolution(false);
    }
  };

  const handleQuizAnswer = (slideIndex, answerIndex) => {
    const key = `${currentTopicIndex}-${slideIndex}`;
    setQuizAnswers({ ...quizAnswers, [key]: answerIndex });
    setShowQuizFeedback({ ...showQuizFeedback, [key]: true });
  };

  const getQuizFeedback = (slideIndex) => {
    const key = `${currentTopicIndex}-${slideIndex}`;
    if (!showQuizFeedback[key]) return null;
    return quizAnswers[key] === currentSlide.correctAnswer ? 'correct' : 'incorrect';
  };

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'concept':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 leading-relaxed">{currentSlide.content}</p>
            </div>
            {currentSlide.details && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Key Points
                </h4>
                <ul className="space-y-2">
                  {currentSlide.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {currentSlide.example && (
              <div className="bg-gray-900 p-6 rounded-lg">
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
        const feedback = getQuizFeedback(currentSlideIndex);
        const key = `${currentTopicIndex}-${currentSlideIndex}`;
        const userAnswer = quizAnswers[key];
        
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600 mt-1" />
                <h4 className="font-semibold text-gray-800 mb-2">{currentSlide.question}</h4>
              </div>
              {currentSlide.code && (
                <div className="bg-gray-900 p-4 rounded-lg mt-4">
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
                let bgColor = 'bg-white hover:bg-gray-50';
                if (feedback) {
                  if (isCorrect) bgColor = 'bg-green-100 border-green-500';
                  else if (isSelected) bgColor = 'bg-red-100 border-red-500';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(currentSlideIndex, idx)}
                    disabled={feedback !== null}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${bgColor} ${
                      isSelected ? 'border-blue-500' : 'border-gray-200'
                    } disabled:cursor-not-allowed flex items-center gap-3`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="flex-1 text-gray-800">{option}</span>
                    {feedback && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {feedback && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </button>
                );
              })}
            </div>
            {feedback && (
              <div className={`p-6 rounded-lg ${
                feedback === 'correct' ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
              }`}>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  {feedback === 'correct' ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800">Correct!</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-5 h-5 text-orange-600" />
                      <span className="text-orange-800">Not quite. Here's why:</span>
                    </>
                  )}
                </h4>
                <p className="text-gray-700 whitespace-pre-line">{currentSlide.explanation}</p>
              </div>
            )}
          </div>
        );
        
      case 'practice':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Practice Problem</h4>
                  <p className="text-gray-700">{currentSlide.question}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
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
              <div className="bg-gray-800 p-4 rounded-lg">
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

  const progress = ((currentTopicIndex * 100) / topics.length) + 
                   ((currentSlideIndex * 100) / (topics.length * currentTopic.slides.length));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-blue-400" />
                Unit 2: C Programming Fundamentals
              </h1>
              <p className="text-gray-400 text-sm mt-1">Interactive Learning Platform</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Progress</div>
                <div className="text-lg font-bold text-white">{Math.round(progress)}%</div>
              </div>
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="mt-4 bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sticky top-8">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />Topics
              </h3>
              <div className="space-y-2">
                {topics.map((topic, idx) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setCurrentTopicIndex(idx);
                      setCurrentSlideIndex(0);
                      setShowSolution(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentTopicIndex === idx
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{topic.icon}</span>
                      <span className="text-xs font-semibold">{topic.id}</span>
                    </div>
                    <div className="text-sm">{topic.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
              <div className={`bg-gradient-to-r ${currentTopic.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{currentTopic.icon}</span>
                  <div>
                    <div className="text-sm opacity-90">{currentTopic.id}</div>
                    <h2 className="text-2xl font-bold">{currentTopic.title}</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  {currentTopic.slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-full transition-all ${
                        idx === currentSlideIndex ? 'bg-white' : idx < currentSlideIndex ? 'bg-white/60' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentSlide.title}</h3>
                {renderSlideContent()}
              </div>

              <div className="px-8 pb-8">
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <button
                    onClick={prevSlide}
                    disabled={currentTopicIndex === 0 && currentSlideIndex === 0}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <div className="text-sm text-gray-600">
                    Slide {currentSlideIndex + 1} of {currentTopic.slides.length}
                  </div>
                  <button
                    onClick={nextSlide}
                    disabled={currentTopicIndex === topics.length - 1 && currentSlideIndex === currentTopic.slides.length - 1}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit2LearningApp;