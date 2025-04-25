
const questions = [
  {
    question: "Which of the following is NOT a primitive data type in most programming languages?",
    options: ["Integer", "Float", "Boolean", "Array"],
    answer: "Array",
  },
  {
    question: "What does the acronym CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Core Processing Unit",
      "Central Processor Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack",
  },
  {
    question: "What is the time complexity of searching for an element in a sorted array using binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which of the following is a key principle of Object-Oriented Programming (OOP)?",
    options: ["Procedural decomposition", "Functional programming", "Encapsulation", "Global variables"],
    answer: "Encapsulation",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Standard Query Logic",
      "Structured Question Logic",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "Which of the following is NOT a type of network topology?",
    options: ["Bus", "Star", "Ring", "Pyramid"],
    answer: "Pyramid",
  },
  {
    question: "What is the primary goal of cryptography?",
    options: [
      "To compress data",
      "To secure communication",
      "To improve network speed",
      "To detect hardware failures",
    ],
    answer: "To secure communication",
  },
  {
    question: "In software engineering, what does SDLC stand for?",
    options: [
      "Software Development Life Cycle",
      "System Design Life Cycle",
      "Software Deployment Life Cycle",
      "System Development Logic Cycle",
    ],
    answer: "Software Development Life Cycle",
  },
  {
    question: "Which of the following is a type of operating system?",
    options: ["Microsoft Word", "Google Chrome", "Linux", "Adobe Photoshop"],
    answer: "Linux",
  },
  {
    question: "What is the fundamental unit of data storage in a computer?",
    options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
    answer: "Bit",
  },
  {
    question: "Which programming paradigm focuses on functions as first-class citizens?",
    options: ["Imperative Programming", "Object-Oriented Programming", "Functional Programming", "Procedural Programming"],
    answer: "Functional Programming",
  },
  {
    question: "What is the purpose of a primary key in a database table?",
    options: [
      "To link to other tables",
      "To uniquely identify each record",
      "To sort the data",
      "To define data types",
    ],
    answer: "To uniquely identify each record",
  },
  {
    question: "Which layer of the OSI model is responsible for routing packets across networks?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answer: "Network Layer",
  },
  {
    question: "What is a common technique used to protect against unauthorized access to a computer system?",
    options: ["Data compression", "Firewall", "Defragmentation", "Disk cleanup"],
    answer: "Firewall",
  },
  {
    question: "In software testing, what is black-box testing?",
    options: [
      "Testing the internal structure of the software",
      "Testing the user interface without knowing the internal code",
      "Testing with incomplete information",
      "Testing only the error handling mechanisms",
    ],
    answer: "Testing the user interface without knowing the internal code",
  },
  {
    question: "What is the role of the operating system kernel?",
    options: [
      "To manage user applications",
      "To provide a user interface",
      "To manage hardware resources",
      "To run web browsers",
    ],
    answer: "To manage hardware resources",
  },
  {
    question: "Which of the following is a type of memory that is volatile?",
    options: ["ROM", "RAM", "Hard Disk", "SSD"],
    answer: "RAM",
  },
  {
    question: "What is the process of converting source code into machine code called?",
    options: ["Interpreting", "Compiling", "Debugging", "Executing"],
    answer: "Compiling",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "The primary key of another table",
      "A key that is not unique",
      "A key used for sorting",
      "The main identifier of a table",
    ],
    answer: "The primary key of another table",
  },
  {
    question: "Which protocol is commonly used for sending emails?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: "SMTP",
  },
  {
    question: "What is a common security threat where an attacker tries to trick someone into revealing sensitive information?",
    options: ["Malware", "Phishing", "Denial of Service", "Spyware"],
    answer: "Phishing",
  },
  {
    question: "In software development, what is version control used for?",
    options: [
      "To design the user interface",
      "To manage changes to the codebase",
      "To test the software",
      "To deploy the software",
    ],
    answer: "To manage changes to the codebase",
  },
  {
    question: "What is the purpose of a device driver?",
    options: [
      "To run applications",
      "To manage files",
      "To enable communication between the OS and hardware",
      "To connect to the internet",
    ],
    answer: "To enable communication between the OS and hardware",
  },
  {
    question: "Which of the following is a non-linear data structure?",
    options: ["Array", "Linked List", "Queue", "Tree"],
    answer: "Tree",
  },
  {
    question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    options: [
      "The ability of an object to take on many forms",
      "The ability to hide the implementation details",
      "The mechanism of inheriting properties from a parent class",
      "The process of creating objects",
    ],
    answer: "The ability of an object to take on many forms",
  },
  {
    question: "What is the purpose of the WHERE clause in an SQL query?",
    options: [
      "To specify the tables to retrieve data from",
      "To filter the rows based on a condition",
      "To sort the results",
      "To group the results",
    ],
    answer: "To filter the rows based on a condition",
  },
  {
    question: "What is the function of a router in a computer network?",
    options: [
      "To connect devices within a local network",
      "To forward data packets between networks",
      "To provide internet access to a single device",
      "To amplify network signals",
    ],
    answer: "To forward data packets between networks",
  },
  {
    question: "What is a common method for ensuring data integrity?",
    options: ["Data encryption", "Data compression", "Data backup", "Data normalization"],
    answer: "Data backup",
  },
  {
    question: "In agile software development, what are sprints?",
    options: [
      "Long-term planning phases",
      "Short, time-boxed iterations",
      "The final deployment stage",
      "The initial requirement gathering phase",
    ],
    answer: "Short, time-boxed iterations",
  },
  {
    question: "What is the role of the BIOS in a computer system?",
    options: [
      "To load the operating system",
      "To run user applications",
      "To manage files and folders",
      "To provide internet connectivity",
    ],
    answer: "To load the operating system",
  },
  {
    question: "Which type of memory is primarily used for cache?",
    options: ["RAM", "ROM", "SSD", "SRAM"],
    answer: "SRAM",
  },
  {
    question: "What is the output of the following Python code: `print(2 + 3 * 4)`?",
    options: ["20", "14", "12", "9"],
    answer: "14",
  },
  {
    question: "What is the purpose of indexing in a database?",
    options: [
      "To enforce data integrity",
      "To speed up data retrieval",
      "To organize data physically on disk",
      "To define relationships between tables",
    ],
    answer: "To speed up data retrieval",
  },
  {
    question: "Which of the following is a stateless protocol?",
    options: ["TCP", "FTP", "HTTP", "SMTP"],
    answer: "HTTP",
  },
  {
    question: "What is a denial-of-service (DoS) attack?",
    options: [
      "An attempt to steal sensitive information",
      "An attempt to disrupt network services",
      "An attempt to install malware",
      "An attempt to gain unauthorized access",
    ],
    answer: "An attempt to disrupt network services",
  },
  {
    question: "What is refactoring in software development?",
    options: [
      "Adding new features to the software",
      "Fixing bugs in the software",
      "Restructuring existing code without changing its external behavior",
      "Writing the initial code for the software",
    ],
    answer: "Restructuring existing code without changing its external behavior",
  },
  {
    question: "What is the function of a compiler?",
    options: [
      "To execute code line by line",
      "To translate high-level code into machine code",
      "To manage computer hardware",
      "To provide a user interface",
    ],
    answer: "To translate high-level code into machine code",
  },
  {
    question: "What is a balanced binary search tree?",
    options: [
      "A binary tree where all nodes have two children",
      "A binary tree where the height of the left and right subtrees of any node differ by at most one",
      "A binary tree where all leaf nodes are at the same level",
      "A binary tree where the values in the left subtree are greater than the root and values in the right subtree are smaller",
    ],
    answer: "A binary tree where the height of the left and right subtrees of any node differ by at most one",
  },
  {
    question: "What is inheritance in object-oriented programming?",
    options: [
      "The ability of an object to take on many forms",
      "The ability to hide the implementation details",
      "The mechanism of deriving new classes from existing ones",
      "The process of creating objects",
    ],
    answer: "The mechanism of deriving new classes from existing ones",
  },
  {
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    answer: "SELECT",
  },
  {
    question: "What is the purpose of a subnet mask in computer networking?",
    options: [
      "To identify the network portion of an IP address",
      "To encrypt network traffic",
      "To prevent network collisions",
      "To assign IP addresses automatically",
    ],
    answer: "To identify the network portion of an IP address",
  },
  {
    question: "What is a common way to prevent SQL injection attacks?",
    options: [
      "Using strong passwords",
      "Validating user inputs",
      "Encrypting database connections",
      "Disabling error messages",
    ],
    answer: "Validating user inputs",
  },
  {
    question: "What is continuous integration in DevOps?",
    options: [
      "Continuously deploying software to production",
      "Continuously monitoring the performance of software",
      "Frequently merging code changes into a central repository",
      "Continuously gathering user feedback",
    ],
    answer: "Frequently merging code changes into a central repository",
  },
  {
    question: "What is the role of the linker in the compilation process?",
    options: [
      "To check for syntax errors",
      "To translate source code to object code",
      "To combine object files into an executable program",
      "To execute the program",
    ],
    answer: "To combine object files into an executable program",
  },
  {
    question: "Which of the following is a type of graph traversal algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Depth-First Search", "Binary Search"],
    answer: "Depth-First Search",
  },
  {
    question: "What is abstraction in object-oriented programming?",
    options: [
      "Showing only essential information and hiding complex details",
      "The ability of an object to take on many forms",
      "The mechanism of inheriting properties from a parent class",
      "The process of creating objects",
    ],
    answer: "Showing only essential information and hiding complex details",
  },
  {
    question: "Which SQL keyword is used to sort the result set of a query?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "JOIN"],
    answer: "ORDER BY",
  },
  {
    question: "What is the purpose of the TCP/IP model?",
    options: [
      "To define the physical connections between computers",
      "To provide a framework for network communication",
      "To manage network hardware",
      "To secure network traffic",
    ],
    answer: "To provide a framework for network communication",
  },
  {
    question: "What is a common method for authenticating users?",
    options: ["Data backup", "Firewall", "Password", "Data compression"],
    answer: "Password",
  },
  {
    question: "What is unit testing in software development?",
    options: [
      "Testing the entire application",
      "Testing individual components of the software",
      "Testing the integration of different modules",
      "Testing the user interface",
    ],
    answer: "Testing individual components of the software",
  },
  {
    question: "What is the function of the ALU in a CPU?",
    options: [
      "To fetch instructions from memory",
      "To decode instructions",
      "To perform arithmetic and logical operations",
      "To store data and instructions",
    ],
    answer: "To perform arithmetic and logical operations",
  },
  {
    question: "Which of the following is a form of non-volatile memory?",
    options: ["SRAM", "DRAM", "ROM", "Cache"],
    answer: "ROM",
  },
  {
    question: "What is the output of the following Python code: `print(5 // 2)`?",
    options: ["2.5", "2", "3", "2.0"],
    answer: "2",
  },
  {
    question: "What is a database transaction?",
    options: [
      "A single SQL query",
      "A sequence of operations treated as a single logical unit of work",
      "A backup of the database",
      "A report generated from the database",
    ],
    answer: "A sequence of operations treated as a single logical unit of work",
  },
  {
    question: "Which protocol is used for transferring files over the internet?",
    options: ["HTTP", "SMTP", "FTP", "DNS"],
    answer: "FTP",
  },
  {
    question: "What is a VPN (Virtual Private Network)?",
    options: [
      "A physical network that is not accessible to the public",
      "A technology that creates a secure connection over a public network",
      "A type of network hardware",
      "A software used for network monitoring",
    ],
    answer: "A technology that creates a secure connection over a public network",
  },
  {
    question: "What is the purpose of code comments?",
    options: [
      "To make the code run faster",
      "To explain the code to humans",
      "To hide parts of the code",
      "To generate documentation automatically",
    ],
    answer: "To explain the code to humans",
  },
  {
    question: "What is the role of the program counter in a CPU?",
    options: [
      "To store the current instruction being executed",
      "To store the address of the next instruction to be executed",
      "To perform arithmetic operations",
      "To manage memory addresses",
    ],
    answer: "To store the address of the next instruction to be executed;",
  },
  {
    question: "Which of the following is NOT a primitive data type in most programming languages?",
    options: ["Integer", "Float", "Boolean", "Array"],
    answer: "Array",
  },
  {
    question: "What does the acronym CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Core Processing Unit",
      "Central Processor Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack",
  },
  {
    question: "What is the time complexity of searching for an element in a sorted array using binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which of the following is a key principle of Object-Oriented Programming (OOP)?",
    options: ["Procedural decomposition", "Functional programming", "Encapsulation", "Global variables"],
    answer: "Encapsulation",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Standard Query Logic",
      "Structured Question Logic",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "Which of the following is NOT a type of network topology?",
    options: ["Bus", "Star", "Ring", "Pyramid"],
    answer: "Pyramid",
  },
  {
    question: "What is the primary goal of cryptography?",
    options: [
      "To compress data",
      "To secure communication",
      "To improve network speed",
      "To detect hardware failures",
    ],
    answer: "To secure communication",
  },
  {
    question: "In software engineering, what does SDLC stand for?",
    options: [
      "Software Development Life Cycle",
      "System Design Life Cycle",
      "Software Deployment Life Cycle",
      "System Development Logic Cycle",
    ],
    answer: "Software Development Life Cycle",
  },
  {
    question: "Which of the following is a type of operating system?",
    options: ["Microsoft Word", "Google Chrome", "Linux", "Adobe Photoshop"],
    answer: "Linux",
  },
  {
    question: "What is the fundamental unit of data storage in a computer?",
    options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
    answer: "Bit",
  },
  {
    question: "Which programming paradigm focuses on functions as first-class citizens?",
    options: ["Imperative Programming", "Object-Oriented Programming", "Functional Programming", "Procedural Programming"],
    answer: "Functional Programming",
  },
  {
    question: "What is the purpose of a primary key in a database table?",
    options: [
      "To link to other tables",
      "To uniquely identify each record",
      "To sort the data",
      "To define data types",
    ],
    answer: "To uniquely identify each record",
  },
  {
    question: "Which layer of the OSI model is responsible for routing packets across networks?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answer: "Network Layer",
  },
  {
    question: "What is a common technique used to protect against unauthorized access to a computer system?",
    options: ["Data compression", "Firewall", "Defragmentation", "Disk cleanup"],
    answer: "Firewall",
  },
  {
    question: "In software testing, what is black-box testing?",
    options: [
      "Testing the internal structure of the software",
      "Testing the user interface without knowing the internal code",
      "Testing with incomplete information",
      "Testing only the error handling mechanisms",
    ],
    answer: "Testing the user interface without knowing the internal code",
  },
  {
    question: "What is the role of the operating system kernel?",
    options: [
      "To manage user applications",
      "To provide a user interface",
      "To manage hardware resources",
      "To run web browsers",
    ],
    answer: "To manage hardware resources",
  },
  {
    question: "Which of the following is a type of memory that is volatile?",
    options: ["ROM", "RAM", "Hard Disk", "SSD"],
    answer: "RAM",
  },
  {
    question: "What is the process of converting source code into machine code called?",
    options: ["Interpreting", "Compiling", "Debugging", "Executing"],
    answer: "Compiling",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "The primary key of another table",
      "A key that is not unique",
      "A key used for sorting",
      "The main identifier of a table",
    ],
    answer: "The primary key of another table",
  },
  {
    question: "Which protocol is commonly used for sending emails?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: "SMTP",
  },
  {
    question: "What is a common security threat where an attacker tries to trick someone into revealing sensitive information?",
    options: ["Malware", "Phishing", "Denial of Service", "Spyware"],
    answer: "Phishing",
  },
  {
    question: "In software development, what is version control used for?",
    options: [
      "To design the user interface",
      "To manage changes to the codebase",
      "To test the software",
      "To deploy the software",
    ],
    answer: "To manage changes to the codebase",
  },
  {
    question: "What is the purpose of a device driver?",
    options: [
      "To run applications",
      "To manage files",
      "To enable communication between the OS and hardware",
      "To connect to the internet",
    ],
    answer: "To enable communication between the OS and hardware",
  },
  {
    question: "Which of the following is a non-linear data structure?",
    options: ["Array", "Linked List", "Queue", "Tree"],
    answer: "Tree",
  },
  {
    question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    options: [
      "The ability of an object to take on many forms",
      "The ability to hide the implementation details",
      "The mechanism of inheriting properties from a parent class",
      "The process of creating objects",
    ],
    answer: "The ability of an object to take on many forms",
  },
  {
    question: "What is the purpose of the WHERE clause in an SQL query?",
    options: [
      "To specify the tables to retrieve data from",
      "To filter the rows based on a condition",
      "To sort the results",
      "To group the results",
    ],
    answer: "To filter the rows based on a condition",
  },
  {
    question: "What is the function of a router in a computer network?",
    options: [
      "To connect devices within a local network",
      "To forward data packets between networks",
      "To provide internet access to a single device",
      "To amplify network signals",
    ],
    answer: "To forward data packets between networks",
  },
  {
    question: "What is a common method for ensuring data integrity?",
    options: ["Data encryption", "Data compression", "Data backup", "Data normalization"],
    answer: "Data backup",
  },
  {
    question: "In agile software development, what are sprints?",
    options: [
      "Long-term planning phases",
      "Short, time-boxed iterations",
      "The final deployment stage",
      "The initial requirement gathering phase",
    ],
    answer: "Short, time-boxed iterations",
  },
  {
    question: "What is the role of the BIOS in a computer system?",
    options: [
      "To load the operating system",
      "To run user applications",
      "To manage files and folders",
      "To provide internet connectivity",
    ],
    answer: "To load the operating system",
  },
  {
    question: "Which type of memory is primarily used for cache?",
    options: ["RAM", "ROM", "SSD", "SRAM"],
    answer: "SRAM",
  },
  {
    question: "What is the output of the following Python code: `print(2 + 3 * 4)`?",
    options: ["20", "14", "12", "9"],
    answer: "14",
  },
  {
    question: "What is the purpose of indexing in a database?",
    options: [
      "To enforce data integrity",
      "To speed up data retrieval",
      "To organize data physically on disk",
      "To define relationships between tables",
    ],
    answer: "To speed up data retrieval",
  },
  {
    question: "Which of the following is a stateless protocol?",
    options: ["TCP", "FTP", "HTTP", "SMTP"],
    answer: "HTTP",
  },
  {
    question: "What is a denial-of-service (DoS) attack?",
    options: [
      "An attempt to steal sensitive information",
      "An attempt to disrupt network services",
      "An attempt to install malware",
      "An attempt to gain unauthorized access",
    ],
    answer: "An attempt to disrupt network services",
  },
  {
    question: "What is refactoring in software development?",
    options: [
      "Adding new features to the software",
      "Fixing bugs in the software",
      "Restructuring existing code without changing its external behavior",
      "Writing the initial code for the software",
    ],
    answer: "Restructuring existing code without changing its external behavior",
  },
  {
    question: "What is the function of a compiler?",
    options: [
      "To execute code line by line",
      "To translate high-level code into machine code",
      "To manage computer hardware",
      "To provide a user interface",
    ],
    answer: "To translate high-level code into machine code",
  },
  {
    question: "What is a balanced binary search tree?",
    options: [
      "A binary tree where all nodes have two children",
      "A binary tree where the height of the left and right subtrees of any node differ by at most one",
      "A binary tree where all leaf nodes are at the same level",
      "A binary tree where the values in the left subtree are greater than the root and values in the right subtree are smaller",
    ],
    answer: "A binary tree where the height of the left and right subtrees of any node differ by at most one",
  },
  {
    question: "What is inheritance in object-oriented programming?",
    options: [
      "The ability of an object to take on many forms",
      "The ability to hide the implementation details",
      "The mechanism of deriving new classes from existing ones",
      "The process of creating objects",
    ],
    answer: "The mechanism of deriving new classes from existing ones",
  },
  {
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    answer: "SELECT",
  },
  {
    question: "What is the purpose of a subnet mask in computer networking?",
    options: [
      "To identify the network portion of an IP address",
      "To encrypt network traffic",
      "To prevent network collisions",
      "To assign IP addresses automatically",
    ],
    answer: "To identify the network portion of an IP address",
  },
  {
    question: "What is a common way to prevent SQL injection attacks?",
    options: [
      "Using strong passwords",
      "Validating user inputs",
      "Encrypting database connections",
      "Disabling error messages",
    ],
    answer: "Validating user inputs",
  },
  {
    question: "What is continuous integration in DevOps?",
    options: [
      "Continuously deploying software to production",
      "Continuously monitoring the performance of software",
      "Frequently merging code changes into a central repository",
      "Continuously gathering user feedback",
    ],
    answer: "Frequently merging code changes into a central repository",
  },
  {
    question: "What is the role of the linker in the compilation process?",
    options: [
      "To check for syntax errors",
      "To translate source code to object code",
      "To combine object files into an executable program",
      "To execute the program",
    ],
    answer: "To combine object files into an executable program",
  },
  {
    question: "Which of the following is a type of graph traversal algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Depth-First Search", "Binary Search"],
    answer: "Depth-First Search",
  },
  {
    question: "What is abstraction in object-oriented programming?",
    options: [
      "Showing only essential information and hiding complex details",
      "The ability of an object to take on many forms",
      "The mechanism of inheriting properties from a parent class",
      "The process of creating objects",
    ],
    answer: "Showing only essential information and hiding complex details",
  },
  {
    question: "Which SQL keyword is used to sort the result set of a query?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "JOIN"],
    answer: "ORDER BY",
  },
  {
    question: "What is the purpose of the TCP/IP model?",
    options: [
      "To define the physical connections between computers",
      "To provide a framework for network communication",
      "To manage network hardware",
      "To secure network traffic",
    ],
    answer: "To provide a framework for network communication",
  },
  {
    question: "What is a common method for authenticating users?",
    options: ["Data backup", "Firewall", "Password", "Data compression"],
    answer: "Password",
  },
  {
    question: "What is unit testing in software development?",
    options: [
      "Testing the entire application",
      "Testing individual components of the software",
      "Testing the integration of different modules",
      "Testing the user interface",
    ],
    answer: "Testing individual components of the software",
  },
  {
    question: "What is the function of the ALU in a CPU?",
    options: [
      "To fetch instructions from memory",
      "To decode instructions",
      "To perform arithmetic and logical operations",
      "To store data and instructions",
    ],
    answer: "To perform arithmetic and logical operations",
  },
  {
    question: "Which of the following is a form of non-volatile memory?",
    options: ["SRAM", "DRAM", "ROM", "Cache"],
    answer: "ROM",
  },
  {
    question: "What is the output of the following Python code: `print(5 // 2)`?",
    options: ["2.5", "2", "3", "2.0"],
    answer: "2",
  },
  {
    question: "What is a database transaction?",
    options: [
      "A single SQL query",
      "A sequence of operations treated as a single logical unit of work",
      "A backup of the database",
      "A report generated from the database",
    ],
    answer: "A sequence of operations treated as a single logical unit of work",
  },
  {
    question: "Which protocol is used for transferring files over the internet?",
    options: ["HTTP", "SMTP", "FTP", "DNS"],
    answer: "FTP",
  },
  {
    question: "What is a VPN (Virtual Private Network)?",
    options: [
      "A physical network that is not accessible to the public",
      "A technology that creates a secure connection over a public network",
      "A type of network hardware",
      "A software used for network monitoring",
    ],
    answer: "A technology that creates a secure connection over a public network",
  },
  {
    question: "What is the purpose of code comments?",
    options: [
      "To make the code run faster",
      "To explain the code to humans",
      "To hide parts of the code",
      "To generate documentation automatically",
    ],
    answer: "To explain the code to humans",
  },
  {
    question: "What is the role of the program counter in a CPU?",
    options: [
      "To store the current instruction being executed",
      "To store the address of the next instruction to be executed",
      "To perform arithmetic operations",
      "To manage memory addresses",
    ],
    answer: "To store the address of the next instruction to be executed",
  },{
    question: "What is the purpose of regression testing?",
    options: [
      "To test new features of the software",
      "To ensure that previously working functionality remains working after changes",
      "To test the performance of the software under heavy load",
      "To test the security vulnerabilities of the software",
    ],
    answer: "To ensure that previously working functionality remains working after changes",
  },
  {
    question: "What is the role of a load balancer in a distributed system?",
    options: [
      "To store the main database",
      "To distribute network traffic across multiple servers",
      "To manage user authentication",
      "To monitor server health",
    ],
    answer: "To distribute network traffic across multiple servers",
  },
  {
    question: "Which of the following is a common type of tree data structure?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Heap",
  },
  {
    question: "What is the time complexity of deleting an element from the middle of a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    question: "What is composition in object-oriented programming?",
    options: [
      "A 'has-a' relationship where an object contains other objects",
      "An 'is-a' relationship where a class inherits from another class",
      "The ability of an object to take on many forms",
      "Hiding the implementation details of an object",
    ],
    answer: "A 'has-a' relationship where an object contains other objects",
  },
  {
    question: "Which SQL command is used to remove rows from a table?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "DELETE",
  },
  {
    question: "What is the purpose of a default gateway in a network?",
    options: [
      "To assign IP addresses to devices",
      "To forward traffic to other networks",
      "To connect devices within the same network",
      "To filter network traffic",
    ],
    answer: "To forward traffic to other networks",
  },
  {
    question: "What is a distributed denial-of-service (DDoS) attack?",
    options: [
      "An attack from a single source trying to disrupt services",
      "An attack from multiple sources trying to disrupt services",
      "An attempt to steal data from a distributed database",
      "An attempt to compromise a distributed file system",
    ],
    answer: "An attack from multiple sources trying to disrupt services",
  },
  {
    question: "What is the purpose of a build tool in software development (e.g., Maven, Gradle)?",
    options: [
      "To write the source code",
      "To manage project dependencies and automate the build process",
      "To test the software",
      "To deploy the software",
    ],
    answer: "To manage project dependencies and automate the build process",
  },
  {
    question: "What is a containerization technology (e.g., Docker, Kubernetes)?",
    options: [
      "A way to run multiple operating systems on a single machine",
      "A lightweight, portable, and executable image that contains everything needed to run an application",
      "A type of virtual machine",
      "A tool for managing network infrastructure",
    ],
    answer: "A lightweight, portable, and executable image that contains everything needed to run an application",
  },
  {
    question: "Which of the following is a common operation on a stack?",
    options: ["Enqueue", "Dequeue", "Push", "Search"],
    answer: "Push",
  },
  {
    question: "What is the time complexity of accessing an element in an array by its index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    question: "What is an interface in object-oriented programming?",
    options: [
      "A blueprint of a class that defines a set of methods that a class should implement",
      "An instance of a class",
      "A way to hide the implementation details of a class",
      "The mechanism of inheriting properties from a parent class",
    ],
    answer: "A blueprint of a class that defines a set of methods that a class should implement",
  },
  {
    question: "Which SQL clause is used to filter groups based on a specified condition?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    answer: "HAVING",
  },
  {
    question: "What is the purpose of a network switch?",
    options: [
      "To forward data packets between networks",
      "To connect devices within a local network and forward data only to the intended recipient",
      "To provide internet access to a network",
      "To amplify network signals over long distances",
    ],
    answer: "To connect devices within a local network and forward data only to the intended recipient",
  },
  {
    question: "What is phishing?",
    options: [
      "Installing malicious software on a computer without the user's knowledge",
      "Tricking someone into revealing sensitive information, often through deceptive emails or websites",
      "Overwhelming a server with traffic to make it unavailable",
      "Secretly monitoring a user's computer activity",
    ],
    answer: "Tricking someone into revealing sensitive information, often through deceptive emails or websites",
  },
  {
    question: "What is continuous deployment in DevOps?",
    options: [
      "Continuously integrating code changes",
      "Continuously testing software",
      "Automatically deploying every code change to production",
      "Continuously monitoring application performance",
    ],
    answer: "Automatically deploying every code change to production",
  },
  {
    question: "What is the role of an assembler?",
    options: [
      "To translate high-level language to machine code",
      "To translate assembly language to machine code",
      "To link object files",
      "To execute machine code",
    ],
    answer: "To translate assembly language to machine code",
  },
  {
    question: "Which of the following is a common operation on a queue?",
    options: ["Pop", "Peek", "Enqueue", "Search"],
    answer: "Enqueue",
  },
  {
    question: "What is the time complexity of inserting an element into a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    question: "What is the principle of least privilege in security?",
    options: [
      "Granting all users administrative rights",
      "Granting users only the minimum necessary permissions to perform their tasks",
      "Regularly changing user passwords",
      "Encrypting all sensitive data",
    ],
    answer: "Granting users only the minimum necessary permissions to perform their tasks",
  },
  {
    question: "Which SQL keyword is used to combine rows from two or more tables based on a related column?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "JOIN"],
    answer: "JOIN",
  },
  {
    question: "What is the purpose of a proxy server?",
    options: [
      "To provide internet access to a network and act as an intermediary for requests",
      "To route network traffic between different networks",
      "To connect devices within a local network",
      "To amplify network signals",
    ],
    answer: "To provide internet access to a network and act as an intermediary for requests",
  },
  {
    question: "What is spyware?",
    options: [
      "Software that damages computer systems",
      "Software that secretly monitors a user's computer activity without their consent",
      "Software that encrypts files and demands a ransom",
      "Software that replicates itself and spreads to other computers",
    ],
    answer: "Software that secretly monitors a user's computer activity without their consent",
  },
  {
    question: "What is infrastructure as code (IaC)?",
    options: [
      "Managing and provisioning infrastructure through code rather than manual processes",
      "Writing the application code",
      "Testing the infrastructure manually",
      "Deploying applications without managing the underlying infrastructure",
    ],
    answer: "Managing and provisioning infrastructure through code rather than manual processes",
  },
  {
    question: "What is a microservice architecture?",
    options: [
      "A monolithic application structure",
      "An architecture where an application is structured as a collection of small, independent services",
      "A client-server architecture",
      "A peer-to-peer network architecture",
    ],
    answer: "An architecture where an application is structured as a collection of small, independent services",
  },
  {
    question: "What is a doubly linked list?",
    options: [
      "A linked list where each node points only to the next node",
      "A linked list where each node points to both the next and the previous node",
      "A linked list where the last node points back to the first node",
      "A linked list that is sorted",
    ],
    answer: "A linked list where each node points to both the next and the previous node",
  },
  {
    question: "What is the time complexity of searching for an element in a hash table on average?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    question: "What is the Liskov Substitution Principle in object-oriented programming?",
    options: [
      "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
      "A class should have only one reason to change",
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
      "Many client-specific interfaces are better than one general-purpose interface",
    ],
    answer: "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
  },
  {
    question: "Which SQL aggregate function calculates the average of a set of values?",
    options: ["COUNT()", "SUM()", "MAX()", "AVG()"],
    answer: "AVG()",
  },
  {
    question: "What is network address translation (NAT)?",
    options: [
      "A process of converting private IP addresses to public IP addresses and vice versa",
      "A protocol for assigning IP addresses automatically",
      "A method for encrypting network traffic",
      "A technique for improving network performance",
    ],
    answer: "A process of converting private IP addresses to public IP addresses and vice versa",
  },
  {
    question: "What is a zero-day exploit?",
    options: [
      "An attack that occurs at midnight",
      "An attack that exploits a previously unknown vulnerability",
      "An attack that has no known solution",
      "An attack that targets outdated software",
    ],
    answer: "An attack that exploits a previously unknown vulnerability",
  },
  {
    question: "What is the purpose of a linter in software development?",
    options: [
      "To execute the code",
      "To automatically format the code",
      "To analyze code for potential errors, bugs, and stylistic issues",
      "To manage project dependencies",
    ],
    answer: "To analyze code for potential errors, bugs, and stylistic issues",
  },
  {
    question: "What is a RESTful API?",
    options: [
      "A type of database query language",
      "An architectural style for designing networked applications based on HTTP",
      "A tool for managing server infrastructure",
      "A method for securing web communication",
    ],
    answer: "An architectural style for designing networked applications based on HTTP",
  },
  {
    question: "What is a circular linked list?",
    options: [
      "A linked list where each node points only to the next node",
      "A linked list where each node points to both the next and the previous node",
      "A linked list where the last node points back to the first node",
      "A linked list that is used for implementing queues",
    ],
    answer: "A linked list where the last node points back to the first node",
  },
  {
    question: "What is the time complexity of sorting an array using bubble sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(n^2)",
  },
  {
    question: "What is the Single Responsibility Principle in object-oriented programming?",
    options: [
      "A class should have only one reason to change",
      "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
      "Many client-specific interfaces are better than one general-purpose interface",
    ],
    answer: "A class should have only one reason to change",
  },
  {
    question: "Which SQL aggregate function counts the number of rows?",
    options: ["AVG()", "SUM()", "MAX()", "COUNT()"],
    answer: "COUNT()",
  },
  {
    question: "What is port forwarding?",
    options: [
      "Forwarding network traffic from one port number to another",
      "Assigning IP addresses to devices",
      "Encrypting network communication",
      "Blocking network traffic",
    ],
    answer: "Forwarding network traffic from one port number to another",
  },
  {
    question: "What is a Trojan horse?",
    options: [
      "A self-replicating malicious program",
      "A program that appears legitimate but performs malicious actions in the background",
      "A program that encrypts user files",
      "A program that monitors user activity",
    ],
    answer: "A program that appears legitimate but performs malicious actions in the background",
  },
  {
    question: "What is the purpose of a debugger in software development?",
    options: [
      "To write code faster",
      "To find and fix errors in the code",
      "To compile the code",
      "To deploy the software",
    ],
    answer: "To find and fix errors in the code",
  },
  {
    question: "What is a message queue in software architecture?",
    options: [
      "A way for components of a system to communicate asynchronously",
      "A type of database",
      "A load balancing technique",
      "A method for securing network communication",
    ],
    answer: "A way for components of a system to communicate asynchronously",
  },
  {
    question: "What is a binary search tree?",
    options: [
      "A tree where each node has at most one child",
      "A tree where each node has at most two children and the left child is smaller and the right child is larger than the parent",
      "A tree where all leaf nodes are at the same level",
      "A tree where the root node has the largest value",
    ],
    answer: "A tree where each node has at most two children and the left child is smaller and the right child is larger than the parent",
  },
  {
    question: "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
  },
  {
    question: "What is the Open/Closed Principle in object-oriented programming?",
    options: [
      "Software entities should be open for extension but closed for modification",
      "A class should have only one reason to change",
      "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
    ],
    answer: "Software entities should be open for extension but closed for modification",
  },
  {
    question: "Which SQL constraint ensures that all values in a column are different?",
    options: ["NOT NULL", "PRIMARY KEY", "FOREIGN KEY", "UNIQUE"],
    answer: "UNIQUE",
  },
  {
    question: "What is a MAC address filtering?",
    options: [
      "Allowing or denying network access based on the MAC address of a device",
      "Filtering network traffic based on IP addresses",
      "Encrypting network traffic based on MAC addresses",
      "Translating MAC addresses to IP addresses",
    ],
    answer: "Allowing or denying network access based on the MAC address of a device",
  },
  {
    question: "What is a keylogger?",
    options: [
      "Software that records keystrokes made by a user",
      "Hardware used to protect against power surges",
      "A type of network monitoring tool",
      "A device used for secure authentication",
    ],
    answer: "Software that records keystrokes made by a user",
  },
  {
    question: "What is the purpose of a test plan?",
    options: [
      "To write the test cases",
      "To define the scope, objectives, resources, and schedule of testing activities",
      "To execute the test cases",
      "To report the test results",
    ],
    answer: "To define the scope, objectives, resources, and schedule of testing activities",
  },
  {
    question: "What is the purpose of a test plan?",
    options: [
      "To write the test cases",
      "To define the scope, objectives, resources, and schedule of testing activities",
      "To execute the test cases",
      "To report the test results",
    ],
    answer: "To define the scope, objectives, resources, and schedule of testing activities",
  },
  {
    question: "What is a distributed system?",
    options: [
      "A system where all components are located on a single computer",
      "A system where components are located on different networked computers that communicate and coordinate their actions",
      "A system with a centralized database",
      "A system that uses a single programming language",
    ],
    answer: "A system where components are located on different networked computers that communicate and coordinate their actions",
  },
  {
    question: "What is a red-black tree?",
    options: [
      "A binary search tree where nodes are colored red or black to ensure balance",
      "A tree where all red nodes must have black children",
      "A tree where all paths from the root to the leaves have the same number of black nodes",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the time complexity of deleting an element from a hash table on average?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    question: "What is the Interface Segregation Principle in object-oriented programming?",
    options: [
      "Many client-specific interfaces are better than one general-purpose interface",
      "A class should have only one reason to change",
      "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
    ],
    answer: "Many client-specific interfaces are better than one general-purpose interface",
  },
  {
    question: "Which SQL keyword is used to group rows that have the same values in one or more columns into a summary row?",
    options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],
    answer: "GROUP BY",
  },
  {
    question: "What is a demilitarized zone (DMZ) in network security?",
    options: [
      "A secure internal network",
      "A perimeter network that exposes external-facing services to an untrusted network",
      "A network segment with no security measures",
      "A virtual private network",
    ],
    answer: "A perimeter network that exposes external-facing services to an untrusted network",
  },
  {
    question: "What is a botnet?",
    options: [
      "A network of compromised computers controlled by an attacker",
      "A type of network hardware",
      "A software used for automating tasks",
      "A secure communication protocol",
    ],
    answer: "A network of compromised computers controlled by an attacker",
  },
  {
    question: "What is a build pipeline?",
    options: [
      "A series of steps to build, test, and deploy software",
      "A tool for writing code",
      "A method for gathering user requirements",
      "A way to monitor application performance",
    ],
    answer: "A series of steps to build, test, and deploy software",
  },
  {
    question: "What is serverless computing?",
    options: [
      "Running applications without managing servers",
      "Using physical servers instead of virtual machines",
      "A type of client-server architecture",
      "A network topology without a central server",
    ],
    answer: "Running applications without managing servers",
  },
  {
    question: "What is a priority queue?",
    options: [
      "A queue where elements are processed in the order they arrive",
      "A queue where elements are processed based on their priority",
      "A queue implemented using a linked list",
      "A queue with a fixed size",
    ],
    answer: "A queue where elements are processed based on their priority",
  },
  {
    question: "What is the time complexity of inserting an element into a binary search tree in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    question: "What is Dependency Inversion Principle in object-oriented programming?",
    options: [
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
      "A class should have only one reason to change",
      "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program",
      "Many client-specific interfaces are better than one general-purpose interface",
    ],
    answer: "High-level modules should not depend on low-level modules; both should depend on abstractions",
  },
  {
    question: "Which SQL statement is used to modify the structure of an existing table?",
    options: ["ALTER TABLE", "CREATE TABLE", "DROP TABLE", "SELECT"],
    answer: "ALTER TABLE",
  },
  {
    question: "What is a three-way handshake in TCP?",
    options: [
      "A method for terminating a TCP connection",
      "A process for establishing a TCP connection",
      "A way to ensure data integrity in TCP",
      "A mechanism for flow control in TCP",
    ],
    answer: "A process for establishing a TCP connection",
  },
  {
    question: "What is a rootkit?",
    options: [
      "A tool for gaining root access to a system",
      "A type of malware that hides its presence and allows for persistent malicious activity",
      "A network protocol for routing",
      "A hardware component that secures the boot process",
    ],
    answer: "A type of malware that hides its presence and allows for persistent malicious activity",
  },
  {
    question: "What is Infrastructure as a Service (IaaS)?",
    options: [
      "Providing software applications over the internet",
      "Providing computing resources such as virtual machines and storage over the internet",
      "Providing a platform for developing and deploying applications",
      "Managing and provisioning infrastructure through code",
    ],
    answer: "Providing computing resources such as virtual machines and storage over the internet",
  },
  {
    question: "What is Platform as a Service (PaaS)?",
    options: [
      "Providing software applications over the internet",
      "Providing computing resources such as virtual machines and storage over the internet",
      "Providing a platform for developing and deploying applications",
      "Managing and provisioning infrastructure through code",
    ],
    answer: "Providing a platform for developing and deploying applications",
  },
  {
    question: "What is a B-tree?",
    options: [
      "A binary tree where each node has at most two children",
      "A self-balancing tree data structure that is optimized for disk-oriented data structures",
      "A tree where the root node has the largest value",
      "A tree used for representing hierarchical data",
    ],
    answer: "A self-balancing tree data structure that is optimized for disk-oriented data structures",
  },
  {
    question: "What is the time complexity of searching for an element in a B-tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "What is coupling in software design?",
    options: [
      "The degree to which components depend on each other",
      "The degree to which a module focuses on a single well-defined task",
      "The ability of a system to withstand changes",
      "The clarity and simplicity of the design",
    ],
    answer: "The degree to which components depend on each other",
  },
  {
    question: "Which SQL statement is used to remove a table from the database?",
    options: ["ALTER TABLE", "CREATE TABLE", "DROP TABLE", "DELETE FROM"],
    answer: "DROP TABLE",
  },
  {
    question: "What is the purpose of a VPN tunnel?",
    options: [
      "To encrypt all network traffic",
      "To create a secure connection over a public network",
      "To increase network bandwidth",
      "To hide the user's IP address",
    ],
    answer: "To create a secure connection over a public network",
  },
  {
    question: "What is a SQL slammer worm?",
    options: [
      "A worm that exploits vulnerabilities in web servers",
      "A worm that targets Microsoft SQL Server",
      "A worm that spreads through email attachments",
      "A worm that performs denial-of-service attacks",
    ],
    answer: "A worm that targets Microsoft SQL Server",
  },
  {
    question: "What is continuous monitoring in DevOps?",
    options: [
      "Continuously integrating code changes",
      "Continuously deploying software",
      "Continuously gathering user feedback",
      "Continuously observing and analyzing the performance and health of applications and infrastructure",
    ],
    answer: "Continuously observing and analyzing the performance and health of applications and infrastructure",
  },
  {
    question: "What is a microkernel?",
    options: [
      "A kernel that provides a minimal set of services",
      "A kernel that contains most of the operating system functionality",
      "A type of real-time operating system kernel",
      "A kernel used in embedded systems",
    ],
    answer: "A kernel that provides a minimal set of services",
  },
  {
    question: "What is a trie (prefix tree)?",
    options: [
      "A tree where each node has at most three children",
      "A tree-like data structure used for efficient retrieval of keys in a dataset of strings",
      "A balanced binary search tree",
      "A tree used for representing arithmetic expressions",
    ],
    answer: "A tree-like data structure used for efficient retrieval of keys in a dataset of strings",
  },
  {
    question: "What is the time complexity of inserting a string into a trie?",
    options: ["O(1)", "O(log n)", "O(m)", "O(m log n)"],
    answer: "O(m)",
  },
  {
    question: "What is cohesion in software design?",
    options: [
      "The degree to which a module focuses on a single well-defined task",
      "The degree to which components depend on each other",
      "The ability of a system to withstand changes",
      "The clarity and simplicity of the design",
    ],
    answer: "The degree to which a module focuses on a single well-defined task",
  },
  {
    question: "Which SQL clause is used to specify conditions for the rows to be selected?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
    answer: "WHERE",
  },
  {
    question: "What is network segmentation?",
    options: [
      "Dividing a network into smaller, isolated subnets",
      "Combining multiple networks into a larger one",
      "Encrypting network traffic within a local network",
      "Assigning IP addresses to devices dynamically",
    ],
    answer: "Dividing a network into smaller, isolated subnets",
  },
  {
    question: "What is a logic bomb?",
    options: [
      "Malicious code that is triggered by a specific condition or event",
      "A type of denial-of-service attack",
      "A program that steals user credentials",
      "A hardware failure that causes data loss",
    ],
    answer: "Malicious code that is triggered by a specific condition or event",
  },
  {
    question: "What is infrastructure monitoring?",
    options: [
      "Observing and analyzing the performance and health of hardware and software resources",
      "Writing code to manage infrastructure",
      "Manually configuring server settings",
      "Deploying applications to servers",
    ],
    answer: "Observing and analyzing the performance and health of hardware and software resources",
  },
  {
    question: "What is a monolithic architecture?",
    options: [
      "An architecture where an application is structured as a collection of small, independent services",
      "An architecture where all components of an application are tightly integrated into a single unit",
      "A client-server architecture",
      "A peer-to-peer network architecture",
    ],
    answer: "An architecture where all components of an application are tightly integrated into a single unit",
  },
  {
    question: "What is a directed acyclic graph (DAG)?",
    options: [
      "A graph with cycles",
      "A graph with no cycles and all edges are directed",
      "A graph where all edges are undirected",
      "A tree-like structure",
    ],
    answer: "A graph with no cycles and all edges are directed",
  },
  {
    question: "What is the time complexity of topological sort on a DAG?",
    options: ["O(V + E)", "O(V log V)", "O(V^2)", "O(E log V)"],
    answer: "O(V + E)",
  },
  {
    question: "What is technical debt?",
    options: [
      "The cost of hiring new developers",
      "The long-term consequences of poor design and implementation choices made in the past",
      "The budget allocated for software maintenance",
      "The time spent refactoring code",
    ],
    answer: "The long-term consequences of poor design and implementation choices made in the past",
  },
  {
    question: "Which SQL operator is used to check if a value is within a range?",
    options: ["LIKE", "IN", "BETWEEN", "="],
    answer: "BETWEEN",
  },
  {
    question: "What is a VLAN (Virtual Local Area Network)?",
    options: [
      "A physical network segment",
      "A logical grouping of network devices that appear to be on the same network segment, regardless of their physical location",
      "A wide area network",
      "A wireless local area network",
    ],
    answer: "A logical grouping of network devices that appear to be on the same network segment, regardless of their physical location",
  },
  {
    question: "What is ransomware?",
    options: [
      "Malware that steals personal information",
      "Malware that encrypts a victim's files and demands a ransom to restore them",
      "Malware that spreads through networks",
      "Malware that displays unwanted advertisements",
    ],
    answer: "Malware that encrypts a victim's files and demands a ransom to restore them",
  },
  {
    question: "What is a rollback in database transactions?",
    options: [
      "Saving the changes made by a transaction",
      "Undoing the changes made by a transaction",
      "Starting a new transaction",
      "Checking the consistency of the database",
    ],
    answer: "Undoing the changes made by a transaction",
  },
  {
    question: "What is a distributed file system?",
    options: [
      "A file system that is accessible from multiple computers over a network",
      "A file system stored on a single local disk",
      "A file system used by a single operating system",
      "A file system that only stores text files",
    ],
    answer: "A file system that is accessible from multiple computers over a network",
  },
  {
    question: "What is a skip list?",
    options: [
      "A probabilistic data structure that uses multiple levels of linked lists to allow efficient searching",
      "A type of self-balancing binary search tree",
      "A linear data structure optimized for insertions and deletions at the ends",
      "A data structure used for implementing priority queues",
    ],
    answer: "A probabilistic data structure that uses multiple levels of linked lists to allow efficient searching",
  },
  {
    question: "What is the average time complexity of searching in a skip list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "What is refactoring?",
    options: [
      "Adding new features to the software",
      "Fixing bugs in the software",
      "Improving the internal structure of existing code without changing its external behavior",
      "Writing the initial code for the software",
    ],
    answer: "Improving the internal structure of existing code without changing its external behavior",
  },
  {
    question: "Which SQL operator is used for pattern matching?",
    options: ["=", ">", "<", "LIKE"],
    answer: "LIKE",
  },
  {
    question: "What is quality of service (QoS) in networking?",
    options: [
      "Mechanisms to prioritize network traffic and ensure reliable delivery of high-priority data",
      "Measures to ensure network security",
      "Techniques for compressing network data",
      "Methods for increasing network bandwidth",
    ],
    answer: "Mechanisms to prioritize network traffic and ensure reliable delivery of high-priority data",
  },
  {
    question: "What is a worm in cybersecurity?",
    options: [
      "A program that attaches itself to another program and spreads when that program is executed",
      "A standalone program that replicates itself and spreads to other computers without requiring a host program",
      "A program that appears legitimate but performs malicious actions", 
    ],
    answer: "A standalone program that replicates itself and spreads to other computers without requiring a host program",
  },  


  {
    question: "What is a worm in cybersecurity?",
    options: [
      "A program that attaches itself to another program and spreads when that program is executed",
      "A standalone program that replicates itself and spreads to other computers without requiring a host program",
      "A program that appears legitimate but performs malicious actions",
      "A program used to steal user credentials",
    ],
    answer: "A standalone program that replicates itself and spreads to other computers without requiring a host program",
  },
  {
    question: "What is a commit in version control (e.g., Git)?",
    options: [
      "A way to discard changes",
      "A snapshot of the changes made to the codebase at a specific point in time",
      "A branch of development",
      "A remote repository",
    ],
    answer: "A snapshot of the changes made to the codebase at a specific point in time",
  },
  {
    question: "What is a graph data structure?",
    options: [
      "A linear data structure where elements are arranged sequentially",
      "A hierarchical data structure with a root and child nodes",
      "A collection of nodes (vertices) and edges that connect them",
      "A data structure that follows the LIFO principle",
    ],
    answer: "A collection of nodes (vertices) and edges that connect them",
  },
  {
    question: "What is the time complexity of Breadth-First Search (BFS) on a graph?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    answer: "O(V + E)",
  },
  {
    question: "What is coupling?",
    options: [
      "The degree to which software components depend on each other",
      "The degree to which a module performs a single function",
      "The visibility of one object to another",
      "The way objects interact with each other",
    ],
    answer: "The degree to which software components depend on each other",
  },
  {
    question: "Which SQL clause is used to sort the result set?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    answer: "ORDER BY",
  },
  {
    question: "What is a honeypot in network security?",
    options: [
      "A system designed to attract and trap attackers",
      "A firewall rule that blocks all incoming traffic",
      "An encrypted communication channel",
      "A network monitoring tool",
    ],
    answer: "A system designed to attract and trap attackers",
  },
  {
    question: "What is a logic gate?",
    options: [
      "A physical gate that controls electrical current",
      "An elementary building block of digital circuits that implements a Boolean function",
      "A software routine that performs a logical operation",
      "A type of memory storage",
    ],
    answer: "An elementary building block of digital circuits that implements a Boolean function",
  },
  {
    question: "What is a merge request (or pull request) in version control?",
    options: [
      "A request to delete a branch",
      "A proposal to merge changes from one branch into another",
      "A way to revert to a previous commit",
      "A command to update the local repository",
    ],
    answer: "A proposal to merge changes from one branch into another",
  },
  {
    question: "What is a microkernel operating system?",
    options: [
      "An OS where most services run in user space",
      "An OS where all services run in the kernel space",
      "An OS designed for embedded systems",
      "An OS with a very small kernel",
    ],
    answer: "An OS where most services run in user space",
  },
  {
    question: "What is a disjoint set data structure?",
    options: [
      "A data structure that stores sets that have no common elements",
      "A data structure that stores elements in a single set",
      "A tree-based data structure where each node has at most two children",
      "A linear data structure where elements are linked together",
    ],
    answer: "A data structure that stores sets that have no common elements",
  },
  {
    question: "What is the time complexity of the 'union' operation in a disjoint set data structure with path compression and union by rank?",
    options: ["O(1)", "O(log n)", "O(α(n))", "O(n)"],
    answer: "O(α(n))",
  },
  {
    question: "What is high cohesion?",
    options: [
      "A module performs multiple unrelated tasks",
      "A module performs a single, well-defined task",
      "Modules are highly dependent on each other",
      "Modules have minimal interaction",
    ],
    answer: "A module performs a single, well-defined task",
  },
  {
    question: "Which SQL keyword is used to specify the tables to retrieve data from?",
    options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
    answer: "FROM",
  },
  {
    question: "What is a demilitarized zone (DMZ)?",
    options: [
      "A heavily fortified internal network",
      "A network segment located between the internal network and an untrusted external network",
      "A network with no security measures",
      "A virtual private network connection",
    ],
    answer: "A network segment located between the internal network and an untrusted external network",
  },
  {
    question: "What is a buffer overflow?",
    options: [
      "A condition where a program tries to write more data to a buffer than it can hold",
      "A network attack that floods a target with traffic",
      "A technique for compressing data",
      "A method for encrypting data",
    ],
    answer: "A condition where a program tries to write more data to a buffer than it can hold",
  },
  {
    question: "What is a continuous integration server (e.g., Jenkins, GitLab CI)?",
    options: [
      "A server that hosts the production environment",
      "A server that automates the build, test, and integration phases of software development",
      "A server used for storing the codebase",
      "A server that monitors application performance",
    ],
    answer: "A server that automates the build, test, and integration phases of software development",
  },
  {
    question: "What is a monolithic kernel operating system?",
    options: [
      "An OS where most services run in user space",
      "An OS where all core OS services run within the kernel space",
      "An OS designed for real-time applications",
      "An OS with a small kernel",
    ],
    answer: "An OS where all core OS services run within the kernel space",
  },
  {
    question: "What is a segment tree?",
    options: [
      "A tree data structure used for storing intervals, or segments",
      "A binary search tree that is always balanced",
      "A tree where each node represents a segment of an array",
      "Both A and C",
    ],
    answer: "Both A and C",
  },
  {
    question: "What is the time complexity of querying a range sum in a segment tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "What is loose coupling?",
    options: [
      "Components have strong dependencies on each other",
      "Changes in one component are likely to affect other components",
      "Components have minimal dependencies on each other",
      "Components are tightly integrated",
    ],
    answer: "Components have minimal dependencies on each other",
  },
  {
    question: "Which SQL keyword is used to combine the results of two or more SELECT statements?",
    options: ["JOIN", "UNION", "INTERSECT", "EXCEPT"],
    answer: "UNION",
  },
  {
    question: "What is network sniffing?",
    options: [
      "Analyzing network traffic to capture data packets",
      "Injecting malicious packets into a network",
      "Blocking unwanted network traffic",
      "Improving network performance",
    ],
    answer: "Analyzing network traffic to capture data packets",
  },
  {
    question: "What is a cross-site request forgery (CSRF) attack?",
    options: [
      "An attack that injects malicious scripts into websites",
      "An attack that tricks a user into performing unwanted actions on a web application they are authenticated to",
      "An attack that tries to steal user credentials",
      "An attack that disrupts network services",
    ],
    answer: "An attack that tricks a user into performing unwanted actions on a web application they are authenticated to",
  },
  {
    question: "What is a release pipeline?",
    options: [
      "The process of writing code",
      "The process of testing software",
      "The process of deploying software to various environments",
      "The process of gathering user feedback",
    ],
    answer: "The process of deploying software to various environments",
  },
  {
    question: "What is a real-time operating system (RTOS)?",
    options: [
      "An OS designed for desktop computers",
      "An OS designed for systems with strict time constraints",
      "An OS with a large kernel",
      "An OS that prioritizes user interaction",
    ],
    answer: "An OS designed for systems with strict time constraints",
  },
  {
    question: "What is a Fenwick tree (Binary Indexed Tree)?",
    options: [
      "A tree data structure that can efficiently compute prefix sums and perform single element updates in logarithmic time",
      "A self-balancing binary search tree",
      "A tree used for storing string prefixes",
      "A tree where each node has at most two children",
    ],
    answer: "A tree data structure that can efficiently compute prefix sums and perform single element updates in logarithmic time",
  },
  {
    question: "What is the time complexity of updating an element in a Fenwick tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "What is technical debt?",
    options: [
      "The interest paid on loans taken for software development",
      "The accumulated cost of shortcuts taken in software development that lead to future rework",
      "The cost of maintaining legacy systems",
      "The budget allocated for refactoring code",
    ],
    answer: "The accumulated cost of shortcuts taken in software development that lead to future rework",
  },
  {
    question: "Which SQL keyword is used to retrieve distinct values?",
    options: ["ALL", "UNIQUE", "DISTINCT", "GROUP BY"],
    answer: "DISTINCT",
  },
  {
    question: "What is a firewall?",
    options: [
      "Hardware that amplifies network signals",
      "Software or hardware that controls network traffic based on predefined rules",
      "A device that connects multiple networks",
      "A protocol for secure communication",
    ],
    answer: "Software or hardware that controls network traffic based on predefined rules",
  },
  {
    question: "What is a SQL injection?",
    options: [
      "A technique for optimizing database queries",
      "A security vulnerability that allows attackers to execute arbitrary SQL code",
      "A method for backing up a database",
      "A type of database management system",
    ],
    answer: "A security vulnerability that allows attackers to execute arbitrary SQL code",
  },
  {
    question: "What is infrastructure provisioning?",
    options: [
      "The process of writing application code",
      "The process of setting up and configuring hardware and software resources",
      "The process of testing software",
      "The process of deploying applications",
    ],
    answer: "The process of setting up and configuring hardware and software resources",
  },
  {
    question: "What is a bare-metal server?",
    options: [
      "A virtual server hosted in the cloud",
      "A physical server dedicated to a single tenant",
      "A server with minimal software installed",
      "A server used only for storage",
    ],
    answer: "A physical server dedicated to a single tenant",
  },
  {
    question: "What is a Bloom filter?",
    options: [
      "A probabilistic data structure used to test whether an element is a member of a set",
      "A data structure used for efficient string searching",
      "A type of self-balancing tree",
      "A data structure used for implementing caches",
    ],
    answer: "A probabilistic data structure used to test whether an element is a member of a set",
  },
  {
    question: "What is the time complexity of checking for membership in a Bloom filter?",
    options: ["O(1)", "O(log n)", "O(k)", "O(n)"],
    answer: "O(k)",
  },
  {
    question: "What is code smell?",
    options: [
      "A good practice in software development",
      "A surface indication in code that corresponds to a deeper problem",
      "A type of software bug",
      "A metric for code complexity",
    ],
    answer: "A surface indication in code that corresponds to a deeper problem",
  },
  {
    question: "Which SQL keyword is used to specify a condition that must be true for the records to be selected?",
    options: ["SELECT", "FROM", "ORDER BY", "WHERE"],
    answer: "WHERE",
  },
  {
    question: "What is a network topology?",
    options: [
      "The physical or logical arrangement of nodes and connections in a network",
      "The speed of data transmission in a network",
      "The security protocols used in a network",
      "The types of devices connected to a network",
    ],
    answer: "The physical or logical arrangement of nodes and connections in a network",
  },
  {
    question: "What is a man-in-the-browser (MITB) attack?",
    options: [
      "An attack that intercepts communication between a browser and a web server",
      "An attack where malware infects a web browser and allows the attacker to manipulate web sessions",
      "An attack that exploits vulnerabilities in browser plugins",
      "An attack that targets the browser's cache",
    ],
    answer: "An attack where malware infects a web browser and allows the attacker to manipulate web sessions",
  },
  {
    question: "What is infrastructure automation?",
    options: [
      "Manually configuring server settings",
      "Using code and tools to automatically provision and manage infrastructure",
      "Monitoring the performance of infrastructure",
      "Designing the physical layout of a data center",
    ],
    answer: "Using code and tools to automatically provision and manage infrastructure",
  },
  {
    question: "What is a hypervisor?",
    options: [
      "Software that manages network traffic",
      "Software that creates and runs virtual machines",
      "Hardware used for data storage",
      "A type of operating system kernel",
    ],
    answer: "Software that creates and runs virtual machines",
  },
  {
    question: "What is a B+ tree?",
    options: [
      "A binary search tree where all data is stored in the leaf nodes",
      "A self-balancing tree data structure optimized for disk-based databases",
      "A tree where internal nodes only contain keys and pointers to child nodes",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the time complexity of searching in a B+ tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    question: "What is code refactoring?",
    options: [
      "Adding new functionality to existing code",
      "Fixing bugs in the code",
      "Restructuring existing code to improve its readability and maintainability without changing its external behavior",
      "Optimizing code for performance",
    ],
    answer: "Restructuring existing code to improve its readability and maintainability without changing its external behavior",
  },
  {
    question: "Which SQL clause is used to filter rows after they have been grouped?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    answer: "HAVING",
  },
  {
    question: "What is a VPN?",
    options: [
      "A physical private network",
      "A virtual private network that creates a secure connection over a public network",
      "A very high-speed network",
      "A type of network hardware",
    ],
    answer: "A virtual private network that creates a secure connection over a public network",
  },
  {
    question: "What is a distributed database?",
    options: [
      "A database stored on a single computer",
      "A database where data is spread across multiple computers",
      "A database that is only accessible over the internet",
      "A database that uses a single query language",
    ],
    answer: "A database where data is spread across multiple computers",
  },
  {
    question: "What is a consistent hashing?",
    options: [
      "A hashing technique that minimizes the number of keys that need to be remapped when",
      

      "A hashing technique that always produces the same hash value for the same input",
      "A hashing technique used for encrypting data",
      "A hashing technique used for load balancing in a single server",
    ],
    answer: "A hashing technique that minimizes the number of keys that need to be remapped when nodes are added or removed in a distributed system",
  },  
  {
    question: "What is consistent hashing?",
    options: [
      "A hashing technique that minimizes the number of keys that need to be remapped when nodes are added or removed in a distributed system",
      "A hashing technique that always produces the same hash value for the same input",
      "A hashing technique used for encrypting data",
      "A hashing technique used for load balancing in a single server",
    ],
    answer: "A hashing technique that minimizes the number of keys that need to be remapped when nodes are added or removed in a distributed system",
  },
  {
    question: "What is a three-tier architecture?",
    options: [
      "An architecture with a client, a server, and a database",
      "An architecture that separates the user interface, application logic, and data storage",
      "An architecture with three load balancers",
      "An architecture with three firewalls",
    ],
    answer: "An architecture that separates the user interface, application logic, and data storage",
  },
  {
    question: "What is data warehousing?",
    options: [
      "A system used for online transaction processing (OLTP)",
      "A large collection of data used for business intelligence and data analysis",
      "A type of database designed for high-speed transactions",
      "A method for backing up and restoring data",
    ],
    answer: "A large collection of data used for business intelligence and data analysis",
  },
  {
    question: "What is data mining?",
    options: [
      "The process of extracting knowledge and patterns from large datasets",
      "The process of cleaning and preparing data for analysis",
      "The process of storing and managing large volumes of data",
      "The process of visualizing data insights",
    ],
    answer: "The process of extracting knowledge and patterns from large datasets",
  },
  {
    question: "What is machine learning?",
    options: [
      "A field of computer science that enables computers to learn from data without being explicitly programmed",
      "A type of programming where machines are given explicit instructions",
      "A process of automating tasks using robots",
      "A technique for optimizing database queries",
    ],
    answer: "A field of computer science that enables computers to learn from data without being explicitly programmed",
  },
  {
    question: "What is deep learning?",
    options: [
      "A subset of machine learning that uses artificial neural networks with multiple layers",
      "A type of machine learning that requires very little data",
      "A machine learning technique used only for image recognition",
      "A machine learning technique that does not require feature engineering",
    ],
    answer: "A subset of machine learning that uses artificial neural networks with multiple layers",
  },
  {
    question: "What is natural language processing (NLP)?",
    options: [
      "A field of computer science focused on enabling computers to understand and process human language",
      "A type of programming language that mimics human language",
      "A process of translating between different human languages",
      "A technique for improving the speed of text processing",
    ],
    answer: "A field of computer science focused on enabling computers to understand and process human language",
  },
  {
    question: "What is computer vision?",
    options: [
      "A field of computer science that enables computers to 'see' and interpret images",
      "A type of display technology",
      "A technique for compressing image data",
      "A method for enhancing the quality of digital images",
    ],
    answer: "A field of computer science that enables computers to 'see' and interpret images",
  },
  {
    question: "What is the Internet of Things (IoT)?",
    options: [
      "A global network of interconnected devices",
      "A network protocol for connecting smart devices",
      "The concept of connecting everyday objects to the internet, allowing them to collect and exchange data",
      "A type of cloud computing service for connected devices",
    ],
    answer: "The concept of connecting everyday objects to the internet, allowing them to collect and exchange data",
  },
  {
    question: "What is cloud computing?",
    options: [
      "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')",
      "Using physical servers in a data center",
      "Storing all data on local hard drives",
      "A type of network topology",
    ],
    answer: "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')",
  },
  {
    question: "What is edge computing?",
    options: [
      "Processing data at the edge of the network, closer to the data source",
      "Centralized data processing in the cloud",
      "Processing data only on end-user devices",
      "A type of network topology for IoT devices",
    ],
    answer: "Processing data at the edge of the network, closer to the data source",
  },
  {
    question: "What is blockchain technology?",
    options: [
      "A centralized database managed by a single authority",
      "A distributed, immutable ledger that records transactions across many computers",
      "A type of encryption algorithm",
      "A protocol for secure online payments",
    ],
    answer: "A distributed, immutable ledger that records transactions across many computers",
  },
  {
    question: "What is artificial intelligence (AI)?",
    options: [
      "The simulation of human intelligence in machines that are programmed to think like humans and mimic their actions",
      "A type of programming language used for robotics",
      "A field of computer science focused on hardware design",
      "A technique for optimizing software performance",
    ],
    answer: "The simulation of human intelligence in machines that are programmed to think like humans and mimic their actions",
  },
  {
    question: "What is augmented reality (AR)?",
    options: [
      "A technology that overlays digital information onto the real world",
      "A fully immersive virtual environment",
      "A technique for enhancing the resolution of digital images",
      "A method for tracking objects in 3D space",
    ],
    answer: "A technology that overlays digital information onto the real world",
  },
  {
    question: "What is virtual reality (VR)?",
    options: [
      "A technology that overlays digital information onto the real world",
      "A fully immersive, simulated environment that can be interacted with",
      "A technique for compressing video data",
      "A method for creating 3D models",
    ],
    answer: "A fully immersive, simulated environment that can be interacted with",
  },
  {
    question: "What is robotics?",
    options: [
      "The field of engineering and computer science concerned with the design, construction, operation, and application of robots",
      "A type of artificial intelligence focused on language processing",
      "The study of the human brain and nervous system",
      "A technique for automating industrial processes using machines",
    ],
    answer: "The field of engineering and computer science concerned with the design, construction, operation, and application of robots",
  },
  {
    question: "What is cybersecurity?",
    options: [
      "The practice of protecting computer systems and networks from attack, damage, or unauthorized access",
      "A type of software used for antivirus protection",
      "The study of network protocols and communication",
      "A method for encrypting data at rest",
    ],
    answer: "The practice of protecting computer systems and networks from attack, damage, or unauthorized access",
  },
  {
    question: "What is ethical hacking?",
    options: [
      "Hacking for personal gain or malicious purposes",
      "Using hacking techniques to identify vulnerabilities in systems with permission",
      "A type of cyber attack that does not cause harm",
      "A legal form of software piracy",
    ],
    answer: "Using hacking techniques to identify vulnerabilities in systems with permission",
  },
  {
    question: "What is information security?",
    options: [
      "Protecting information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction",
      "Securing physical documents and records",
      "Managing computer hardware and software",
      "Developing secure software applications",
    ],
    answer: "Protecting information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction",
  },
  {
    question: "What is cryptography?",
    options: [
      "The practice and study of techniques for secure communication in the presence of third parties",
      "A method for compressing data",
      "A technique for error detection and correction",
      "The study of computer viruses and malware",
    ],
    answer: "The practice and study of techniques for secure communication in the presence of third parties",
  },
  {
    question: "What is a digital signature?",
    options: [
      "A handwritten signature scanned into a computer",
      "A mathematical scheme for verifying the authenticity and integrity of a digital message or document",
      "A watermark added to digital content",
      "An encrypted version of a user's password",
    ],
    answer: "A mathematical scheme for verifying the authenticity and integrity of a digital message or document",
  },
  {
    question: "What is data integrity?",
    options: [
      "Ensuring that data is accurate, consistent, and reliable over its entire lifecycle",
      "Protecting data from unauthorized access",
      "Compressing data to save storage space",
      "Encrypting data to ensure confidentiality",
    ],
    answer: "Ensuring that data is accurate, consistent, and reliable over its entire lifecycle",
  },
  {
    question: "What is data confidentiality?",
    options: [
      "Ensuring that data is accurate and consistent",
      "Preventing unauthorized disclosure of information",
      "Making data readily available to authorized users",
      "Backing up data to prevent loss",
    ],
    answer: "Preventing unauthorized disclosure of information",
  },
  {
    question: "What is data availability?",
    options: [
      "Ensuring that data is accurate and consistent",
      "Preventing unauthorized access to data",
      "Ensuring that authorized users have timely and reliable access to data",
      "Protecting data from corruption",
    ],
    answer: "Ensuring that authorized users have timely and reliable access to data",
  },
  {
    question: "What is a denial-of-service (DoS) attack?",
    options: [
      "An attempt to gain unauthorized access to a system",
      "An attempt to make a machine or network resource unavailable to its intended users",
      "An attempt to steal sensitive information",
      "An attempt to install malware on a system",
    ],
    answer: "An attempt to make a machine or network resource unavailable to its intended users",
  },
  {
    question: "What is a distributed denial-of-service (DDoS) attack?",
    options: [
      "A DoS attack launched from a single compromised system",
      "A DoS attack launched from multiple compromised systems",
      "An attempt to disrupt a distributed database",
      "An attempt to compromise a distributed file system",
    ],
    answer: "A DoS attack launched from multiple compromised systems",
  },
  {
    question: "What is a firewall?",
    options: [
      "Hardware that amplifies network signals",
      "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules",
      "A device that connects multiple networks",
      "A protocol for secure communication",
    ],
    answer: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules",
  },
  {
    question: "What is intrusion detection system (IDS)?",
    options: [
      "A system that prevents unauthorized access to a network",
      "A system that monitors network traffic for suspicious activity and alerts administrators",
      "A system that encrypts network communication",
      "A system that performs regular security audits",
    ],
    answer: "A system that monitors network traffic for suspicious activity and alerts administrators",
  },
  {
    question: "What is intrusion prevention system (IPS)?",
    options: [
      "A system that only detects malicious activity",
      "A system that detects and automatically blocks or prevents malicious activity",
      "A system that encrypts network traffic",
      "A system that performs vulnerability scanning",
    ],
    answer: "A system that detects and automatically blocks or prevents malicious activity",
  },
  {
    question: "What is a security audit?",
    options: [
      "A systematic evaluation of the security posture of an organization's information systems",
      "A process of encrypting sensitive data",
      "A method for backing up and restoring data",
      "A type of software used for detecting malware",
    ],
    answer: "A systematic evaluation of the security posture of an organization's information systems",
  },
  {
    question: "What is vulnerability scanning?",
    options: [
      "The process of identifying security weaknesses in a system or network",
      "The process of exploiting security vulnerabilities",
      "The process of patching security vulnerabilities",
      "The process of monitoring network traffic for malicious activity",
    ],
    answer: "The process of identifying security weaknesses in a system or network",
  },
  {
    question: "What is penetration testing?",
    options: [
      "A method for testing the strength of physical security measures",
      "A simulated cyberattack performed to evaluate the security of a system or network",
      "A process of encrypting all data on a system",
      "A technique for preventing denial-of-service attacks",
    ],
    answer: "A simulated cyberattack performed to evaluate the security of a system or network",
  },
  {
    question: "What is risk assessment in cybersecurity?",
    options: [
      "The process of identifying, analyzing, and evaluating security risks",
      "The process of implementing security controls",
      "The process of monitoring security incidents",
      "The process of recovering from a security breach",
    ],
    answer: "The process of identifying, analyzing, and evaluating security risks",
  },
  {
    question: "What is incident response?",
    options: [
      "The process of preventing security incidents from occurring",
      "The process of handling and recovering from a security breach or incident",
      "The process of assessing security risks",
      "The process of conducting security audits",
    ],
    answer: "The process of handling and recovering from a security breach or incident",
  },
  {
    question: "What is a security policy?",
    options: [
      "A set of rules and guidelines that define acceptable use and security practices within an organization",
      "A type of software used for enforcing security controls",
      "A hardware device used to protect a network perimeter",
      "A legal document outlining the penalties for cybercrime",
    ],
    answer: "A set of rules and guidelines that define acceptable use and security practices within an organization",
  },
  {
    question: "What is social engineering in security?",
    options: [
      "Using technical exploits to gain access to systems",
      "Manipulating people into divulging confidential information or performing actions that compromise security",
      "Attacking social media platforms",
      "Developing social networking applications",
    ],
    answer: "Manipulating people into divulging confidential information or performing actions that compromise security",
  },
  {
    question: "What is phishing?",
    options: [
      "Installing malware through infected websites",
      "Attempting to acquire sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity",
      "Overloading a server with network traffic",
      "Secretly monitoring a user's computer activity",
    ],
    answer: "Attempting to acquire sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity",
  },
  {
    question: "What is a VPN (Virtual Private Network)?",
    options: [
      "A physical network that is not accessible to the public",
      "A technology that creates a secure, encrypted connection over a less secure network, such as the internet",
      "A type of network hardware used for routing traffic",
      "A software application used for monitoring network activity",
    ],
    answer: "A technology that creates a secure, encrypted connection over a less secure network, such as the internet",
  },
  {
    question: "What is data loss prevention (DLP)?",
    options: [
      "Software that prevents data from being backed up",
      "Strategies and tools used to prevent sensitive data from leaving an organization's control",
      "Techniques for recovering lost data",
      "Methods for encrypting data at rest",
    ],
    answer: "Strategies and tools used to prevent sensitive data from leaving an organization's control",
  },
  {
    question: "What is a honeypot?",
    options: [
      "A highly secure server containing valuable data",
      "A decoy system designed to attract and detect unauthorized access attempts",
      "A network device used for load balancing",
      "A software application used for network monitoring",
    ],
    answer: "A decoy system designed to attract and detect unauthorized access attempts",
  },
  {
    question: "What is steganography?",
    options: [
      "The art and science of writing secret messages in such a way that no one, apart from the sender and intended recipient, suspects the existence of the message",
      "A method for encrypting data using complex algorithms",
      "A technique for compressing data without loss of information",
      "The study of computer viruses and their behavior",
    ],
    answer: "The art and science of writing secret messages in such a way that no one,"
  },
  
  {
    question: "What is steganography?",
    options: [
      "The art and science of writing secret messages in such a way that no one, apart from the sender and intended recipient, suspects the existence of the message",
      "A method for encrypting data using complex algorithms",
      "A technique for compressing data without loss of information",
      "The study of computer viruses and their behavior",
    ],
    answer: "The art and science of writing secret messages in such a way that no one, apart from the sender and intended recipient, suspects the existence of the message",
  },
  {
    question: "What is a security information and event management (SIEM) system?",
    options: [
      "A system that only detects security threats",
      "A system that aggregates and analyzes security logs and events from various sources to provide a comprehensive view of an organization's security posture",
      "A system used for encrypting network traffic",
      "A system that performs regular vulnerability scans",
    ],
    answer: "A system that aggregates and analyzes security logs and events from various sources to provide a comprehensive view of an organization's security posture",
  },
  {
    question: "What is threat intelligence?",
    options: [
      "Information about potential or current threats to an organization's security",
      "Software used to detect and remove malware",
      "Hardware used to protect network perimeters",
      "Legal frameworks for prosecuting cybercriminals",
    ],
    answer: "Information about potential or current threats to an organization's security",
  },
  {
    question: "What is a buffer overflow attack?",
    options: [
      "An attack that floods a network with excessive traffic",
      "An attack that occurs when a program writes beyond the allocated memory buffer, potentially overwriting adjacent memory locations",
      "An attack that tries to guess user passwords",
      "An attack that injects malicious SQL code into database queries",
    ],
    answer: "An attack that occurs when a program writes beyond the allocated memory buffer, potentially overwriting adjacent memory locations",
  },
  {
    question: "What is cross-site scripting (XSS)?",
    options: [
      "An attack that targets the server-side of a web application",
      "An attack where malicious scripts are injected into websites viewed by other users",
      "An attack that tries to steal user's session cookies",
      "An attack that disrupts the availability of a web service",
    ],
    answer: "An attack where malicious scripts are injected into websites viewed by other users",
  },
  {
    question: "What is SQL injection?",
    options: [
      "A technique for optimizing database performance",
      "A code injection technique that might exploit security vulnerabilities in an application's database queries",
      "A method for backing up and restoring SQL databases",
      "A type of database management system",
    ],
    answer: "A code injection technique that might exploit security vulnerabilities in an application's database queries",
  },
  {
    question: "What is a man-in-the-middle (MITM) attack?",
    options: [
      "An attack that occurs when an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
      "An attack that overwhelms a server with requests",
      "An attack that tries to guess encryption keys",
      "An attack that exploits vulnerabilities in network hardware",
    ],
    answer: "An attack that occurs when an attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
  },
  {
    question: "What is a denial-of-service (DoS) attack?",
    options: [
      "An attempt to gain unauthorized access to a system",
      "An attempt to make a machine or network resource unavailable to its intended users by disrupting services",
      "An attempt to steal sensitive data by eavesdropping on network traffic",
      "An attempt to spread malware to multiple systems",
    ],
    answer: "An attempt to make a machine or network resource unavailable to its intended users by disrupting services",
  },
  {
    question: "What is a distributed denial-of-service (DDoS) attack?",
    options: [
      "A DoS attack originating from a single source",
      "A DoS attack originating from multiple coordinated sources",
      "An attack that targets distributed database systems",
      "An attack that exploits vulnerabilities in distributed file systems",
    ],
    answer: "A DoS attack originating from multiple coordinated sources",
  },
  {
    question: "What is ransomware?",
    options: [
      "Malware that steals personal information and sells it on the dark web",
      "Malware that encrypts a victim's files and demands a ransom to restore them",
      "Malware that spreads through email attachments and network shares",
      "Malware that displays intrusive advertisements to the user",
    ],
    answer: "Malware that encrypts a victim's files and demands a ransom to restore them",
  },
  {
    question: "What is spyware?",
    options: [
      "Software designed to damage a computer system",
      "Software that secretly monitors a user's computer activity and transmits the information to a third party",
      "Software used for network monitoring and analysis",
      "Software that protects against malware infections",
    ],
    answer: "Software that secretly monitors a user's computer activity and transmits the information to a third party",
  },
  {
    question: "What is a Trojan horse?",
    options: [
      "A self-replicating program that spreads to other computers",
      "A malicious program that is disguised as legitimate software",
      "A program that encrypts user files and demands a ransom",
      "A program that monitors and records user keystrokes",
    ],
    answer: "A malicious program that is disguised as legitimate software",
  },
  {
    question: "What is a worm?",
    options: [
      "A program that attaches itself to another program to spread",
      "A standalone malware program that replicates itself and spreads to other computers without needing a host file",
      "A program used for legitimate system administration tasks",
      "A type of software vulnerability",
    ],
    answer: "A standalone malware program that replicates itself and spreads to other computers without needing a host file",
  },
  {
    question: "What is a rootkit?",
    options: [
      "A tool used for gaining root or administrator-level access to a computer system",
      "A type of malware designed to hide its presence and the presence of other malicious software on a compromised system",
      "A network protocol used for routing packets",
      "A hardware component that secures the boot process of a computer",
    ],
    answer: "A type of malware designed to hide its presence and the presence of other malicious software on a compromised system",
  },
  {
    question: "What is a keylogger?",
    options: [
      "Software that encrypts the keys pressed by a user",
      "Software or hardware that records the keystrokes entered by a user, often without their knowledge",
      "A type of network analysis tool",
      "A security mechanism that requires a physical key to log in",
    ],
    answer: "Software or hardware that records the keystrokes entered by a user, often without their knowledge",
  },
  {
    question: "What is a botnet?",
    options: [
      "A network of secure servers used for critical infrastructure",
      "A network of compromised computers (bots) controlled by a single attacker (bot herder) and used to perform malicious tasks",
      "A type of network topology used in large organizations",
      "A software application used for automating repetitive tasks",
    ],
    answer: "A network of compromised computers (bots) controlled by a single attacker (bot herder) and used to perform malicious tasks",
  },
  {
    question: "What is a logic bomb?",
    options: [
      "Malicious code that is executed immediately upon installation",
      "Malicious code that is triggered by a specific condition or event",
      "A type of hardware failure that results in data corruption",
      "A security mechanism that detonates after a certain number of failed login attempts",
    ],
    answer: "Malicious code that is triggered by a specific condition or event",
  },
  {
    question: "What is a zero-day exploit?",
    options: [
      "An exploit that is used exactly at midnight",
      "An exploit that targets a software vulnerability that is unknown to the software vendor",
      "An exploit that has no known patch or fix",
      "An exploit that is effective for only 24 hours",
    ],
    answer: "An exploit that targets a software vulnerability that is unknown to the software vendor",
  },
  {
    question: "What is social engineering?",
    options: [
      "Using technical skills to bypass security measures",
      "Manipulating individuals to gain access to systems, information, or physical locations",
      "Analyzing social network data for security threats",
      "Developing security policies based on social norms",
    ],
    answer: "Manipulating individuals to gain access to systems, information, or physical locations",
  },
  {
    question: "What is phishing?",
    options: [
      "A type of denial-of-service attack",
      "A form of social engineering where attackers impersonate trustworthy entities to trick victims into revealing sensitive information",
      "A technique for intercepting network traffic",
      "A method for cracking encryption algorithms",
    ],
    answer: "A form of social engineering where attackers impersonate trustworthy entities to trick victims into revealing sensitive information",
  },
  {
    question: "What is spear phishing?",
    options: [
      "A broad phishing campaign targeting a large number of users",
      "A targeted phishing attack aimed at a specific individual or group within an organization",
      "Phishing attacks conducted over voice calls",
      "Phishing attacks that use physical mail",
    ],
    answer: "A targeted phishing attack aimed at a specific individual or group within an organization",
  },
  {
    question: "What is whaling?",
    options: [
      "A type of phishing attack targeting high-profile individuals such as CEOs or senior executives",
      "A large-scale denial-of-service attack",
      "A technique for hiding data within audio files",
      "A method for analyzing network traffic patterns",
    ],
    answer: "A type of phishing attack targeting high-profile individuals such as CEOs or senior executives",
  },
  {
    question: "What is tailgating (piggybacking) in physical security?",
    options: [
      "Following closely behind an authorized person to gain unauthorized access to a restricted area",
      "Using a fake identification badge to enter a secure facility",
      "Climbing over a physical barrier to gain entry",
      "Tampering with security cameras to disable surveillance",
    ],
    answer: "Following closely behind an authorized person to gain unauthorized access to a restricted area",
  },
  {
    question: "What is dumpster diving in security?",
    options: [
      "Searching through trash receptacles for sensitive information that has not been properly discarded",
      "Exploring underground network cables for vulnerabilities",
      "Analyzing network traffic for discarded packets",
      "A method for recovering deleted data from hard drives",
    ],
    answer: "Searching through trash receptacles for sensitive information that has not been properly discarded",
  },
  {
    question: "What is a security policy?",
    options: [
      "A technical configuration implemented on a firewall",
      "A document that outlines rules, procedures, and guidelines for maintaining the security of an organization's information assets",
      "A legal agreement between a user and a software vendor",
      "A type of encryption algorithm used to protect sensitive data",
    ],
    answer: "A document that outlines rules, procedures, and guidelines for maintaining the security of an organization's information assets",
  },
  {
    question: "What is the principle of least privilege?",
    options: [
      "Granting all users the highest level of access to ensure efficiency",
      "Granting users only the minimum level of access necessary to perform their job functions",
      "Regularly changing user passwords to prevent unauthorized access",
      "Encrypting all sensitive data to protect it from unauthorized disclosure",
    ],
    answer: "Granting users only the minimum level of access necessary to perform their job functions",
  },
  {
    question: "What is defense in depth?",
    options: [
      "Relying on a single strong security measure to protect a system",
      "Implementing multiple layers of security controls to protect assets",
      "Keeping security measures secret to prevent attackers from understanding them",
      "Reacting to security incidents after they occur",
    ],
    answer: "Implementing multiple layers of security controls to protect assets",
  },
  {
    question: "What is a security audit?",
    options: [
      "A technical assessment of software code for vulnerabilities",
      "A systematic evaluation of an organization's security policies, procedures, and practices",
      "A regular backup of all critical data",
      "A process of encrypting all network communication",
    ],
    answer: "A systematic evaluation of an organization's security policies, procedures, and practices",
  },
  {
    question: "What is vulnerability scanning?",
    options: [
      "The process of manually reviewing code for security flaws",
      "The use of automated tools to identify known security weaknesses in systems and applications",
      "The process of exploiting identified vulnerabilities to test security controls",
      "The process of patching and updating software to fix security flaws",
    ],
    answer: "The use of automated tools to identify known security weaknesses in systems and applications",
  },
  {
    question: "What is penetration testing?",
    options: [
      "A method for testing the physical security of a building",
      "A simulated cyberattack conducted to identify and exploit vulnerabilities in a system or network",
      "A process of encrypting all data at rest",
      "A technique for preventing denial-of-service attacks",
    ],
    answer: "A simulated cyberattack conducted to identify and exploit vulnerabilities in a system or network",
  },
  {
    question: "What is incident response?",
    options: [
      "The process of preventing security incidents from occurring",
      "The organized approach to addressing and managing the aftermath of a security breach or cyberattack",
      "The process of assessing and mitigating security risks",
      "The process of conducting regular security awareness training",
    ],
    answer: "The organized approach to addressing and managing the aftermath of a security breach or cyberattack",
  },
  {
    question: "What is digital forensics?",
    options: [
      "The process of recovering and analyzing digital evidence in relation to a computer security incident or crime",
      "A technique for securely erasing data from digital storage devices",
      "The study of digital art and design",
      "A method for encrypting digital communications",
    ],
    answer: "The process of recovering and analyzing digital evidence in relation to a computer security incident or crime",
  },
  {
    question: "What is a security patch?",
    options: [
      "A physical repair to damaged computer hardware",
      "A software update designed to address security vulnerabilities",
      "A type of firewall rule",
      "An encryption algorithm used to protect data in transit",
    ],
    answer: "A software update designed to address security vulnerabilities",
  },
  {
    question: "What is a security baseline?",
    options: [
      "The minimum level of security controls that must be implemented and maintained for a system or network",
      "The highest level of security achievable for a given system",
      "A standard set of security policies and procedures",
      "A tool used for monitoring security events in real-time",
    ],
    answer: "The minimum level of security controls that must be implemented and maintained for a system or network",
  },
  {
    question: "What is security awareness training?",
    options: [
      "Technical training for security professionals",
      "Educational programs designed to inform users about security threats and best practices",
      "Simulated phishing exercises",
      "Regular security audits conducted by external firms",
    ],
    answer: "Educational programs designed to inform users about security threats and best practices",
  },
  {
    question: "What is a security operations center (SOC)?",
    options: [
      "A physical location where security personnel monitor, analyze, and respond to security incidents",
      "A software application used for managing security policies",
      "A hardware device used to enforce network security",
      "A training facility for cybersecurity professionals",
    ],
    answer: "A physical location where security personnel monitor, analyze, and respond to security incidents",
  },
  {
    question: "What is threat modeling?",
    options: [
      "The process of identifying potential security threats and vulnerabilities in a system or application",
      "The process of simulating cyberattacks to test security controls",
      "The process of analyzing network traffic for malicious activity",
      "The process of responding to security incidents",
    ],
    answer: "The process of identifying potential security threats and vulnerabilities in a system or application",
  },
  {
    question: "What is risk management in cybersecurity?",
    options: [
      "The process of eliminating all security risks",
      "The process of identifying, assessing, treating, and monitoring security risks",
      "The process of implementing security controls without assessing risks",
      "The process of ignoring security risks and focusing on functionality",
    ],
    answer: "The process of identifying, assessing, treating, and monitoring security risks",
  },
  {
    question: "What is a business continuity plan (BCP)?",
    options: [
      "A plan for preventing security incidents",
      "A plan for how an organization will recover and restore business functions after a disruption",
      "A plan for marketing and sales activities",

      "A plan for employee training and development",
    ],
    answer: "A plan for how an organization will recover and restore business functions after a disruption",
  },
  {
    question: "What is a business continuity plan (BCP)?",
    options: [
      "A plan for preventing security incidents",
      "A plan for how an organization will recover and restore business functions after a disruption",
      "A plan for marketing and sales activities",
      "A plan for employee training and development",
    ],
    answer: "A plan for how an organization will recover and restore business functions after a disruption",
  },
  {
    question: "What is a disaster recovery plan (DRP)?",
    options: [
      "A plan for preventing natural disasters",
      "A plan focused on the technical aspects of recovering IT infrastructure and systems after a disaster",
      "A plan for managing public relations during a crisis",
      "A plan for financial recovery after significant losses",
    ],
    answer: "A plan focused on the technical aspects of recovering IT infrastructure and systems after a disaster",
  },
  {
    question: "What is data sovereignty?",
    options: [
      "The idea that data is subject to the laws and governance of the country within whose borders it resides",
      "The right of individuals to control their personal data",
      "The technical ability to access data from anywhere in the world",
      "A standard for data encryption and security",
    ],
    answer: "The idea that data is subject to the laws and governance of the country within whose borders it resides",
  },
  {
    question: "What is data localization?",
    options: [
      "The practice of storing data within the geographical borders of the country where it was generated",
      "The process of translating data into different languages",
      "A technique for optimizing data storage and retrieval",
      "A method for visualizing data on a map",
    ],
    answer: "The practice of storing data within the geographical borders of the country where it was generated",
  },
  {
    question: "What is the General Data Protection Regulation (GDPR)?",
    options: [
      "A US federal law that protects consumers' personal information",
      "A European Union regulation on data protection and privacy in the European Economic Area",
      "An international standard for data security management",
      "A set of guidelines for ethical data mining practices",
    ],
    answer: "A European Union regulation on data protection and privacy in the European Economic Area",
  },
  {
    question: "What is the California Consumer Privacy Act (CCPA)?",
    options: [
      "A federal law regulating online advertising",
      "A California state law that grants consumers various rights over their personal information held by businesses",
      "An international agreement on data transfer and storage",
      "A set of best practices for data anonymization",
    ],
    answer: "A California state law that grants consumers various rights over their personal information held by businesses",
  },
  {
    question: "What is a blockchain?",
    options: [
      "A centralized database managed by a single entity",
      "A distributed, immutable ledger that records transactions across many computers",
      "A type of encryption algorithm used in cryptocurrencies",
      "A network protocol for secure peer-to-peer communication",
    ],
    answer: "A distributed, immutable ledger that records transactions across many computers",
  },
  {
    question: "What is cryptocurrency?",
    options: [
      "Traditional fiat currency in digital form",
      "A digital or virtual currency that uses cryptography for security",
      "A type of online payment system that does not use encryption",
      "A government-backed digital currency",
    ],
    answer: "A digital or virtual currency that uses cryptography for security",
  },
  {
    question: "What is Bitcoin?",
    options: [
      "The first decentralized cryptocurrency",
      "A type of blockchain technology used for supply chain management",
      "A secure protocol for online voting",
      "A platform for building decentralized applications",
    ],
    answer: "The first decentralized cryptocurrency",
  },
  {
    question: "What is Ethereum?",
    options: [
      "A peer-to-peer file sharing protocol",
      "A decentralized platform that enables the creation of smart contracts and decentralized applications (dApps)",
      "A type of hardware wallet for storing cryptocurrencies",
      "A secure messaging application using blockchain technology",
    ],
    answer: "A decentralized platform that enables the creation of smart contracts and decentralized applications (dApps)",
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legally binding agreement written in code and stored on a blockchain that automatically executes when certain conditions are met",
      "A traditional legal contract that has been digitized",
      "A type of software license that automatically expires after a certain period",
      "An agreement between two parties secured using cryptographic methods",
    ],
    answer: "A legally binding agreement written in code and stored on a blockchain that automatically executes when certain conditions are met",
  },
  {
    question: "What is a decentralized application (dApp)?",
    options: [
      "A traditional software application that runs on a centralized server",
      "An application that runs on a decentralized network, such as a blockchain",
      "A mobile application that does not require an internet connection",
      "A web application that uses only client-side technologies",
    ],
    answer: "An application that runs on a decentralized network, such as a blockchain",
  },
  {
    question: "What is Web3?",
    options: [
      "The first version of the World Wide Web",
      "The current version of the internet focused on social media and mobile applications",
      "A decentralized vision of the internet built on blockchain technology and other peer-to-peer protocols",
      "A high-speed internet protocol for data streaming",
    ],
    answer: "A decentralized vision of the internet built on blockchain technology and other peer-to-peer protocols",
  },
  {
    question: "What is a non-fungible token (NFT)?",
    options: [
      "A type of cryptocurrency that can be exchanged one-to-one with another",
      "A unique digital asset that represents ownership of a specific item or piece of content",
      "A standard for creating interoperable digital currencies",
      "A method for securing digital transactions using cryptography",
    ],
    answer: "A unique digital asset that represents ownership of a specific item or piece of content",
  },
  {
    question: "What is the metaverse?",
    options: [
      "The physical universe as we know it",
      "A persistent, interconnected virtual world that users can interact with using various devices",
      "A type of social media platform focused on virtual avatars",
      "A high-speed network infrastructure for virtual reality applications",
    ],
    answer: "A persistent, interconnected virtual world that users can interact with using various devices",
  },
  {
    question: "What is augmented reality (AR)?",
    options: [
      "A fully immersive virtual environment",
      "A technology that overlays computer-generated images onto the real world, providing an enhanced view",
      "A technique for creating realistic 3D models",
      "A method for tracking objects in a video stream",
    ],
    answer: "A technology that overlays computer-generated images onto the real world, providing an enhanced view",
  },
  {
    question: "What is virtual reality (VR)?",
    options: [
      "A technology that overlays digital information onto the real world",
      "A fully immersive, simulated experience that can transport users into a different environment",
      "A technique for compressing video files for online streaming",
      "A method for creating interactive 3D graphics for web browsers",
    ],
    answer: "A fully immersive, simulated experience that can transport users into a different environment",
  },
  {
    question: "What is artificial intelligence (AI)?",
    options: [
      "The simulation of natural intelligence in machines that are programmed to think and act like humans",
      "A type of computer programming that uses only binary code",
      "The study of the human brain and nervous system",
      "A technique for automating industrial processes using robots",
    ],
    answer: "The simulation of natural intelligence in machines that are programmed to think and act like humans",
  },
  {
    question: "What is machine learning (ML)?",
    options: [
      "A subset of artificial intelligence that enables systems to learn from data without being explicitly programmed",
      "A type of programming where machines are given explicit instructions for every task",
      "A process of automating physical tasks using robots and sensors",
      "A technique for optimizing database query performance using AI algorithms",
    ],
    answer: "A subset of artificial intelligence that enables systems to learn from data without being explicitly programmed",
  },
  {
    question: "What is deep learning?",
    options: [
      "A type of machine learning that uses neural networks with multiple layers to analyze complex data",
      "A machine learning technique that requires very small datasets for training",
      "A type of artificial intelligence that focuses solely on logical reasoning",
      "A machine learning algorithm used only for natural language processing",
    ],
    answer: "A type of machine learning that uses neural networks with multiple layers to analyze complex data",
  },
  {
    question: "What is natural language processing (NLP)?",
    options: [
      "A field of computer science focused on enabling computers to understand, interpret, and generate human language",
      "A type of programming language designed to mimic human speech",
      "A process of translating text from one human language to another using AI",
      "A technique for improving the speed and accuracy of speech recognition software",
    ],
    answer: "A field of computer science focused on enabling computers to understand, interpret, and generate human language",
  },
  {
    question: "What is computer vision?",
    options: [
      "A field of artificial intelligence that enables computers to 'see' and interpret images and videos",
      "A type of display technology used in virtual reality headsets",
      "A technique for compressing digital images without losing quality",
      "A method for tracking the movement of objects in a video stream",
    ],
    answer: "A field of artificial intelligence that enables computers to 'see' and interpret images and videos",
  },
  {
    question: "What is robotics?",
    options: [
      "The science and technology of designing, constructing, operating, and applying robots",
      "A branch of artificial intelligence focused on creating virtual agents",
      "The study of biomechanics and human movement",
      "A field of engineering concerned with automated manufacturing processes",
    ],
    answer: "The science and technology of designing, constructing, operating, and applying robots",
  },
  {
    question: "What is the Internet of Things (IoT)?",
    options: [
      "A network protocol used for communication between web servers",
      "The concept of connecting everyday objects to the internet, allowing them to collect and exchange data",
      "A type of cloud computing service for data storage",
      "A high-speed wireless communication standard",
    ],
    answer: "The concept of connecting everyday objects to the internet, allowing them to collect and exchange data",
  },
  {
    question: "What is edge computing?",
    options: [
      "Processing data in a centralized cloud infrastructure",
      "Processing data at or near the source of the data, reducing latency and bandwidth usage",
      "A type of network topology for connecting IoT devices",
      "A method for securing communication between cloud and IoT devices",
    ],
    answer: "Processing data at or near the source of the data, reducing latency and bandwidth usage",
  },
  {
    question: "What is cloud computing?",
    options: [
      "Using local servers for all computing needs",
      "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')",
      "A type of high-speed internet connection",
      "A method for backing up data to physical storage devices",
    ],
    answer: "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')",
  },
  {
    question: "What is serverless computing?",
    options: [
      "Running applications on physical servers managed by the user",
      "An execution model where the cloud provider dynamically manages the allocation and provisioning of servers, allowing developers to focus on writing code",
      "A type of peer-to-peer network architecture",
      "A method for running applications entirely on client-side devices",
    ],
    answer: "An execution model where the cloud provider dynamically manages the allocation and provisioning of servers, allowing developers to focus on writing code",
  },
  {
    question: "What is a microservice architecture?",
    options: [
      "A software architecture where an application is structured as a single monolithic unit",
      "A software architecture where an application is composed of small, independent services that communicate over a network",
      "A client-server architecture with a single backend server",
      "A peer-to-peer architecture where all components are equal",
    ],
    answer: "A software architecture where an application is composed of small, independent services that communicate over a network",
  },
  {
    question: "What is a monolithic architecture?",
    options: [
      "An architecture where an application is broken down into small, independent services",
      "An architecture where all components of an application are tightly integrated into a single, indivisible unit",
      "A distributed architecture with multiple independent databases",
      "A cloud-based architecture that scales automatically",
    ],
    answer: "An architecture where all components of an application are tightly integrated into a single, indivisible unit",
  },
  {
    question: "What is DevOps?",
    options: [
      "A software development methodology focused solely on coding",
      "A set of practices that automates the processes between software development and IT teams, enabling them to build, test, and release software faster and more reliably",
      "A type of database management system",
      "A hardware infrastructure for deploying software applications",
    ],
    answer: "A set of practices that automates the processes between software development and IT teams, enabling them to build, test, and release software faster and more reliably",
  },
  {
    question: "What is Continuous Integration (CI)?",
    options: [
      "The practice of frequently merging code changes into a central repository, followed by automated building and testing",
      "The process of manually integrating different software components",
      "A method for continuously deploying software to production",
      "A technique for continuously monitoring application performance",
    ],
    answer: "The practice of frequently merging code changes into a central repository, followed by automated building and testing",
  },
  {
    question: "What is Continuous Delivery (CD)?",
    options: [
      "The practice of continuously deploying every code change to production automatically",
      "The practice of ensuring that software can be released to production at any time",
      "The continuous integration of code changes",
      "The continuous monitoring of application logs",
    ],
    answer: "The practice of ensuring that software can be released to production at any time",
  },
  {
    question: "What is Continuous Deployment?",
    options: [
      "The manual process of deploying software to production",
      "The practice of automatically deploying every code change that passes all stages of the production pipeline to the end-users",
      "The continuous integration of code changes into a shared repository",
      "The continuous monitoring of infrastructure performance",
    ],
    answer: "The practice of automatically deploying every code change that passes all stages of the production pipeline to the end-users",
  },
  {
    question: "What is Infrastructure as Code (IaC)?",
    options: [
      "Manually configuring server infrastructure",
      "Managing and provisioning infrastructure using code and automation tools",
      "Documenting the existing infrastructure setup",
      "Monitoring the performance of the infrastructure",
    ],
    answer: "Managing and provisioning infrastructure using code and automation tools",
  },
  {
    question: "What is a container (e.g., Docker)?",
    options: [
      "A virtual machine that runs a full operating system",
      "A lightweight, portable, and executable image that contains everything needed to run an application, including code, runtime, libraries, and dependencies",
      "A physical server dedicated to running a single application",
      "A network device used for load balancing",
    ],
    answer: "A lightweight, portable, and executable image that contains everything needed to run an application, including code, runtime, libraries, and dependencies",
  },
  {
    question: "What is container orchestration (e.g., Kubernetes)?",
    options: [
      "Manually managing individual containers",
      "Automating the deployment, scaling, and management of containerized applications",
      "Building container images from source code",
      "Monitoring the resource usage of containers on a single machine",
    ],
    answer: "Automating the deployment, scaling, and management of containerized applications",
  },
  {
    question: "What is a RESTful API?",
    options: [
      "A type of database query language",
      "An architectural style for designing networked applications based on HTTP requests and responses",
      "A tool for managing server infrastructure",
      "A protocol for secure communication over the internet",
    ],
    answer: "An architectural style for designing networked applications based on HTTP requests and responses",
  },
  {
    question: "What is GraphQL?",
    options: [
      "A type of database management system",
      "A query language for APIs that allows clients to request exactly the data they need",
      "A protocol for real-time communication over the web",
      "A framework for building user interfaces",
    ],
    answer: "A query language for APIs that allows clients to request exactly the data they need",
  },
  
  ]