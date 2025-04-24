const questions = [
    {
      question: "Which of the following is a fundamental principle of Object-Oriented Programming?",
      options: ["Procedural decomposition", "Top-down design", "Data abstraction", "Functional programming"],
      answer: "Data abstraction"
    },
    {
      question: "A blueprint for creating objects is called a:",
      options: ["Instance", "Class", "Method", "Attribute"],
      answer: "Class"
    },
    {
      question: "An instance of a class is known as a(n):",
      options: ["Blueprint", "Object", "Constructor", "Destructor"],
      answer: "Object"
    },
    {
      question: "The mechanism of bundling data and the methods that operate on that data together is known as:",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      answer: "Encapsulation"
    },
    {
      question: "What is the primary goal of encapsulation?",
      options: ["To increase code complexity", "To hide the implementation details of an object", "To allow direct access to an object's data", "To reduce the size of the program"],
      answer: "To hide the implementation details of an object"
    },
    {
      question: "Access modifiers like `public`, `private`, and `protected` are used to implement:",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      answer: "Encapsulation"
    },
    {
      question: "Which access modifier allows members to be accessed from anywhere?",
      options: ["private", "protected", "public", "default (package-private in some languages)"],
      answer: "public"
    },
    {
      question: "Which access modifier restricts access to within the same class?",
      options: ["public", "protected", "private", "internal (in some languages)"],
      answer: "private"
    },
    {
      question: "Which access modifier allows access within the same class and its subclasses?",
      options: ["public", "private", "protected", "internal (in some languages)"],
      answer: "protected"
    },
    {
      question: "A constructor is a special method that is invoked:",
      options: ["When an object is deleted", "When a class is declared", "When an object is created", "When a method is called"],
      answer: "When an object is created"
    },
    {
      question: "What is the purpose of a constructor?",
      options: ["To define the behavior of an object", "To initialize the object's state", "To destroy the object", "To access private members"],
      answer: "To initialize the object's state"
    },
    {
      question: "Can a class have multiple constructors?",
      options: ["No", "Yes, through method overloading", "Only if they have different return types", "Only if they have no parameters"],
      answer: "Yes, through method overloading"
    },
    {
      question: "What is the term for a constructor that takes no arguments?",
      options: ["Parameterized constructor", "Default constructor", "Copy constructor", "Static constructor"],
      answer: "Default constructor"
    },
    {
      question: "An object's state is represented by its:",
      options: ["Methods", "Attributes (data members)", "Class definition", "Constructor"],
      answer: "Attributes (data members)"
    },
    {
      question: "An object's behavior is defined by its:",
      options: ["Attributes", "Class definition", "Methods", "Constructor"],
      answer: "Methods"
    },
    {
      question: "The mechanism by which a class acquires the properties and methods of another class is called:",
      options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
      answer: "Inheritance"
    },
    {
      question: "The class that is inherited from is known as the:",
      options: ["Subclass", "Derived class", "Superclass (or base class)", "Child class"],
      answer: "Superclass (or base class)"
    },
    {
      question: "The class that inherits from another class is known as the:",
      options: ["Superclass", "Base class", "Subclass (or derived class)", "Parent class"],
      answer: "Subclass (or derived class)"
    },
    {
      question: "What is the primary benefit of inheritance?",
      options: ["Increased code complexity", "Code reusability", "Reduced program size", "Faster execution speed"],
      answer: "Code reusability"
    },
    {
      question: "What type of inheritance involves a single derived class inheriting from a single base class?",
      options: ["Multiple inheritance", "Multilevel inheritance", "Single inheritance", "Hierarchical inheritance"],
      answer: "Single inheritance"
    },
    {
      question: "What type of inheritance involves a derived class inheriting from multiple base classes?",
      options: ["Single inheritance", "Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance"],
      answer: "Multiple inheritance"
    },
    {
      question: "What type of inheritance involves a derived class inheriting from a base class, which in turn inherits from another base class?",
      options: ["Single inheritance", "Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance"],
      answer: "Multilevel inheritance"
    },
    {
      question: "What type of inheritance involves multiple derived classes inheriting from a single base class?",
      options: ["Single inheritance", "Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance"],
      answer: "Hierarchical inheritance"
    },
    {
      question: "The `super` keyword is often used in derived classes to:",
      options: ["Access private members of the base class", "Call a method of the base class", "Define new members in the base class", "Prevent inheritance"],
      answer: "Call a method of the base class"
    },
    {
      question: "Can a subclass override a method of its superclass?",
      options: ["No", "Yes", "Only if the superclass method is private", "Only if the superclass method is static"],
      answer: "Yes"
    },
    {
      question: "The ability of an object to take on many forms is called:",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      answer: "Polymorphism"
    },
    {
      question: "What are the two main types of polymorphism?",
      options: ["Static and dynamic polymorphism", "Compile-time and run-time polymorphism", "Overloading and overriding", "Inheritance and abstraction"],
      answer: "Compile-time and run-time polymorphism"
    },
    {
      question: "Method overloading is an example of:",
      options: ["Run-time polymorphism", "Dynamic polymorphism", "Compile-time polymorphism", "Inheritance"],
      answer: "Compile-time polymorphism"
    },
    {
      question: "Method overriding is an example of:",
      options: ["Compile-time polymorphism", "Static polymorphism", "Run-time polymorphism", "Encapsulation"],
      answer: "Run-time polymorphism"
    },
    {
      question: "Method overloading occurs when a class has:",
      options: ["Multiple methods with the same name but different parameter lists", "Multiple methods with the same parameter list but different names", "Methods with the same name and same parameter list in different classes", "Methods with different names and different parameter lists"],
      answer: "Multiple methods with the same name but different parameter lists"
    },
    {
      question: "Method overriding occurs when a subclass has:",
      options: ["A method with the same name and parameter list as a method in its superclass", "A method with the same name but a different parameter list as a method in its superclass", "A method with a different name but the same parameter list as a method in its superclass", "A method that is not present in its superclass"],
      answer: "A method with the same name and parameter list as a method in its superclass"
    },
    {
      question: "What is the benefit of polymorphism?",
      options: ["Increased code redundancy", "Reduced code flexibility", "Ability to write more generic and flexible code", "Limited code reusability"],
      answer: "Ability to write more generic and flexible code"
    },
    {
      question: "In run-time polymorphism, the method to be executed is determined:",
      options: ["At compile time", "At the time the code is written", "At run time based on the object's actual type", "Based on the reference variable's type"],
      answer: "At run time based on the object's actual type"
    },
    {
      question: "A virtual function in C++ is an example of:",
      options: ["Compile-time polymorphism", "Static polymorphism", "Run-time polymorphism", "Encapsulation"],
      answer: "Run-time polymorphism"
    },
    {
      question: "An interface in Java is a way to achieve:",
      options: ["Multiple inheritance of implementation", "Multiple inheritance of state", "Multiple inheritance of behavior (through abstract methods)", "Encapsulation"],
      answer: "Multiple inheritance of behavior (through abstract methods)"
    },
    {
      question: "The process of hiding complex implementation details and showing only essential information to the user is called:",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
      answer: "Abstraction"
    },
    {
      question: "What is the primary goal of abstraction?",
      options: ["To increase code complexity", "To simplify the user's interaction with an object", "To expose all implementation details", "To reduce the number of classes"],
      answer: "To simplify the user's interaction with an object"
    },
    {
      question: "Abstract classes cannot be:",
      options: ["Extended", "Inherited from", "Instantiated", "Used as reference types"],
      answer: "Instantiated"
    },
    {
      question: "An abstract method is a method that is declared without:",
      options: ["A return type", "A name", "An implementation", "Parameters"],
      answer: "An implementation"
    },
    {
      question: "If a class contains at least one abstract method, the class itself must be declared as:",
      options: ["Final", "Static", "Abstract", "Public"],
      answer: "Abstract"
    },
    {
      question: "Concrete classes are classes that:",
      options: ["Cannot be instantiated", "Contain only abstract methods", "Provide implementation for all their inherited abstract methods", "Cannot be inherited from"],
      answer: "Provide implementation for all their inherited abstract methods"
    },
    {
      question: "Interfaces typically contain:",
      options: ["Concrete methods", "Instance variables", "Abstract methods (and constants)", "Constructors"],
      answer: "Abstract methods (and constants)"
    },
    {
      question: "How many interfaces can a class implement in languages like Java?",
      options: ["Only one", "A limited number", "Any number", "None"],
      answer: "Any number"
    },
    {
      question: "Abstraction can be achieved through:",
      options: ["Only abstract classes", "Only interfaces", "Both abstract classes and interfaces", "Only concrete classes"],
      answer: "Both abstract classes and interfaces"
    },
    {
      question: "Which of the following is a benefit of using abstraction?",
      options: ["Increased coupling between classes", "Reduced code maintainability", "Improved code organization and readability", "Exposure of implementation details"],
      answer: "Improved code organization and readability"
    },
    {
      question: "A general relationship between two classes is known as:",
      options: ["Inheritance", "Polymorphism", "Association", "Abstraction"],
      answer: "Association"
    },
    {
      question: "A 'has-a' relationship between two classes represents:",
      options: ["Inheritance", "Association", "Polymorphism", "Abstraction"],
      answer: "Association"
    },
    {
      question: "Aggregation is a form of association that represents a:",
      options: ["Strong 'part-of' relationship (dependent lifecycle)", "Weak 'part-of' relationship (independent lifecycle)", "'Is-a' relationship", "'Uses-a' relationship"],
      answer: "Weak 'part-of' relationship (independent lifecycle)"
    },
    {
      question: "Composition is a form of association that represents a:",
      options: ["Weak 'part-of' relationship (independent lifecycle)", "'Uses-a' relationship", "'Is-a' relationship", "Strong 'part-of' relationship (dependent lifecycle)"],
      answer: "Strong 'part-of' relationship (dependent lifecycle)"
    },
    {
      question: "In composition, if the containing object is destroyed, the contained object:",
      options: ["Continues to exist independently", "May or may not be destroyed", "Is also destroyed", "Becomes an independent object"],
      answer: "Is also destroyed"
    },
    {
      question: "In aggregation, if the containing object is destroyed, the contained object:",
      options: ["Is also destroyed", "Continues to exist independently", "Becomes part of another object", "Cannot be accessed anymore"],
      answer: "Continues to exist independently"
    },
    {
      question: "A car 'has-a' engine. This is an example of:",
      options: ["Inheritance", "Composition (typically)", "Aggregation", "Association"],
      answer: "Composition (typically)"
    },
    {
      question: "A university 'has-a' department. This is an example of:",
      options: ["Inheritance", "Composition", "Aggregation", "Association"],
      answer: "Aggregation"
    },
    {
      question: "A student 'is-a' person. This is an example of:",
      options: ["Association", "Aggregation", "Inheritance", "Composition"],
      answer: "Inheritance"
    },
    {
      question: "A method can 'use-a' object of another class. This is an example of:",
      options: ["Inheritance", "Composition", "Association", "Aggregation"],
      answer: "Association"
    },
    {
      question: "What does the 'S' in SOLID stand for?",
      options: ["Single Responsibility Principle", "Systemic Organization of Logical Interfaces and Data", "Shared Resource Isolation Design", "Simple and Understandable Logic Design"],
      answer: "Single Responsibility Principle"
    },
    {
      question: "The Single Responsibility Principle states that a class should have:",
      options: ["Multiple reasons to change", "Only one reason to change", "No reason to change", "At least two responsibilities"],
      answer: "Only one reason to change"
    },
    {
      question: "What does the 'O' in SOLID stand for?",
      options: ["Object-Oriented Design", "Open/Closed Principle", "Organized and Clean Operations", "Optimal Resource Utilization"],
      answer: "Open/Closed Principle"
    },
    {
      question: "The Open/Closed Principle states that a class should be:",
      options: ["Open for modification, closed for extension", "Closed for modification, open for extension", "Open for both modification and extension", "Closed for both modification and extension"],
      answer: "Closed for modification, open for extension"
    },
    {
      question: "What does the 'L' in SOLID stand for?",
      options: ["Loose Coupling Principle", "Liskov Substitution Principle", "Law of Demeter", "Layered System Design"],
      answer: "Liskov Substitution Principle"
    },
    {
      question: "The Liskov Substitution Principle states that subtypes should be:",
      options: ["More restrictive than their base types", "Substitutable for their base types without altering the correctness of the program", "Completely independent of their base types", "Able to introduce new exceptions"],
      answer: "Substitutable for their base types without altering the correctness of the program"
    },
    {
      question: "What does the 'I' in SOLID stand for?",
      options: ["Interface Segregation Principle", "Information Hiding Principle", "Incremental System Integration", "Internal Structure Independence"],
      answer: "Interface Segregation Principle"
    },
    {
      question: "The Interface Segregation Principle states that:",
      options: ["Interfaces should be large and comprehensive", "Clients should not be forced to depend on interfaces they do not use", "All methods of a class should be exposed through a single interface", "Interfaces should not contain any methods"],
      answer: "Clients should not be forced to depend on interfaces they do not use"
    },
    {
      question: "What does the 'D' in SOLID stand for?",
      options: ["Dynamic Programming Paradigm", "Dependency Inversion Principle", "Detailed Object Design", "Distributed System Architecture"],
      answer: "Dependency Inversion Principle"
    },
    {
      question: "The Dependency Inversion Principle states that:",
      options: ["High-level modules should depend on low-level modules", "Low-level modules should depend on high-level modules", "Both high-level and low-level modules should depend on abstractions", "Concrete classes should depend on other concrete classes"],
      answer: "Both high-level and low-level modules should depend on abstractions"
    },
    {
      question: "Identifying classes and objects, their attributes, and their relationships is part of:",
      options: ["Object-Oriented Programming", "Object_Oriented Design", "Object-Oriented Analysis",
    
    "Object-Oriented Testing"
  ],
    answer: "Object-Oriented Analysis"
  },
  {
    question: "Understanding the problem domain and defining the requirements from an object-oriented perspective is the focus of:",
    options: [
      "Object-Oriented Programming",
      "Object-Oriented Design",
      "Object-Oriented Analysis",
      "Object-Oriented Implementation"
    ],
    answer: "Object-Oriented Analysis"
  },
  {
    question: "Creating a conceptual model of the system, including classes, objects, and their interactions, is a key activity in:",
    options: [
      "Object-Oriented Programming",
      "Object-Oriented Design",
      "Object-Oriented Testing",
      "Object-Oriented Deployment"
    ],
    answer: "Object-Oriented Design"
  },
  {
    question: "UML (Unified Modeling Language) is often used for:",
    options: [
      "Writing code in object-oriented languages",
      "Designing and visualizing object-oriented systems",
      "Compiling object-oriented programs",
      "Executing object-oriented applications"
    ],
    answer: "Designing and visualizing object-oriented systems"
  },
  {
    question: "Class diagrams in UML represent:",
    options: [
      "The behavior of objects over time",
      "The static structure of the system, including classes and their relationships",
      "The interactions between objects",
      "The deployment of software components"
    ],
    answer: "The static structure of the system, including classes and their relationships"
  },
  {
    question: "Sequence diagrams in UML represent:",
    options: [
      "The relationships between classes",
      "The different states an object can be in",
      "The interactions between objects in a time-ordered sequence",
      "The inheritance hierarchy of classes"
    ],
    answer: "The interactions between objects in a time-ordered sequence"
  },
  {
    question: "Use case diagrams in UML represent:",
    options: [
      "The internal structure of classes",
      "The functional requirements of the system from the user's perspective",
      "The deployment environment of the system",
      "The data flow within the system"
    ],
    answer: "The functional requirements of the system from the user's perspective"
  },
  {
    question: "Identifying actors, use cases, and their relationships is a part of:",
    options: [
      "Class diagram creation",
      "Sequence diagram creation",
      "Use case modeling",
      "State machine diagram creation"
    ],
    answer: "Use case modeling"
  },
  {
    question: "CRC cards (Class-Responsibility-Collaboration) are a tool used in:",
    options: [
      "Object-Oriented Programming",
      "Object-Oriented Design",
      "Object-Oriented Analysis",
      "Object-Oriented Testing"
    ],
    answer: "Object-Oriented Analysis"
  },
  {
    question: "Design patterns are:",
    options: [
      "Ready-made software components that can be directly used in applications",
      "General reusable solutions to commonly occurring problems in software design",
      "Specific algorithms for solving particular programming tasks",
      "Low-level implementation details of object-oriented languages"
    ],
    answer: "General reusable solutions to commonly occurring problems in software design"
  },
  {
    question: "What is a design pattern that provides a way to create objects while hiding the creation logic, rather than instantiating objects directly using a `new` operator?",
    options: ["Strategy pattern", "Observer pattern", "Factory pattern", "Singleton pattern"],
    answer: "Factory pattern"
  },
  {
    question: "What is a design pattern that ensures a class has only one instance and provides a global point of access to it?",
    options: ["Factory pattern", "Singleton pattern", "Decorator pattern", "Adapter pattern"],
    answer: "Singleton pattern"
  },
  {
    question: "What is a design pattern that allows an object to alter its behavior when its internal state changes?",
    options: ["Observer pattern", "Strategy pattern", "State pattern", "Template Method pattern"],
    answer: "State pattern"
  },
  {
    question: "What is a design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable?",
    options: ["Decorator pattern", "Strategy pattern", "Composite pattern", "Visitor pattern"],
    answer: "Strategy pattern"
  },
  {
    question: "What is a design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors?",
    options: ["Adapter pattern", "Decorator pattern", "Facade pattern", "Proxy pattern"],
    answer: "Decorator pattern"
  },
  {
    question: "What is a design pattern that converts the interface of a class into another interface clients expect?",
    options: ["Decorator pattern", "Adapter pattern", "Bridge pattern", "Flyweight pattern"],
    answer: "Adapter pattern"
  },
  {
    question: "What is a design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes?",
    options: ["Adapter pattern", "Bridge pattern", "Composite pattern", "Facade pattern"],
    answer: "Facade pattern"
  },
  {
    question: "What is the purpose of a destructor in OOP?",
    options: [
      "To initialize the object's state.",
      "To define the object's behavior.",
      "To release resources held by the object when it's no longer needed.",
      "To create a new object."
    ],
    answer: "To release resources held by the object when it's no longer needed."
  },
  {
    question: "In which phase of the object lifecycle is the destructor typically called?",
    options: ["Object creation", "Object usage", "Object destruction", "Method invocation"],
    answer: "Object destruction"
  },
  {
    question: "Can a class have multiple destructors?",
    options: [
      "Yes, through method overloading.",
      "No, most languages allow only one destructor per class.",
      "Only if they have different parameter lists.",
      "Only if the class inherits from multiple classes."
    ],
    answer: "No, most languages allow only one destructor per class."
  },
  {
    question: "What is the term used to describe the act of one object sending a message to another object?",
    options: ["Inheritance", "Polymorphism", "Method invocation", "Encapsulation"],
    answer: "Method invocation"
  },
  {
    question: "In OOP, communication between objects typically occurs through:",
    options: [
      "Direct access to data members.",
      "Calling each other's methods.",
      "Shared global variables.",
      "Modifying each other's internal state directly."
    ],
    answer: "Calling each other's methods."
  },
  {
    question: "What is the concept of late binding or dynamic binding related to?",
    options: ["Compile-time polymorphism (method overloading).", "Run-time polymorphism (method overriding).", "Encapsulation.", "Inheritance."],
    answer: "Run-time polymorphism (method overriding)."
  },
  {
    question: "What is the concept of early binding or static binding related to?",
    options: ["Run-time polymorphism (method overriding).", "Encapsulation.", "Compile-time polymorphism (method overloading).", "Inheritance."],
    answer: "Compile-time polymorphism (method overloading)."
  },
  {
    question: "Which of the following is NOT a common advantage of using OOP?",
    options: ["Code reusability.", "Improved maintainability.", "Increased code complexity in all scenarios.", "Enhanced modularity."],
    answer: "Increased code complexity in all scenarios."
  },
  {
    question: "What is the primary purpose of a framework in the context of OOP?",
    options: [
      "To provide a complete, ready-to-run application.",
      "To offer a reusable and extensible design for a specific domain.",
      "To define the syntax and semantics of a programming language.",
      "To manage the computer's hardware resources."
    ],
    answer: "To offer a reusable and extensible design for a specific domain."
  },
  {
    question: "What is the purpose of a garbage collector in some OOP languages?",
    options: [
      "To explicitly deallocate memory used by objects.",
      "To automatically manage memory by reclaiming space occupied by objects that are no longer referenced.",
      "To optimize the performance of object creation.",
      "To handle exceptions that occur during object destruction."
    ],
    answer: "To automatically manage memory by reclaiming space occupied by objects that are no longer referenced."
  },
  {
    question: "What is serialization in OOP?",
    options: [
      "The process of converting an object's state to a format that can be stored or transmitted.",
      "The process of creating multiple instances of a class.",
      "The process of hiding the implementation details of an object.",
      "The process of defining the inheritance hierarchy of classes."
    ],
    answer: "The process of converting an object's state to a format that can be stored or transmitted."
  },
  {
    question: "What is deserialization in OOP?",
    options: [
      "The process of deleting an object from memory.",
      "The process of converting a serialized format back into an object.",
      "The process of accessing private members of an object.",
      "The process of invoking a method on an object."
    ],
    answer: "The process of converting a serialized format back into an object."
  },
  {
    question: "What is reflection in OOP?",
    options: [
      "The ability of a program to examine and modify its own structure and behavior at runtime.",
      "The process of creating a mirror image of an object.",
      "A design pattern for handling exceptional conditions.",
      "A technique for optimizing code execution."
    ],
    answer: "The ability of a program to examine and modify its own structure and behavior at runtime."
  },
  {
    question: "What is a meta-class?",
    options: [
      "A class that describes the behavior of its instances.",
      "A class whose instances are classes.",
      "A class with no instances.",
      "A subclass that overrides all methods of its superclass."
    ],
    answer: "A class whose instances are classes."
  },
  {
    question: "What is dynamic dispatch?",
    options: [
      "The process of resolving method calls at compile time.",
      "The mechanism by which the appropriate method implementation is determined at runtime based on the object's actual type.",
      "A technique for optimizing object creation.",
      "A design pattern for managing object relationships."
    ],
    answer: "The mechanism by which the appropriate method implementation is determined at runtime based on the object's actual type."
  },
  {
    question: "What is a mixin?",
    options: [
      "A class that cannot be instantiated.",
      "A class that provides a set of methods that can be 'mixed in' to other classes without using traditional inheritance.",
      "A method that belongs to multiple classes.",
      "An object that combines the properties of several other objects."
    ],
    answer: "A class that provides a set of methods that can be 'mixed in' to other classes without using traditional inheritance."
  },
  {
    question: "What is the Law of Demeter (also known as the Principle of Least Knowledge)?",
    options: [
      "Objects should only talk to their immediate neighbors.",
      "Every class should have a single responsibility.",
      "Subtypes should be substitutable for their base types.",
      "Clients should not be forced to depend on interfaces they do not use."
    ],
    answer: "Objects should only talk to their immediate neighbors."
  },
  {
    question: "What is the primary goal of refactoring object-oriented code?",
    options: [
      "To add new features to the software.",
      "To improve the design, structure, and readability of the code without changing its external behavior.",
      "To fix bugs and errors in the code.",
      "To optimize the performance of the code."
    ],
    answer: "To improve the design, structure, and readability of the code without changing its external behavior."
  }
];