const questions = [
  {
    question: "What is a certificate authority (CA)?",
    options: ["An organization that issues digital certificates", "A government agency that regulates the internet",
      "A company that provides antivirus software", "A group of hackers"],
    answer: "An organization that issues digital certificates"
  },
  {
    question: "What is the purpose of risk assessment in cybersecurity?",
    options: ["To eliminate all security threats",
      "To identify, analyze, and evaluate potential security risks and their likelihood and impact", "To implement security controls",
      "To respond to security incidents"],
    answer: "To identify, analyze, and evaluate potential security risks and their likelihood and impact"
  },
  {
    question: "What is a security policy?",
    options: ["A set of rules that defines how an organization protects its information and assets",
      "A type of software that detects malware", "A hardware device that filters network traffic", "A method for encrypting data"],
    answer: "A set of rules that defines how an organization protects its information and assets"
  },
  {
    question: "What is social engineering?",
    options: ["The process of designing social media platforms",
      "The art of manipulating people into divulging confidential information", "A branch of sociology",
      "A type of software development methodology"],
    answer: "The art of manipulating people into divulging confidential information"
  },
  {
    question: "What is a zero-day exploit?",
    options: ["An exploit that has been known for zero days",
      "An exploit that takes advantage of a previously unknown vulnerability", "An exploit that is no longer effective",
      "An exploit that targets hardware"],
    answer: "An exploit that takes advantage of a previously unknown vulnerability"
  },
  {
    question: "What is penetration testing?",
    options: ["Testing the strength of passwords",
      "Simulated cyberattacks to evaluate the security of a system or network", "Testing software functionality",
      "Analyzing network traffic"],
    answer: "Simulated cyberattacks to evaluate the security of a system or network"
  },
  {
    question: "What is incident response?",
    options: ["Preventing security incidents", "Detecting malware",
      "The process of responding to and managing the aftermath of a security incident", "Encrypting data"],
    answer: "The process of responding to and managing the aftermath of a security incident"
  },
  {
    question: "What is agile methodology?",
    options: ["A traditional project management approach",
      "An iterative and flexible approach to software development that emphasizes collaboration and customer feedback",
      "A method for database management", "A type of network architecture"],
    answer: "An iterative and flexible approach to software development that emphasizes collaboration and customer feedback"
  },
  {
    question: "What is Scrum?",
    options: ["A type of programming language", "A framework for agile project management", "A software testing technique",
      "A type of database"],
    answer: "A framework for agile project management"
  },
  {
    question: "What is a Sprint in Scrum?",
    options: ["A long-term project phase", "A time-boxed period in which a Scrum Team works to complete a set amount of work",
      "A type of meeting", "A software release"],
    answer: "A time-boxed period in which a Scrum Team works to complete a set amount of work"
  },
  {
    question: "What is a Product Backlog in Scrum?",
    options: ["A list of completed tasks",
      "An ordered list of everything that is known to be needed in the product", "A list of team members", "A project timeline"],
    answer: "An ordered list of everything that is known to be needed in the product"
  },
  {
    question: "What is a Sprint Backlog in Scrum?",
    options: ["A list of all tasks in the project",
      "The set of Product Backlog items selected for a Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal",
      "A list of bugs", "A project budget"],
    answer: "The set of Product Backlog items selected for a Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal"
  },
  {
    question: "What is a Daily Scrum?",
    options: ["A weekly planning meeting",
      "A short, daily meeting for the development team to synchronize activities and create a plan for the next 24 hours",
      "A meeting with stakeholders", "A review of the previous Sprint"],
    answer: "A short, daily meeting for the development team to synchronize activities and create a plan for the next 24 hours"
  },
  {
    question: "What is a Sprint Review?",
    options: ["A review of the code quality",
      "A meeting to inspect the Increment at the end of a Sprint and adapt the Product Backlog if needed", "A planning meeting",
      "A retrospective meeting"],
    answer: "A meeting to inspect the Increment at the end of a Sprint and adapt the Product Backlog if needed"
  },
  {
    question: "What is a Sprint Retrospective?",
    options: ["A review of the project budget",
      "A meeting to discuss what went well, what could be improved, and what changes to make in the next Sprint", "A daily stand-up",
      "A meeting with clients"],
    answer: "A meeting to discuss what went well, what could be improved, and what changes to make in the next Sprint"
  },
  {
    question: "What is Kanban?",
    options: ["A type of database", "A framework for agile software development",
      "A visual system for managing work as it moves through a process", "A programming language"],
    answer: "A visual system for managing work as it moves through a process"
  },
  {
    question: "What is continuous integration (CI)?",
    options: ["A method for database integration",
      "The practice of automating the integration of code changes from multiple developers into a shared repository",
      "A type of software testing", "A way to design user interfaces"],
    answer: "The practice of automating the integration of code changes from multiple developers into a shared repository"
  },
  {
    question: "What is continuous delivery (CD)?",
    options: ["A technique for delivering software to customers manually",
      "The practice of automating the software release process, so that software can be released quickly and reliably at any time",
      "A method for data analysis", "A type of network configuration"],
    answer: "The practice of automating the software release process, so that software can be released quickly and reliably at any time"
  },
  {
    question: "What is test-driven development (TDD)?",
    options: ["A development process where tests are written before the code",
      "A method for testing user interfaces", "A way to design databases", "A technique for writing documentation"],
    answer: "A development process where tests are written before the code"
  },
  {
    question: "What is refactoring?",
    options: ["Adding new features to code",
      "The process of restructuring existing code without changing its external behavior to improve its readability, maintainability, and performance",
      "Writing code from scratch", "Debugging code"],
    answer: "The process of restructuring existing code without changing its external behavior to improve its readability, maintainability, and performance"
  },
  {
    question: "What is code review?",
    options: ["A meeting to discuss project timelines",
      "The process of having other developers examine code to identify potential errors, bugs, or areas for improvement",
      "A way to write documentation", "A method for testing software"],
    answer: "The process of having other developers examine code to identify potential errors, bugs, or areas for improvement"
  },
  {
    question: "What is software testing?",
    options: ["Writing code", "Designing user interfaces",
      "The process of evaluating software to detect differences between expected and actual results", "Managing project budgets"],
    answer: "The process of evaluating software to detect differences between expected and actual results"
  },
  {
    question: "What is unit testing?",
    options: ["Testing the entire system as a whole",
      "Testing individual components or units of code in isolation", "Testing the user interface", "Testing database performance"],
    answer: "Testing individual components or units of code in isolation"
  },
  {
    question: "What is integration testing?",
    options: ["Testing individual units",
      "Testing the interaction between different units or components of the system", "Testing the system as a whole",
      "Testingthe database as a whole"],
    answer: "Testing the interaction between different units or components of the system"
  },
  {
    question: "What is system testing?",
    options: ["Testing individual components", "Testing the system as a whole to ensure it meets specified requirements",
      "Testing the user interface", "Testing the database"],
    answer: "Testing the system as a whole to ensure it meets specified requirements"
  },
  {
    question: "What is acceptance testing?",
    options: ["Testing by developers", "Testing by end-users or customers to determine whether to accept the system",
      "Testing the system's performance", "Testing security aspects"],
    answer: "Testing by end-users or customers to determine whether to accept the system"
  },
  {
    question: "What is black-box testing?",
    options: ["Testing the internal structure or code of a system",
      "Testing the functionality of a system without knowledge of its internal implementation", "Automated testing", "Performance testing"],
    answer: "Testing the functionality of a system without knowledge of its internal implementation"
  },
  {
    question: "What is white-box testing?",
    options: ["Testing the system without knowledge of its internal workings",
      "Testing the internal structure or code of a system", "Testing the user interface", "Testing database schema"],
    answer: "Testing the internal structure or code of a system"
  },
  {
    question: "What is test coverage?",
    options: ["The amount of code that has been tested", "The number of test cases written", "The speed of test execution",
      "The cost of testing"],
    answer: "The amount of code that has been tested"
  },
  {
    question: "What is cyclomatic complexity?",
    options: ["A measure of the complexity of a software program's control flow", "A measure of code length",
      "A measure of code performance", "A measure of code readability"],
    answer: "A measure of the complexity of a software program's control flow"
  },
  {
    question: "What is a software defect?",
    options: ["A feature of the software", "A deviation from the specified or expected behavior of the software",
      "An improvement to the software", "A type of software license"],
    answer: "A deviation from the specified or expected behavior of the software"
  },
  {
    question: "What is debugging?",
    options: ["Writing code", "Testing code", "The process of finding and fixing defects in software", "Documenting code"],
    answer: "The process of finding and fixing defects in software"
  },
  {
    question: "What is a version control system?",
    options: ["A tool for writing code", "A system for managing and tracking changes to software code", "A type of database",
      "A software testing tool"],
    answer: "A system for managing and tracking changes to software code"
  },
  {
    question: "What is a software release?",
    options: ["The process of writing code", "The process of testing software",
      "The process of delivering the final product to the end-users", "The process of designing user interfaces"],
    answer: "The process of delivering the final product to the end-users"
  },
  {
    question: "What is technical documentation?",
    options: ["Documentation for end-users",
      "Documentation that describes the design, functionality, and maintenance of the software", "Marketing materials for the software",
      "Legal documents related to the software"],
    answer: "Documentation that describes the design, functionality, and maintenance of the software"
  },
  {
    question: "What is user documentation?",
    options: ["Documentation for software developers",
      "Documentation designed to help end-users understand and use the software", "Documentation for testers",
      "Documentation for project managers"],
    answer: "Documentation designed to help end-users understand and use the software"
  },
  {
    question: "What is software maintenance?",
    options: ["Writing software code", "Designing software",
      "The process of modifying, updating, and fixing errors in software after it has been delivered to the customer", "Testing software"],
    answer: "The process of modifying, updating, and fixing errors in software after it has been delivered to the customer"
  },
  {
    question: "What is corrective maintenance?",
    options: ["Adding new features", "Fixing defects or errors in the software", "Adapting the software to new environments",
      "Improving software performance"],
    answer: "Fixing defects or errors in the software"
  },
  {
    question: "What is adaptive maintenance?",
    options: ["Fixing defects", "Adding new features", "Modifying the software to work in a new environment",
      "Improving software design"],
    answer: "Modifying the software to work in a new environment"
  },
  {
    question: "What is perfective maintenance?",
    options: ["Fixing errors", "Adapting to new environments", "Adding new features or improving performance", "Changing the user interface"],
    answer: "Adding new features or improving performance"
  },
  {
    question: "What is preventative maintenance?",
    options: ["Fixing defects reactively", "Modifying the software to prevent future problems", "Adding new features",
      "Changing the database schema"],
    answer: "Modifying the software to prevent future problems"
  },
  {
    question: "What is software architecture?",
    options: ["The process of writing code", "The high-level structure of a software system", "The design of user interfaces",
      "The management of software projects"],
    answer: "The high-level structure of a software system"
  },
  {
    question: "What is a design pattern?",
    options: ["A blueprint for building houses",
      "A reusable solution to a commonly occurring problem in software design", "A type of software license", "A way to write documentation"],
    answer: "A reusable solution to a commonly occurring problem in software design"
  },
  {
    question: "What is object-oriented design (OOD)?",
    options: ["A design approach based on functions",
      "A design approach focused on objects and their interactions", "A design approach for databases", "A design approach for networks"],
    answer: "A design approach focused on objects and their interactions"
  },
  {
    question: "What is a software requirement?",
    options: ["A statement of what the user needs from the software", "A line of code", "A software bug", "A user interface element"],
    answer: "A statement of what the user needs from the software"
  },
  {
    question: "What is a use case?",
    options: ["A diagram of data flow",
      "A description of how a user interacts with a system to achieve a specific goal", "A software architecture pattern",
      "A type of software testing"],
    answer: "A description of how a user interacts with a system to achieve a specific goal"
  },
  {
    question: "What is a data flow diagram (DFD)?",
    options: ["A diagram showing the flow of data through a system", "A diagram showing the user interface",
      "A diagram showing the class hierarchy", "A diagram showing the network topology"],
    answer: "A diagram showing the flow of data through a system"
  },
  {
    question: "What is the purpose of an operating system (OS)?",
    options: ["To run web browsers",
      "To manage computer hardware and software resources and provide services for computer programs", "To design user interfaces",
      "To compile code"],
    answer: "To manage computer hardware and software resources and provide services for computer programs"
  },
  {
    question: "What is a process in an operating system?",
    options: ["A program in execution", "A hardware component", "A file", "A user"],
    answer: "A program in execution"
  },
  {
    question: "What is a thread in an operating system?",
    options: ["A lightweight subprocess that can execute concurrently within a process", "A heavy process", "A virtual machine",
      "A kernel module"],
    answer: "A lightweight subprocess that can execute concurrently within a process"
  },
  {
    question: "What is multitasking?",
    options: ["Running only one process at a time", "Running multiple processes concurrently", "Managing memory", "File management"],
    answer: "Running multiple processes concurrently"
  },
  {
    question: "What is a process scheduler?",
    options: ["A component that manages memory",
      "A component that selects which process to execute next and allocates CPU time", "A component that handles file I/O",
      "A component that manages network connections"],
    answer: "A component that selects which process to execute next and allocates CPU time"
  },
  {
    question: "What is a deadlock?",
    options: ["A situation where a process executes indefinitely",
      "A situation where two or more processes are blocked indefinitely, waiting for each other", "A memory overflow", "A file system error"],
    answer: "A situation where two or more processes are blocked indefinitely, waiting for each other"
  },
  {
    question: "What are the necessary conditions for a deadlock to occur?",
    options: ["Mutual exclusion, hold and wait, no preemption, circular wait", "Only mutual exclusion", "Only circular wait",
      "Mutual exclusion and hold and wait"],
    answer: "Mutual exclusion, hold and wait, no preemption, circular wait"
  },
  {
    question: "What is memory management in an operating system?",
    options: ["Managing the file system", "Allocating and deallocating memory to processes", "Managing network connections",
      "Scheduling processes"],
    answer: "Allocating and deallocating memory to processes"
  },
  {
    question: "What is paging?",
    options: ["Dividing a program into logical units",
      "Dividing physical memory into fixed-size blocks called pages", "Swapping processes between memory and disk", "Allocating memory dynamically"],
    answer: "Dividing physical memory into fixed-size blocks called pages"
  },
  {
    question: "What is segmentation?",
    options: ["Dividing memory into equal-sized blocks",
      "Dividing a program into logical units called segments", "Swapping pages between memory and disk", "Allocating memory contiguously"],
    answer: "Dividing a program into logical units called segments"
  },
  {
    question: "What is virtual memory?",
    options: ["Physical memory", "A technique that allows processes to execute even if they are not entirely in memory",
      "Memory on a virtual machine", "Cache memory"],
    answer: "A technique that allows processes to execute even if they are not entirely in memory"
  },
  {
    question: "What is the role of the operating system in memory management?",
    options: ["To manage files",
      "To allocate and deallocate memory, handle swapping, and provide memory protection", "To schedule processes", "To manage network traffic"],
    answer: "To allocate and deallocate memory, handle swapping, and provide memory protection"
  },
  {
    question: "What is a bus in computer architecture?",
    options: ["A storage device",
      "A communication system that transfers data between components inside a computer", "A type of memory", "A peripheral device"],
    answer: "A communication system that transfers data between components inside a computer"
  },
  {
    question: "What is the difference between synchronous and asynchronous bus?",
    options: ["Synchronous uses clock signals, asynchronous does not", "Asynchronous is faster than synchronous",
      "Synchronous is used for external devices, asynchronous for internal", "There is no difference"],
    answer: "Synchronous uses clock signals, asynchronous does not"
  },
  {
    question: "What is DMA (Direct Memory Access)?",
    options: ["Accessing memory directly by the CPU",
      "Allowing hardware subsystems to access main memory independently of the CPU", "A type of cache memory", "A memory addressing technique"],
    answer: "Allowing hardware subsystems to access main memory independently of the CPU"
  },
  {
    question: "What is an interrupt?",
    options: ["A type of error",
      "A signal to the processor indicating that an event has occurred that needs attention", "A memory access", "A disk operation"],
    answer: "A signal to the processor indicating that an event has occurred that needs attention"
  },
  {
    question: "What is a file system?",
    options: ["A method for organizing and storing computer files", "A type of database", "A network protocol", "A memory management technique"],
    answer: "A method for organizing and storing computer files"
  },
  {
    question: "What is a distributed operating system?",
    options: ["An OS for mobile devices",
      "An OS that manages a group of independent computers and makes them appear to the user of the computer as a single computer", "An OS for real-time systems",
      "An OS with a graphical user interface"],
    answer: "An OS that manages a group of independent computers and makes them appear to the user of the computer as a single computer"
  },
  {
    question: "What is a real-time operating system (RTOS)?",
    options: ["An OS for general-purpose computing",
      "An OS that guarantees a certain capability within a specified time constraint", "An OS for servers", "An OS for embedded systems"],
    answer: "An OS that guarantees a certain capability within a specified time constraint"
  },
  {
    question: "What is virtualization in computing?",
    options: ["Creating virtual reality environments",
      "Creating a virtual version of something, such as an operating system, server, storage device, or network resource", "Managing virtual machines",
      "Designing virtual circuits"],
    answer: "Creating a virtual version of something, such as an operating system, server, storage device, or network resource"
  },
  {
    question: "What is a hypervisor?",
    options: ["A type of operating system",
      "Software that creates and runs virtual machines", "A hardware component", "A network device"],
    answer: "Software that creates and runs virtual machines"
  },
  {
    question: "What is the difference between Type 1 and Type 2 hypervisors?",
    options: ["Type 1 runs on top of an OS, Type 2 runs directly on hardware", "Type 1 runs directly on hardware, Type 2 runs on top of an OS",
      "Type 1 is for servers, Type 2 is for desktops", "There is no difference"],
    answer: "Type 1 runs directly on hardware, Type 2 runs on top of an OS"
  },
  {
    question: "What is a network protocol?",
    options: ["A set of rules that govern communication between devices on a network", "A type of network hardware", "A network topology",
      "A method for encrypting data"],
    answer: "A set of rules that govern communication between devices on a network"
  },
  {
    question: "What is the TCP/IP model?",
    options: ["A model for network hardware",
      "A conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system", "A database model",
      "A software development model"],
    answer: "A conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system"
  },
  {
    question: "What is a network topology?",
    options: ["The physical or logical arrangement of elements of a communication network", "A type of network protocol", "A network speed",
      "A network security method"],
    answer: "The physical or logical arrangement of elements of a communication network"
  },
  {
    question: "What is a LAN (Local Area Network)?",
    options: ["A network that covers a large geographical area",
      "A network that connects devices within a limited geographical area", "A type of network protocol", "A network security system"],
    answer: "A network that connects devices within a limited geographical area"
  },
  {
    question: "What is a WAN (Wide Area Network)?",
    options: ["A network that connects devices within a small area",
      "A network that covers a large geographical area", "A type of network device", "A network operating system"],
    answer: "A network that covers a large geographical area"
  },
  {
    question: "What is the Internet?",
    options: ["A collection of local area networks",
      "A global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to communicate between networks and devices",
      "A type of network topology", "A network protocol"],
    answer: "A global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to communicate between networks and devices"
  },
  {
    question: "What is cloud computing?",
    options: ["Computing on personal devices",
      "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer",
      "Using physical servers in an office", "A type of software development"],
    answer: "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer"
  },
  {
    question: "What are the different cloud service models (IaaS, PaaS, SaaS)?",
    options: ["Infrastructure as a Service, Platform as a Service, Software as a Service",
      "Internet as a Service, Platform as a Service, Software as a Service", "Infrastructure as an Application, Platform as an Application, Software as an Application",
      "Internet as an Application, Platform as an Application, Software as an Application"],
    answer: "Infrastructure as a Service,Platform as a Service, Software as a Service"
  },
  {
    question: "What is big data?",
    options: ["Small datasets", "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations",
      "Data stored in small databases", "Data that is not structured"],
    answer: "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations"
  },
  {
    question: "What is artificial intelligence (AI)?",
    options: ["Human intelligence",
      "The theory and development of computer systems able to perform tasks that normally require human intelligence", "A type of programming language",
      "A type of computer hardware"],
    answer: "The theory and development of computer systems able to perform tasks that normally require human intelligence"
  },
  {
    question: "What is machine learning?",
    options: ["Programming computers",
      "The field of study that gives computers the ability to learn without being explicitly programmed", "Building robots", "Designing computer chips"],
    answer: "The field of study that gives computers the ability to learn without being explicitly programmed"
  },
  {
    question: "What is deep learning?",
    options: ["Learning about the ocean",
      "A type of machine learning that uses artificial neural networks with multiple layers to progressively extract higher-level features from the raw input",
      "A method for data analysis", "A way to design databases"],
    answer: "A type of machine learning that uses artificial neural networks with multiple layers to progressively extract higher-level features from the raw input"
  },
  {
    question: "What is the Internet of Things (IoT)?",
    options: ["A network of web pages",
      "The network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and network connectivity which enables these objects to connect and exchange data",
      "A type of cloud computing", "A new programming paradigm"],
    answer: "The network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and network connectivity which enables these objects to connect and exchange data"
  },
  {
    question: "What is 5G?",
    options: ["A type of computer virus",
      "The 5th generation of cellular network technology", "A new operating system", "A type of database"],
    answer: "The 5th generation of cellular network technology"
  },
  {
    question: "What is a key benefit of 5G technology?",
    options: ["Lower latency and faster data transfer speeds", "Increased battery life for devices", "Smaller network coverage area",
      "Lower network security"],
    answer: "Lower latency and faster data transfer speeds"
  },
  {
    question: "What is quantum computing?",
    options: ["Computing with abacuses",
      "A type of computing that uses quantum phenomena such as superposition and entanglement to perform operations on data", "Traditional computing",
      "Analog computing"],
    answer: "A type of computing that uses quantum phenomena such as superposition and entanglement to perform operations on data"
  },
  {
    question: "What is a qubit in quantum computing?",
    options: ["A bit in classical computing", "The basic unit of quantum information", "A quantum gate", "A quantum circuit"],
    answer: "The basic unit of quantum information"
  },
  {
    question: "What is nanotechnology?",
    options: ["Technology for building large structures",
      "Technology that involves the manipulation of matter on an atomic and molecular scale", "A new type of computer chip", "A method for data storage"],
    answer: "Technology that involves the manipulation of matter on an atomic and molecular scale"
  },
  {
    question: "What is blockchain technology?",
    options: ["A type of database",
      "A distributed, decentralized, public, digital ledger used to record transactions across many computers so that the record cannot be altered retroactively, without the alteration of all subsequent blocks",
      "A method for encrypting data", "A new programming language"],
    answer: "A distributed, decentralized, public, digital ledger used to record transactions across many computers so that the record cannot be altered retroactively, without the alteration of all subsequent blocks"
  },
  {
    question: "What are perovskite solar cells considered an emerging technology in?",
    options: ["Nuclear energy", "Renewable energy", "Aerospace engineering", "Biotechnology"],
    answer: "Renewable energy"
  },
  {
    question: "What is a key potential advantage of perovskite solar cells over traditional silicon-based solar cells?",
    options: ["Higher efficiency and lower cost", "Longer lifespan", "Greater flexibility", "Higher resistance to heat"],
    answer: "Higher efficiency and lower cost"
  },
  {
    question: "What is CRISPR-Cas9 technology?",
    options: ["A new type of computer",
      "A gene-editing technology that allows scientists to precisely edit DNA sequences", "A method for data storage", "A type of renewable energy"],
    answer: "A gene-editing technology that allows scientists to precisely edit DNA sequences"
  },
  {
    question: "What is a potential ethical concern associated with CRISPR-Cas9 technology?",
    options: ["Increased food production", "Potential for misuse in genetic engineering", "Improved medical treatments", "Reduced pollution"],
    answer: "Potential for misuse in genetic engineering"
  },
  {
    question: "What is the cardinality of the power set of a set with 'n' elements?",
    options: ["n", "2n", "n^2", "2^n"],
    answer: "2^n"
  },
  {
    question: "Which of the following is a tautology?",
    options: ["p ∧ ¬p", "p ∨ ¬p", "p → q", "p ↔ ¬q"],
    answer: "p ∨ ¬p"
  },
  {
    question: "What is the contrapositive of the statement 'If it rains, then the ground is wet'?",
    options: ["If the ground is wet, then it rained", "If it does not rain, then the ground is not wet",
      "If the ground is not wet, then it did not rain", "If it rains, then the ground is not wet"],
    answer: "If the ground is not wet, then it did not rain"
  },
  {
    question: "What is the principle of mathematical induction used for?",
    options: ["Solving differential equations", "Proving statements about recursive algorithms",
      "Finding the roots of polynomial equations", "Calculating probabilities"],
    answer: "Proving statements about recursive algorithms"
  },
  {
    question: "What is a graph in discrete mathematics?",
    options: ["A chart showing data points",
      "A structure consisting of vertices (nodes) and edges that connect them", "A function plotted on a coordinate plane", "A statistical distribution"],
    answer: "A structure consisting of vertices (nodes) and edges that connect them"
  },
  {
    question: "What is a tree in graph theory?",
    options: ["A graph with cycles", "A connected graph with no cycles", "A graph with many branches", "A graph that represents family relationships"],
    answer: "A connected graph with no cycles"
  },
  {
    question: "What is a binary tree?",
    options: ["A tree where each node has at most two children", "A tree where each node has any number of children",
      "A tree with only one branch", "A tree used for searching"],
    answer: "A tree where each node has at most two children"
  },
  {
    question: "What is a hash function?",
    options: ["A function that encrypts data",
      "A function that maps data of arbitrary size to data of a fixed size", "A function that sorts data", "A function that generates random numbers"],
    answer: "A function that maps data of arbitrary size to data of a fixed size"
  },
  {
    question: "What is a collision in a hash table?",
    options: ["When two keys map to the same index", "When data is lost", "When the table is full", "When a key is not found"],
    answer: "When two keys map to the same index"
  },
  {
    question: "Which sorting algorithm has an average time complexity of O(n log n) and is generally efficient?",
    options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
    answer: "Merge sort"
  },
  {
    question: "What is the best-case time complexity of insertion sort?",
    options: ["O(n^2)", "O(log n)", "O(n log n)", "O(n)"],
    answer: "O(n)"
  },
  {
    question: "What is a heap data structure typically used for?",
    options: ["Storing sorted data", "Implementing queues", "Priority queues and sorting", "Graph traversal"],
    answer: "Priority queues and sorting"
  },
  {
    question: "What is the time complexity of the heapify operation?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which graph traversal algorithm uses a queue?",
    options: ["Depth-first search (DFS)", "Breadth-first search (BFS)", "Dijkstra's algorithm", "Bellman-Ford algorithm"],
    answer: "Breadth-first search (BFS)"
  },
  {
    question: "Which graph traversal algorithm uses a stack (implicitly through recursion)?",
    options: ["Breadth-first search (BFS)", "Depth-first search (DFS)", "Prim's algorithm", "Kruskal's algorithm"],
    answer: "Depth-first search (DFS)"
  },
  {
    question: "What is a directed acyclic graph (DAG)?",
    options: ["A graph with cycles", "A graph with no cycles and directed edges", "A graph with undirected edges", "A complete graph"],
    answer: "A graph with no cycles and directed edges"
  },
  {
    question: "What is a minimum spanning tree?",
    options: ["A tree that connects all vertices with the minimum possible total edge weight",
      "A tree with the maximum number of edges", "A tree that visits every vertex exactly once", "A tree with the shortest path between two vertices"],
    answer: "A tree that connects all vertices with the minimum possible total edge weight"
  },
  {
    question: "What is the time complexity of Dijkstra's algorithm?",
    options: ["O(n)", "O(n^2)", "O(E + V log V)", "O(V^3)"],
    answer: "O(E + V log V)"
  },
  {
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: ["O(V log V)", "O(E log V)", "O(V * E)", "O(V^2)"],
    answer: "O(V * E)"
  },
  {
    question: "What is concurrency in computer science?",
    options: ["Executing tasks sequentially",
      "The ability of a system to perform multiple tasks simultaneously", "A type of computer hardware", "A method for data storage"],
    answer: "The ability of a system to perform multiple tasks simultaneously"
  },
  {
    question: "What is a thread?",
    options: ["A process", "A lightweight unit of execution within a process", "A virtual machine", "A kernel"],
    answer: "A lightweight unit of execution within a process"
  },
  {
    question: "What is a process?",
    options: ["A thread", "An instance of a computer program that is being executed", "A function", "A data structure"],
    answer: "An instance of a computer program that is being executed"
  },
  {
    question: "What is the difference between a thread and a process?",
    options: ["Threads are independent, processes share memory", "Processes are lightweight, threads are heavyweight",
      "Processes have their own memory space, threads share the memory space of the process", "There is no difference"],
    answer: "Processes have their own memory space, threads share the memory space of the process"
  },
  {
    question: "What is a mutex?",
    options: ["A type of loop",
      "A synchronization primitive that provides exclusive access to a shared resource", "A memory allocation technique", "A file system"],
    answer: "A synchronization primitive that provides exclusive access to a shared resource"
  },
  {
    question: "What is a semaphore?",
    options: ["A type of variable",
      "A synchronization primitive that controls access to a common resource by multiple processes and avoids critical section problems", "A network protocol",
      "A database management system"],
    answer: "A synchronization primitive that controls access to a common resource by multiple processes and avoids critical section problems"
  },
  {
    question: "What is the purpose of synchronization in concurrent programming?",
    options: ["To slow down program execution", "To prevent race conditions and ensure data consistency", "To use more memory",
      "To avoid using multiple threads"],
    answer: "To prevent race conditions and ensure data consistency"
  },
  {
    question: "What is a deadlock?",
    options: ["A fast execution of a program",
      "A situation where two or more processes are blocked indefinitely, waiting for each other", "A memory leak", "A type of error handling"],
    answer: "A situation where two or more processes are blocked indefinitely, waiting for each other"
  },
  {
    question: "What is a race condition?",
    options: ["A competition between programmers",
      "A situation where the behavior of a program depends on the sequence or timing of other uncontrollable events", "A memory allocation error",
      "A type of sorting algorithm"],
    answer: "A situation where the behavior of a program depends on the sequence or timing of other uncontrollable events"
  },
  {
    question: "What is inter-process communication (IPC)?",
    options: ["Communication between computers", "Communication between threads", "Communication between processes", "Communication between users"],
    answer: "Communication between processes"
  },
  {
    question: "Which of the following is an IPC mechanism?",
    options: ["Functions", "Variables", "Sockets", "Loops"],
    answer: "Sockets"
  },
  {
    question: "Which of the following is NOT a fundamental data type in most programming languages?",
    options: ["Integer", "Float", "Boolean", "String", "Structure"],
    answer: "Structure"
  },
  {
    question: "What is the purpose of a variable in programming?",
    options: ["To store data values", "To define program functions", "To control the flow of execution", "To perform arithmetic operations"],
    answer: "To store data values"
  },
  {
    question: "Which operator is used for assignment in most programming languages?",
    options: ["==", "=", "+=", "->"],
    answer: "="
  },
  {
    question: "What is a conditional statement used for?",
    options: ["To repeat a block of code", "To execute a block of code only if a certain condition is true", "To define data structures", "To perform input and output operations"],
    answer: "To execute a block of code only if a certain condition is true"
  },
  {
    question: "Which of the following is a common type of loop?",
    options: ["If-else", "Switch", "While", "Function"],
    answer: "While"
  },
  {
    question: "What is the purpose of a function in programming?",
    options: ["To store data", "To group a block of code that performs a specific task", "To control program execution speed", "To define variable types"],
    answer: "To group a block of code that performs a specific task"
  },
  {
    question: "What is the scope of a variable?",
    options: ["The data type of the variable", "The value stored in the variable", "The region of the program where the variable can be accessed", "The size of the memory allocated to the variable"],
    answer: "The region of the program where the variable can be accessed"
  },
  {
    question: "What is an array?",
    options: ["A single value stored in memory", "A collection of elements of the same data type stored in contiguous memory locations", "A way to define program functions", "A type of loop structure"],
    answer: "A collection of elements of the same data type stored in contiguous memory locations"
  },
  {
    question: "What is a pointer?",
    options: ["A variable that stores a data value", "A variable that stores the memory address of another variable", "A way to define program flow", "A specific data type for storing addresses"],
    answer: "A variable that stores the memory address of another variable"
  },
  {
    question: "What is the purpose of dynamic memory allocation?",
    options: ["To allocate a fixed amount of memory at compile time", "To allocate memory during program execution as needed",
      "To optimize program speed", "To manage file input and output"],
    answer: "To allocate memory during program execution as needed"
  },
  {
    question: "What is a data structure?",
    options: ["A way to store individual data items", "A specific format for inputting data",
      "A way to organize and store data to facilitate efficient access and modification", "A method for controlling program flow"],
    answer: "A way to organize and store data to facilitate efficient access and modification"
  },
  {
    question: "Which of the following is a linear data structure?",
    options: ["Tree", "Graph", "Stack", "Heap"],
    answer: "Stack"
  },
  {
    question: "What is the principle of LIFO related to?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: "Stack"
  },
  {
    question: "What is the principle of FIFO related to?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "What is a linked list?",
    options: ["A contiguous block of memory storing data",
      "A collection of nodes where each node contains data and a pointer to the next node", "A data structure with a fixed size",
      "A way to implement recursive functions"],
    answer: "A collection of nodes where each node contains data and a pointer to the next node"
  },
  {
    question: "What is a tree data structure?",
    options: ["A linear data structure", "A hierarchical data structure with a root node and child nodes",
      "A data structure where each element points to the previous one", "A data structure optimized for searching unsorted data"],
    answer: "A hierarchical data structure with a root node and child nodes"
  },
  {
    question: "What is a binary tree?",
    options: ["A tree where each node has at most one child", "A tree where each node has exactly two children",
      "A tree where each node has at most two children", "A tree where nodes are ordered based on their values"],
    answer: "A tree where each node has at most two children"
  },
  {
    question: "What is a binary search tree?",
    options: ["A binary tree where nodes are not ordered", "A binary tree where the left child is always greater than the parent",
      "A binary tree where the left child is less than or equal to the parent, and the right child is greater than the parent",
      "A balanced binary tree"],
    answer: "A binary tree where the left child is less than or equal to the parent, and the right child is greater than the parent"
  },
  {
    question: "What is a graph data structure?",
    options: ["A linear collection of data", "A hierarchical structure with a single root",
      "A collection of nodes (vertices) and edges that connect them", "A data structure optimized for storing key-value pairs"],
    answer: "A collection of nodes (vertices) and edges that connect them"
  },
  {
    question: "What is an algorithm?",
    options: ["A specific programming language", "A set of well-defined instructions for solving a problem",
      "A type of data structure", "A hardware component of a computer"],
    answer: "A set of well-defined instructions for solving a problem"
  },
  {
    question: "What is time complexity of an algorithm?",
    options: ["The amount of memory an algorithm uses", "The speed at which an algorithm executes on a specific machine",
      "A measure of the amount of time an algorithm takes to run as a function of the input size",
      "The number of lines of code in an algorithm"],
    answer: "A measure of the amount of time an algorithm takes to run as a function of the input size"
  },
  {
    question: "What is space complexity of an algorithm?",
    options: ["The time it takes for an algorithm to run", "The amount of memory an algorithm uses as a function of the input size",
      "The number of loops in an algorithm", "The complexity of the logic within an algorithm"],
    answer: "The amount of memory an algorithm uses as a function of the input size"
  },
  {
    question: "What is the time complexity of linear search in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)"
  },
  {
    question: "What is the time complexity of binary search in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)"
  },
  {
    question: "What is the time complexity of bubble sort in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(n^2)"
  },
  {
    question: "What is the time complexity of merge sort in the worst case?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    answer: "O(n log n)"
  },
  {
    question: "What is recursion?",
    options: ["A loop that iterates a fixed number of times", "A function that calls itself",
      "A way to define data structures dynamically", "A method for handling errors in a program"],
    answer: "A function that calls itself"
  },
  {
    question: "What is a base case in a recursive function?",
    options: ["The case that causes the function to call itself", "The condition that stops the recursion",
      "The initial value passed to the function", "The most complex part of the function"],
    answer: "The condition that stops the recursion"
  },
  {
    question: "What is object-oriented programming (OOP)?",
    options: ["A programming paradigm focused on functions",
      "A programming paradigm based on the concept of 'objects' which can contain data and code",
      "A low-level programming approach", "A declarative programming style"],
    answer: "A programming paradigm based on the concept of 'objects' which can contain data and code"
  },
  {
    question: "What is a class in OOP?",
    options: ["An instance of an object", "A blueprint for creating objects", "A specific data type", "A function within an object"],
    answer: "A blueprint for creating objects"
  },
  {
    question: "What is an object in OOP?",
    options: ["A blueprint for creating classes", "An instance of a class", "A way to define program flow", "A fundamental data type"],
    answer: "An instance of a class"
  },
  {
    question: "What is encapsulation in OOP?",
    options: ["The ability of an object to take on many forms",
      "Hiding the implementation details of an object and exposing only the necessary interface",
      "The mechanism of inheriting properties from a parent class", "The interaction between different objects"],
    answer: "Hiding the implementation details of an object and exposing only the necessary interface"
  },
  {
    question: "What is inheritance in OOP?",
    options: ["The ability of an object to take on many forms", "Hiding data within an object",
      "The mechanism by which a class can inherit properties and methods from a parent class", "The creation of objects from a class"],
    answer: "The mechanism by which a class can inherit properties and methods from a parent class"
  },
  {
    question: "What is polymorphism in OOP?",
    options: ["The ability of an object to take on many forms", "Hiding the internal workings of an object",
      "The relationship between classes", "The process of creating objects"],
    answer: "The ability of an object to take on many forms"
  },
  {
    question: "What is a constructor in a class?",
    options: ["A method used to destroy an object",
      "A special method that is automatically called when an object of the class is created",
      "A method used to access private members of a class", "A method that performs the main logic of the class"],
    answer: "A special method that is automatically called when an object of the class is created"
  },
  {
    question: "What is a destructor in a class (in languages that support it)?",
    options: ["A method used to initialize an object",
      "A special method that is automatically called when an object is about to be destroyed",
      "A method used to modify the state of an object", "A method that returns information about the object"],
    answer: "A special method that is automatically called when an object is about to be destroyed"
  },
  {
    question: "What is a file in computer programming?",
    options: ["A temporary storage location in memory",
      "A named collection of related data stored on a persistent storage medium", "A way to define program functions",
      "A visual representation of data"],
    answer: "A named collection of related data stored on a persistent storage medium"
  },
  {
    question: "What is the purpose of file input/output (I/O)?",
    options: ["To display information on the screen", "To read data from and write data to files",
      "To control the flow of program execution", "To perform mathematical calculations"],
    answer: "To read data from and write data to files"
  },
  {
    question: "What is an exception in programming?",
    options: ["A normal part of program execution",
      "An unexpected event that occurs during program execution that disrupts the normal flow of instructions",
      "A way to define new data types", "A type of loop that runs indefinitely"],
    answer: "An unexpected event that occurs during program execution that disrupts the normal flow of instructions"
  },
  {
    question: "What is exception handling?",
    options: ["Ignoring errors that occur during runtime",
      "Writing code to gracefully handle exceptions and prevent program termination",
      "A way to define recursive functions", "A method for optimizing program performance"],
    answer: "Writing code to gracefully handle exceptions and prevent program termination"
  },
  {
    question: "What is debugging?",
    options: ["Writing code quickly without testing", "The process of finding and fixing errors in a program",
      "A way to optimize program speed", "A method for documenting code"],
    answer: "The process of finding and fixing errors in a program"
  },
  {
    question: "What is a compiler?",
    options: ["A program that executes code line by line",
      "A program that translates source code into machine code before execution", "A tool used for debugging code",
      "A program that manages files and directories"],
    answer: "A program that translates source code into machine code before execution"
  },
  {
    question: "What is an interpreter?",
    options: ["A program that translates source code into machine code all at once",
      "A program that executes code line by line", "A tool used for linking different parts of a program",
      "A program that optimizes code for better performance"],
    answer: "A program that executes code line by line"
  },
  {
    question: "What is a library in programming?",
    options: ["A collection of books about programming",
      "A collection of pre-written code that provides reusable functions and routines", "A specific programming language syntax",
      "A tool for managing project files"],
    answer: "A collection of pre-written code that provides reusable functions and routines"
  },
  {
    question: "What is an API (Application Programming Interface)?",
    options: ["A physical interface between hardware components",
      "A set of rules and protocols that allows different software applications to communicate with each other",
      "A type of operating system", "A graphical user interface for a program"],
    answer: "A set of rules and protocols that allows different software applications to communicate with each other"
  },
  {
    question: "What is version control?",
    options: ["A way to manage different versions of a software project", "A method for compiling code",
      "A technique for debugging programs", "A type of software license"],
    answer: "A way to manage different versions of a software project"
  },
  {
    question: "Which of the following is a popular version control system?",
    options: ["Java", "Python", "Git", "HTML"],
    answer: "Git"
  },
  {
    question: "What is a repository in version control?",
    options: ["A temporary storage space for files",
      "A central location where all the files and their history for a project are stored", "A way to execute program code",
      "A tool for comparing different versions of a file"],
    answer: "A central location where all the files and their history for a project are stored"
  },
  {
    question: "What is a commit in version control?",
    options: ["A way to discard changes", "A snapshot of the changes made to the codebase at a specific point in time",
      "A branch of development", "A remote server"],
    answer: "A snapshot of the changes made to the codebase at a specific point in time"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High-level Text Manipulation Language",
      "Home Tool Management Language", "Hyperlink and Text Management Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to define the structure of an HTML document?",
    options: ["<head>", "<title>", "<body>", "<html>"],
    answer: "<html>"
  },
  {
    question: "Which HTML tag is used to define the main content of an HTML document?",
    options: ["<head>", "<title>", "<body>", "<div>"],
    answer: "<body>"
  },
  {
    question: "Which HTML tag is used to create a heading?",
    options: ["<p>", "<h1>", "<span>", "<a>"],
    answer: "<h1>"
  },
  {
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<h1>", "<li>", "<p>", "<img>"],
    answer: "<p>"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which HTML attribute specifies the URL of a link?",
    options: ["src", "href", "link", "url"],
    answer: "href"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<picture>", "<src>", "<img>", "<image>"],
    answer: "<img>",
    options: ["src", "alt", "image", "source"],
    answer: "src"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<il>", "<list>", "<ol>"],
    answer: "<ol>"
  },
  {
    question: "Which HTML tag is used to define a list item?",
    options: ["<list>", "<ul>", "<ol>", "<li>"],
    answer: "<li>"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is CSS primarily used for?",
    options: ["Adding functionality to web pages", "Defining the structure of a web page",
      "Controlling the presentation and styling of a web page", "Handling server-side operations"],
    answer: "Controlling the presentation and styling of a web page"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "font-color", "color", "text-style"],
    answer: "color"
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    options: ["bg-color", "background-color", "element-color", "fill-color"],
    answer: "background-color"
  },
  {
    question: "Which CSS property is used to control the font size of text?",
    options: ["text-size", "font-size", "size", "text-font-size"],
    answer: "font-size"
  },
  {
    question: "Which CSS property is used to add space inside an element's border?",
    options: ["margin", "padding", "border-spacing", "inner-space"],
    answer: "padding"
  },
  {
    question: "Which CSS property is used to add space outside an element's border?",
    options: ["padding", "margin", "border-spacing", "outer-space"],
    answer: "margin"
  },
  {
    question: "What is JavaScript primarily used for in web development?",
    options: ["Server-side scripting", "Database management", "Adding interactivity and dynamic content to web pages",
      "Defining the structure of a web page"],
    answer: "Adding interactivity and dynamic content to web pages"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["variable", "var", "let", "int"],
    answer: "let"
  },
  {
    question: "Which JavaScript function is commonly used to display output in the console?",
    options: ["alert()", "display()", "print()", "console.log()"],
    answer: "console.log()"
  },
  {
    question: "What is an event in JavaScript?",
    options: ["A type of loop", "An action that occurs as a result of user interaction or browser behavior",
      "A way to define functions", "A method for styling web pages"],
    answer: "An action that occurs as a result of user interaction or browser behavior"
  },
  {
    question: "What is the DOM (Document Object Model)?",
    options: ["A way to style HTML elements", "A programming language",
      "A programming interface for HTML and XML documents", "A database management system"],
    answer: "A programming interface for HTML and XML documents"
  },
  {
    question: "Which JavaScript method is used to find an HTML element by its ID?",
    options: ["getElementByName()", "getElementByClass()", "getElementById()", "querySelector()"],
    answer: "getElementById()"
  },
  {
    question: "What is a function in JavaScript?",
    options: ["A variable that stores data", "A block of code that performs a specific task",
      "A way to style web pages", "A type of loop"],
    answer: "A block of code that performs a specific task"
  },
  {
    question: "What is an array in JavaScript?",
    options: ["A single variable", "An object with key-value pairs",
      "An ordered list of values", "A way to define classes"],
    answer: "An ordered list of values"
  },
  {
    question: "What is the primary goal of an algorithm?",
    options: ["To write complex code", "To use the most advanced programming techniques",
      "To develop an efficient solution to a problem", "To create visually appealing output"],
    answer: "To develop an efficient solution to a problem"
  },
  {
    question: "What is asymptotic notation used for?",
    options: ["To measure the exact running time of an algorithm",
      "To describe the limiting behavior of an algorithm's runtime as the input size grows",
      "To count the number of lines of code", "To optimize the memory usage of an algorithm"],
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
    question: "What is dynamic programming?",
    options: ["A programming paradigm focused on objects",
      "A technique for solving problems by breaking them down into smaller overlapping subproblems, storing the solutions to the subproblems to avoid redundant computation",
      "A method for writing self-modifying code", "A way to design user interfaces"],
    answer: "A technique for solving problems by breaking them down into smaller overlapping subproblems, storing the solutions to the subproblems to avoid redundant computation"
  },
  {
    question: "What is divide and conquer?",
    options: ["A strategy for handling errors in a program",
      "An algorithm design paradigm where a problem is solved by recursively breaking it down into smaller subproblems until they become simple enough to be solved directly",
      "A way to optimize memory usage", "A method for testing software"],
    answer: "An algorithm design paradigm where a problem is solved by recursively breaking it down into smaller subproblems until they become simple enough to be solved directly"
  },
  {
    question: "Merge sort is an example of which algorithm design paradigm?",
    options: ["Greedy algorithm", "Dynamic programming", "Divide and conquer", "Backtracking"],
    answer: "Divide and conquer"
  },
  {
    question: "Quicksort is an example of which algorithm design paradigm?",
    options: ["Dynamic programming", "Greedy algorithm", "Divide and conquer", "Branch and bound"],
    answer: "Divide and conquer"
  },
  {
    question: "Which of the following is NOT a goal of code optimization?",
    options: ["Reducing execution time", "Increasing code readability", "Decreasing memory usage", "Increasing code complexity"],
    answer: "Increasing code complexity"
  },
  {
    question: "Common code optimization techniques include:",
    options: ["Adding comments", "Using longer variable names",
      "Loop unrolling and function inlining", "Increasing code redundancy"],
    answer: "Loop unrolling and function inlining"
  },
  {
    question: "Intermediate code representation can be:",
    options: ["Source code", "Assembly code", "Machine code", "Three-address code"],
    answer: "Three-address code"
  },
  {
    question: "Three-address code is a type of:",
    options: ["High-level language", "Assembly language", "Intermediate representation", "Machine code"],
    answer: "Intermediate representation"
  },
  {
    question: "Register allocation is a task performed during:",
    options: ["Lexical analysis", "Parsing", "Semantic analysis", "Code generation"],
    answer: "Code generation"
  },
  {
    question: "The process of dividing the source program into meaningful units is:",
    options: ["Parsing", "Lexical analysis", "Code generation", "Optimization"],
    answer: "Lexical analysis"
  },
  {
    question: "A regular expression is used for:",
    options: ["Defining data structures", "Matching patterns in strings", "Generating code", "Managing memory"],
    answer: "Matching patterns in strings"
  },
  {
    question: "Which of the following is NOT a phase of a compiler?",
    options: ["Lexical analysis", "Parsing", "Code optimization", "Database management"],
    answer: "Database management"
  },
  {
    question: "Which of the following is NOT a code optimization?",
    options: ["Loop unrolling", "Dead code elimination", "Variable renaming", "Common subexpression elimination"],
    answer: "Variable renaming"
  },
  {
    question: "Which of the following is a common optimization technique?",
    options: ["Adding comments", "Increasing code size", "Loop unrolling", "Using global variables"],
    answer: "Loop unrolling"
  },
  {
    question: "What is the primary goal of a Database Management System (DBMS)?",
    options: ["To manage computer hardware", "To organize and manage data efficiently", "To design user interfaces",
      "To perform complex calculations"],
    answer: "To organize and manage data efficiently"
  },
  {
    question: "Which of the following is NOT a core component of a DBMS?",
    options: ["Data definition language (DDL)", "Data manipulation language (DML)", "Query processor", "Web browser"],
    answer: "Web browser"
  },
  {
    question: "What does ACID stand for in the context of database transactions?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability",
      "Atomicity, Currency, Isolation, Dependency", "Accessibility, Consistency, Isolation, Dependency"],
    answer: "Atomicity, Consistency, Isolation, Durability"
  },
  {
    question: "What is a relational database?",
    options: ["A database that stores data in a hierarchical structure",
      "A database that stores data in tables with rows and columns", "A database that stores data as key-value pairs",
      "A database that stores data in a network structure"],
    answer: "A database that stores data in tables with rows and columns"
  },
  {
    question: "In a relational database table, a row is also known as a:",
    options: ["Column", "Field", "Tuple/Record", "Attribute"],
    answer: "Tuple/Record"
  },
  {
    question: "In a relational database table, a column is also known as a:",
    options: ["Row", "Tuple", "Record", "Attribute/Field"],
    answer: "Attribute/Field"
  },
  {
    question: "What is a primary key?",
    options: ["A key used for encryption",
      "A column that uniquely identifies each row in a table", "A key used to sort data", "A foreign key"],
    answer: "A column that uniquely identifies each row in a table"
  },
  {
    question: "What is a foreign key?",
    options: ["A primary key in another table", "A key used for sorting", "A key used for searching", "A key used for encryption"],
    answer: "A primary key in another table"
  },
  {
    question: "What is SQL?",
    options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Structured Control Language"],
    answer: "Structured Query Language"
  },
  {
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
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
    options: ["The process of adding redundancy to a database",
      "The process of organizing data to reduce redundancy and improve data integrity", "The process of backing up data",
      "The process of encrypting data"],
    answer: "The process of organizing data to reduce redundancy and improve data integrity"
  },
  {
    question: "What is First Normal Form (1NF)?",
    options: ["A table with no repeating groups", "A table with no partial dependencies", "A table with no transitive dependencies",
      "A table that satisfies all normal forms"],
    answer: "A table with no repeating groups"
  },
  {
    question: "What is Second Normal Form (2NF)?",
    options: ["A table with no repeating groups", "A table with no partial dependencies", "A table with no transitive dependencies",
      "A table that satisfies all normal forms"],
    answer: "A table with no partial dependencies"
  },
  {
    question: "What is Third Normal Form (3NF)?",
    options: ["A table with no repeating groups", "A table with no partial dependencies", "A table with no transitive dependencies",
      "A table that satisfies all normal forms"],
    answer: "A table with no transitive dependencies"
  },
  {
    question: "What is a transaction in a database?",
    options: ["A single SQL query",
      "A logical unit of work that consists of one or more SQL statements", "A backup of the database", "A database schema"],
    answer: "A logical unit of work that consists of one or more SQL statements"
  },
  {
    question: "What is concurrency control in a DBMS?",
    options: ["Managing access to the database by multiple users simultaneously", "Controlling the size of the database",
      "Managing database backups", "Controlling data encryption"],
    answer: "Managing access to the database by multiple users simultaneously"
  },
  {
    question: "What is a lock in database concurrency control?",
    options: ["A mechanism to prevent unauthorized access",
      "A mechanism to restrict access to data items to prevent conflicts between concurrent transactions",
      "A way to encrypt data", "A method for data recovery"],
    answer: "A mechanism to restrict access to data items to prevent conflicts between concurrent transactions"
  },
  {
    question: "What is a deadlock in a database?",
    options: ["A situation where transactions are unable to proceed because each is waiting for the other to release a lock",
      "A situation where data is lost", "A type of database failure", "A security breach"],
    answer: "A situation where transactions are unable to proceed because each is waiting for the other to release a lock"
  },
  {
    question: "What is the purpose of database security?",
    options: ["To improve database performance", "To protect data from unauthorized access, modification, and deletion",
      "To ensure data availability", "To manage database backups"],
    answer: "To protect data from unauthorized access, modification, and deletion"
  },
  {
    question: "What is database auditing?",
    options: ["Monitoring and recording database activity", "Optimizing database queries", "Managing database storage",
      "Encrypting database data"],
    answer: "Monitoring and recording database activity"
  },
  {
    question: "What is data encryption?",
    options: ["Compressing data to save space", "Converting data into a format that is unreadable without a key",
      "Verifying data integrity", "Backing up data"],
    answer: "Converting data into a format that is unreadable without a key"
  },
  {
    question: "What is the purpose of the OSI model?",
    options: ["To define network hardware",
      "To provide a conceptual framework for how communication should occur in a network", "To manage database connections",
      "To design programming languages"],
    answer: "To provide a conceptual framework for how communication should occur in a network"
  },
  {
    question: "How many layers are there in the OSI model?",
    options: ["4", "5", "6", "7"],
    answer: "7"
  },
  {
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
    answer: "Network layer"
  },
  {
    question: "Which layer of the OSI model is responsible for reliable end-to-end communication?",
    options: ["Network layer", "Transport layer", "Session layer", "Presentation layer"],
    answer: "Transport layer"
  },
  {
    question: "What is TCP/IP?",
    options: ["A type of network cable", "A suite of communication protocols used to connect devices on the internet",
      "A network hardware device", "A method for encrypting data"],
    answer: "A suite of communication protocols used to connect devices on the internet"
  },
  {
    question: "What is an IP address?",
    options: ["A physical address of a device", "A logical address that identifies a device on a network",
      "A type of network protocol", "A web address"],
    answer: "A logical address that identifies a device on a network"
  },
  {
    question: "What is the purpose of subnetting?",
    options: ["To increase network speed", "To divide a network into smaller, more manageable sub-networks",
      "To connect different types of networks", "To encrypt network traffic"],
    answer: "To divide a network into smaller, more manageable sub-networks"
  },
  {
    question: "What is a DNS (Domain Name System)?",
    options: ["A system for encrypting network traffic",
      "A hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network",
      "A type of network topology", "A protocol for file transfer"],
    answer: "A hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network"
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    options: ["IPv4 uses 128-bit addresses, while IPv6 uses 32-bit addresses", "IPv4 is newer than IPv6",
      "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses", "There is no difference between them"],
    answer: "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses"
  },
  {
    question: "What is the size of an IPv6 address?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    answer: "128 bits"
  },
  {
    question: "What is confidentiality in the CIA triad?",
    options: ["Ensuring that information is accurate and complete", "Ensuring that information is accessible to authorized users",
      "Keeping information secret and preventing unauthorized access", "Detecting and responding to security incidents"],
    answer: "Keeping information secret and preventing unauthorized access"
  },
  {
    question: "What is integrity in the CIA triad?",
    options: ["Keeping information secret", "Ensuring that information is accurate and complete",
      "Ensuring that information is available to authorized users", "Preventing denial-of-service attacks"],
    answer: "Ensuring that information is accurate and complete"
  },
  {
    question: "What is availability in the CIA triad?",
    options: ["Preventing unauthorized access", "Ensuring data integrity",
      "Ensuring that information is accessible to authorized users when needed", "Encrypting data"],
    answer: "Ensuring that information is accessible to authorized users when needed"
  },
  {
    question: "What is authentication?",
    options: ["Verifying the identity of a user or device", "Granting access to resources", "Encrypting data", "Auditing security logs"],
    answer: "Verifying the identity of a user or device"
  },
  {
    question: "What is authorization?",
    options: ["Verifying user identity", "Granting or denying access to resources", "Encrypting communication", "Detecting intrusions"],
    answer: "Granting or denying access to resources"
  },
  {
    question: "What is a virus?",
    options: ["A self-replicating program that spreads by inserting copies of itself into other programs",
      "A standalone program that replicates itself to spread to other computers", "A program disguised as legitimate software to deceive users",
      "An attack that floods a system with traffic"],
    answer: "A self-replicating program that spreads by inserting copies of itself into other programs"
  },
  {
    question: "What is a worm?",
    options: ["A program that requires a host program to infect other computers",
      "A standalone program that replicates itself to spread to other computers", "A type of phishing attack",
      "A technique for exploiting software vulnerabilities"],
    answer: "A standalone program that replicates itself to spread to other computers"
  },
  {
    question: "What is a Trojan horse?",
    options: ["A self-replicating program", "A type of network attack",
      "A program that appears legitimate but performs malicious actions when executed", "A method for encrypting data"],
    answer: "A program that appears legitimate but performs malicious actions when executed"
  },
  {
    question: "What is phishing?",
    options: ["A technique for bypassing authentication",
      "A type of social engineering attack used to steal user data, including login credentials and credit card numbers, by masquerading as a trusted entity",
      "An attack that disrupts network services", "A method for injecting malicious code"],
    answer: "A type of social engineering attack used to steal user data, including login credentials and credit card numbers, by masquerading as a trusted entity"
  },
  {
    question: "What is a denial-of-service (DoS) attack?",
    options: ["An attack that steals data", "An attack that disrupts access to a system or network by overwhelming it with traffic",
      "An attack that injects malicious code", "An attack that exploits software vulnerabilities"],
    answer: "An attack that disrupts access to a system or network by overwhelming it with traffic"
  },
  {
    question: "What is a distributed denial-of-service (DDoS) attack?",
    options: ["An attack from a single source",
      "An attack from multiple sources simultaneously to overwhelm a target", "An attack that modifies data",
      "An attack that bypasses firewalls"],
    answer: "An attack from multiple sources simultaneously to overwhelm a target"
  },
  {
    question: "What is a firewall primarily designed to do?",
    options: ["Encrypt data", "Detect intrusions", "Monitor network traffic",
      "Control network traffic by blocking unauthorized access while permitting authorized communications"],
    answer: "Control network traffic by blocking unauthorized access while permitting authorized communications"
  },
  {
    question: "What is an Intrusion Detection System (IDS)?",
    options: ["A system that prevents network attacks",
      "A system that monitors a network for malicious activity and alerts administrators", "A system that encrypts network traffic",
      "A system that manages network devices"],
    answer: "A system that monitors a network for malicious activity and alerts administrators"
  },
  {
    question: "What is encryption?",
    options: ["Compressing data", "Converting data into a coded form to prevent unauthorized access",
      "Verifying data integrity", "Backing up data"],
    answer: "Converting data into a coded form to prevent unauthorized access"
  },
  {
    question: "What is a VPN (Virtual Private Network)?",
    options: ["A physical network",
      "A technology that creates a secure connection over a less secure network, such as the Internet", "A type of firewall",
      "A method for file sharing"],
    answer: "A technology that creates a secure connection over a less secure network, such as the Internet"
  },
  {
    question: "What is a symmetric encryption algorithm?",
    options: ["An algorithm that uses two keys, one for encryption and one for decryption",
      "An algorithm that uses the same key for both encryption and decryption", "An algorithm that does not use keys",
      "An algorithm used for hashing"],
    answer: "An algorithm that uses the same key for both encryption and decryption"
  },
  {
    question: "What is an asymmetric encryption algorithm?",
    options: ["An algorithm that uses the same key for encryption and decryption",
      "An algorithm that uses a pair of keys, a public key for encryption and a private key for decryption",
      "An algorithm that encrypts data without using keys", "An algorithm used for digital signatures"],
    answer: "An algorithm that uses a pair of keys, a public key for encryption and a private key for decryption"
  },
  {
    question: "What is a digital signature?",
    options: ["A handwritten signature", "An electronic signature used to verify the authenticity and integrity of a message",
      "A type of encryption", "A method for securing physical documents"],
    answer: "An electronic signature used to verify the authenticity and integrity of a message"
  },
  {
    question: "What is a virtual file system (VFS)?",
    options: ["A physical file system",
      "An abstraction layer on top of a more concrete file system", "A type of database", "A memory management technique"],
    answer: "An abstraction layer on top of a more concrete file system"
  }
];

