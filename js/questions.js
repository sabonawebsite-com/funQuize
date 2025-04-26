const questions = [
  {
    question:
      "Which one of the following is concerned with the meaning of a sentence in knowledge representation?",
    options: ["Structure", "Computational aspect", "Semantics", "Syntax"],
    answer: "Semantics",
  },
  {
    question:
      "Which one of the following is an attack performed by wiretapping a network and illicitly copy files and programs?",
    options: ["Interception", "Fabrication", "Interruption", "Modification"],
    answer: "Interception",
  },
  {
    question:
      "If a company wants to develop a software for its use, and if the company wants partial functionality to be delivered to end users without unreasonable delay. Which software development process model is appropriate for such requirement?",
    options: ["Waterfall", "Incremental", "Spiral", "Evolutionary"],
    answer: "Incremental",
  },
  {
    question: "Which one of the following cannot affect proper functioning of a system?",
    options: [
      "Improperly placed heater",
      "Humidity",
      "Lightning strikes",
      "UPS(uninterruptible power supply)",
    ],
    answer: "UPS(uninterruptible power supply)",
  },
  {
    question:
      "_________ is the process of selecting appropriate query execution strategy?",
    options: [
      "Query graph",
      "Query optimization",
      "Query tree",
      "Query processing",
    ],
    answer: "Query optimization",
  },
  {
    question:
      "Let KPRIV-A and KPUB-A be private and public keys for Awgichew and KPRIV-M and KPUB-M are private and public keys for Meron respectively. If Awgichew would like to send secured message to Meron, which one of the following scenario is not correct if they are using asymmetric keys?",
    options: [
      "Awgichew uses Meron's private key KPRIV-M to encrypt his plain text",
      "Awgichew uses his KPUB-A to encrypt his plain text",
      "Meron can decode the encrypted text using her KPRIV-M",
      "Meron can decode the scrambled text using her KPUB-M",
    ],
    answer: "Awgichew uses his KPUB-A to encrypt his plain text",
  },
  {
    question:
      "Which one of the following agents works by searching and matching the rules defined by percent and stored internal state?",
    options: [
      "Model-based reflex agent",
      "Goal-based agent",
      "Simple reflex agent",
      "Utility based agent",
    ],
    answer: "Model-based reflex agent",
  },
  {
    question: "Which symbol is used to write a single line comment in JavaScript?",
    options: ["<?", "<! >", "//", "&&"],
    answer: "//",
  },
  {
    question: "Which one of the following is correct about symmetric and asymmetric keys?",
    options: [
      "Both are authentication methods",
      "Symmetric key requires the sender and receiver to have a public and private key",
      "Asymmetric key requires the sender and receiver to have a public and private key",
      "Both are recovery methods",
    ],
    answer: "Asymmetric key requires the sender and receiver to have a public and private key",
  },
  {
    question:
      "If you want to test individual sub-systems of software, which phase of software testing is appropriate?",
    options: [
      "Integration testing",
      "Unit testing",
      "System testing",
      "Acceptance testing",
    ],
    answer: "Unit testing",
  },
  {
    question:
      "Suppose you are administrating the network. You would like to know list of protocol on use, the foreign address and port numbers, the local address and port number and the state of the connection. Which command would you use to accomplish that?",
    options: ["traceroute", "ipconfig", "netstart", "nslookup"],
    answer: "netstart",
  },
  {
    question:
      "When we use a hash table data structure, our hash function should map the expected inputs (keys) as evenly as possible over its output range(indexes). This property of good hash function is known as",
    options: ["Uniformity", "Determinism", "Continuity", "Data normalization"],
    answer: "Uniformity",
  },
 
  {
    question:
      "Which one of the following is false about sequential and binary searching algorithm?",
    options: [
      "Binary searching algorithm can work on list of data which is stored in descending order",
      "Sequential and binary searching algorithm are not equal in terms of memory efficiency",
      "Sequential searching algorithm can work on sorted and unsorted list of data",
      "Considering worst case analysis binary searching algorithm is faster than sequential searching on sorted data.",
    ],
    answer:
      "Sequential searching algorithm can work on sorted and unsorted list of data",
  },
  {
    question:
      "Which of the following term refers to the number of symbols composing a string?",
    options: ["Length", "Symbols", "Alphabet", "Word"],
    answer: "Alphabet",
  },
  {
    question:
      "_________ is a way of combining analogue or digital signals into one single over a common or shared medium.",
    options: [
      "Point-to-point",
      "Broadcasting",
      "Synchronization",
      "Multicasting",
    ],
    answer: "Multicasting",
  },
  {
    question:
      "Which generation's programming languages are used in Artificial intelligence and Expert systems?",
    options: [
      "Fifth generation languages",
      "Second generation languages",
      "Fourth generation languages",
      "Third generation languages",
    ],
    answer: "Fifth generation languages",
  },
  {
    question:
      "Which attribute of INPUT tag defines the number of characters that can be displayed in a text box without scrolling?",
    options: ["SIZE", "MAXLENGTH", "VALUE", "TYPE"],
    answer: "MAXLENGTH",
  },
  {
    question:
      "Which characteristics of requirement specify that the requirements should be phrased so that there is one and only one interpretation for it?",
    options: ["Correct", "Unambiguous", "Feasible", "Verifiable"],
    answer: "Unambiguous",
  },
  {
    question:
      "Which method can be used to divide a browser into smaller sub windows so that each sub window displaying a different HTML document?",
    options: ["Using paragraphs", "Using frames", "Using images", "Using tables"],
    answer: "Using frames",
  },
  {
    question:
      "Which one of the following is not correct when mapping ER diagrams to relational tables?",
    options: [
      "Multi-valued attributes are mapped to new tables",
      "Foreign key are used to map relationships to create relation between tables",
      "Table names are directly mapped from entity names",
      "Composite attribute are mapped as it is",
    ],
    answer: "Table names are directly mapped from entity names",
  },
  {
    question:
      "Which data update allows data item to be updated the moment it is modified in cache?",
    options: [
      "In-Place Update",
      "Immediate update",
      "Shadow update",
      "Deferred update",
    ],
    answer: "Immediate update",
  },
  {
    question:
      "Which mutual exclusion mechanism keeps track of turns to enter the critical region using an integer variable, which is initially-0, and another process waits until it turns to 1?",
    options: [
      "Lock variable",
      "Disabling interrupts",
      "Strict alteration",
      "Race condition",
    ],
    answer: "Lock variable",
  },
 

  {
    question:
      "Uses the knowledge of the characteristics of the relational algebra operations and the relationship between the operators to optimize the query?",
    options: [
      "Database approach",
      "Heuristic approach",
      "Deterministic approach",
      "Hierarchical data model approach",
    ],
    answer: "Database approach",
  },
  {
    question:
      "Which one of the following is correct ordering in language processing system?",
    options: [
      "Source program ->Preprocessor -> Assembler -> Compiler Linker/Loader -> target machine code",
      "Source program -> Preprocessor ->Linker/Loader -> Compiler/Assembler ->target machine code",
      "Source program Compiler -> Assembler -> Preprocessor > Linker/Loader -> target machine code",
      "Source program > Preprocessor -> Compiler -> Assembler -> Linker/Loader -> target machine code",
    ],
    answer:
      "Source program ->Preprocessor -> Assembler -> Compiler Linker/Loader -> target machine code",
  },
  {
    question:
      "Which one of the following is a wrong coupling of problem and its environment?",
    options: [
      "Contingency problem -> partially observable, non-deterministic",
      "Multiple state problem deterministic, partially observable",
      "Exploration problem -> partially observable, deterministic",
      "Single state problem-> fully observable, deterministic",
    ],
    answer: "Multiple state problem deterministic, partially observable",
  },
  {
    question:
      "Which one of the following is responsible for controlling the flow of bits between memory and controllers with no need for a constant intervention from the CPU?",
    options: [
      "Disk fragmenting",
      "Memo, manager",
      "Device controller",
      "Direct memory access",
    ],
    answer: "Direct memory access",
  },
  {
    question:
      "A cryptographic program replaces an alphabet from a text message using its successor alphabet and creates cipher text. Which one best describes the program?",
    options: [
      "Transliteration",
      "Translation",
      "Transformation",
      "Substitution",
    ],
    answer: "Substitution",
  },
  {
    question:
      'Which one of the following messaging communication best explains the statement: "Until the message is received, the sending process is blocked"?',
    options: [
      "Blocking receive",
      "Non-block receive",
      "Non-block sending",
      "Blocking send",
    ],
    answer: "Blocking send",
  },
  {
    question:
      "Which theory provides mechanisms for classifying combinatorial problems and measuring the computational resources necessary to solve them?",
    options: [
      "Computability theory",
      "Set theory",
      "Complexity theory",
      "Automata theory",
    ],
    answer: "Complexity theory",
  },
  {
    question:
      'Which one of the following is correct first order logic for the statement "There is someone standing at the door and is tall"?',
    options: [
      "Vx (StandingAt (x; door)",
      "Vx (StandingAt (x; door) ^tall(x)) ",
      "∃x (StandingAt (x; door)^ tall(x))",
      "∃x (StandingAt (x; door) -> toll(x))",
    ],
    answer: "∃x (StandingAt (x; door)^ tall(x))",
  },
  {
    question:
      "_________ is the component of the operating system that is responsible to decide which process to run first among ready processes.",
    options: [
      "Memory manager",
      "Inter process communication",
      "Disk manager",
      "Scheduler",
    ],
    answer: "Scheduler",
  },
  {
    question:
      "First design the very high level structure of the system. Then gradually work down to detailed decisions about low-level constructs. Which design approach follows the given strategy?",
    options: ["Bottom-up", "System design", "Top-down", "Hybrid"],
    answer: "Top-down",
  },
  {
    question: "Which one of the following is false regarding Exceptions in Java?",
    options: [
      "We cannot create our own exception classes  by extending Exception class",
      "Exception class describes errors caused by your program and external circumstances",
      "Runtime Exception class describes programming errors such as bad casting and numeric errors",
      "All Java exception classes inherit directly or indirectly from Throwable class",
    ],
    answer:
      "We cannot create our own exception classes  by extending Exception class",
  },
  {
    question: "A traditional phone call is an example of",
    options: [
      "Packet switching",
      "Multiplexing",
      "Broadcasting",
      "Circuit switching",
    ],
    answer: "Circuit switching",
  },
  {
    question: "Which one of the following is false about style sheets?",
    options: [
      "Style sheets increase accessibility",
      "Style sheets creates consistent appearance",
      "Style sheets make it easy to maintain HTML pages",
      "Style sheets do not reduce web page file size",
    ],
    answer: "Style sheets do not reduce web page file size",
  },
  {
    question: "Which one of the following is not correct about logic design?",
    options: [
      "It consider a particular DBMS",
      "Normalization is undertaken in logical phase",
      "It is based on specific data model",
      "It is independent from physical considerations",
    ],
    answer: "It is independent from physical considerations",
  },
  {
    question: "Which one of the following is an attack detection mechanism?",
    options: ["Physical control", "Audit log", "Password", "Encryption"],
    answer: "Audit log",
  },
  {
    question:
      "Which SQL command would you use if you want to specify constraints to be applied on tuples?",
    options: ["GRANT", "SELECT", "REVOKE", "CHECK"],
    answer: "CHECK",
  },
  {
    question:
      "Which data management approach allows application programs to define and manage their own data?",
    options: [
      "Manual approach",
      "Database approach",
      "Hierarchical approach",
      "Traditional file based approach",
    ],
    answer: "Database approach",
  },
  {
    question: "What is the output of the following C++ fragment code? int p, q, n; $p=q=n=8; $ p+=n; $ p/=q cout<<p;",
    options: ["16", "2", "24", "1"],
    answer: "16",
  },
  {
    question: "Which database constraints are specified in the data definition language?",
    options: [
      "Implicit or inherent model based constraints",
      "Semantic constraints",
      "Application based constraints",
      "Schema based constraints",
    ],
    answer: "Implicit or inherent model based constraints",
  },
  {
    question:
      "Which one of the following is a communication pathway connecting transmitting signals in binary digits between two or more devices?",
    options: ["Memory", "Register", "CPU", "Bus"],
    answer: "Bus",
  },
  {
    question:
      "Which one of the following sorting algorithm requires large memory space to sort data?",
    options: ["Insertion sort", "Selection sort", "Merge sort", "Quick sort"],
    answer: "Merge sort",
  },
  {
    question:
      "In which phase of the two phase locking protocol can a transaction obtain locks?",
    options: ["Release phase", "Roll back phase", "Shrinking phase", "Growing phase"],
    answer: "Growing phase",
  },
  {
    question: "Which one of the following is not the task of lexical analyzer?",
    options: [
      "Group characters into lexemes",
      "Output a sequence of tokens",
      "Read the input characters",
      "Build syntax tree",
    ],
    answer: "Build syntax tree",
  },
  {
    question:
      "Which one of the following best describes for a program that seems friendly and legitimate but contains hidden malicious codes and harms a system?",
    options: ["Trojan", "Malware", "Virus", "Worm"],
    answer: "Trojan",
  },
  {
    question: "Look at the following fragment code:  int a=6  int b=5  while(a>b) {  Cout<<\"computer science program\"<<endl;  } Which algorithm property is not satisfied by the above C++ code algorithm?",
    options: ["Sequential", "Feasibility", "Finiteness", "Definiteness"],
    answer: "Finiteness",
  },
  
    {
    question:
      "Since internet communication is based on an IP address, the domain name has to be translated to its corresponding IP address. Which of the following is responsible for the translation?",
    options: ["DNS", "SMTP", "FTP", "DHCP"],
    answer: "DNS",
  },
  {
    question:
      "Which program puts together the entire executable object files into memory for execution or running?",
    options: ["Editor", "Debugger", "Linker", "Loader"],
    answer: "Linker",
  },
  {
    question:
      "Machine language is grouped under__________ generation of programming language.",
    options: [
      "2nd generation language",
      "3rd generation language",
      "4th generation language",
      "1st generation language",
    ],
    answer: "1st generation language",
  },
  {
    question:
      "Which one of the following is not problem if concurrency is not controlled properly?",
    options: [
      "Lost update problem",
      "Consistent database",
      "Incorrect summary",
      "Dirty read",
    ],
    answer: "Consistent database",
  },
  {
    question: "Which one of the following is false about the role of parser in compiling process?",
    options: [
      "Parser builds the parse tree",
      "Parser attempts to correct or recover few errors",
      "Parser cannot perform context free syntax analysis",
      "Parser produces appropriate error messages",
    ],
    answer: "Parser cannot perform context free syntax analysis",
  },
  {
    question:
      "A malicious program that once installed on your machine can collect all keystrokes including username, password, emails, credit card numbers and other sensitive information is:",
    options: ["Rootkit", "Worms", "Key logger", "Trojan"],
    answer: "Key logger",
  },
  {
    question:
      "Which memory is characterized by the need for periodic change in order to maintain data storage?",
    options: ["Static RAM", "Dynamic RAM", "Disk", "Tape"],
    answer: "Dynamic RAM",
  },
  {
    question: "Which one of the following is not correct?",
    options: [
      "A rational agent know the result of its action, but unrealistic",
      "Rational agent take action but not 100% sure of success",
      "Rational agent act to achieve utmost success based on information",
      "An omniscience agent takes actions for 100% sure of success",
    ],
    answer: "An omniscience agent takes actions for 100% sure of success",
  },
  {
    question:
      "What should compilers of high level programming languages do to evaluate expressions?",
    options: [
      "Convert infix notation to postfix notation",
      "Convert postfix notation to prefix notation",
      "Evaluate infix notation to prefix notation",
      "Convert postfix to infix notation",
    ],
    answer: "Convert infix notation to postfix notation",
  },
  {
    question: "________ finds the shortest path to the goal based on cost.",
    options: [
      "Depth first search",
      "Iterative deepening",
      "Uniform cost search",
      "Breath first search",
    ],
    answer: "Uniform cost search",
  },
  {
    question: "Which one of the following is not correct about magnetic disk?",
    options: [
      "Its minimum block is a sector",
      "Its head is stationary during read/write",
      "Its data is organized in tracks",
      "It needs continuous power to keep bit contents",
    ],
    answer: "Its minimum block is a sector",
  },
  {
    question: "Which one of the following is not correct about networking models?",
    options: [
      "TCP/IP model is a protocol model",
      "A reference model has no implementation specification",
      "A network designer can use either of TCP/IP or OSL, or both",
      "Open system interconnection (OSI) is a protocol model",
    ],
    answer: "A reference model has no implementation specification",
  },
  {
    question: "What will be the out of the following JavaScript statement? Math.abs(-9)",
    options: ["9", "-9", "1", "0"],
    answer: "9",
  },
  {
    question: "Which one of the following is not correct about IPv4?",
    options: [
      "IT uses 128-bits",
      "It has shortages of address space",
      "It is characterized by slow routing and memory intensive",
      "It uses 32-bits",
    ],
    answer: "IT uses 128-bits",
  },
  {
    question: "Which one is true about the following JavaScript statement? Document.bgcolor",
    options: [
      "bgcolor is method",
      "document is property",
      "bgcolor is property",
      "document is method",
    ],
    answer: "bgcolor is property",
  },
  {
    question: "Which one of the following is not an example of divide and conquer algorithm?",
    options: ["Quick sort", "Binary searching", "Merge sort", "Heap sort"],
    answer: "Heap sort",
  },
  {
    question:
      "Which data structure is the most appropriate for sharing a printer in a network environment?",
    options: ["Stack", "Binary search tree", "Full binary tree", "Queue"],
    answer: "Queue",
  },
  {
    question:
      "Assuming there is a rectangle object, what getArea, getPerimeter can represent?",
    options: ["Attribute", "Property", "Data field", "Behavior"],
    answer: "Attribute",
  },
  {
    question:
      "Which one of the following is false about abstract classes and abstract methods?",
    options: [
      "We can create instances of abstract classes using the new operator",
      "Implementation of abstract methods is provided by the subclasses",
      "A class that contains abstract methods must be defined as abstract",
      "Abstract methods are defined without implementation in the superclass",
    ],
    answer:
      "We can create instances of abstract classes using the new operator",
  },
  {
    question: "Look at the following PHP line:  $list = array(“outside” = > “red”,  “inside” = > “brown”,  “top” = > “black”,  “under” = > “blue”); What is the index of data value black?",
    options: ["Brown", "Outside", "Under", "Top"],
    answer: "Top",
  },
  {
    question: "Which operator is used to create an array?",
    options: ["new", "declare", "static", "construct"],
    answer: "new",
  },
  {
    question: "What is the output of the following C++ fragment code? a:  cout<<”Graduating “;  goto b;  c:  cout<<” Year “;  goto a;  b: cout<<”fourth “;",
    options: [
      "Graduating Year Fourth",
      "Graduating Fourth Year",
      "Year Fourth Graduating",
      "Graduating Fourth Year",
    ],
    answer: "Graduating Year Fourth",
  },
  {
    question: "What is the output of the following java fragment code? For (int i = 2; i < = 11; I = I + 2)  {  if(i%4 = = 0)  system.out.print(i*i) + “ “);  } ",
    options: ["16 64 100 8 4", "4 16 36 64 100", "16 64 4 8 64", "4 8 16 64 4"],
    answer: "4 16 36 64 100",
  },
  {
    question: "Which one of the following is not transmission impairments?",
    options: ["Synchronization", "Crosstalk", "Impulse", "Distortion"],
    answer: "Synchronization",
  },
  {
    question: "Look at the following fragment code: struct car {  char car_model[25];  float price; }; car *c1; Which one of the following is correct C++ statement?",
    options: [
      "Cout<<c1<<price;",
      "Cin>>c1.car_model;",
      "C1.price = 150000;",
      "Cout<<c1 -> car_mode;",
    ],
    answer: "C1.price = 150000;",
  },
  {
    question: "Which one of the following is false about client-side scripting?",
    options: [
      "Script languages are not full-featured",
      "Script languages can access client’s hardware",
      "Script languages have limited capabilities",
      "Script languages are embedded as plain text, and interpreted by applications",
    ],
    answer: "Script languages can access client’s hardware",
  },
  {
    question: "Which one of the following is true about Queue data structure?",
    options: [
      "Queue data structure applies first come first served policy",
      "Queue data structure uses last in first out rule",
      "Queue data structure does not have efficient basic operations",
      "Queue data structure cannot be implemented using linked list",
    ],
    answer: "Queue data structure cannot be implemented using linked list",
  },
  {
    question: "Which one of the following is not correct about IP address and DHCP",
    options: [
      "An IP leased by the DHCP for a host is permanent",
      "DHCP assures connectivity ever users move from location to location",
      "The IP address are chosen from a predetermined range of address",
      "DHCP allows a host to acquire an IP address automatically",
    ],
    answer: "An IP leased by the DHCP for a host is permanent",
  },
  {
    question:
      "Which one of the following is not a condition for two operations in a schedule to  be said to conflict?",
    options: [
      "If they access the same item X",
      "If they belong to the same transactions",
      "If Write_item (X) is at least one of the operations",
      "If they belong to different transactions",
    ],
    answer: "If they belong to different transactions",
  },
  {
    question:
      "In case of any shut down during transaction before commit which of the following statement is done  automatically?",
    options: ["View", "Commit", "Rollback", "Flashback"],
    answer: "Rollback",
  },
  {
    question:
      "Which one of the following commands is not used for removing (or deleting) a relation forms the SQL database?",
    options: ["Delete", "Drop", "Remove", "UPDATE"],
    answer: "UPDATE",
  },
  {
    question:
      "A system is in a ______ state if there exists a set of transactions such that every transaction in the set is waiting for another transaction in the set.",
    options: ["Idle", "Waiting", "Deadlock", "Ready"],
    answer: "Deadlock",
  },
  {
    question: "What is a Functional Requirement?",
    options: [
      "specifies the tasks the program must complete",
      "specifies the tasks the program should not complete",
      "specifies the tasks the program must not work",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    question:
      "_________ is a software development life cycle model that is chosen if the development team has  less experience on similar projects.",
    options: [
      "Iterative Enhancement Model",
      "RAD",
      "Spiral",
      "Waterfall",
    ],
    answer: "Waterfall",
  },
  {
    question: "In which step of SDLC actual programming of software code is done?",
    options: [
      "Development and Documentation",
      "Maintenance and Evaluation",
      "Design",
      "Analysis",
    ],
    answer: "Development and Documentation",
  },
  {
    question: "Software Debugging is known as _________________",
    options: [
      "identifying the task to be computerized",
      "creating program code",
      "creating the algorithm",
      "finding and correcting errors in the program code",
    ],
    answer: "finding and correcting errors in the program code",
  },
  {
    question:
      "_____________ is a probabilistic algorithm where a data packet is sent by the router to any one of its neighbors randomly.",
    options: [
      "Adaptive routing algorithm",
      "Flooding routing algorithm",
      "Random walks routing algorithm",
      "Distributed routing algorithm",
    ],
    answer: "Random walks routing algorithm",
  },
  {
    question:
      "Which network address translation protocol solves the task of address resolution using port number?",
    options: [
      "Network Address Translation",
      "Port Address Translation",
      "Dynamic Address Translation",
      "Static address translation",
    ],
    answer: "Port Address Translation",
  },
  {
    question:
      "_____________ is responsible for converting the higher level protocol addresses to physical Network  Addresses.",
    options: [
      "Address Resolution Protocol (ARP)",
      "Reverse Address Resolution Protocol (RARP)",
      "Bootstrap Protocol (BOOTP)",
      "Internet Control Message Protocol (ICMP)",
    ],
    answer: "Address Resolution Protocol (ARP)",
  },
  {
    question: "Given the network address of 172.16.0.0/19, which of the following is correct?",
    options: [
      "It provides 8 subnets, 32 IP addresses each",
      "It provides 8 subnets, 8,190 hosts each",
      "It provides 8 subnets, 30 hosts each",
      "It provides 8 subnets, 2,046 IP addresses each",
    ],
    answer: "It provides 8 subnets, 32 IP addresses each",
  },
  {
    question:
      "A network device that provides the physical interface between computer and cabling is known as________.",
    options: ["Switch", "Router", "NIC", "Repeater"],
    answer: "NIC",
  },
  {
    question: "Which of the following is not the function of DHCP server?",
    options: [
      "It grants an IP address when receives a request from a client.",
      "It maintains the information about client configuration parameters.",
      "It maintains a database of available IP addresses.",
      "It grants an IP address when sender request from a client.",
    ],
    answer: "It grants an IP address when sender request from a client.",
  },
  {
    question: "Which one of the following is not true?",
    options: [
      "kernel is the program that constitutes the central core of the operating system",
      "kernel is the first part of operating system to load into memory during booting",
      "kernel is made of various modules which cannot be loaded in running operating system",
      "kernel remains in the memory during the entire computer session",
    ],
    answer:
      "kernel is made of various modules which cannot be loaded in running operating system",
  },
  {
    question:
      "Which one of the following circuits requires memory to store the state of the output?",
    options: [
      "Combinational circuit",
      "Sequential circuits",
      "Logical circuit",
      "Physical circuit",
    ],
    answer: "Sequential circuits",
  },
  {
    question: "From the following grammars, which describes the lexical syntax?",
    options: [
      "Lexical Grammar",
      "Context-free Grammar",
      "Syntactic Grammar",
      "Regular Grammar",
    ],
    answer: "Context-free Grammar",
  },
  {
    question: "What is not a Functional Requirement?",
    options: [
      "specifies the tasks the program must complete",
      "specifies the tasks the program should not complete",
      "specifies the tasks the program must not work",
      "doesn’t specifies the tasks the program must not work",
    ],
    answer: "doesn’t specifies the tasks the program must not work",
  },
  {
    question:
      "_________ is a software development life cycle model that is chosen if the development team has  less experience on similar projects.",
    options: [
      "Iterative Enhancement Model",
      "RAD",
      "Spiral",
      "Waterfall",
    ],
    answer: "Waterfall",
  },
  {
    question: "In which step of SDLC actual programming of software code is done?",
    options: [
      "Development and Documentation",
      "Maintenance and Evaluation",
      "Design",
      "Analysis",
    ],
    answer: "Development and Documentation",
  },
  {
    question: "Software Debugging is known as _________________",
    options: [
      "identifying the task to be computerized",
      "creating program code",
      "creating the algorithm",
      "finding and correcting errors in the program code",
    ],
    answer: "finding and correcting errors in the program code",
  },
  {
    question:
      "Which of the following is the understanding of software product limitations, learning system  related problems or changes to be done in existing systems beforehand, identifying and addressing the impact of project on organization and personnel etc.?",
    options: [
      "Software Design",
      "Feasibility Study",
      "Requirement Gathering",
      "System Analysis",
],
    answer: "Feasibility Study",
  },

{
  question: "What is JSON (JavaScript Object Notation)?",
  options: ["A JavaScript library for DOM manipulation", "A lightweight data-interchange format", "A CSS framework", "A server-side JavaScript runtime environment"],
  answer: "A lightweight data-interchange format"
},
{
  question: "What is a web server?",
  options: ["The user's web browser", "A computer that hosts websites and delivers web pages to clients", "A programming language for web development", "A network cable connecting computers"],
  answer: "A computer that hosts websites and delivers web pages to clients"
},
{
  question: "What is HTTP (Hypertext Transfer Protocol)?",
  options: ["A programming language for web servers", "The underlying protocol used by the World Wide Web for transferring data", "A system for naming web addresses", "A type of network hardware"],
  answer: "The underlying protocol used by the World Wide Web for transferring data"
},
{
  question: "What is a URL (Uniform Resource Locator)?",
  options: ["The language used to write web pages", "The address of a resource on the internet", "A set of rules for styling web pages", "A type of network connection"],
  answer: "The address of a resource on the internet"
},
{
  question: "What is the purpose of a web browser?",
  options: ["To host websites on the internet", "To display web pages and interact with web applications", "To write code for web development", "To manage network connections"],
  answer: "To display web pages and interact with web applications"
},
{
  question: "What is a front-end developer primarily responsible for?",
  options: ["Handling server-side logic and databases", "Designing and implementing the user interface and user experience", "Managing network infrastructure", "Ensuring website security"],
  answer: "Designing and implementing the user interface and user experience"
},
{
  question: "What is a back-end developer primarily responsible for?",
  options: ["Designing the user interface", "Handling server-side logic, databases, and APIs", "Managing client-side scripting", "Styling web pages"],
  answer: "Handling server-side logic, databases, and APIs"
},
{
  question: "What is a web framework?",
  options: ["A complete operating system for web servers", "A collection of tools and libraries that simplifies web development", "A specific programming language for the web", "A hardware component for web servers"],
  answer: "A collection of tools and libraries that simplifies web development"
},
{
  question: "Which of the following is a popular front-end JavaScript framework?",
  options: ["Node.js", "Express.js", "React", "Django"],
  answer: "React"
},
{
  question: "Which of the following is a popular back-end JavaScript runtime environment?",
  options: ["HTML", "CSS", "Node.js", "Angular"],
  answer: "Node.js"
},
{
  question: "What is an API endpoint?",
  options: ["The starting point of a website", "A specific URL that a server provides for accessing its resources or functionalities", "A type of database", "A client-side scripting function"],
  answer: "A specific URL that a server provides for accessing its resources or functionalities"
},
{
  question: "What is AJAX (Asynchronous JavaScript and XML)?",
  options: ["A programming language for server-side development", "A technique for creating dynamic web pages by exchanging data with the server in the background", "A way to style web pages using JavaScript", "A method for storing data in the browser"],
  answer: "A technique for creating dynamic web pages by exchanging data with the server in the background"
},
{
  question: "What is responsive web design?",
  options: ["Designing websites that respond to user input quickly", "Designing websites that adapt to different screen sizes and devices", "Designing websites with a lot of animations and transitions", "Designing websites that use only text and no images"],
  answer: "Designing websites that adapt to different screen sizes and devices"
},
{
  question: "What are media queries in CSS used for?",
  options: ["To apply different styles based on different media types or device characteristics", "To query data from a server", "To manipulate the DOM using CSS", "To create animations in CSS"],
  answer: "To apply different styles based on different media types or device characteristics"
},
{
  question: "What is web security?",
  options: ["Designing visually appealing websites", "Protecting websites and web applications from threats and attacks", "Optimizing website performance", "Ensuring websites are accessible to everyone"],
  answer: "Protecting websites and web applications from threats and attacks"
},
{
  question: "What is HTTPS?",
  options: ["A faster version of HTTP", "HTTP with added security (encryption)", "A protocol for transferring files", "A language for styling web pages securely"],
  answer: "HTTP with added security (encryption)"
},
{
  question: "What is SQL (Structured Query Language) used for in web development?",
  options: ["Styling web pages", "Defining the structure of web pages", "Managing and querying databases", "Handling server-side routing"],
  answer: "Managing and querying databases"
},
{
  question: "What is a cookie in web development?",
  options: ["A small text file that a website stores on a user's computer", "A type of web animation", "A security protocol for websites", "A programming language for server-side scripting"],
  answer: "A small text file that a website stores on a user's computer"
},
{
  question: "What is a web session?",
  options: ["A single request-response cycle between a client and a server", "A series of related HTTP requests and responses initiated by the same user over a period of time", "A way to store data on the client-side", "A method for styling web pages dynamically"],
  answer: "A series of related HTTP requests and responses initiated by the same user over a period of time"
},
{
  question: "What is server-side rendering (SSR)?",
  options: ["Rendering web pages in the user's browser", "Rendering web pages on the server before sending them to the client", "Using CSS to create server-like layouts", "A JavaScript library for server-side styling"],
  answer: "Rendering web pages on the server before sending them to the client"
},
{
  question: "What is client-side rendering (CSR)?",
  options: ["Rendering web pages on the server", "Rendering web pages in the user's browser using JavaScript", "A CSS technique for client-based animations", "A server-side technology for handling client requests"],
  answer: "Rendering web pages in the user's browser using JavaScript"
},
{
  question: "What is a Progressive Web App (PWA)?",
  options: ["A website that looks and behaves like a native mobile app", "A web application that only works on desktop browsers", "A native mobile application built with web technologies", "A website with only static content"],
  answer: "A website that looks and behaves like a native mobile app"
},

{
  question: "In a relational database, which normal form ensures that there are no partial dependencies of non-prime attributes on the candidate key?",
  options: ["1NF", "2NF", "3NF", "BCNF"],
  answer: "2NF"
},
{
  question: "Which principle of OOP is violated if a subclass cannot substitute its parent class without altering the program's correctness?",
  options: ["Encapsulation", "Inheritance", "Polymorphism", "Liskov Substitution Principle"],
  answer: "Liskov Substitution Principle"
},
{
  question: "What is the primary function of the Memory Management Unit (MMU) in a CPU?",
  options: ["To manage cache memory", "To translate virtual addresses to physical addresses", "To control I/O operations", "To execute arithmetic operations"],
  answer: "To translate virtual addresses to physical addresses"
},
{
  question: "In the OSI model, which layer is responsible for error detection and recovery in data frames?",
  options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
  answer: "Data Link Layer"
},
{
  question: "What is the time complexity of inserting an element into a balanced binary search tree (BST) with *n* nodes?",
  options: ["0(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(log n)"
},
{
  question: "Which scheduling algorithm guarantees the shortest average waiting time for processes?",
  options: ["First-Come, First-Served (FCFS)", "Shortest Job Next (SJN)", "Round Robin", "Priority Scheduling"],
  answer: "Shortest Job Next (SJN)"
},
{
  question: "In the Agile methodology, what is the primary purpose of a 'sprint retrospective'?",
  options: ["To plan the next sprint", "To review completed work and improve processes", "To demonstrate the product to stakeholders", "To write technical documentation"],
  answer: "To review completed work and improve processes"
},
{
  question: "Which search algorithm is guaranteed to find the shortest path in an unweighted graph?",
  options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "A* Search", "Greedy Best-First Search"],
  answer: "Breadth-First Search (BFS)"
},
{
  question: "What type of attack exploits a buffer overflow vulnerability to execute arbitrary code?",
  options: ["SQL Injection", "Cross-Site Scripting (XSS)", "Denial-of-Service (DoS)", "Stack Smashing"],
  answer: "Stack Smashing"
},
{
  question: "During which phase of compilation is syntax analysis performed?",
  options: ["Lexical Analysis", "Semantic Analysis", "Syntax Analysis", "Code Optimization"],
  answer: "Syntax Analysis"
},
{
  question: "Which normal form eliminates transitive dependencies?",
  options: ["1NF", "2NF", "3NF", "BCNF"],
  answer: "3NF"
},
{
  question: "In SQL, which command is used to revoke user privileges?",
  options: ["'REMOVE'", "'REVOKE", "'DELETE'", "DENY'"],
  answer: "'REVOKE'"
},
{
  question: "What is the purpose of an index in a database?",
  options: ["To enforce referential integrity", "To speed up data retrieval", "To store backup data", "To define table relationships"],
  answer: "To speed up data retrieval"
},
{
  question: "Which join returns all rows from both tables, filling in NULLs where no match exists?",
  options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
  answer: "FULL OUTER JOIN"
},
{
  question: "What does ACID stand for in database transactions?",
  options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Concurrency, Integrity, Durability", "Availability, Consistency, Isolation, Durability"],
  answer: "Atomicity, Consistency, Isolation, Durability"
},
{
  question: "Which NoSQL database type is optimized for key-value storage?",
  options: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
  answer: "Redis"
},
{
  question: "What is a deadlock in a database?",
  options: ["A transaction that never completes", "Two or more transactions waiting indefinitely for each other to release locks", "A corrupted database file", "A query that runs too long"],
  answer: "Two or more transactions waiting indefinitely for each other to release locks"
},
{
  question: "Which SQL clause filters groups in a 'GROUP BY' query?",
  options: ["'WHERE'", "'HAVING", "'FILTER'", "LIMIT'"],
  answer: "'HAVING'"
},
{
  question: "What is the default isolation level in most relational databases?",
  options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
  answer: "Read Committed"
},
{
  question: "Which database model represents data as nodes and edges?",
  options: ["Relational", "Document", "Graph", "Columnar"],
  answer: "Graph"
},
{
  question: "What is the main advantage of encapsulation?",
  options: ["Code reusability", "Data hiding and security", "Faster execution", "Reduced memory usage"],
  answer: "Data hiding and security"
},
{
  question: "Which keyword allows a subclass to access superclass methods?",
  options: ["'this'", "'super", "'extends'", "'implements'"],
  answer: "'super`"
},
{
  question: "What is method overriding?",
  options: ["Defining multiple methods with the same name in a class", "Providing a new implementation for an inherited method", "Calling a method from another class", "Hiding a method from subclasses"],
  answer: "Providing a new implementation for an inherited method"
},
{
  question: "Which design pattern ensures only one instance of a class exists?",
  options: ["Factory", "Singleton", "Observer", "Strategy"],
  answer: "Singleton"
},
{
  question: "What is the output of 'System.out.println(5 + \"5\")' in Java?",
  options: ["10", "55", "\"55\"", "Compilation error"],
  answer: "55"
},
{
  question: "Which principle suggests that a class should have only one reason to change?",
  options: ["DRY (Don't Repeat Yourself)", "KISS (Keep It Simple, Stupid)", "SOLID's Single Responsibility Principle", "YAGNI (You Aren't Gonna Need It)"],
  answer: "SOLID's Single Responsibility Principle"
},
{
  question: "What is dynamic binding?",
  options: ["Linking method calls at compile time", "Linking method calls at runtime", "Binding variables to types", "Binding classes to interfaces"],
  answer: "Linking method calls at runtime"
},
{
  question: "Which keyword prevents a method from being overridden?",
  options: ["'static'", "'final", "`private`", "sealed"],
  answer: "'final"
},
{
  question: "What is an abstract class?",
  options: ["A class that cannot be instantiated", "A class with only static methods", "A class with no methods", "A class that implements an interface"],
  answer: "A class that cannot be instantiated"
},
{
  question: "Which exception is thrown when dividing an integer by zero in Java?",
  options: ["NullPointerException", "'ArithmeticException", "DivideByZeroException", "'RuntimeException"],
  answer: "'ArithmeticException"
},
{
  question: "What is the function of the ALU in a CPU?",
  options: ["Store data", "Perform arithmetic and logic operations", "Manage I/O operations", "Control program flow"],
  answer: "Perform arithmetic and logic operations"
},
{
  question: "Which cache mapping technique uses a hash function to determine location?",
  options: ["Direct-mapped", "Fully associative", "Set-associative", "Random mapping"],
  answer: "Direct-mapped"
},
{
  question: "What is pipelining in processor design?",
  options: ["Executing multiple instructions simultaneously in stages", "Increasing clock speed", "Using multiple cores", "Reducing power consumption"],
  answer: "Executing multiple instructions simultaneously in stages"
},
{
  question: "Which register holds the address of the next instruction to execute?",
  options: ["Accumulator", "Program Counter (PC)", "Instruction Register (IR)", "Memory Address Register (MAR)"],
  answer: "Program Counter (PC)"
},
{
  question: "What is the purpose of virtual memory?",
  options: ["To increase RAM speed", "To allow programs to use more memory than physically available", "To replace cache memory", "To store BIOS settings"],
  answer: "To allow programs to use more memory than physically available"
},
{
  question: "Which bus carries data between CPU and memory?",
  options: ["Address bus", "Data bus", "Control bus", "System bus"],
  answer: "Data bus"
},
{
  question: "What is a hazard in computer architecture?",
  options: ["A hardware failure", "A situation that prevents the next instruction from executing", "A security vulnerability", "A power surge"],
  answer: "A situation that prevents the next instruction from executing"
},
{
  question: "Which memory type is fastest?",
  options: ["HDD", "SSD", "RAM", "L1 Cache"],
  answer: "L1 Cache"
},
{
  question: "What does RISC stand for?",
  options: ["Reduced Instruction Set Computer", "Random Instruction Set Computing", "Rapid Instruction Sequencing", "Redundant Instruction Set Code"],
  answer: "Reduced Instruction Set Computer"
},
{
  question: "Which component manages interrupts in a CPU?",
  options: ["ALU", "Control Unit", "MMU", "Interrupt Controller"],
  answer: "Interrupt Controller"
},
{
  question: "Which protocol assigns IP addresses dynamically?",
  options: ["HTTP", "DHCP", "DNS", "FTP"],
  answer: "DHCP"
},
{
  question: "What is the purpose of a subnet mask?",
  options: ["To encrypt data", "To define network and host portions of an IP address", "To route packets between networks", "To filter spam"],
  answer: "To define network and host portions of an IP address"
},
{
  question: "Which layer of the OSI model handles routing?",
  options: ["Physical", "Data Link", "Network", "Transport"],
  answer: "Network"
},
{
  question: "What does TCP ensure that UDP does not?",
  options: ["Faster transmission", "Error checking and retransmission", "Multicasting", "Lower latency"],
  answer: "Error checking and retransmission"
},
{
  question: "Which device operates at the Data Link layer?",
  options: ["Router", "Switch", "Hub", "Repeater"],
  answer: "Switch"
},
{
  question: "What is the default port for HTTPS?",
  options: ["80", "443", "22", "53"],
  answer: "443"
},
{
  question: "Which topology connects all devices to a central hub?",
  options: ["Bus", "Star", "Ring", "Mesh"],
  answer: "Star"
},
{
  question: "What is NAT used for?",
  options: ["Encrypting traffic", "Translating private IPs to public IPs", "Blocking malware", "Assigning MAC addresses"],
  answer: "Translating private IPs to public IPs"
},
{
  question: "Which wireless standard operates at 5 GHz?",
  options: ["802.11a", "802.11b", "802.11g", "802.11n"],
  answer: "802.11a"
},
{
  question: "What does ICMP stand for?",
  options: ["Internet Control Message Protocol", "Internet Configuration Management Protocol", "Integrated Communication Management Protocol", "Internal Control Message Packet"],
  answer: "Internet Control Message Protocol"
},
{
  question: "What is the worst-case time complexity of quicksort?",
  options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
  answer: "O(n²)"
},
{
  question: "Which data structure uses LIFO order?",
  options: ["Queue", "Stack", "Linked List", "Tree"],
  answer: "Stack"
},
{
  question: "What is a hash collision?",
  options: ["Two keys hashing to the same index", "A hash table overflow", "A broken hash function", "A mismatch in hash sizes"],
  answer: "Two keys hashing to the same index"
},
{
  question: "Which algorithm finds the shortest path in a weighted graph with no negative edges?",
  options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Kruskal's"],
  answer: "Dijkstra's"
},
{
  question: "What is the space complexity of merge sort?",
  options: ["0(1)", "O(n)", "O(log n)", "O(n²)"],
  answer: "O(n)"
},
{
  question: "Which traversal visits root, left, right in a binary tree?",
  options: ["Inorder", "Preorder", "Postorder", "Level-order"],
  answer: "Preorder"
},
{
  question: "What is the purpose of a sentinel node in a linked list?",
  options: ["To mark the end", "To simplify insertion/deletion", "To store metadata", "To improve search speed"],
  answer: "To simplify insertion/deletion"
},
{
  question: "Which data structure is best for priority queues?",
  options: ["Array", "Linked List", "Heap", "Stack"],
  answer: "Heap"
},
{
  question: "What is the time complexity of binary search?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(log n)"
},
{
  question: "Which sorting algorithm is stable?",
  options: ["Quicksort", "Heapsort", "Merge sort", "Selection sort"],
  answer: "Merge sort"
},
  {
  question: "Which HTML tag is used for hyperlinks?",
  options: ["<a>", "'<link>`", "'<href>", "'<url>'"],
  answer: "<a>"
},
{
  question: "What does CSS stand for?",
  options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Centralized Styling Service"],
  answer: "Cascading Style Sheets"
},
{
  question: "Which JavaScript function delays execution for a specified time?",
  options: ["`setInterval()`", "'setTimeout()", "'wait()", "`delay()`"],
  answer: "'setTimeout()"
},
{
  question: "What is the purpose of the '<div>' tag?",
  options: ["To define a section", "To create a list", "To insert an image", "To add a hyperlink"],
  answer: "To define a section"
},
{
  question: "Which HTTP method is used to submit form data?",
  options: ["GET", "POST", "PUT", "DELETE"],
  answer: "POST"
},
{
    question: "What is a race condition?",
    options: ["A deadlock", "Unpredictable behavior due to concurrent access", "A memory leak", "A CPU overheating issue"],
    answer: "Unpredictable behavior due to concurrent access"
  },
  {
    question: "Which page replacement algorithm replaces the least recently used page?",
    options: ["FIFO", "LRU", "Optimal", "Random"],
    answer: "LRU"
  },
  {
    question: "What is the role of the kernel?",
    options: ["Manage hardware and processes", "Provide a user interface", "Run applications", "Store files"],
    answer: "Manage hardware and processes"
  },
  {
    question: "Which command lists files in Linux?",
    options: ["'dir", "'list'", "'Is", "'show'"],
    answer: "'ls'"
  },
  {
    question: "What is a zombie process?",
    options: ["A process that consumes too much CPU", "A terminated process waiting for its parent to read its status", "A crashed process", "A process blocked on I/O"],
    answer: "A terminated process waiting for its parent to read its status"
  },
  {
    question: "What is the purpose of a UML diagram?",
    options: ["To visualize system design", "To write code", "To debug programs", "To optimize databases"],
    answer: "To visualize system design"
  },

{
  question: "Which of the following is NOT a fundamental data structure?",
  options: ["Array", "Linked List", "Tree", "Algorithm"],
  answer: "Algorithm"
},
{
  question: "What is the primary purpose of a data structure?",
  options: ["To execute program instructions", "To store and organize data efficiently", "To control the flow of execution", "To perform arithmetic operations"],
  answer: "To store and organize data efficiently"
},
{
  question: "What is the time complexity of accessing an element in an array by its index?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is the time complexity of searching for an element in an unsorted array?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(n)"
},
{
  question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is the time complexity of searching for an element in a sorted singly linked list?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(n)"
},
{
  question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
  options: ["Queue", "Stack", "Linked List", "Heap"],
  answer: "Stack"
},
{
  question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
  options: ["Stack", "Queue", "Tree", "Graph"],
  answer: "Queue"
},
{
  question: "What is the time complexity of the push operation in a stack implemented using an array?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is the time complexity of the enqueue operation in a queue implemented using a linked list?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is a binary search tree?",
  options: ["A tree where each node has at most one child", "A tree where each node has exactly two children", "A tree where the left child's value is less than or equal to the parent's value, and the right child's value is greater", "A balanced tree structure"],
  answer: "A tree where the left child's value is less than or equal to the parent's value, and the right child's value is greater"
},
{
  question: "What is the average time complexity of searching in a balanced binary search tree?",
  options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
  answer: "O(log n)"
},
{
  question: "What is a heap data structure?",
  options: ["A linear data structure", "A tree-based data structure that satisfies the heap property", "A type of graph", "A data structure optimized for searching"],
  answer: "A tree-based data structure that satisfies the heap property"
},
{
  question: "In a min-heap, the value of each node is:",
  options: ["Greater than or equal to the value of its children", "Less than or equal to the value of its children", "Equal to the value of its children", "Arbitrary"],
  answer: "Less than or equal to the value of its children"
},
{
  question: "What is the time complexity of the heapify operation?",
  options: ["O(n^2)", "O(log n)", "O(n log n)", "O(n)"],
  answer: "O(n)"
},
{
  question: "What is a graph?",
  options: ["A linear sequence of nodes", "A hierarchical structure with a root", "A collection of vertices and edges", "A data structure for storing key-value pairs"],
  answer: "A collection of vertices and edges"
},
{
  question: "What is the difference between a directed and an undirected graph?",
  options: ["Directed graphs have cycles, undirected graphs do not", "Edges in a directed graph have a specific direction, while edges in an undirected graph do not", "Undirected graphs are always connected", "Directed graphs are used for searching, undirected graphs for sorting"],
  answer: "Edges in a directed graph have a specific direction, while edges in an undirected graph do not"
},
{
  question: "Which graph traversal algorithm explores as far as possible along each branch before backtracking?",
  options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Prim's Algorithm"],
  answer: "Depth-First Search (DFS)"
},
{
  question: "Which graph traversal algorithm explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level?",
  options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Kruskal's Algorithm", "Topological Sort"],
  answer: "Breadth-First Search (BFS)"
},
{
  question: "What is an algorithm?",
  options: ["A specific programming language", "A step-by-step procedure for solving a problem", "A type of data structure", "A hardware component"],
  answer: "A step-by-step procedure for solving a problem"
},
{
  question: "What is the goal of algorithm design?",
  options: ["To write the shortest possible code", "To develop an efficient solution to a problem", "To use the most advanced programming techniques", "To create visually appealing output"],
  answer: "To develop an efficient solution to a problem"
},
{
  question: "What is asymptotic notation used for?",
  options: ["To measure the exact running time of an algorithm", "To describe the limiting behavior of an algorithm's runtime as the input size grows", "To count the number of lines of code", "To optimize the memory usage of an algorithm"],
  answer: "To describe the limiting behavior of an algorithm's runtime as the input size grows"
},
{
  question: "Which of the following represents the fastest growing function?",
  options: ["O(n)", "O(log n)", "O(n^2)", "O(2^n)"],
  answer: "O(2^n)"
},
{
  question: "What is the time complexity of the selection sort algorithm?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
  answer: "O(n^2)"
},
{
  question: "What is the time complexity of the insertion sort algorithm in the worst case?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
  answer: "O(n^2)"
},
{
  question: "What is the average time complexity of quicksort?",
  options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
  answer: "O(n log n)"
},
{
  question: "What is the space complexity of merge sort?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(n)"
},
{
  question: "What is the space complexity of quicksort in the average case (excluding recursion stack)?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  answer: "O(log n)"
},
{
  question: "What is a greedy algorithm?",
  options: ["An algorithm that always chooses the locally optimal choice at each step", "An algorithm that explores all possible solutions", "An algorithm that divides the problem into smaller subproblems", "An algorithm that backtracks to find the optimal solution"],
  answer: "An algorithm that always chooses the locally optimal choice at each step"
},
{
  question: "Which of the following problems can be solved using a greedy algorithm?",
  options: ["Traveling Salesperson Problem", "Knapsack Problem (fractional version)", "Longest Common Subsequence", "Matrix Chain Multiplication"],
  answer: "Knapsack Problem (fractional version)"
},
{
  question: "What is dynamic programming?",
  options: ["An algorithm design technique that breaks down a problem into overlapping subproblems and solves each subproblem only once", "An algorithm that makes locally optimal choices", "A recursive approach to problem-solving", "A technique for sorting data"],
  answer: "An algorithm design technique that breaks down a problem into overlapping subproblems and solves each subproblem only once"
},
{
  question: "Which of the following problems can be efficiently solved using dynamic programming?",
  options: ["Finding the shortest path in a graph with negative edge weights", "Finding all possible subsets of a set", "The halting problem", "Matrix Chain Multiplication"],
  answer: "Matrix Chain Multiplication"
},
{
  question: "What is the principle of optimality in dynamic programming?",
  options: ["The optimal solution to a problem can be constructed from optimal solutions to its subproblems", "Greedy choices always lead to an optimal solution", "All subproblems must be solved independently", "The problem must have a recursive structure"],
  answer: "The optimal solution to a problem can be constructed from optimal solutions to its subproblems"
},
{
  question: "What is divide and conquer?",
  options: ["An algorithm design paradigm where a problem is broken down into smaller, independent subproblems, solved recursively, and then combined to solve the original problem", "An approach where the best local choice is made at each step", "A method for storing and retrieving data efficiently", "A technique for optimizing the space complexity of an algorithm"],
  answer: "An algorithm design paradigm where a problem is broken down into smaller, independent subproblems, solved recursively, and then combined to solve the original problem"
},
{
  question: "Merge sort is an example of which algorithm design paradigm?",
  options: ["Greedy", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
  answer: "Divide and Conquer"
},
{
  question: "Quicksort is an example of which algorithm design paradigm?",
  options: ["Greedy", "Dynamic Programming", "Divide and Conquer", "Branch and Bound"],
  answer: "Divide and Conquer"
},
{
  question: "What is backtracking?",
  options: ["An algorithm design technique for finding all (or some) solutions to a computational problem by incrementally building candidates to the solutions, and abandoning each partial candidate ('backtracking') as soon as it is determined that this candidate cannot possibly lead to a valid solution", "A method for sorting data in reverse order", "A technique for optimizing the time complexity of recursive algorithms", "A way to implement dynamic memory allocation"],
  answer: "An algorithm design technique for finding all (or some) solutions to a computational problem by incrementally building candidates to the solutions, and abandoning each partial candidate ('backtracking') as soon as it is determined that this candidate cannot possibly lead to a valid solution"
},
{
  question: "Which of the following problems can be solved using backtracking?",
  options: ["Finding the shortest path in a weighted graph", "Sorting a list of numbers", "The N-Queens problem", "Calculating the Fibonacci sequence"],
  answer: "The N-Queens problem"
},
{
  question: "What is memoization?",
  options: ["A technique for optimizing space complexity", "A technique used in greedy algorithms", "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again", "A method for dividing a problem into subproblems"],
  answer: "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again"
},
{
  question: "Memoization is often used in conjunction with:",
  options: ["Iterative algorithms", "Greedy algorithms", "Recursive algorithms", "Sorting algorithms"],
  answer: "Recursive algorithms"
},
{
  question: "What is the time complexity of Breadth-First Search (BFS) on a graph with V vertices and E edges?",
  options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
  answer: "O(V + E)"
},
{
  question: "What is the time complexity of Depth-First Search (DFS) on a graph with V vertices and E edges?",
  options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
  answer: "O(V + E)"
},
{
  question: "Dijkstra's algorithm is used to find:",
  options: ["The shortest path between two nodes in a graph with non-negative edge weights", "The longest path between two nodes in a graph", "Whether a graph contains a cycle", "A topological sort of a directed acyclic graph"],
  answer: "The shortest path between two nodes in a graph with non-negative edge weights"
},
{
  question: "What is the time complexity of Dijkstra's algorithm using a min-priority queue?",
  options: ["O(V^2)", "O(E log V)", "O(V log E)", "O(V * E)"],
  answer: "O(E log V)"
},
{
  question: "Bellman-Ford algorithm is used to find:",
  options: ["The shortest path in a graph with only positive edge weights", "The shortest path in a graph that may contain negative edge weights", "A minimum spanning tree of a graph", "All pairs shortest paths in a graph"],
  answer: "The shortest path in a graph that may contain negative edge weights"
},
{
  question: "Floyd-Warshall algorithm is used to find:",
  options: ["The shortest path between two specific nodes", "All pairs shortest paths in a graph", "A minimum spanning tree", "A topological sort"],
  answer: "All pairs shortest paths in a graph"
},
{
  question: "What is a minimum spanning tree (MST) of a connected, undirected graph?",
  options: ["A subgraph that connects all the vertices together, without any cycles and with the minimum possible total edge weight", "A subgraph with the maximum possible total edge weight", "A spanning tree that includes all possible edges", "A subgraph that forms a cycle and connects all vertices"],
  answer: "A subgraph that connects all the vertices together, without any cycles and with the minimum possible total edge weight"
},
{
  question: "Which of the following algorithms can be used to find a Minimum Spanning Tree?",
  options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm", "Depth-First Search"],
  answer: "Prim's Algorithm"
},
{
  question: "Which of the following algorithms can also be used to find a Minimum Spanning Tree?",
  options: ["Floyd-Warshall Algorithm", "Kruskal's Algorithm", "Breadth-First Search", "Topological Sort"],
  answer: "Kruskal's Algorithm"
},
{
  question: "What is the time complexity of Prim's algorithm using a min-priority queue?",
  options: ["O(V^2)", "O(E log V)", "O(V log E)", "O(V * E)"],
  answer: "O(E log V)"
},
{
  question: "What is the time complexity of Kruskal's algorithm using the disjoint-set data structure?",
  options: ["O(E log V)", "O(V log E)", "O(E + V log V)", "O(E^2)"],
  answer: "O(E log V)"
},
{
  question: "What is topological sorting of a directed acyclic graph (DAG)?",
  options: ["A linear ordering of vertices such that for every directed edge from vertex u to vertex v, u comes before v in the ordering", "A traversal algorithm that visits all vertices in a specific order", "Finding the shortest path in a DAG", "Finding the longest path in a DAG"],
  answer: "A linear ordering of vertices such that for every directed edge from vertex u to vertex v, u comes before v in the ordering"
},
{
  question: "Which algorithm can be used to perform topological sorting?",
  options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Depth-First Search", "Breadth-First Search"],
  answer: "Depth-First Search"
},
{
  question: "What is the time complexity of topological sorting using DFS?",
  options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
  answer: "O(V + E)"
},

{
  question: "Which of the following is the most general model of computation?",
  options: ["Finite Automaton", "Pushdown Automaton", "Linear Bounded Automaton", "Turing Machine"],
  answer: "Turing Machine"
},
{
  question: "A finite automaton with output is called a:",
  options: ["NFA", "DFA", "Moore Machine", "PDA"],
  answer: "Moore Machine"
},
{
  question: "Which language is recognized by a Deterministic Finite Automaton (DFA)?",
  options: ["Context-Free Languages", "Regular Languages", "Recursively Enumerable Languages", "Context-Sensitive Languages"],
  answer: "Regular Languages"
},
{
  question: "The pumping lemma is used to prove that a language is:",
  options: ["Regular", "Context-Free", "Recursive", "Decidable"],
  answer: "Not Regular"
},
{
  question: "Which of the following can recognize Context-Free Languages?",
  options: ["DFA", "NFA", "Pushdown Automaton (PDA)", "Turing Machine"],
  answer: "Pushdown Automaton (PDA)"
},
{
  question: "The pumping lemma for context-free languages is used to prove that a language is:",
  options: ["Context-Free", "Regular", "Recursive", "Not Context-Free"],
  answer: "Not Context-Free"
},
{
  question: "A Turing Machine that halts on all inputs is called a:",
  options: ["Non-deterministic Turing Machine", "Deterministic Turing Machine", "Total Turing Machine", "Linear Bounded Automaton"],
  answer: "Total Turing Machine"
},
{
  question: "Which of the following languages is decidable?",
  options: ["The Halting Problem", "The Post Correspondence Problem", "The Emptiness Problem for Context-Free Languages", "The Equivalence Problem for Turing Machines"],
  answer: "The Emptiness Problem for Context-Free Languages"
},
{
  question: "The class P consists of problems that are:",
  options: ["Solvable in polynomial time by a deterministic Turing Machine", "Solvable in polynomial time by a non-deterministic Turing Machine", "Solvable in exponential time by a deterministic Turing Machine", "Not solvable by any Turing Machine"],
  answer: "Solvable in polynomial time by a deterministic Turing Machine"
},
{
  question: "The class NP consists of problems that are:",
  options: ["Not solvable in polynomial time", "Verifiable in polynomial time by a deterministic Turing Machine", "Solvable in polynomial time by a deterministic Turing Machine", "Solvable in exponential time"],
  answer: "Verifiable in polynomial time by a deterministic Turing Machine"
},
{
  question: "An NP-complete problem is:",
  options: ["In P but not in NP", "In NP and every problem in NP is reducible to it in polynomial time", "Solvable in polynomial time", "Not solvable by any algorithm"],
  answer: "In NP and every problem in NP is reducible to it in polynomial time"
},
{
  question: "Which of the following is a known NP-complete problem?",
  options: ["Sorting", "Searching", "The Traveling Salesperson Problem", "Linear Programming"],
  answer: "The Traveling Salesperson Problem"
},
{
  question: "The process of translating source code into an intermediate representation is called:",
  options: ["Code Generation", "Lexical Analysis", "Syntax Analysis", "Semantic Analysis"],
  answer: "Syntax Analysis"
},
{
  question: "The first phase of a compiler is:",
  options: ["Syntax Analysis", "Semantic Analysis", "Lexical Analysis", "Code Optimization"],
  answer: "Lexical Analysis"
},
{
  question: "The output of the lexical analyzer is a stream of:",
  options: ["Abstract Syntax Trees", "Tokens", "Intermediate Code", "Machine Code"],
  answer: "Tokens"
},
{
  question: "Which of the following is NOT a typical task of the lexical analyzer?",
  options: ["Identifying keywords", "Removing comments", "Checking for syntax errors", "Grouping characters into tokens"],
  answer: "Checking for syntax errors"
},
{
  question: "The second phase of a compiler is:",
  options: ["Lexical Analysis", "Semantic Analysis", "Syntax Analysis", "Intermediate Code Generation"],
  answer: "Syntax Analysis"
},
{
  question: "The syntax analyzer checks whether the sequence of tokens forms a valid:",
  options: ["Lexeme", "Program Structure", "Semantic Meaning", "Machine Instruction"],
  answer: "Program Structure"
},
{
  question: "A common data structure used in syntax analysis is a:",
  options: ["Symbol Table", "Parse Tree", "Control Flow Graph", "Directed Acyclic Graph"],
  answer: "Parse Tree"
},
{
  question: "Top-down parsing techniques include:",
  options: ["LR parsing", "SLR parsing", "LL parsing", "LALR parsing"],
  answer: "LL parsing"
},
{
  question: "Bottom-up parsing techniques include:",
  options: ["Recursive Descent parsing", "LL(1) parsing", "LR parsing", "Predictive parsing"],
  answer: "LR parsing"
},
{
  question: "The third phase of a compiler is:",
  options: ["Syntax Analysis", "Code Generation", "Semantic Analysis", "Lexical Analysis"],
  answer: "Semantic Analysis"
},
{
  question: "Semantic analysis checks for:",
  options: ["Valid token sequences", "Correct program structure", "Meaning and type consistency", "Efficient code generation"],
  answer: "Meaning and type consistency"
},
{
  question: "A data structure used to store information about identifiers is a:",
  options: ["Parse Tree", "Abstract Syntax Tree", "Symbol Table", "Control Flow Graph"],
  answer: "Symbol Table"
},
{
  question: "Type checking is a part of:",
  options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
  answer: "Semantic Analysis"
},
{
  question: "The output of the semantic analyzer is often an:",
  options: ["Token Stream", "Parse Tree", "Annotated Abstract Syntax Tree", "Machine Code"],
  answer: "Annotated Abstract Syntax Tree"
},
{
  question: "The phase that translates the intermediate representation into machine code is:",
  options: ["Semantic Analysis", "Syntax Analysis", "Code Optimization", "Code Generation"],
  answer: "Code Generation"
},
{
  question: "Which of the following is NOT a goal of code optimization?",
  options: ["Reducing execution time", "Reducing memory usage", "Simplifying the syntax tree", "Improving code efficiency"],
  answer: "Simplifying the syntax tree"
},
{
  question: "Common code optimization techniques include:",
  options: ["Lexical analysis and parsing", "Syntax and semantic analysis", "Constant folding and loop unrolling", "Tokenization and parsing"],
  answer: "Constant folding and loop unrolling"
},
{
  question: "Intermediate code representation can be:",
  options: ["Machine code specific", "High-level language specific", "Machine-independent", "Lexeme-based"],
  answer: "Machine-independent"
},
{
  question: "Three-address code is a type of:",
  options: ["Machine code", "Assembly language", "Intermediate representation", "Source code"],
  answer: "Intermediate representation"
},
{
  question: "Register allocation is a task performed during:",
  options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
  answer: "Code Generation"
},
{
  question: "The process of dividing the source program into meaningful units is:",
  options: ["Parsing", "Compilation", "Tokenization", "Interpretation"],
  answer: "Tokenization"
},
{
  question: "A regular expression can be used to define:",
  options: ["Context-free grammars", "Regular languages", "Context-sensitive languages", "Unrestricted grammars"],
  answer: "Regular languages"
},
{
  question: "A context-free grammar can be used to define:",
  options: ["Regular languages only", "Context-free languages", "Context-sensitive languages", "All formal languages"],
  answer: "Context-free languages"
},
{
  question: "The Chomsky hierarchy classifies formal languages into:",
  options: ["Two levels", "Three levels", "Four levels", "Five levels"],
  answer: "Four levels"
},
{
  question: "Which of the following is the weakest form of grammar in the Chomsky hierarchy?",
  options: ["Context-free grammar", "Regular grammar", "Context-sensitive grammar", "Unrestricted grammar"],
  answer: "Regular grammar"
},
{
  question: "Which of the following is the most powerful form of grammar in the Chomsky hierarchy?",
  options: ["Regular grammar", "Context-free grammar", "Context-sensitive grammar", "Unrestricted grammar"],
  answer: "Unrestricted grammar"
},
{
  question: "The Halting Problem is an example of a:",
  options: ["Decidable problem", "Regular language", "Context-free language", "Undecidable problem"],
  answer: "Undecidable problem"
},
{
  question: "The set of all strings accepted by a Turing Machine is a:",
  options: ["Regular language", "Context-free language", "Recursive language", "Recursively enumerable language"],
  answer: "Recursively enumerable language"
},
{
  question: "A language for which there exists a Turing Machine that halts and accepts every string in the language, and halts and rejects every string not in the language, is called:",
  options: ["Regular", "Context-free", "Recursively enumerable", "Recursive"],
  answer: "Recursive"
},
{
  question: "NP-hard problems are:",
  options: ["Problems in P", "Problems in NP", "At least as hard as the hardest problems in NP", "Solvable in polynomial time"],
  answer: "At least as hard as the hardest problems in NP"
},
{
  question: "The process of checking if a given string belongs to a language generated by a grammar is:",
  options: ["Lexical analysis", "Parsing", "Compilation", "Interpretation"],
  answer: "Parsing"
},
{
  question: "A compiler translates:",
  options: ["Machine code to source code", "Assembly code to machine code", "Source code to machine code", "Intermediate code to source code"],
  answer: "Source code to machine code"
},
{
  question: "An interpreter:",
  options: ["Translates the entire program before execution", "Executes the program line by line", "Optimizes the program code", "Checks for syntax errors only"],
  answer: "Executes the program line by line"
},
{
  question: "Static type checking is usually performed during:",
  options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Code generation"],
  answer: "Semantic analysis"
},
{
  question: "Dynamic type checking is usually performed during:",
  options: ["Compilation time", "Runtime", "Parsing time", "Linking time"],
  answer: "Runtime"
},
{
  question: "The symbol table is used in which phases of compilation?",
  options: ["Only lexical analysis", "Only syntax analysis", "Semantic analysis and code generation", "Only code generation"],
  answer: "Semantic analysis and code generation"
},
{
  question: "Intermediate code helps in:",
  options: ["Making the compiler machine-dependent", "Simplifying the front-end of the compiler", "Making optimization easier across different target machines", "Directly generating machine code"],
  answer: "Making optimization easier across different target machines"
},
{
  question: "Which of the following is NOT a phase of compilation?",
  options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Code execution"],
  answer: "Code execution"
},
{
  question: "The process of converting high-level language code into machine code is called:",
  options: ["Compilation", "Interpretation", "Assembly", "Linking"],
  answer: "Compilation"
},
{
  question: "The process of linking multiple object files into a single executable file is called:",
  options: ["Compilation", "Linking", "Loading", "Execution"],
  answer: "Linking"
},
{
  question: "The process of loading an executable file into memory for execution is called:",
  options: ["Compilation", "Linking", "Loading", "Execution"],
  answer: "Loading"
},
{
  question: "Which of the following is NOT a type of optimization?",
  options: ["Loop unrolling", "Constant folding", "Dead code elimination", "Syntax analysis"],
  answer: "Syntax analysis"
},
{
  question: "Which of the following is a common optimization technique?",
  options: ["Lexical analysis", "Code generation", "Inlining functions", "Parsing"],
  answer: "Inlining functions"
},

{
  question: "What is the primary goal of a Database Management System (DBMS)?",
  options: ["To provide a user interface for interacting with data", "To store, retrieve, and manage large volumes of data efficiently and reliably", "To perform complex calculations on data", "To secure network communication"],
  answer: "To store, retrieve, and manage large volumes of data efficiently and reliably"
},
{
  question: "Which of the following is NOT a core component of a DBMS?",
  options: ["Data Definition Language (DDL)", "Data Manipulation Language (DML)", "Query Processor", "Operating System"],
  answer: "Operating System"
},
{
  question: "What does ACID stand for in the context of database transactions?",
  options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Completeness, Integrity, Dependability", "Availability, Consistency, Isolation, Distribution", "Abstraction, Control, Integrity, Definition"],
  answer: "Atomicity, Consistency, Isolation, Durability"
},
{
  question: "What is a relational database?",
  options: ["A database that stores data in a hierarchical structure", "A database that stores data as a collection of interconnected nodes", "A database that organizes data into one or more tables with relationships between them", "A database that stores data as key-value pairs"],
  answer: "A database that organizes data into one or more tables with relationships between them"
},
{
  question: "In a relational database table, a row is also known as a:",
  options: ["Field", "Attribute", "Tuple", "Schema"],
  answer: "Tuple"
},
{
  question: "In a relational database table, a column is also known as a:",
  options: ["Record", "Tuple", "Attribute", "Instance"],
  answer: "Attribute"
},
{
  question: "What is a primary key?",
  options: ["A foreign key that references another table", "A set of attributes that uniquely identifies each tuple in a relation", "An attribute used for sorting data", "A key that can be null"],
  answer: "A set of attributes that uniquely identifies each tuple in a relation"
},
{
  question: "What is a foreign key?",
  options: ["The primary key of a table", "An attribute in one table that references the primary key of another table", "A key used for searching data", "A key that cannot be null"],
  answer: "An attribute in one table that references the primary key of another table"
},
{
  question: "What is SQL?",
  options: ["Structured Query Language", "Standard Query Logic", "Simple Question Language", "System Query Language"],
  answer: "Structured Query Language"
},
{
  question: "Which SQL command is used to retrieve data from a database?",
  options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
  answer: "SELECT"
},
{
  question: "Which SQL command is used to add new records to a table?",
  options: ["SELECT", "UPDATE", "INSERT", "DELETE"],
  answer: "INSERT"
},
{
  question: "Which SQL command is used to modify existing records in a table?",
  options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
  answer: "UPDATE"
},
{
  question: "Which SQL command is used to remove records from a table?",
  options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
  answer: "DELETE"
},
{
  question: "What is normalization in database design?",
  options: ["The process of organizing data to minimize redundancy and improve data integrity", "The process of denormalizing a database for performance", "The process of encrypting sensitive data", "The process of backing up database files"],
  answer: "The process of organizing data to minimize redundancy and improve data integrity"
},
{
  question: "What is First Normal Form (1NF)?",
  options: ["All attributes must have atomic values", "There should be no transitive dependencies", "All non-key attributes must be fully functionally dependent on the primary key", "The table must be in 2NF and all non-key attributes are independent of each other"],
  answer: "All attributes must have atomic values"
},
{
  question: "What is Second Normal Form (2NF)?",
  options: ["All attributes must have atomic values", "There should be no transitive dependencies", "All non-key attributes must be fully functionally dependent on the primary key", "The table must be in 3NF"],
  answer: "All non-key attributes must be fully functionally dependent on the primary key"
},
{
  question: "What is Third Normal Form (3NF)?",
  options: ["The table must be in 2NF and there are no transitive dependencies", "All attributes must have atomic values", "All non-key attributes must be fully functionally dependent on the primary key", "The table must be in BCNF"],
  answer: "The table must be in 2NF and there are no transitive dependencies"
},
{
  question: "What is a transaction in a database?",
  options: ["A single SQL statement", "A logical unit of work that consists of one or more SQL statements", "A backup of the database", "A user session"],
  answer: "A logical unit of work that consists of one or more SQL statements"
},
{
  question: "What is concurrency control in a DBMS?",
  options: ["A mechanism to ensure that multiple users can access the database simultaneously without interfering with each other", "A method for backing up and restoring the database", "A way to optimize query performance", "A technique for securing the database"],
  answer: "A mechanism to ensure that multiple users can access the database simultaneously without interfering with each other"
},
{
  question: "What is a lock in database concurrency control?",
  options: ["A password used to access the database", "A mechanism to restrict access to a data item to one or more transactions", "A physical storage unit", "A type of SQL statement"],
  answer: "A mechanism to restrict access to a data item to one or more transactions"
},
{
  question: "What is a deadlock in database transactions?",
  options: ["A situation where a transaction cannot proceed because it is waiting for a resource held by another transaction, which is also waiting for a resource held by the first transaction", "A transaction that has been rolled back", "A very long-running transaction", "A transaction that violates data integrity constraints"],
  answer: "A situation where a transaction cannot proceed because it is waiting for a resource held by another transaction, which is also waiting for a resource held by the first transaction"
},
{
  question: "What is database recovery?",
  options: ["The process of optimizing database performance", "The process of restoring the database to a consistent state after a failure", "The process of securing the database from unauthorized access", "The process of normalizing the database schema"],
  answer: "The process of restoring the database to a consistent state after a failure"
},
{
  question: "What is a database backup?",
  options: ["A copy of the database taken at a specific point in time", "A log of all transactions performed on the database", "A performance optimization technique", "A security measure to encrypt data"],
  answer: "A copy of the database taken at a specific point in time"
},
{
  question: "What is a transaction log?",
  options: ["A copy of the database schema", "A record of all changes made to the database by transactions", "A performance analysis tool", "A user access history"],
  answer: "A record of all changes made to the database by transactions"
},
{
  question: "What is data warehousing?",
  options: ["A database designed for transactional processing", "A subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process", "A highly normalized database for operational tasks", "A real-time data processing system"],
  answer: "A subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process"
},
{
  question: "What is OLAP (Online Analytical Processing)?",
  options: ["A system for processing real-time transactions", "A category of software tools that provides analysis of data stored in a database", "A type of database schema", "A language for querying transactional databases"],
  answer: "A category of software tools that provides analysis of data stored in a database"
},
{
  question: "What is data mining?",
  options: ["The process of storing large volumes of data", "The process of discovering patterns and insights from large datasets", "The process of ensuring data quality", "The process of managing database security"],
  answer: "The process of discovering patterns and insights from large datasets"
},
{
  question: "What is a NoSQL database?",
  options: ["A relational database that does not use SQL", "A category of databases that do not adhere to the relational model", "A database designed for small datasets", "A database that only stores text data"],
  answer: "A category of databases that do not adhere to the relational model"
},
{
  question: "Which of the following is a type of NoSQL database?",
  options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  answer: "MongoDB"
},
{
  question: "What is a key-value store?",
  options: ["A relational database model", "A NoSQL database that stores data as a collection of key-value pairs", "A type of data warehousing architecture", "A method for encrypting database keys"],
  answer: "A NoSQL database that stores data as a collection of key-value pairs"
},
{
  question: "What is a document database?",
  options: ["A relational database that stores documents as BLOBs", "A NoSQL database that stores data as JSON-like documents", "A database designed for storing text documents", "A type of data warehouse"],
  answer: "A NoSQL database that stores data as JSON-like documents"
},
{
  question: "What is a column-family database?",
  options: ["A relational database organized by columns", "A NoSQL database that organizes data into columns and column families", "A database designed for storing time-series data", "A type of graph database"],
  answer: "A NoSQL database that organizes data into columns and column families"
},
{
  question: "What is a graph database?",
  options: ["A relational database that visualizes data as graphs", "A NoSQL database that uses graph structures with nodes, edges, and properties to represent and store data", "A database designed for storing image data", "A type of document database"],
  answer: "A NoSQL database that uses graph structures with nodes, edges, and properties to represent and store data"
},
{
  question: "What is distributed database?",
  options: ["A database stored on a single, powerful server", "A database that is spread across multiple physical locations", "A database that uses a cloud-based storage system", "A database accessed by multiple users simultaneously"],
  answer: "A database that is spread across multiple physical locations"
},
{
  question: "What is data partitioning in a distributed database?",
  options: ["Dividing the database schema into multiple parts", "Splitting the data across multiple nodes", "Replicating the entire database on multiple nodes", "Optimizing query performance across multiple nodes"],
  answer: "Splitting the data across multiple nodes"
},
{
  question: "What is data replication in a distributed database?",
  options: ["Dividing the data into multiple parts", "Storing multiple copies of the data on different nodes", "Optimizing query processing", "Ensuring data consistency across different nodes"],
  answer: "Storing multiple copies of the data on different nodes"
},
{
  question: "What is CAP theorem in distributed database systems?",
  options: ["Consistency, Availability, Partition Tolerance - it is impossible for a distributed data store to simultaneously provide all three guarantees", "Capacity, Accuracy, Performance - the key metrics for distributed databases", "Complexity, Agility, Scalability - the challenges of distributed systems", "Control, Authorization, Privacy - the security aspects of distributed data"],
  answer: "Consistency, Availability, Partition Tolerance - it is impossible for a distributed data store to simultaneously provide all three guarantees"
},
{
  question: "What is eventual consistency?",
  options: ["A strong consistency model where all replicas are immediately updated", "A consistency model where updates to the database will eventually be propagated to all replicas", "A consistency model that guarantees no data loss", "A consistency model used only in relational databases"],
  answer: "A consistency model where updates to the database will eventually be propagated to all replicas"
},
{
  question: "What is database sharding?",
  options: ["A technique for encrypting database data", "A type of database backup strategy", "A database partitioning technique that distributes data across multiple machines based on a shard key", "A method for optimizing database queries"],
  answer: "A database partitioning technique that distributes data across multiple machines based on a shard key"
},
{
  question: "What is data warehousing ETL?",
  options: ["Extract, Transform, Load - the process of moving data from source systems to a data warehouse", "Encrypt, Transfer, Log - a security protocol for data transfer", "Error Tracking and Logging - a method for monitoring data quality", "Explore, Test, Validate - a data analysis methodology"],
  answer: "Extract, Transform, Load - the process of moving data from source systems to a data warehouse"
},
{
  question: "What is a data cube in OLAP?",
  options: ["A two-dimensional representation of data", "A multi-dimensional representation of data used for analysis", "A physical storage unit in a data warehouse", "A type of SQL query"],
  answer: "A multi-dimensional representation of data used for analysis"
},
{
  question: "What is data scrubbing?",
  options: ["The process of removing sensitive data from a database", "The process of cleaning and transforming data to improve its quality", "The process of backing up and restoring data", "The process of encrypting data at rest"],
  answer: "The process of cleaning and transforming data to improve its quality"
},
{
  question: "What is federated database?",
  options: ["A centralized database with multiple access points", "A virtual database composed of two or more autonomous databases", "A database replicated across multiple cloud providers", "A database that enforces strict data governance policies"],
  answer: "A virtual database composed of two or more autonomous databases"
},
{
  question: "What is active database?",
  options: ["A database that is currently being accessed by users", "A database system that includes event-driven capabilities", "A read-only database", "A database optimized for analytical queries"],
  answer: "A database system that includes event-driven capabilities"
},
{
  question: "What is temporal database?",
  options: ["A database that stores data related to time series", "A database that keeps track of the history of data changes", "A database optimized for real-time transactions", "A database with a very short retention period"],
  answer: "A database that keeps track of the history of data changes"
},
{
  question: "What is spatial database?",
  options: ["A database designed for storing and querying three-dimensional data", "A database optimized for storing and querying geographical data", "A database that visualizes data in a spatial format", "A database with limited storage capacity"],
  answer: "A database optimized for storing and querying geographical data"
},
{
  question: "What is deductive database?",
  options: ["A database that only stores facts", "A database system that can make logical inferences based on rules and facts", "A database that requires explicit data entry for all information", "A database optimized for storing large text documents"],
  answer: "A database system that can make logical inferences based on rules and facts"
},
{
  question: "What is object-relational database?",
  options: ["A purely object-oriented database", "A relational database that incorporates some features of object-oriented databases", "A database that stores relationships as objects", "A database designed for storing multimedia objects"],
  answer: "A relational database that incorporates some features of object-oriented databases"
},
{
  question: "What is in-memory database?",
  options: ["A database that stores all its data on disk", "A database that primarily stores data in RAM for faster access", "A database that uses a distributed caching mechanism", "A database with volatile storage"],
  answer: "A database that primarily stores data in RAM for faster access"
},
{
  question: "What is data governance?",
  options: ["The process of physically storing database files", "The overall management of the availability, usability, integrity, and security of data in an enterprise", "The technical aspects of database administration", "The process of querying data from a database"],
  answer: "The overall management of the availability, usability, integrity, and security of data in an enterprise"
},
{
  question: "What is data security in databases?",
  options: ["Ensuring fast query performance", "Protecting data from unauthorized access, modification, or destruction", "Organizing data efficiently in tables", "Making data readily available to all users"],
  answer: "Protecting data from unauthorized access, modification, or destruction"
},
{
  question: "What is database auditing?",
  options: ["The process of optimizing database queries", "The process of monitoring and logging database activity", "The process of backing up and restoring the database", "The process of normalizing the database schema"],
  answer: "The process of monitoring and logging database activity"
},
{
  question: "What is data encryption?",
  options: ["The process of converting data into a format that is unreadable without a decryption key", "The process of compressing data to save space", "The process of indexing data for faster access", "The process of backing up data to a secure location"],
  answer: "The process of converting data into a format that is unreadable without a decryption key"
},

{
  question: "What is the purpose of the OSI model?",
  options: ["To define network hardware specifications", "To provide a conceptual framework for network communication", "To standardize internet protocols", "To manage network security"],
  answer: "To provide a conceptual framework for network communication"
},
{
  question: "Which layer of the OSI model is responsible for routing packets across networks?",
  options: ["Transport Layer", "Network Layer", "Data Link Layer", "Physical Layer"],
  answer: "Network Layer"
},
{
  question: "Which layer of the OSI model is responsible for reliable data transfer between applications?",
  options: ["Network Layer", "Transport Layer", "Session Layer", "Presentation Layer"],
  answer: "Transport Layer"
},
{
  question: "What is TCP?",
  options: ["A protocol for sending emails", "A connectionless transport layer protocol", "A connection-oriented transport layer protocol", "A network layer protocol"],
  answer: "A connection-oriented transport layer protocol"
},
{
  question: "What is UDP?",
  options: ["A reliable transport layer protocol", "A connectionless transport layer protocol", "A protocol for web browsing", "A network management protocol"],
  answer: "A connectionless transport layer protocol"
},
{
  question: "What is an IP address?",
  options: ["A physical address of a network interface", "A logical address that identifies a device on a network", "A media access control address", "A port number for an application"],
  answer: "A logical address that identifies a device on a network"
},
{
  question: "What is the purpose of subnetting?",
  options: ["To increase network broadcast domain size", "To divide a network into smaller, more manageable segments", "To improve network security by encryption", "To increase the number of available IP addresses"],
  answer: "To divide a network into smaller, more manageable segments"
},
{
  question: "What is a MAC address?",
  options: ["A logical network address", "A physical address assigned to a network interface card", "An IP address in hexadecimal format", "A port number used for network services"],
  answer: "A physical address assigned to a network interface card"
},
{
  question: "What is the function of a router?",
  options: ["To forward data packets within a local network", "To connect different networks and forward packets between them", "To convert analog signals to digital signals", "To amplify network signals"],
  answer: "To connect different networks and forward packets between them"
},
{
  question: "What is the function of a switch?",
  options: ["To connect different networks", "To forward data packets based on MAC addresses within a local network", "To assign IP addresses to devices", "To filter network traffic based on IP addresses"],
  answer: "To forward data packets based on MAC addresses within a local network"
},
{
  question: "What is DNS?",
  options: ["A protocol for sending files over the internet", "A system that translates domain names to IP addresses", "A network security protocol", "A protocol for managing network devices"],
  answer: "A system that translates domain names to IP addresses"
},
{
  question: "What is DHCP?",
  options: ["A protocol for encrypting network traffic", "A protocol that automatically assigns IP addresses to devices on a network", "A protocol for routing packets based on domain names", "A protocol for managing network security policies"],
  answer: "A protocol that automatically assigns IP addresses to devices on a network"
},
{
  question: "What is the purpose of a firewall?",
  options: ["To increase network speed", "To prevent unauthorized access to a network or computer system", "To translate IP addresses to MAC addresses", "To manage network traffic flow"],
  answer: "To prevent unauthorized access to a network or computer system"
},
{
  question: "What is NAT?",
  options: ["Network Address Translation", "Network Access Technology", "Node Authentication Tool", "Next-generation Application Transfer"],
  answer: "Network Address Translation"
},
{
  question: "What is the role of ARP?",
  options: ["To resolve IP addresses to MAC addresses", "To resolve MAC addresses to IP addresses", "To route packets across networks", "To ensure reliable data delivery"],
  answer: "To resolve IP addresses to MAC addresses"
},
{
  question: "What is the difference between TCP and UDP?",
  options: ["TCP is faster than UDP", "UDP is connection-oriented, TCP is connectionless", "TCP provides reliable, ordered delivery, while UDP is unreliable and connectionless", "UDP is used for web browsing, TCP for email"],
  answer: "TCP provides reliable, ordered delivery, while UDP is unreliable and connectionless"
},
{
  question: "What is the maximum number of layers in the TCP/IP model?",
  options: ["4", "5", "7", "8"],
  answer: "4"
},
{
  question: "Which layer of the TCP/IP model corresponds to the OSI model's Network Layer?",
  options: ["Application Layer", "Transport Layer", "Internet Layer", "Link Layer"],
  answer: "Internet Layer"
},
{
  question: "What is a port number used for in TCP/IP?",
  options: ["To identify a physical network interface", "To identify a specific application or service on a host", "To determine the network route", "To encrypt network data"],
  answer: "To identify a specific application or service on a host"
},
{
  question: "What is the standard port number for HTTP?",
  options: ["21", "23", "80", "443"],
  answer: "80"
},
{
  question: "What is the standard port number for HTTPS?",
  options: ["80", "21", "23", "443"],
  answer: "443"
},
{
  question: "What is the purpose of ICMP?",
  options: ["To transfer files", "To report errors and provide control messages at the IP layer", "To resolve domain names", "To manage network devices remotely"],
  answer: "To report errors and provide control messages at the IP layer"
},
{
  question: "What is CIDR notation?",
  options: ["A method of representing MAC addresses", "A compact way of representing an IP address and its associated routing prefix", "A type of network cable", "A network security standard"],
  answer: "A compact way of representing an IP address and its associated routing prefix"
},
{
  question: "What is IPv6?",
  options: ["The previous version of the internet protocol", "The next generation of the internet protocol, offering a larger address space", "A protocol for wireless communication", "A network management protocol"],
  answer: "The next generation of the internet protocol, offering a larger address space"
},
{
  question: "What is the size of an IPv6 address?",
  options: ["32 bits", "64 bits", "128 bits", "256 bits"],
  answer: "128 bits"
},

// Computer Security (approx. 25 questions)
{
  question: "What is confidentiality in the CIA triad?",
  options: ["Ensuring data is accurate and complete", "Preventing unauthorized disclosure of information", "Guaranteeing timely and reliable access to information", "Verifying the identity of users"],
  answer: "Preventing unauthorized disclosure of information"
},
{
  question: "What is integrity in the CIA triad?",
  options: ["Preventing unauthorized modification of information", "Ensuring systems are always available", "Verifying user identities", "Protecting against denial-of-service attacks"],
  answer: "Preventing unauthorized modification of information"
},
{
  question: "What is availability in the CIA triad?",
  options: ["Preventing unauthorized access", "Ensuring authorized users have timely and reliable access to information and systems", "Maintaining data accuracy", "Auditing user actions"],
  answer: "Ensuring authorized users have timely and reliable access to information and systems"
},
{
  question: "What is authentication?",
  options: ["Granting access to resources", "Verifying the identity of a user, process, or device", "Encrypting data to protect its confidentiality", "Detecting and responding to security incidents"],
  answer: "Verifying the identity of a user, process, or device"
},
{
  question: "What is authorization?",
  options: ["Verifying user identity", "Determining what actions an authenticated user is allowed to perform", "Encrypting data in transit", "Monitoring network traffic for malicious activity"],
  answer: "Determining what actions an authenticated user is allowed to perform"
},
{
  question: "What is a virus?",
  options: ["A self-replicating program that attaches itself to a host executable file", "A standalone malicious program that replicates itself across networks", "An attempt to overwhelm a system with traffic", "A technique used to gain unauthorized access to a system"],
  answer: "A self-replicating program that attaches itself to a host executable file"
},
{
  question: "What is a worm?",
  options: ["A program that requires a host file to spread", "A standalone malicious program that replicates itself across networks without needing a host file", "Software that appears legitimate but performs malicious actions", "An attack that exploits vulnerabilities in software"],
  answer: "A standalone malicious program that replicates itself across networks without needing a host file"
},
{
  question: "What is a Trojan horse?",
  options: ["A virus that spreads through email attachments", "A program that disguises itself as legitimate software to gain access to a system", "A type of network scanner", "A method of password cracking"],
  answer: "A program that disguises itself as legitimate software to gain access to a system"
},
{
  question: "What is phishing?",
  options: ["A type of denial-of-service attack", "A social engineering attack that attempts to acquire sensitive information by impersonating a trustworthy entity", "A method of exploiting software vulnerabilities", "A technique for intercepting network traffic"],
  answer: "A social engineering attack that attempts to acquire sensitive information by impersonating a trustworthy entity"
},
{
  question: "What is a denial-of-service (DoS) attack?",
  options: ["An attempt to gain unauthorized access to a system", "An attempt to make a machine or network resource unavailable to its intended users", "A method of stealing data from a database", "A technique for encrypting network traffic"],
  answer: "An attempt to make a machine or network resource unavailable to its intended users"
},
{
  question: "What is a distributed denial-of-service (DDoS) attack?",
  options: ["A DoS attack launched from a single compromised system", "A DoS attack launched from multiple compromised systems", "An attack that targets distributed databases", "A type of network routing attack"],
  answer: "A DoS attack launched from multiple compromised systems"
},
{
  question: "What is a firewall primarily designed to do?",
  options: ["Encrypt network traffic", "Prevent unauthorized access", "Improve network performance", "Manage network devices"],
  answer: "Prevent unauthorized access"
},
{
  question: "What is an Intrusion Detection System (IDS)?",
  options: ["A system that prevents unauthorized access", "A system that monitors network or system activities for malicious activity", "A system that encrypts network traffic", "A system that manages user accounts"],
  answer: "A system that monitors network or system activities for malicious activity"
},
{
  question: "What is encryption?",
  options: ["The process of verifying user identity", "The process of converting data into an unreadable format to protect its confidentiality", "The process of compressing data to reduce its size", "The process of detecting malicious software"],
  answer: "The process of converting data into an unreadable format to protect its confidentiality"
},
{
  question: "What is a VPN (Virtual Private Network)?",
  options: ["A physical network that is not connected to the internet", "A secure, encrypted connection over a public network", "A type of network firewall", "A protocol for wireless communication"],
  answer: "A secure, encrypted connection over a public network"
},
{
  question: "What is a strong password?",
  options: ["A short, memorable word", "A password that is easy to guess", "A long password that includes a mix of uppercase and lowercase letters, numbers, and symbols", "A password that is the same as the username"],
  answer: "A long password that includes a mix of uppercase and lowercase letters, numbers, and symbols"
},
{
  question: "What is multi-factor authentication (MFA)?",
  options: ["Using multiple usernames and passwords", "Requiring users to provide two or more verification factors to gain access", "Encrypting data using multiple algorithms", "Auditing user activity on multiple systems"],
  answer: "Requiring users to provide two or more verification factors to gain access"
},
{
  question: "What is a security audit?",
  options: ["A process of testing network speed", "A systematic evaluation of an organization's security posture", "A method of encrypting data backups", "A way to manage user permissions"],
  answer: "A systematic evaluation of an organization's security posture"
},
{
  question: "What is social engineering?",
  options: ["A type of network architecture", "The psychological manipulation of people into performing actions or divulging confidential information", "A method of secure coding", "A technique for network optimization"],
  answer: "The psychological manipulation of people into performing actions or divulging confidential information"
},
{
  question: "What is a zero-day exploit?",
  options: ["An exploit that has been publicly known for zero days", "An attack that occurs at midnight", "An exploit that targets a vulnerability that is unknown to the software vendor", "A type of denial-of-service attack that lasts for 24 hours"],
  answer: "An exploit that targets a vulnerability that is unknown to the software vendor"
},
{
  question: "What is a security patch?",
  options: ["A piece of software designed to improve system performance", "An update to software that addresses security vulnerabilities", "A hardware component that enhances security", "A type of network cable that is more secure"],
  answer: "An update to software that addresses security vulnerabilities"
},
{
  question: "What is a honeypot?",
  options: ["A high-performance server designed for critical applications", "A decoy system designed to attract and detect cyberattacks", "A type of encryption algorithm", "A network monitoring tool that analyzes traffic patterns"],
  answer: "A decoy system designed to attract and detect cyberattacks"
},
{
  question: "What is steganography?",
  options: ["The art and science of writing hidden messages", "A type of strong encryption", "A method of network intrusion detection", "A technique for password cracking"],
  answer: "The art and science of writing hidden messages"
},
{
  question: "What is cryptography?",
  options: ["The study of ancient writing systems", "The practice and study of techniques for secure communication in the presence of adversaries", "A method of network design", "A type of computer hardware"],
  answer: "The practice and study of techniques for secure communication in the presence of adversaries"
},

// Network and System Administration (approx. 25 questions)
{
  question: "What is the role of a system administrator?",
  options: ["To develop software applications", "To design network infrastructure", "To maintain, configure, and reliably operate computer systems and networks", "To provide end-user support for basic software applications"],
  answer: "To maintain, configure, and reliably operate computer systems and networks"
},
{
  question: "What is user account management?",
  options: ["The process of installing software on user computers", "The process of creating, modifying, and deleting user accounts and their access privileges", "The process of troubleshooting user hardware issues", "The process of backing up user data"],
  answer: "The process of creating, modifying, and deleting user accounts and their access privileges"
},
{
  question: "What is a network topology?",
  options: ["The physical layout of network cables", "The logical arrangement of nodes and connections in a network", "The speed of data transfer across a network", "The security protocols used in a network"],
  answer: "The logical arrangement of nodes and connections in a network"
},
{
  question: "Which of the following is a common network topology?",
  options: ["Hierarchical Programming", "Object-Oriented Design", "Bus Topology", "Waterfall Model"],
  answer: "Bus Topology"
},
{
  question: "What is server virtualization?",
  options: ["Running multiple operating systems on a single physical server", "Physically separating server components", "Managing server hardware remotely", "Optimizing server cooling systems"],
  answer: "Running multiple operating systems on a single physical server"
},
{
  question: "What is the benefit of server virtualization?",
  options: ["Increased physical space requirements", "Reduced hardware costs and improved resource utilization", "Slower network speeds", "More complex management"],
  answer: "Reduced hardware costs and improved resource utilization"
},
{
  question: "What is a network monitoring system used for?",
  options: ["To block unauthorized access to the network", "To track network performance, identify issues, and ensure availability", "To assign IP addresses to network devices", "To encrypt network traffic"],
  answer: "To track network performance, identify issues, and ensure availability",
},

{
  question: "What is the primary goal of System Development Life Cycle (SDLC)?",
  options: ["To write efficient code quickly", "To manage the process of creating and maintaining information systems", "To design user interfaces", "To test software for bugs"],
  answer: "To manage the process of creating and maintaining information systems"
},
{
  question: "Which of the following is generally the first phase of the SDLC?",
  options: ["Implementation", "Testing", "Planning", "Design"],
  answer: "Planning"
},
{
  question: "What is the purpose of the requirements elicitation phase?",
  options: ["To design the database schema", "To gather and document the needs of the stakeholders", "To write the actual code", "To deploy the system to users"],
  answer: "To gather and document the needs of the stakeholders"
},
{
  question: "Which of the following is a common technique used for requirements elicitation?",
  options: ["Unit testing", "Integration testing", "Interviews", "Code review"],
  answer: "Interviews"
},
{
  question: "What is a Use Case diagram primarily used for?",
  options: ["To model the data flow within a system", "To depict the interactions between actors and the system", "To show the class hierarchy of a system", "To illustrate the deployment environment of a system"],
  answer: "To depict the interactions between actors and the system"
},
{
  question: "What is a Class diagram primarily used for?",
  options: ["To model the behavior of objects over time", "To represent the static structure of a system, including classes and their relationships", "To show the sequence of interactions between objects", "To define the user interface layout"],
  answer: "To represent the static structure of a system, including classes and their relationships"
},
{
  question: "What is a Sequence diagram primarily used for?",
  options: ["To model the physical components of a system", "To show the time-ordered interactions between objects", "To represent the different states of an object", "To define the database tables and their relationships"],
  answer: "To show the time-ordered interactions between objects"
},
{
  question: "What is the focus of the design phase of the SDLC?",
  options: ["Writing the code for the system", "Planning the project timeline", "Developing the blueprint for how the system will meet the requirements", "Testing the functionality of the system"],
  answer: "Developing the blueprint for how the system will meet the requirements"
},
{
  question: "What is the difference between logical and physical design?",
  options: ["Logical design focuses on the user interface, physical design on the database", "Logical design describes what the system will do, physical design describes how it will be implemented", "Logical design is done by developers, physical design by testers", "There is no significant difference between them"],
  answer: "Logical design describes what the system will do, physical design describes how it will be implemented"
},
{
  question: "What is the primary activity of the implementation phase?",
  options: ["Gathering requirements", "Writing and testing the software code", "Designing the system architecture", "Deploying the system to the users"],
  answer: "Writing and testing the software code"
},
{
  question: "What is unit testing?",
  options: ["Testing the entire system as a whole", "Testing individual components or modules of the software", "Testing the integration between different modules", "Testing the system with end-users"],
  answer: "Testing individual components or modules of the software"
},
{
  question: "What is integration testing?",
  options: ["Testing individual units in isolation", "Testing the interactions between different modules of the system", "Testing the system to ensure it meets user requirements", "Testing the system in the production environment"],
  answer: "Testing the interactions between different modules of the system"
},
{
  question: "What is system testing?",
  options: ["Testing the individual units", "Testing the integrated components", "Testing the entire system to ensure it meets the specified requirements", "Testing the system's performance under heavy load"],
  answer: "Testing the entire system to ensure it meets the specified requirements"
},
{
  question: "What is user acceptance testing (UAT)?",
  options: ["Testing performed by the developers", "Testing performed by the system administrators", "Testing performed by the end-users to ensure the system meets their needs", "Automated testing of the system's security features"],
  answer: "Testing performed by the end-users to ensure the system meets their needs"
},
{
  question: "What is the primary goal of the deployment phase?",
  options: ["Writing the code", "Testing the system", "Making the system available to the users", "Planning the next iteration"],
  answer: "Making the system available to the users"
},
{
  question: "What activities are typically involved in the maintenance phase?",
  options: ["Requirements gathering and design", "Coding and unit testing", "Fixing bugs, adapting to new requirements, and enhancing the system", "System testing and user acceptance testing"],
  answer: "Fixing bugs, adapting to new requirements, and enhancing the system"
},
{
  question: "What is the Waterfall model?",
  options: ["An iterative and incremental development approach", "A sequential, non-iterative development approach where each phase must be completed before the next begins", "A highly flexible development approach with short iterations", "A development approach focused on rapid prototyping"],
  answer: "A sequential, non-iterative development approach where each phase must be completed before the next begins"
},
{
  question: "What is the Agile model?",
  options: ["A linear development model with strict documentation", "An iterative and incremental development approach that emphasizes collaboration, flexibility, and rapid delivery", "A development model focused on extensive upfront planning", "A model where testing is done only at the end"],
  answer: "An iterative and incremental development approach that emphasizes collaboration, flexibility, and rapid delivery"
},
{
  question: "What is Scrum?",
  options: ["A type of diagram used in system design", "A specific Agile framework for managing software development", "A coding standard for Java", "A database management system"],
  answer: "A specific Agile framework for managing software development"
},
{
  question: "What is a Sprint in Scrum?",
  options: ["A long, continuous development cycle", "A short, time-boxed period during which a team works to complete a set amount of work", "A meeting held at the end of a development phase", "A type of testing performed by the Scrum Master"],
  answer: "A short, time-boxed period during which a team works to complete a set amount of work"
},
{
  question: "What is a Product Backlog in Scrum?",
  options: ["A list of completed tasks", "A prioritized list of features, enhancements, and fixes for the product", "A diagram showing the team's velocity", "A document outlining the technical architecture"],
  answer: "A prioritized list of features, enhancements, and fixes for the product"
},
{
  question: "What is a Sprint Backlog in Scrum?",
  options: ["The overall plan for the entire project", "The set of Product Backlog items selected for a Sprint, plus a plan for delivering the Sprint Goal", "A list of bugs found during the Sprint", "The team's retrospective notes"],
  answer: "The set of Product Backlog items selected for a Sprint, plus a plan for delivering the Sprint Goal"
},
{
  question: "What is a Daily Scrum?",
  options: ["A planning meeting held at the beginning of each Sprint", "A short, daily meeting for the development team to synchronize their work", "A review meeting held at the end of each Sprint", "A meeting between the development team and the stakeholders"],
  answer: "A short, daily meeting for the development team to synchronize their work"
},
{
  question: "What is a Sprint Review?",
  options: ["A meeting to plan the next Sprint", "A meeting to inspect the Increment and adapt the Product Backlog if needed", "A daily meeting for the development team", "A meeting to discuss team performance"],
  answer: "A meeting to inspect the Increment and adapt the Product Backlog if needed"
},
{
  question: "What is a Sprint Retrospective?",
  options: ["A meeting to review the code written during the Sprint", "A meeting to discuss what went well, what could be improved, and how to improve in the next Sprint", "A meeting to plan the testing activities for the next Sprint", "A meeting with the stakeholders to gather feedback"],
  answer: "A meeting to discuss what went well, what could be improved, and how to improve in the next Sprint"
},
{
  question: "What is Extreme Programming (XP)?",
  options: ["A lightweight, efficient coding technique", "An Agile software development framework that emphasizes frequent releases in short cycles, intended to improve productivity and introduce checkpoints at which new customer requirements can be adopted", "A type of project management software", "A method for documenting software design"],
  answer: "An Agile software development framework that emphasizes frequent releases in short cycles, intended to improve productivity and introduce checkpoints at which new customer requirements can be adopted"
},
{
  question: "What is pair programming?",
  options: ["Two programmers working on different parts of the same module", "Two programmers working together at one workstation on the same code", "A coding technique where code is written in pairs of lines", "A method of code review"],
  answer: "Two programmers working together at one workstation on the same code"
},
{
  question: "What is refactoring?",
  options: ["Writing new code to add features", "Restructuring existing code without changing its external behavior to improve its readability, maintainability, and design", "Testing the functionality of the code", "Deploying the code to a production environment"],
  answer: "Restructuring existing code without changing its external behavior to improve its readability, maintainability, and design"
},
{
  question: "What is a software architecture?",
  options: ["The detailed design of individual software components", "The high-level structure of a software system, including its components, their relationships, and the principles governing their design and evolution", "The user interface design of the software", "The database schema of the software"],
  answer: "The high-level structure of a software system, including its components, their relationships, and the principles governing their design and evolution"
},
{
  question: "Which of the following is a common software architectural pattern?",
  options: ["Bubble Sort", "Linear Search", "Model-View-Controller (MVC)", "Binary Tree"],
  answer: "Model-View-Controller (MVC)"
},
{
  question: "What is the Model in MVC?",
  options: ["The user interface components", "The application's data and business logic", "The component that handles user input and updates the view", "The communication layer between different parts of the system"],
  answer: "The application's data and business logic"
},
{
  question: "What is the View in MVC?",
  options: ["The data storage mechanism", "The part of the application that the user sees", "The rules governing the application's behavior", "The way different modules interact"],
  answer: "The part of the application that the user sees"
},
{
  question: "What is the Controller in MVC?",
  options: ["The data model", "The user interface", "The component that handles user input and updates the model and/or the view", "The security framework of the application"],
  answer: "The component that handles user input and updates the model and/or the view"
},
{
  question: "What is coupling in software design?",
  options: ["The degree to which components depend on each other", "The degree to which a module focuses on a single well-defined task", "The clarity and simplicity of the design", "The ability of a system to withstand changes"],
  answer: "The degree to which components depend on each other"
},
{
  question: "Lower coupling generally leads to:",
  options: ["More complex code", "Easier maintenance and less impact from changes", "Increased code redundancy", "Faster execution speed"],
  answer: "Easier maintenance and less impact from changes"
},
{
  question: "What is cohesion in software design?",
  options: ["The degree to which components depend on each other", "The degree to which a module focuses on a single well-defined task", "The ability of a system to withstand changes", "The clarity and simplicity of the design"],
  answer: "The degree to which a module focuses on a single well-defined task"
},
{
  question: "Higher cohesion generally leads to:",
  options: ["More tightly coupled modules", "More focused and understandable classes", "Increased code complexity", "Difficulty in reusing code"],
  answer: "More focused and understandable classes"
},
{
  question: "What is software quality assurance (SQA)?",
  options: ["The process of writing efficient code", "The process of ensuring that software meets specified requirements and quality standards", "The process of designing the user interface", "The process of deploying software to production"],
  answer: "The process of ensuring that software meets specified requirements and quality standards"
},
{
  question: "What is a software metric?",
  options: ["A unit of measurement used to quantify attributes of a software product or process", "A type of software bug", "A diagram used in software design", "A step in the software development lifecycle"],
  answer: "A unit of measurement used to quantify attributes of a software product or process"
},
{
  question: "What is cyclomatic complexity?",
  options: ["A measure of the length of the code", "A measure of the number of linearly independent paths through a program's source code", "A measure of the number of classes in a system", "A measure of the time it takes to execute a program"],
  answer: "A measure of the number of linearly independent paths through a program's source code"
},
{
  question: "What is a software defect?",
  options: ["A feature that is not implemented", "A deviation from the specified or expected behavior of the software", "A comment in the code", "A performance bottleneck"],
  answer: "A deviation from the specified or expected behavior of the software"
},
{
  question: "What is debugging?",
  options: ["Writing code without errors", "The process of finding and fixing defects in software", "Testing the software with end-users", "Deploying the software to a server"],
  answer: "The process of finding and fixing defects in software"
},
{
  question: "What is a version control system?",
  options: ["A system for managing user accounts", "A system for tracking changes to code over time", "A system for deploying software to different environments", "A system for monitoring network traffic"],
  answer: "A system for tracking changes to code over time"
},
{
  question: "Which of the following is a popular version control system?",
  options: ["Microsoft Word", "Adobe Photoshop", "Git", "Microsoft Excel"],
  answer: "Git"
},
{
  question: "What is a software release?",
  options: ["The process of writing the initial code", "The process of making a version of the software available for use", "The process of testing the software", "The process of planning the next version of the software"],
  answer: "The process of making a version of the software available for use"
},
{
  question: "What is technical documentation?",
  options: ["Documentation intended for end-users", "Documentation that describes the design, implementation, and functionality of the software for developers and maintainers", "Marketing materials for the software", "Legal documents related to the software license"],
  answer: "Documentation that describes the design, implementation, and functionality of the software for developers and maintainers"
},
{
  question: "What is user documentation?",
  options: ["Documentation intended for developers", "Documentation that helps end-users understand how to use the software", "Technical specifications of the software", "The software's source code"],
  answer: "Documentation that helps end-users understand how to use the software"
},
{
  question: "What is software maintenance?",
  options: ["The initial development of the software", "The process of modifying, correcting, adapting, and enhancing existing software", "Testing the software for the first time", "Deploying the software to a production environment"],
  answer: "The process of modifying, correcting, adapting, and enhancing existing software"
},
{
  question: "What is corrective maintenance?",
  options: ["Modifying the software to prevent future problems", "Fixing bugs and errors in the software", "Adapting the software to a new operating environment", "Adding new features to the software"],
  answer: "Fixing bugs and errors in the software"
},
{
  question: "What is adaptive maintenance?",
  options: ["Fixing existing bugs", "Modifying the software to meet new business requirements", "Adapting the software to a new operating environment or technology", "Improving the performance of the software"],
  answer: "Adapting the software to a new operating environment or technology"
},
{
  question: "What is perfective maintenance?",
  options: ["Fixing errors in the code", "Modifying the software to improve its performance, maintainability, or other non-functional attributes", "Adapting the software to a new platform", "Adding entirely new functionality to the software"],
  answer: "Modifying the software to improve its performance, maintainability, or other non-functional attributes"
},
{
question: "What is preventative maintenance?",
  options: ["Fixing bugs that have already occurred", "Modifying the software to reduce the likelihood of future problems", "Adapting the software to a new user interface", "Removing unused code from the software"],
  answer: "Modifying the software to reduce the likelihood of future problems"
},
{
  question: "What is a software process?",
  options: ["A specific programming language used for development", "A set of activities and associated results that produce a software product", "A diagram showing the flow of data in a system", "A technique for testing software"],
  answer: "A set of activities and associated results that produce a software product"
},
{
  question: "What is Capability Maturity Model Integration (CMMI)?",
  options: ["A standard for documenting software requirements", "A process improvement approach that provides organizations with the essential elements of effective processes", "A specific Agile development methodology", "A tool for managing software testing activities"],
  answer: "A process improvement approach that provides organizations with the essential elements of effective processes"
},
{
  question: "What is a software prototype?",
  options: ["The final, fully functional version of the software", "A preliminary version of a software product used for demonstration and feedback", "A detailed design document for the software", "A set of unit tests for the software"],
  answer: "A preliminary version of a software product used for demonstration and feedback"
},
{
  question: "What is throwaway prototyping?",
  options: ["Creating a prototype that is intended to be discarded after gathering requirements", "Creating a prototype that evolves into the final product", "A rapid prototyping technique used in Agile development", "Testing the prototype with a small group of users"],
  answer: "Creating a prototype that is intended to be discarded after gathering requirements"
},
{
  question: "What is evolutionary prototyping?",
  options: ["Creating a prototype that is quickly discarded", "Creating an initial prototype that is incrementally refined and becomes the final system", "A prototyping technique used only in Waterfall model", "Creating multiple prototypes in parallel"],
  answer: "Creating an initial prototype that is incrementally refined and becomes the final system"
},
{
  question: "What is a stakeholder in software development?",
  options: ["Only the end-users of the software", "Anyone who has an interest in the success of the project", "Only the developers and testers", "Only the project manager and the client"],
  answer: "Anyone who has an interest in the success of the project"
},
{
  question: "What is requirements traceability?",
  options: ["The ability to track requirements throughout the development lifecycle", "The process of gathering requirements from multiple sources", "A diagram showing the relationships between different types of requirements", "A method for prioritizing requirements"],
  answer: "The ability to track requirements throughout the development lifecycle"
},
{
  question: "What is a non-functional requirement?",
  options: ["A requirement that specifies what the system should do", "A requirement that specifies how the system should perform (e.g., performance, security, usability)", "A requirement related to the user interface design", "A requirement that describes the data to be stored in the system"],
  answer: "A requirement that specifies how the system should perform (e.g., performance, security, usability)"
},
{
  question: "What is a functional requirement?",
  options: ["A requirement that describes the quality attributes of the system", "A requirement that specifies what the system should do", "A constraint on the development process", "A description of the user interface"],
  answer: "A requirement that specifies what the system should do"
},


{
  question: "What is the central processing unit (CPU) primarily responsible for?",
  options: ["Storing data and instructions", "Executing instructions and performing calculations", "Managing input and output devices", "Connecting the computer to the network"],
  answer: "Executing instructions and performing calculations"
},
{
  question: "Which component of the CPU fetches instructions from memory?",
  options: ["Arithmetic Logic Unit (ALU)", "Control Unit (CU)", "Registers", "Cache"],
  answer: "Control Unit (CU)"
},
{
  question: "Which component of the CPU performs arithmetic and logical operations?",
  options: ["Control Unit (CU)", "Registers", "Arithmetic Logic Unit (ALU)", "Memory Management Unit (MMU)"],
  answer: "Arithmetic Logic Unit (ALU)"
},
{
  question: "What are registers in the CPU?",
  options: ["Large, slow memory used for long-term storage", "Small, high-speed storage locations used to hold data and instructions temporarily during processing", "Components responsible for controlling the flow of data", "Units that perform mathematical calculations"],
  answer: "Small, high-speed storage locations used to hold data and instructions temporarily during processing"
},
{
  question: "What is the purpose of the program counter (PC)?",
  options: ["To store the result of the last operation", "To hold the address of the next instruction to be executed", "To keep track of the current data being processed", "To manage the flow of control signals"],
  answer: "To hold the address of the next instruction to be executed"
},
{
  question: "What is the function of the memory address register (MAR)?",
  options: ["To store the data being transferred to or from memory", "To hold the address of the memory location being accessed", "To store the current instruction being executed", "To manage the cache memory addresses"],
  answer: "To hold the address of the memory location being accessed"
},
{
  question: "What is the function of the memory data register (MDR)?",
  options: ["To store the address of the memory location", "To hold the data being transferred to or from memory", "To store the opcode of the current instruction", "To manage the virtual memory addresses"],
  answer: "To hold the data being transferred to or from memory"
},
{
  question: "What is cache memory?",
  options: ["Large, slow main memory", "Small, fast memory used to store frequently accessed data and instructions", "Permanent storage on a hard drive", "Memory used for graphical processing"],
  answer: "Small, fast memory used to store frequently accessed data and instructions"
},
{
  question: "What is the principle of locality of reference?",
  options: ["Data is accessed randomly in memory", "Data and instructions that have been recently accessed are likely to be accessed again soon", "Memory access times are uniform across all locations", "Instructions are always executed sequentially"],
  answer: "Data and instructions that have been recently accessed are likely to be accessed again soon"
},
{
  question: "What is pipelining in computer architecture?",
  options: ["Executing multiple instructions simultaneously by overlapping their execution stages", "Processing data in a sequential, non-overlapping manner", "Using multiple CPUs to execute a single program", "Optimizing the flow of data between memory and the CPU"],
  answer: "Executing multiple instructions simultaneously by overlapping their execution stages"
},
{
  question: "What is instruction set architecture (ISA)?",
  options: ["The physical design of the CPU", "The set of instructions that a CPU can execute", "The organization of memory in a computer system", "The way input/output devices are connected"],
  answer: "The set of instructions that a CPU can execute"
},
{
  question: "What is the difference between RISC and CISC architectures?",
  options: ["RISC has more complex instructions than CISC", "CISC has a smaller number of instructions than RISC", "RISC uses a smaller, simpler set of instructions, while CISC uses a larger, more complex set", "There is no significant difference between them"],
  answer: "RISC uses a smaller, simpler set of instructions, while CISC uses a larger, more complex set"
},
{
  question: "What is parallel processing?",
  options: ["Executing instructions one after another", "Performing multiple computations simultaneously", "Storing data in a distributed manner", "Managing multiple input/output devices"],
  answer: "Performing multiple computations simultaneously"
},
{
  question: "What is the purpose of the memory management unit (MMU)?",
  options: ["To perform arithmetic and logical operations", "To control the fetching and execution of instructions", "To manage the translation between virtual and physical memory addresses", "To handle communication with peripheral devices"],
  answer: "To manage the translation between virtual and physical memory addresses"
},
{
  question: "What is virtual memory?",
  options: ["Physical memory directly accessed by the CPU", "A technique that allows a system to execute programs larger than the physical memory", "A type of very fast cache memory", "Memory that is not actually present but simulated by hardware"],
  answer: "A technique that allows a system to execute programs larger than the physical memory"
},
{
  question: "What is the role of the operating system in memory management?",
  options: ["To physically install memory chips", "To allocate and deallocate memory to processes", "To design the memory architecture", "To manufacture memory components"],
  answer: "To allocate and deallocate memory to processes"
},
{
  question: "What is a bus in computer architecture?",
  options: ["A type of memory chip", "A set of electrical conductors used to transfer data, address, and control signals between components", "A high-speed processing unit", "A peripheral device like a printer"],
  answer: "A set of electrical conductors used to transfer data, address, and control signals between components"
},
{
  question: "What is the difference between synchronous and asynchronous bus?",
  options: ["Synchronous bus uses a clock signal, asynchronous bus does not", "Asynchronous bus is faster than synchronous bus", "Synchronous bus transfers data in parallel, asynchronous bus serially", "There is no significant difference"],
  answer: "Synchronous bus uses a clock signal, asynchronous bus does not"
},
{
  question: "What is DMA (Direct Memory Access)?",
  options: ["A method for the CPU to directly access peripheral devices", "A technique that allows peripheral devices to transfer data to or from memory without CPU intervention", "A type of high-speed cache memory", "A way to directly address virtual memory"],
  answer: "A technique that allows peripheral devices to transfer data to or from memory without CPU intervention"
},
{
  question: "What is an interrupt?",
  options: ["A signal from the CPU to a peripheral device", "A signal from a peripheral device or software indicating that an event has occurred and needs attention", "A type of memory error", "A specific instruction in the CPU's instruction set"],
  answer: "A signal from a peripheral device or software indicating that an event has occurred and needs attention"
},
{
  question: "What is polling?",
  options: ["A method where the CPU periodically checks the status of peripheral devices", "A technique where devices initiate communication with the CPU", "A type of memory access", "A way to prioritize interrupts"],
  answer: "A method where the CPU periodically checks the status of peripheral devices"
},
{
  question: "What is the purpose of input/output (I/O) interfaces?",
  options: ["To connect different parts of the CPU", "To manage the flow of data between the CPU, memory, and peripheral devices", "To store data and instructions", "To perform arithmetic and logical operations"],
  answer: "To manage the flow of data between the CPU, memory, and peripheral devices"
},
{
  question: "What is the role of the chipset on a motherboard?",
  options: ["To house the CPU", "To manage communication between the CPU, memory, and peripherals", "To provide power to the system", "To store the BIOS firmware"],
  answer: "To manage communication between the CPU, memory, and peripherals"
},
{
  question: "What is BIOS (Basic Input/Output System)?",
  options: ["The main operating system of the computer", "Firmware that initializes and tests the system hardware components and loads the operating system", "A type of application software", "A network protocol"],
  answer: "Firmware that initializes and tests the system hardware components and loads the operating system"
},
{
  question: "What is UEFI (Unified Extensible Firmware Interface)?",
  options: ["An older version of BIOS", "A more modern firmware interface that provides more functionality than BIOS", "A type of memory controller", "A standard for connecting peripheral devices"],
  answer: "A more modern firmware interface that provides more functionality than BIOS"
},
{
  question: "What is a multicore processor?",
  options: ["A processor with a very high clock speed", "A processor with multiple independent processing units (cores) on a single chip", "A processor that can execute instructions from multiple programs simultaneously using time-sharing", "A processor with a very large cache"],
  answer: "A processor with multiple independent processing units (cores) on a single chip"
},
{
  question: "What is a GPU (Graphics Processing Unit) primarily designed for?",
  options: ["General-purpose computation", "Handling complex mathematical calculations", "Rendering graphics and parallel processing tasks", "Managing network traffic"],
  answer: "Rendering graphics and parallel processing tasks"
},
{
  question: "What is Moore's Law?",
  options: ["The speed of light is constant", "The number of transistors on a microchip doubles approximately every two years", "Energy cannot be created or destroyed", "For every action, there is an equal and opposite reaction"],
  answer: "The number of transistors on a microchip doubles approximately every two years"
},
{
  question: "What is Amdahl's Law?",
  options: ["A law describing the relationship between voltage and current", "A law that defines the maximum speedup achievable by parallelizing a task", "A law governing network bandwidth limitations", "A principle of software design"],
  answer: "A law that defines the maximum speedup achievable by parallelizing a task"
},

{
  question: "What is the primary function of an operating system (OS)?",
  options: ["To run application software", "To manage computer hardware and software resources", "To connect to the internet", "To perform file compression"],
  answer: "To manage computer hardware and software resources"
},
{
  question: "What is a process in an operating system?",
  options: ["A program stored on disk", "An instance of a program being executed", "A hardware component of the CPU", "A type of memory allocation"],
  answer: "An instance of a program being executed"
},
{
  question: "What is a thread?",
  options: ["A lightweight sub-process that can run concurrently within a process", "A separate program running independently", "A type of file system", "A hardware interrupt"],
  answer: "A lightweight sub-process that can run concurrently within a process"
},
{
  question: "What is process scheduling?",
  options: ["The way processes are stored in memory", "The activity of managing the execution order of processes by the OS", "The communication between different processes", "The allocation of disk space to processes"],
  answer: "The activity of managing the execution order of processes by the OS"
},
{
  question: "Which of the following is a common process scheduling algorithm?",
  options: ["Bubble Sort", "Binary Search", "First-Come, First-Served (FCFS)", "Merge Sort"],
  answer: "First-Come, First-Served (FCFS)"
},
{
  question: "What is a deadlock in operating systems?",
  options: ["A process that has terminated abnormally", "A situation where two or more processes are blocked indefinitely, each waiting for a resource held by another", "A memory allocation error", "A disk access conflict"],
  answer: "A situation where two or more processes are blocked indefinitely, each waiting for a resource held by another"
},
{
  question: "What are the necessary conditions for a deadlock to occur?",
  options: ["Mutual exclusion, hold and wait, no preemption, circular wait", "Mutual exclusion, no hold and wait, preemption, linear wait", "No mutual exclusion, hold and wait, preemption, circular wait", "Mutual exclusion, hold and wait, preemption, no circular wait"],
  answer: "Mutual exclusion, hold and wait, no preemption, circular wait"
},
{
  question: "What is memory management in an operating system?",
  options: ["Physically installing memory chips", "The process of controlling and coordinating computer memory, assigning portions called blocks to various running programs to optimize overall system performance", "Designing the memory architecture", "Manufacturing memory components"],
  answer: "The process of controlling and coordinating computer memory, assigning portions called blocks to various running programs to optimize overall system performance"
},
{
  question: "What is paging?",
  options: ["A contiguous memory allocation scheme", "A memory management scheme that divides the address space of a process into fixed-size blocks called pages and the physical memory into frames", "A method of swapping entire processes between memory and disk", "A technique for optimizing disk access"],
  answer: "A memory management scheme that divides the address space of a process into fixed-size blocks called pages and the physical memory into frames"
},
{
  question: "What is segmentation?",
  options: ["Dividing physical memory into fixed-size blocks", "Dividing the logical address space of a process into variable-size blocks called segments", "A method of managing disk space", "A type of file system organization"],
  answer: "Dividing the logical address space of a process into variable-size blocks called segments"
},
{
  question: "What is thrashing?",
  options: ["A state where the system spends most of its time swapping pages, resulting in low CPU utilization", "A type of disk error", "A CPU scheduling deadlock", "A memory leak"],
  answer: "A state where the system spends most of its time swapping pages, resulting in low CPU utilization"
},
{
  question: "What is a file system?",
  options: ["A part of the hardware that stores files", "The way the operating system organizes and manages files on a storage device", "A type of application software for managing files", "A network protocol for sharing files"],
  answer: "The way the operating system organizes and manages files on a storage device"
},
{
  question: "What is a directory (or folder)?",
  options: ["A physical storage location on a disk", "A logical container for files and other directories", "A type of file", "A system process for managing files"],
  answer: "A logical container for files and other directories"
},
{
  question: "What are file permissions used for?",
  options: ["To encrypt the contents of a file", "To control who can access and modify files", "To compress the size of a file", "To determine the file type"],
  answer: "To control who can access and modify files"
},
{
  question: "What is an operating system kernel?",
  options: ["The outermost layer of the OS that interacts with the user", "The core component of the OS that manages the system's resources", "A utility program for file management", "A programming language used to write the OS"],
  answer: "The core component of the OS that manages the system's resources"
},
{
  question: "What is a system call?",
  options: ["A call from one application program to another", "A request from a user-level process to the operating system kernel for a service", "A hardware interrupt", "A function within the kernel itself"],
  answer: "A request from a user-level process to the operating system kernel for a service"
},
{
  question: "What is a shell in an operating system?",
  options: ["The core of the operating system", "A user interface that allows users to interact with the operating system", "A type of hardware interface", "A program for compiling code"],
  answer: "A user interface that allows users to interact with the operating system"
},
{
  question: "What is a device driver?",
  options: ["A program that controls the CPU", "A software component that allows the operating system to interact with a hardware device", "A type of memory module", "A network interface card"],
  answer: "A software component that allows the operating system to interact with a hardware device"
},
{
  question: "What is the purpose of system libraries?",
  options: ["To provide low-level access to hardware", "To offer pre-written functions that applications can use", "To manage system processes", "To handle network communication"],
  answer: "To offer pre-written functions that applications can use"
},
{
  question: "What is a network operating system?",
  options: ["An OS designed to manage network resources and provide services to multiple users", "An OS that runs on a single computer", "An OS that does not support networking", "A type of embedded operating system"],
  answer: "An OS designed to manage network resources and provide services to multiple users"
},
{
  question: "What is a real-time operating system (RTOS)?",
  options: ["An OS that provides immediate processing and response to input", "An OS that runs on personal computers", "An OS that does not support multitasking", "A type of embedded operating system"],
  answer: "An OS that provides immediate processing and response to input"
},
{
  question: "What is virtualization in computing?",
  options: ["Running multiple operating systems on a single physical machine", "Creating a backup of the operating system", "A method for optimizing memory usage", "A technique for improving CPU performance"],
  answer: "Running multiple operating systems on a single physical machine"
},
{
  question: "What is a hypervisor?",
  options: ["A type of application software", "A layer of software that enables virtualization by allowing multiple operating systems to run on a single physical machine", "A hardware component of the CPU", "A type of file system"],
  answer: "A layer of software that enables virtualization by allowing multiple operating systems to run on a single physical machine"
},
{
  question: "What is the difference between Type 1 and Type 2 hypervisors?",
  options: ["Type 1 runs directly on hardware, Type 2 runs on top of an existing OS", "Type 2 runs directly on hardware, Type 1 runs on top of an existing OS", "There is no difference", "Type 1 is used for personal computers, Type 2 for servers"],
  answer: "Type 1 runs directly on hardware, Type 2 runs on top of an existing OS"
},
{
  question: "What is a network protocol?",
  options: ["A set of rules governing data communication between devices", "A type of hardware component", "A programming language", "A method for storing data"],
  answer: "A set of rules governing data communication between devices"
},
{
  question: "What is TCP/IP?",
  options: ["A type of file system", "A suite of communication protocols used to interconnect network devices on the internet", "A programming language", "A type of operating system"],
  answer: "A suite of communication protocols used to interconnect network devices on the internet"
},
{
  question: "What does TCP stand for?",
  options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transmission Communication Protocol", "Transfer Communication Protocol"],
  answer: "Transmission Control Protocol"
},
{
  question: "What does IP stand for?",
  options: ["Internet Protocol", "Internal Protocol", "Interconnected Protocol", "Integrated Protocol"],
  answer: "Internet Protocol"
},
{
  question: "What is the purpose of the Transmission Control Protocol (TCP)?",
  options: ["To establish a connection and ensure reliable data transmission between devices", "To route data packets across networks", "To encrypt data during transmission", "To manage network traffic"],
  answer: "To establish a connection and ensure reliable data transmission between devices"
},
{
  question: "What is the purpose of the Internet Protocol (IP)?",
  options: ["To establish a connection between two devices", "To route data packets from the source to the destination across networks", "To encrypt data during transmission", "To manage local area networks"],
  answer: "To route data packets from the source to the destination across networks"
},
{
  question: "What is an IP address?",
  options: ["A unique identifier assigned to each device connected to a network", "The physical address of a computer", "The name of a website", "The location of a server"],
  answer: "A unique identifier assigned to each device connected to a network"
},
{
  question: "What is a subnet mask?",
  options: ["A method for encrypting data packets", "A number that defines the range of IP addresses in a subnet", "A type of network protocol", "A hardware component"],
  answer: "A number that defines the range of IP addresses in a subnet"
},

{
  question: "What is generally considered the goal of Artificial Intelligence (AI)?",
  options: ["To create robots that look and act like humans", "To develop systems that can perform tasks that typically require human intelligence", "To replace all human jobs with machines", "To simulate the human brain perfectly"],
  answer: "To develop systems that can perform tasks that typically require human intelligence"
},
{
  question: "Which of the following is a major subfield of AI focused on enabling computers to learn from data without being explicitly programmed?",
  options: ["Robotics", "Natural Language Processing (NLP)", "Computer Vision", "Machine Learning (ML)"],
  answer: "Machine Learning (ML)"
},
{
  question: "What is supervised learning in machine learning?",
  options: ["Learning from unlabeled data", "Learning to predict an output based on labeled input data", "Learning through trial and error", "Learning to find hidden patterns in data"],
  answer: "Learning to predict an output based on labeled input data"
},
{
  question: "Which of the following is a common supervised learning algorithm for classification tasks?",
  options: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Support Vector Machines (SVM)", "Q-learning"],
  answer: "Support Vector Machines (SVM)"
},
{
  question: "What is unsupervised learning in machine learning?",
  options: ["Learning from labeled data", "Learning without explicit output labels, often to find patterns or structure in the data", "Learning through reinforcement signals", "Learning to generate new data similar to the input"],
  answer: "Learning without explicit output labels, often to find patterns or structure in the data"
},
{
  question: "Which of the following is a common unsupervised learning algorithm for clustering?",
  options: ["Linear Regression", "Decision Trees", "K-Nearest Neighbors (KNN)", "K-Means Clustering"],
  answer: "K-Means Clustering"
},
{
  question: "What is reinforcement learning?",
  options: ["Learning from a teacher who provides correct answers", "Learning through interactions with an environment, receiving rewards or penalties for actions", "Learning to classify data based on predefined categories", "Learning to predict continuous values based on input features"],
  answer: "Learning through interactions with an environment, receiving rewards or penalties for actions"
},
{
  question: "Which of the following is a key component of a reinforcement learning system?",
  options: ["Labeled dataset", "Decision tree", "Agent and environment", "Clustering algorithm"],
  answer: "Agent and environment"
},
{
  question: "What is Natural Language Processing (NLP)?",
  options: ["A field focused on enabling computers to understand, interpret, and generate human language", "A technique for processing numerical data", "A method for controlling robots using voice commands", "A way to visualize complex data sets"],
  answer: "A field focused on enabling computers to understand, interpret, and generate human language"
},
{
  question: "Which of the following is a common task in NLP?",
  options: ["Image recognition", "Speech synthesis", "Data compression", "Robotic navigation"],
  answer: "Speech synthesis"
},
{
  question: "What is Computer Vision?",
  options: ["A field focused on enabling computers to 'see' and interpret information from the visual world", "A technique for compressing video files", "A method for creating computer graphics", "A way to simulate human vision perfectly"],
  answer: "A field focused on enabling computers to 'see' and interpret information from the visual world"
},
{
  question: "Which of the following is a common task in Computer Vision?",
  options: ["Text summarization", "Sentiment analysis", "Object detection", "Machine translation"],
  answer: "Object detection"
},
{
  question: "What is an Artificial Neural Network (ANN)?",
  options: ["A biological model of the human brain", "A computational model inspired by the structure and function of biological neural networks", "A type of computer hardware designed for AI", "A programming language specifically for AI"],
  answer: "A computational model inspired by the structure and function of biological neural networks"
},
{
  question: "What is a deep learning?",
  options: ["A type of shallow machine learning", "Machine learning with many layers of artificial neural networks", "A learning process that requires very little data", "A technique for learning from symbolic representations"],
  answer: "Machine learning with many layers of artificial neural networks"
},
{
  question: "What is the Turing Test?",
  options: ["A test to measure the speed of a computer", "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human", "A benchmark for evaluating machine learning algorithms", "A method for training neural networks"],
  answer: "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human"
},
{
  question: "What is the concept of AI ethics concerned with?",
  options: ["Making AI systems run faster", "Ensuring AI systems are developed and used responsibly and ethically", "Developing AI systems that can perfectly mimic human behavior", "Creating AI systems that are always profitable"],
  answer: "Ensuring AI systems are developed and used responsibly and ethically"
},
{
  question: "What is strong AI (or Artificial General Intelligence - AGI)?",
  options: ["AI that excels at a specific task", "AI with human-level general intelligence, capable of performing any intellectual task that a human being can", "AI that is physically strong", "AI that is only used in research settings"],
  answer: "AI with human-level general intelligence, capable of performing any intellectual task that a human being can"
},
{
  question: "What is weak AI (or narrow AI)?",
  options: ["AI that is not very powerful", "AI designed and trained for a specific task", "AI that requires a lot of computational resources", "AI that cannot learn from data"],
  answer: "AI designed and trained for a specific task"
},
{
  question: "What is knowledge representation in AI?",
  options: ["The way AI systems store and manipulate data", "The methods used to encode and organize information in an AI system so that it can be used effectively", "The visual interface of an AI application", "The process of training a machine learning model"],
  answer: "The methods used to encode and organize information in an AI system so that it can be used effectively"
},
{
  question: "Which of the following is a common knowledge representation technique?",
  options: ["Linear regression", "Clustering", "Semantic networks", "Backpropagation"],
  answer: "Semantic networks"
},
{
  question: "What is inference in AI?",
  options: ["The process of collecting data for AI training", "The process of deriving new information or conclusions from existing knowledge", "The way AI systems communicate with users", "The hardware used to run AI algorithms"],
  answer: "The process of deriving new information or conclusions from existing knowledge"
},
{
  question: "What is an expert system?",
  options: ["A system that can learn from any type of data", "An AI system designed to mimic the decision-making ability of a human expert in a specific domain", "A system used for image recognition", "A system that translates between human languages"],
  answer: "An AI system designed to mimic the decision-making ability of a human expert in a specific domain"
},
{
  question: "What are the key components of an expert system?",
  options: ["Sensors and actuators", "Knowledge base and inference engine", "CPU and GPU", "Input data and output predictions"],
  answer: "Knowledge base and inference engine"
},
{
  question: "What is forward chaining in expert systems?",
  options: ["Reasoning from goals to facts", "Reasoning from facts to conclusions", "A method of searching through a knowledge base randomly", "A way to represent uncertain knowledge"],
  answer: "Reasoning from facts to conclusions"
},
{
  question: "What is backward chaining in expert systems?",
  options: ["Reasoning from facts to goals", "Reasoning from goals to facts", "A technique for resolving conflicts in rules", "A method for updating the knowledge base"],
  answer: "Reasoning from goals to facts"
},
{
  question: "What is a chatbot?",
  options: ["A robot that can have conversations", "An AI program designed to simulate conversation with human users, especially over the internet", "A software tool for analyzing text data", "A type of search engine"],
  answer: "An AI program designed to simulate conversation with human users, especially over the internet"
},
{
  question: "What is the role of data in AI?",
  options: ["Data is only needed for storing the final AI model", "Data is crucial for training and evaluating AI models", "AI systems can function perfectly without any data", "Data is only used for the user interface of AI applications"],
  answer: "Data is crucial for training and evaluating AI models"
},
{
  question: "What is bias in AI?",
  options: ["A preference of an AI model for certain types of data", "Systematic errors in AI outputs due to flaws in the data or the algorithm", "The speed at which an AI model can process information", "The number of layers in a deep learning network"],
  answer: "Systematic errors in AI outputs due to flaws in the data or the algorithm"
},
{
  question: "What is explainable AI (XAI)?",
  options: ["AI systems that are very easy for anyone to understand", "AI systems whose decisions can be understood and justified by humans", "AI systems that only provide textual explanations", "AI systems that are always correct"],
  answer: "AI systems whose decisions can be understood and justified by humans"
},
{
  question: "What is the Internet of Things (IoT)?",
  options: ["A network of interconnected physical objects embedded with sensors, software, and other technologies that enable them to collect and exchange data", "The next generation of the internet", "A programming language for embedded devices", "A type of wireless communication protocol"],
  answer: "A network of interconnected physical objects embedded with sensors, software, and other technologies that enable them to collect and exchange data"
},
{
  question: "Which of the following is a key characteristic of IoT devices?",
  options: ["They are always directly controlled by humans", "They can operate autonomously and communicate with each other", "They have unlimited processing power", "They do not require internet connectivity"],
  answer: "They can operate autonomously and communicate with each other"
},
{
  question: "What is Big Data?",
  options: ["Very small datasets that can be easily processed by traditional methods", "Extremely large and complex datasets that are difficult to process with traditional data processing applications", "Data that is stored in a specific type of database", "Data that is only used by large corporations"],
  answer: "Extremely large and complex datasets that are difficult to process with traditional data processing applications"
},
{
  question: "What are the 'three Vs' of Big Data?",
  options: ["Volume, Velocity, Variety", "Validity, Veracity, Visualization", "Value, Variability, Vulnerability", "Virtualization, Verification, Velocity"],
  answer: "Volume, Velocity, Variety"
},
{
  question: "What is Blockchain technology?",
  options: ["A centralized database managed by a single authority", "A distributed, decentralized, public ledger that records transactions across many computers", "A type of data encryption", "A protocol for secure communication over the internet"],
  answer: "A distributed, decentralized, public ledger that records transactions across many computers"
},
{
  question: "What is a key feature of blockchain technology?",
  options: ["Centralized control", "Immutability of records", "Easy modification of past transactions", "Reliance on a single point of failure"],
  answer: "Immutability of records"
},
{
  question: "What are cryptocurrencies?",
  options: ["Traditional currencies in digital form", "Digital or virtual currencies that use cryptography for security", "Government-issued digital currencies", "Bartering systems using digital tokens"],
  answer: "Digital or virtual currencies that use cryptography for security"
},
{
  question: "Which technology is often associated with cryptocurrencies?",
  options: ["Relational databases", "Cloud computing", "Blockchain", "Social media platforms"],
  answer: "Blockchain"
},
{
  question: "What is Augmented Reality (AR)?",
  options: ["A completely immersive digital environment", "Technology that overlays digital information onto the real world", "A type of virtual assistant", "A technique for creating 3D models"],
  answer: "Technology that overlays digital information onto the real world"
},
{
  question: "What is Virtual Reality (VR)?",
  options: ["Overlaying digital information onto the real world", "Creating a completely immersive, simulated digital environment", "A type of holographic projection", "A method for enhancing real-world images"],
  answer: "Creating a completely immersive, simulated digital environment"
},
{
  question: "What is 5G technology?",
  options: ["The fourth generation of wireless technology", "The fifth generation of wireless technology, promising faster speeds and lower latency", "A wired network standard", "A type of satellite communication"],
  answer: "The fifth generation of wireless technology, promising faster speeds and lower latency"
},
{
  question: "What is a key benefit of 5G technology?",
  options: ["Lower bandwidth", "Higher latency", "Faster data transfer speeds", "Increased network congestion"],
  answer: "Faster data transfer speeds"
},
{
  question: "What is quantum computing?",
  options: ["Traditional computing using smaller transistors", "A type of computing that uses quantum-mechanical phenomena such as superposition and entanglement", "Computing with extremely fast processors", "Analog computing systems"],
  answer: "A type of computing that uses quantum-mechanical phenomena such as superposition and entanglement"
},
{
  question: "What is a qubit in quantum computing?",
  options: ["The basic unit of information in classical computing", "The basic unit of information in quantum computing, which can exist in multiple states simultaneously", "A type of quantum particle", "A quantum algorithm"],
  answer: "The basic unit of information in quantum computing, which can exist in multiple states simultaneously"
},
{
  question: "What is nanotechnology?",
  options: ["The study of very large structures", "The manipulation of matter on an atomic and molecular scale", "A new type of computer chip", "A method for cleaning up environmental pollution using large machines"],
  answer: "The manipulation of matter on an atomic and molecular scale"
},
{
  question: "What are smart cities?",
  options: ["Cities with only electric vehicles", "Urban areas that use technology and data to improve efficiency, sustainability, and the quality of life for their citizens", "Cities with very tall buildings", "Cities that are entirely run by robots"],
  answer: "Urban areas that use technology and data to improve efficiency, sustainability, and the quality of life for their citizens"
},
{
  question: "What are autonomous vehicles?",
  options: ["Vehicles that require constant human control", "Vehicles capable of sensing their environment and operating without human involvement", "Vehicles powered by alternative energy sources", "Vehicles that can fly"],
  answer: "Vehicles capable of sensing their environment and operating without human involvement"
},
{
  question: "What is biotechnology?",
  options: ["The study of ancient civilizations", "The use of living systems and organisms to develop or make products", "The study of rocks and minerals", "The development of new computer software"],
  answer: "The use of living systems and organisms to develop or make products"
},
{
  question: "What is synthetic biology?",
  options: ["The study of naturally occurring biological systems", "The design and construction of new biological parts, devices, and systems, or the re-design of existing natural biological systems for useful purposes", "The process of creating artificial life", "The study of fossils"],
  answer: "The design and construction of new biological parts, devices, and systems, or the re-design of existing natural biological systems for useful purposes"
},
{
  question: "What are additive manufacturing technologies also known as?",
  options: ["Subtractive manufacturing", "Mass production", "3D printing", "Traditional machining"],
  answer: "3D printing"
},
{
  question: "What is the key principle of 3D printing?",
  options: ["Removing material to create an object", "Building objects layer by layer from a digital design", "Molding objects from liquid materials", "Carving objects from a solid block"],
  answer: "Building objects layer by layer from a digital design"
},
{
  question: "What isEdge Computing?",
  options: ["Performing computations on a powerful central server", "Performing computations closer to the source of the data, reducing latency and bandwidth usage", "A type of cloud computing infrastructure", "Computing without any internet connection"],
  answer: "Performing computations closer to the source of the data, reducing latency and bandwidth usage"
},
{
  question: "What is fog computing?",
  options: ["A centralized cloud computing model", "A distributed computing paradigm that extends cloud computing to the edge of the network", "Computing on isolated devices", "A type of quantum computing"],
  answer: "A distributed computing paradigm that extends cloud computing to the edge of the network"
},
{
  question: "What are digital twins?",
options: ["Exact replicas of physical assets, processes, or systems that exist in the digital realm", "Virtual avatars of real people", "Digital currencies issued by central banks", "Advanced cybersecurity software"],
  answer: "Exact replicas of physical assets, processes, or systems that exist in the digital realm"
},
{
  question: "What is the primary purpose of digital twins?",
  options: ["Entertainment and gaming", "Monitoring, analysis, and prediction of the behavior of their physical counterparts", "Creating virtual social media profiles", "Designing new types of computer hardware"],
  answer: "Monitoring, analysis, and prediction of the behavior of their physical counterparts"
},
{
  question: "What are perovskite solar cells considered an emerging technology in?",
  options: ["Battery technology", "Semiconductor manufacturing", "Renewable energy", "Data storage"],
  answer: "Renewable energy"
},
{
  question: "What is a key potential advantage of perovskite solar cells over traditional silicon-based solar cells?",
  options: ["Lower efficiency", "Higher manufacturing costs", "Simpler processing and potentially lower costs", "Shorter lifespan"],
  answer: "Simpler processing and potentially lower costs"
},
{
  question: "What is CRISPR-Cas9 technology?",
  options: ["A new type of computer virus", "A gene-editing technology that allows scientists to make precise changes to DNA", "A method for faster data transmission", "A type of advanced robotic arm"],
  answer: "A gene-editing technology that allows scientists to make precise changes to DNA"
},
{
  question: "What is a potential ethical concern associated with CRISPR-Cas9 technology?",
  options: ["Increased internet speeds", "Improved solar panel efficiency", "The possibility of unintended genetic modifications and 'designer babies'", "More accurate weather forecasting"],
  answer: "The possibility of unintended genetic modifications and 'designer babies'"
},

{
  question: "What is the cardinality of the power set of a set with 'n' elements?",
  options: ["n", "2n", "n^2", "2^n"],
  answer: "2^n"
},
{
  question: "Which of the following is a tautology?",
  options: ["p ∧ ¬p", "p ∨ ¬p", "p → q", "p ∧ q"],
  answer: "p ∨ ¬p"
},
{
  question: "What is the contrapositive of the statement 'If it rains, then the ground is wet'?",
  options: ["If the ground is wet, then it rains", "If the ground is not wet, then it does not rain", "If it does not rain, then the ground is not wet", "It rains and the ground is not wet"],
  answer: "If the ground is not wet, then it does not rain"
},
{
  question: "A function f: A → B is injective if:",
  options: ["For every b in B, there exists an a in A such that f(a) = b", "For every a1, a2 in A, if f(a1) = f(a2), then a1 = a2", "The cardinality of A is equal to the cardinality of B", "The function maps every element of A to every element of B"],
  answer: "For every a1, a2 in A, if f(a1) = f(a2), then a1 = a2"
},
{
  question: "What is the value of 5! (5 factorial)?",
  options: ["5", "10", "25", "120"],
  answer: "120"
},
{
  question: "How many subsets does a set with 3 elements have?",
  options: ["3", "6", "8", "9"],
  answer: "8"
},
{
  question: "What is the base case for the recursive definition of factorial (n!)?",
  options: ["n = 1", "n = 0", "n < 0", "n = 2"],
  answer: "n = 0"
},
{
  question: "What is the sum of the first 'n' natural numbers?",
  options: ["n^2", "n(n-1)/2", "n(n+1)/2", "2n"],
  answer: "n(n+1)/2"
},
{
  question: "Which of the following is a property of a binary relation R on a set A that states (a, a) ∈ R for all a ∈ A?",
  options: ["Symmetric", "Transitive", "Reflexive", "Antisymmetric"],
  answer: "Reflexive"
},
{
  question: "A graph where there is a path between every pair of vertices is called:",
  options: ["Acyclic", "Complete", "Connected", "Bipartite"],
  answer: "Connected"
},
{
  question: "What is the number of edges in a complete graph with 'n' vertices?",
  options: ["n-1", "n", "n(n-1)/2", "n^2"],
  answer: "n(n-1)/2"
},
{
  question: "A graph with no cycles is called:",
  options: ["Complete", "Connected", "Acyclic", "Regular"],
  answer: "Acyclic"
},
{
  question: "What is the degree of a vertex in an undirected graph?",
  options: ["The number of incoming edges", "The number of outgoing edges", "The total number of edges in the graph", "The number of edges incident to the vertex"],
  answer: "The number of edges incident to the vertex"
},
{
  question: "What is a spanning tree of a connected graph G?",
  options: ["A subgraph of G that contains all vertices and has no cycles", "A subgraph of G that contains all edges and has no cycles", "A subgraph of G that is also a complete graph", "A subgraph of G with the minimum number of vertices"],
  answer: "A subgraph of G that contains all vertices and has no cycles"
},
{
  question: "What is the time complexity of searching for an element in a sorted array using binary search?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(log n)"
},
{
  question: "What is the time complexity of sorting an array using bubble sort in the worst case?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
  answer: "O(n^2)"
},
{
  question: "What is the Master Theorem used for in algorithm analysis?",
  options: ["Solving recurrence relations for divide and conquer algorithms", "Proving the correctness of algorithms", "Analyzing the space complexity of algorithms", "Finding the best-case time complexity of an algorithm"],
  answer: "Solving recurrence relations for divide and conquer algorithms"
},
{
  question: "What is the Big O notation for an algorithm with a running time proportional to n log n?",
  options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
  answer: "O(n log n)"
},
{
  question: "What is the space complexity of an algorithm?",
  options: ["The amount of time it takes to run the algorithm", "The amount of memory space required by the algorithm", "The number of lines of code in the algorithm", "The number of inputs the algorithm can process"],
  answer: "The amount of memory space required by the algorithm"
},
{
  question: "Which of the following is a linear data structure?",
  options: ["Tree", "Graph", "Array", "Heap"],
  answer: "Array"
},
{
  question: "What is the primary advantage of a linked list over an array?",
  options: ["Faster access to elements by index", "More efficient insertion and deletion of elements", "Lower memory overhead", "Better cache locality"],
  answer: "More efficient insertion and deletion of elements"
},
{
  question: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
  options: ["Queue", "Stack", "Linked List", "Tree"],
  answer: "Stack"
},
{
  question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
  options: ["Stack", "Queue", "Heap", "Graph"],
  answer: "Queue"
},
{
  question: "What is a binary search tree?",
  options: ["A tree where each node has at most one child", "A tree where the left child's value is greater than the parent's value", "A tree where the left child's value is less than or equal to the parent's value, and the right child's value is greater", "A balanced tree structure"],
  answer: "A tree where the left child's value is less than or equal to the parent's value, and the right child's value is greater"
},
{
  question: "What is the average time complexity of searching in a hash table?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is a collision in a hash table?",
  options: ["When two keys map to the same index", "When the hash table is full", "When a key is not found in the table", "When the hash function produces the same output for all inputs"],
  answer: "When two keys map to the same index"
},
{
  question: "Which sorting algorithm has an average time complexity of O(n log n) and is generally efficient?",
  options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
  answer: "Merge Sort"
},
{
  question: "What is the best-case time complexity of insertion sort?",
  options: ["O(n^2)", "O(n log n)", "O(n)", "O(1)"],
  answer: "O(n)"
},
{
  question: "What is a heap data structure typically used for?",
  options: ["Implementing stacks", "Implementing queues", "Priority queues and heap sort", "Storing sorted data"],
  answer: "Priority queues and heap sort"
},
{
  question: "What is the time complexity of the heapify operation?",
  options: ["O(log n)", "O(n^2)", "O(n)", "O(n log n)"],
  answer: "O(n)"
},
{
  question: "Which graph traversal algorithm uses a queue?",
  options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Topological Sort", "Prim's Algorithm"],
  answer: "Breadth-First Search (BFS)"
},
{
  question: "Which graph traversal algorithm uses a stack (implicitly through recursion)?",
  options: ["Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Depth-First Search (DFS)", "Kruskal's Algorithm"],
  answer: "Depth-First Search (DFS)"
},
{
  question: "What is a directed acyclic graph (DAG)?",
  options: ["A graph with no cycles and directed edges", "A graph with cycles and directed edges", "A graph with no cycles and undirected edges", "A graph where all edges are bidirectional"],
  answer: "A graph with no cycles and directed edges"
},
{
  question: "What is topological sorting applicable to?",
  options: ["Undirected graphs", "Graphs with cycles", "Directed acyclic graphs", "Complete graphs"],
  answer: "Directed acyclic graphs"
},
{
  question: "What is dynamic programming primarily used for?",
  options: ["Solving problems with optimal substructure and overlapping subproblems", "Sorting large datasets efficiently", "Searching for elements in unsorted data", "Implementing recursive algorithms"],
  answer: "Solving problems with optimal substructure and overlapping subproblems"
},
{
  question: "What is a greedy algorithm?",
  options: ["An algorithm that always chooses the globally optimal solution", "An algorithm that makes locally optimal choices at each step", "An algorithm that explores all possible solutions", "An algorithm that divides the problem into smaller subproblems"],
  answer: "An algorithm that makes locally optimal choices at each step"
},
{
  question: "What is backtracking?",
  options: ["A method for sorting in reverse order", "A problem-solving technique that explores all possible candidates and abandons partial candidates that cannot lead to a solution", "A way to optimize recursive function calls", "A technique for memory management"],
  answer: "A problem-solving technique that explores all possible candidates and abandons partial candidates that cannot lead to a solution"
},
{
  question: "What is the time complexity of accessing an element in a stack?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is the time complexity of accessing an element in a queue?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},
{
  question: "What is the average time complexity of insertion in a hash table?",
  options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
  answer: "O(1)"
},


{
  question: "What is the function of the Control Unit in a CPU?",
  options: ["Performing arithmetic operations", "Fetching instructions from memory", "Directing the operations of the CPU", "Storing data temporarily"],
  answer: "Directing the operations of the CPU"
},
{
  question: "What is the purpose of the instruction register (IR)?",
  options: ["To store the address of the next instruction", "To hold the instruction that is currently being executed", "To store the results of calculations", "To manage memory addresses"],
  answer: "To hold the instruction that is currently being executed"
},
{
  question: "What is the role of the Arithmetic Logic Unit (ALU)?",
  options: ["Controlling the flow of instructions", "Performing mathematical and logical operations", "Managing memory access", "Interfacing with input/output devices"],
  answer: "Performing mathematical and logical operations"
},
{
  question: "What is the fetch-decode-execute cycle?",
  options: ["The process of compiling and running a program", "The fundamental operation cycle of a CPU", "The way data is stored and retrieved from memory", "The process of connecting to a network"],
  answer: "The fundamental operation cycle of a CPU"
},
{
  question: "What is the purpose of cache coherence?",
  options: ["Ensuring that all copies of data in multiple caches are consistent", "Improving the speed of cache access", "Reducing the size of the cache", "Managing virtual memory addresses"],
  answer: "Ensuring that all copies of data in multiple caches are consistent"
},
{
  question: "What is pipelining hazard?",
  options: ["A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle", "A type of memory error", "A security vulnerability in the CPU", "A problem with data transfer on the bus"],
  answer: "A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle"
},
{
  question: "What is instruction-level parallelism?",
  options: ["Executing multiple instructions from different programs concurrently", "Executing multiple instructions within a single program concurrently", "Using multiple CPUs to run the same program", "Optimizing the order of instructions in a program"],
  answer: "Executing multiple instructions within a single program concurrently"
},
{
  question: "What is the difference between RAM and ROM?",
  options: ["RAM is read-only, ROM is read-write", "RAM is volatile, ROM is non-volatile", "RAM is used for permanent storage, ROM for temporary storage", "There is no functional difference"],
  answer: "RAM is volatile, ROM is non-volatile"
},
{
  question: "What is the purpose of the operating system?",
  options: ["To run user applications", "To manage hardware resources and provide services to applications", "To compile and execute code", "To connect to the internet"],
  answer: "To manage hardware resources and provide services to applications"
},
{
  question: "What is a system bus?",
  options: ["A type of memory", "A communication pathway between major computer components", "A software interface for system calls", "A high-speed network connection"],
  answer: "A communication pathway between major computer components"
},
{
  question: "What is the function of the northbridge chipset?",
  options: ["Managing low-speed peripherals", "Connecting the CPU to high-speed components like memory and graphics", "Providing network connectivity", "Handling power management"],
  answer: "Connecting the CPU to high-speed components like memory and graphics"
},
{
  question: "What is the function of the southbridge chipset?",
  options: ["Connecting the CPU to memory", "Managing slower peripherals like USB and SATA", "Handling graphics processing", "Controlling the system clock"],
  answer: "Managing slower peripherals like USB and SATA"
},
{
  question: "What is the role of the clock signal in a CPU?",
  options: ["To provide power to the CPU", "To synchronize the operations of different components", "To store temporary data", "To control the flow of instructions"],
  answer: "To synchronize the operations of different components"
},
{
  question: "What is word size in computer architecture?",
  options: ["The physical size of the CPU", "The number of bits that the CPU can process at one time", "The size of the main memory", "The number of instructions in the instruction set"],
  answer: "The number of bits that the CPU can process at one time"
},
{
  question: "What is instruction pipelining?",
  options: ["Executing multiple programs concurrently", "Overlapping the execution stages of multiple instructions", "Fetching all instructions before execution", "Decoding all instructions at once"],
  answer: "Overlapping the execution stages of multiple instructions"
},
{
  question: "What is data hazard in pipelining?",
  options: ["When an instruction depends on the result of a previous instruction that is still in the pipeline", "When multiple instructions try to access the same data", "When there is an error in the data being processed", "When the pipeline is full"],
  answer: "When an instruction depends on the result of a previous instruction that is still in the pipeline"
},
{
  question: "What is control hazard in pipelining?",
  options: ["When there is a conflict in accessing control registers", "When a branch instruction alters the program counter, potentially fetching the wrong instruction", "When control signals are corrupted", "When the control unit malfunctions"],
  answer: "When a branch instruction alters the program counter, potentially fetching the wrong instruction"
},
{
  question: "What is the purpose of branch prediction?",
  options: ["To predict the outcome of arithmetic operations", "To guess whether a conditional branch will be taken or not, to improve pipeline efficiency", "To predict memory access patterns", "To optimize instruction decoding"],
  answer: "To guess whether a conditional branch will be taken or not, to improve pipeline efficiency"
},
{
  question: "What is superscalar architecture?",
  options: ["A CPU with a very large instruction set", "A CPU that can execute more than one instruction per clock cycle", "A CPU designed for supercomputers", "A CPU with a very long pipeline"],
  answer: "A CPU that can execute more than one instruction per clock cycle"
},
{
  question: "What is multithreading in a CPU?",
  options: ["Executing multiple programs concurrently", "Allowing multiple threads of execution within a single process to run concurrently on the CPU cores", "Using multiple CPUs in a single system", "A way to optimize single-threaded applications"],
  answer: "Allowing multiple threads of execution within a single process to run concurrently on the CPU cores"
},
{
  question: "What is SIMD (Single Instruction, Multiple Data)?",
  options: ["An architecture with a single instruction stream and a single data stream", "An architecture that allows one instruction to operate on multiple data elements in parallel", "An architecture with multiple instruction streams and a single data stream", "An architecture with multiple instruction streams and multiple data streams"],
  answer: "An architecture that allows one instruction to operate on multiple data elements in parallel"
},
{
  question: "What is a process control block (PCB)?",
  options: ["A block of memory containing the program code", "A data structure used by the operating system to store information about a process", "A hardware component that controls process execution", "A file that stores process-related information on disk"],
  answer: "A data structure used by the operating system to store information about a process"
},
{
  question: "What is context switching?",
  options: ["Switching between different user accounts", "The process of saving the state of one process and loading the saved state of another process", "Changing the priority of a process", "Moving a process from main memory to disk"],
  answer: "The process of saving the state of one process and loading the saved state of another process"
},
{
  question: "What is a semaphore?",
  options: ["A signaling mechanism used to control access to shared resources in a concurrent system", "A type of memory allocation", "A scheduling algorithm", "A file system structure"],
  answer: "A signaling mechanism used to control access to shared resources in a concurrent system"
},
{
  question: "What is a mutex?",
  options: ["A type of semaphore that allows multiple processes to access a resource simultaneously", "A synchronization primitive that provides exclusive access to a shared resource", "A scheduling algorithm that prioritizes mutual exclusion", "A memory region that is mutually exclusive"],
  answer: "A synchronization primitive that provides exclusive access to a shared resource"
},
{
  question: "What is a race condition?",
  options: ["A situation where the outcome of a computation depends on the relative order of execution of multiple threads or processes", "A very fast process", "A scheduling algorithm that always favors the shortest job", "A memory access violation"],
  answer: "A situation where the outcome of a computation depends on the relative order of execution of multiple threads or processes"
},
{
  question: "What is inter-process communication (IPC)?",
  options: ["Communication between different computers on a network", "Mechanisms that allow processes to exchange data", "Communication between the operating system and hardware", "The way users interact with the operating system"],
  answer: "Mechanisms that allow processes to exchange data"
},
{
  question: "Which of the following is an IPC mechanism?",
  options: ["CPU registers", "Cache memory", "Pipes", "Main memory"],
  answer: "Pipes"
},
{
  question: "What is a virtual file system (VFS)?",
  options: ["A file system that exists only in memory", "An abstraction layer that allows applications to access different file systems in a uniform way", "A file system used for virtual machines", "A distributed file system"],
  answer: "An abstraction layer that allows applications to access different file systems in a uniform way"
},
{
  question: "What is disk scheduling?",
  options: ["The process of organizing files on a disk", "The process of determining the order in which disk I/O requests are serviced", "The process of backing up data on a disk", "The process of formatting a disk"],
  answer: "The process of determining the order in which disk I/O requests are serviced"
},
{
  question: "Which of the following is a disk scheduling algorithm?",
  options: ["First-Come, First-Served (FCFS)", "Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"],
  answer: "First-Come, First-Served (FCFS)"
},
{
  question: "What is the purpose of a device driver?",
  options: ["To physically connect hardware devices", "To enable the operating system to interact with hardware devices", "To manage user accounts", "To run application software"],
  answer: "To enable the operating system to interact with hardware devices"
},
{
  question: "What is a real-time operating system (RTOS)?",
  options: ["An OS designed for gaming", "An OS that guarantees a certain capability within a specified time constraint", "An OS for very large mainframe computers", "An OS with a graphical user interface"],
  answer: "An OS that guarantees a certain capability within a specified time constraint"
},
{
  question: "What is a distributed operating system?",
  options: ["An OS that runs on a single powerful server", "An OS that manages a group of independent computers and makes them appear to the user as a single coherent system", "An OS designed for mobile devices", "An OS that is distributed as open-source software"],
  answer: "An OS that manages a group of independent computers and makes them appear to the user as a single coherent system"
},
{
  question: "What is a kernel module?",
  options: ["A small program that runs in user space", "A piece of code that can be dynamically loaded and unloaded into the kernel", "The main executable of the operating system", "A hardware component of the system"],
  answer: "A piece of code that can be dynamically loaded and unloaded into the kernel"
},
{
  question: "What is a monolithic kernel?",
  options: ["A kernel structure where most operating system services run in kernel space", "A kernel structure where most services run in user space", "A very small and efficient kernel", "A kernel that supports only one type of hardware"],
  answer: "A kernel structure where most operating system services run in kernel space"
},
{
  question: "What is a microkernel?",
  options: ["A large and complex kernel", "A kernel structure that provides minimal services in kernel space, with most services running in user space", "A kernel designed for embedded systems", "A kernel that supports only command-line interfaces"],
  answer: "A kernel structure that provides minimal services in kernel space, with most services running in user space"
},
{
  question: "What is a hypervisor?",
  options: ["A type of application software", "Software that creates and runs virtual machines", "A hardware component for memory management", "A network monitoring tool"],
  answer: "Software that creates and runs virtual machines"
},
{
  question: "What is a virtual machine (VM)?",
  options: ["A physical computer that is accessed remotely", "A software-based emulation of a computer system", "A type of high-speed network", "A very secure operating system"],
  answer: "A software-based emulation of a computer system"
},
{
  question: "What is cloud computing?",
  options: ["Running applications on a local computer", "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale", "Storing all data on physical hard drives", "Using only open-source software"],
  answer: "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale"
},


];