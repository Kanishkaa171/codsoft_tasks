const defaultQuizzes = [
  {
    id: "default-gk",
    title: "General Knowledge",
    description: "10 quick questions covering everyday facts and knowledge.",
    category: "Knowledge",
    difficulty: "Easy",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        answer: "0",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "1",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        answer: "2",
      },
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "1",
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "2",
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
      {
        question: "Which animal is the largest mammal?",
        options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
        answer: "1",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        answer: "2",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "2",
      },
      {
        question: "Who wrote Romeo and Juliet?",
        options: [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain",
        ],
        answer: "0",
      },
    ],
  },

  {
    id: "default-science",
    title: "Science Challenge",
    description: "Test your understanding of basic science and nature.",
    category: "Science",
    difficulty: "Easy",
    questions: [
      {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "1",
      },
      {
        question: "What organ pumps blood around the human body?",
        options: ["Brain", "Liver", "Heart", "Lung"],
        answer: "2",
      },
      {
        question: "What force pulls objects toward Earth?",
        options: ["Friction", "Gravity", "Magnetism", "Electricity"],
        answer: "1",
      },
      {
        question: "What is the basic unit of life?",
        options: ["Atom", "Cell", "Organ", "Tissue"],
        answer: "1",
      },
      {
        question: "Which part of a plant absorbs water from the soil?",
        options: ["Flower", "Leaf", "Stem", "Root"],
        answer: "3",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "150°C"],
        answer: "2",
      },
      {
        question: "Which organ is primarily responsible for breathing?",
        options: ["Heart", "Lungs", "Kidneys", "Stomach"],
        answer: "1",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Gd"],
        answer: "1",
      },
      {
        question: "Which vitamin is commonly produced in the skin through sunlight exposure?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "3",
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondrion", "Cell wall"],
        answer: "2",
      },
    ],
  },

  {
    id: "default-technology",
    title: "Technology Basics",
    description: "10 questions about computers, the internet and technology.",
    category: "Technology",
    difficulty: "Easy",
    questions: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Control Processing User",
        ],
        answer: "0",
      },
      {
        question: "What does RAM provide?",
        options: [
          "Temporary working memory",
          "Permanent storage",
          "Internet access",
          "Power supply",
        ],
        answer: "0",
      },
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlink Text Management Language",
          "Home Tool Markup Language",
        ],
        answer: "0",
      },
      {
        question: "Which technology is mainly used to style web pages?",
        options: ["HTML", "CSS", "SQL", "Python"],
        answer: "1",
      },
      {
        question: "Which device is commonly used to type text?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "1",
      },
      {
        question: "Which is a web browser?",
        options: ["Chrome", "Excel", "Photoshop", "Windows"],
        answer: "0",
      },
      {
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Reference Link",
          "User Resource Location",
          "Uniform Retrieval Link",
        ],
        answer: "0",
      },
      {
        question: "Which component is designed primarily to process graphics?",
        options: ["GPU", "RAM", "SSD", "Keyboard"],
        answer: "0",
      },
      {
        question: "What does IP address identify?",
        options: [
          "A device on a network",
          "A computer's screen size",
          "A file type",
          "A keyboard layout",
        ],
        answer: "0",
      },
      {
        question: "Which storage device keeps data when power is turned off?",
        options: ["RAM", "SSD", "CPU", "Cache"],
        answer: "1",
      },
    ],
  },

  {
    id: "default-programming",
    title: "Programming 101",
    description: "A beginner-friendly challenge for programmers.",
    category: "Programming",
    difficulty: "Medium",
    questions: [
      {
        question: "Which language is primarily used to add interactivity to web pages?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "2",
      },
      {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        answer: "2",
      },
      {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "1",
      },
      {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Graph", "Heap"],
        answer: "1",
      },
      {
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Application Process Integration",
          "Advanced Programming Input",
          "Applied Program Internet",
        ],
        answer: "0",
      },
      {
        question: "Which language is known for indentation-based code blocks?",
        options: ["C", "Java", "Python", "SQL"],
        answer: "2",
      },
      {
        question: "Which symbol starts a single-line comment in JavaScript?",
        options: ["//", "##", "<!--", "**"],
        answer: "0",
      },
      {
        question: "Which keyword is used to define a function in JavaScript?",
        options: ["function", "method", "define", "func"],
        answer: "0",
      },
      {
        question: "Which language is primarily used for querying relational databases?",
        options: ["SQL", "CSS", "HTML", "XML"],
        answer: "0",
      },
      {
        question: "What does DOM stand for in web development?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Document Oriented Method",
          "Digital Object Model",
        ],
        answer: "0",
      },
    ],
  },

  {
    id: "default-geography",
    title: "World Geography",
    description: "Explore countries, capitals, oceans and landmarks.",
    category: "Geography",
    difficulty: "Medium",
    questions: [
      {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
        answer: "1",
      },
      {
        question: "Which country is the largest by land area?",
        options: ["Canada", "China", "Russia", "Brazil"],
        answer: "2",
      },
      {
        question: "Which continent contains the Sahara Desert?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        answer: "1",
      },
      {
        question: "What is the tallest mountain above sea level?",
        options: [
          "K2",
          "Mount Everest",
          "Kangchenjunga",
          "Mont Blanc",
        ],
        answer: "1",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "2",
      },
      {
        question: "Which is the largest continent by area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: "1",
      },
      {
        question: "Which country is home to the Taj Mahal?",
        options: ["India", "Nepal", "Pakistan", "Bangladesh"],
        answer: "0",
      },
      {
        question: "Which ocean is the largest?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        answer: "2",
      },
      {
        question: "Which country is famous for the Great Wall?",
        options: ["Japan", "China", "India", "Mongolia"],
        answer: "1",
      },
      {
        question: "Which city is famous for the Eiffel Tower?",
        options: ["London", "Paris", "Rome", "Berlin"],
        answer: "1",
      },
    ],
  },

  {
    id: "default-history",
    title: "History Through Time",
    description: "A quick journey through famous historical events and people.",
    category: "History",
    difficulty: "Medium",
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "Thomas Jefferson",
          "John Adams",
        ],
        answer: "0",
      },
      {
        question: "Who is associated with the discovery of penicillin?",
        options: [
          "Alexander Fleming",
          "Louis Pasteur",
          "Isaac Newton",
          "Charles Darwin",
        ],
        answer: "0",
      },
      {
        question: "The Renaissance began in which country?",
        options: ["France", "Italy", "Spain", "Germany"],
        answer: "1",
      },
      {
        question: "Which civilization built Machu Picchu?",
        options: ["Roman", "Maya", "Inca", "Greek"],
        answer: "2",
      },
      {
        question: "The pyramids of Giza are located in which country?",
        options: ["Egypt", "Greece", "Mexico", "India"],
        answer: "0",
      },
      {
        question: "Who developed the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "1",
      },
      {
        question: "Who was the first person to walk on the Moon?",
        options: [
          "Buzz Aldrin",
          "Neil Armstrong",
          "Yuri Gagarin",
          "Michael Collins",
        ],
        answer: "1",
      },
      {
        question: "Which ancient civilization developed democracy in Athens?",
        options: ["Romans", "Greeks", "Egyptians", "Persians"],
        answer: "1",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Michelangelo",
          "Leonardo da Vinci",
          "Raphael",
          "Van Gogh",
        ],
        answer: "1",
      },
      {
        question: "Who wrote the Declaration of Independence's main draft?",
        options: [
          "George Washington",
          "Benjamin Franklin",
          "Thomas Jefferson",
          "John Adams",
        ],
        answer: "2",
      },
    ],
  },

  {
    id: "default-culture",
    title: "Culture & Literature",
    description: "Books, art, language and cultural knowledge.",
    category: "Culture",
    difficulty: "Easy",
    questions: [
      {
        question: "Who wrote Pride and Prejudice?",
        options: [
          "Jane Austen",
          "Emily Brontë",
          "Virginia Woolf",
          "Mary Shelley",
        ],
        answer: "0",
      },
      {
        question: "Who wrote Hamlet?",
        options: [
          "William Shakespeare",
          "Charles Dickens",
          "Oscar Wilde",
          "George Orwell",
        ],
        answer: "0",
      },
      {
        question: "Who painted Starry Night?",
        options: [
          "Pablo Picasso",
          "Vincent van Gogh",
          "Claude Monet",
          "Leonardo da Vinci",
        ],
        answer: "1",
      },
      {
        question: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin Chinese", "French"],
        answer: "2",
      },
      {
        question: "Which country is traditionally associated with flamenco?",
        options: ["Italy", "Spain", "Portugal", "Greece"],
        answer: "1",
      },
      {
        question: "Who wrote 1984?",
        options: [
          "George Orwell",
          "Aldous Huxley",
          "Ernest Hemingway",
          "F. Scott Fitzgerald",
        ],
        answer: "0",
      },
      {
        question: "Which instrument commonly has 88 keys?",
        options: ["Guitar", "Piano", "Violin", "Flute"],
        answer: "1",
      },
      {
        question: "Which art movement is associated with Claude Monet?",
        options: ["Cubism", "Impressionism", "Surrealism", "Pop Art"],
        answer: "1",
      },
      {
        question: "Who wrote The Hobbit?",
        options: [
          "J.R.R. Tolkien",
          "C.S. Lewis",
          "J.K. Rowling",
          "George R.R. Martin",
        ],
        answer: "0",
      },
      {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "Italian"],
        answer: "1",
      },
    ],
  },

  {
    id: "default-sports",
    title: "Sports Arena",
    description: "How well do you know the world of sports?",
    category: "Sports",
    difficulty: "Easy",
    questions: [
      {
        question: "How many players are on the field for one soccer team?",
        options: ["9", "10", "11", "12"],
        answer: "2",
      },
      {
        question: "Which sport uses a racket and shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table tennis"],
        answer: "1",
      },
      {
        question: "How many rings are on the Olympic symbol?",
        options: ["4", "5", "6", "7"],
        answer: "1",
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Basketball", "Volleyball", "Tennis", "Baseball"],
        answer: "0",
      },
      {
        question: "Which sport is played at Wimbledon?",
        options: ["Cricket", "Tennis", "Football", "Golf"],
        answer: "1",
      },
      {
        question: "How many points is a touchdown worth in American football before the extra point?",
        options: ["3", "5", "6", "7"],
        answer: "2",
      },
      {
        question: "Which sport uses wickets?",
        options: ["Cricket", "Hockey", "Rugby", "Golf"],
        answer: "0",
      },
      {
        question: "Which country is traditionally associated with sumo wrestling?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "1",
      },
      {
        question: "What color card means a player is sent off in football?",
        options: ["Blue", "Yellow", "Red", "Green"],
        answer: "2",
      },
      {
        question: "Which sport is associated with the Tour de France?",
        options: ["Cycling", "Running", "Swimming", "Motor racing"],
        answer: "0",
      },
    ],
  },

  {
    id: "default-fun",
    title: "Fun & Random",
    description: "Light, playful questions for a quick challenge.",
    category: "Fun",
    difficulty: "Easy",
    questions: [
      {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: "1",
      },
      {
        question: "Which animal is known for black and white stripes?",
        options: ["Tiger", "Zebra", "Panda", "Leopard"],
        answer: "1",
      },
      {
        question: "What is a baby cat called?",
        options: ["Puppy", "Kitten", "Cub", "Calf"],
        answer: "1",
      },
      {
        question: "Which fruit is traditionally associated with the phrase 'keeps the doctor away'?",
        options: ["Apple", "Banana", "Orange", "Mango"],
        answer: "0",
      },
      {
        question: "How many colors are traditionally listed in a rainbow?",
        options: ["5", "6", "7", "8"],
        answer: "2",
      },
      {
        question: "Which animal is known for its long neck?",
        options: ["Elephant", "Giraffe", "Horse", "Camel"],
        answer: "1",
      },
      {
        question: "Which shape has four equal sides?",
        options: ["Triangle", "Circle", "Square", "Pentagon"],
        answer: "2",
      },
      {
        question: "What do bees produce?",
        options: ["Milk", "Honey", "Silk", "Wax only"],
        answer: "1",
      },
      {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Cheetah", "Horse", "Leopard"],
        answer: "1",
      },
      {
        question: "Which animal is commonly called man's best friend?",
        options: ["Cat", "Dog", "Horse", "Rabbit"],
        answer: "1",
      },
    ],
  },

  {
    id: "default-space",
    title: "Space Explorer",
    description: "Take a quick trip through our solar system and beyond.",
    category: "Space",
    difficulty: "Medium",
    questions: [
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "1",
      },
      {
        question: "Which is the largest planet in our solar system?",
        options: ["Saturn", "Earth", "Jupiter", "Neptune"],
        answer: "2",
      },
      {
        question: "What galaxy contains our Solar System?",
        options: [
          "Andromeda",
          "Milky Way",
          "Whirlpool",
          "Sombrero",
        ],
        answer: "1",
      },
      {
        question: "Which planet is famous for its prominent rings?",
        options: ["Mars", "Saturn", "Venus", "Mercury"],
        answer: "1",
      },
      {
        question: "What is Earth's natural satellite?",
        options: ["Mars", "The Moon", "Venus", "The Sun"],
        answer: "1",
      },
      {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "0",
      },
      {
        question: "Who was the first person to walk on the Moon?",
        options: [
          "Neil Armstrong",
          "Buzz Aldrin",
          "Yuri Gagarin",
          "Alan Shepard",
        ],
        answer: "0",
      },
      {
        question: "What star is at the center of our Solar System?",
        options: ["Sirius", "Polaris", "The Sun", "Betelgeuse"],
        answer: "2",
      },
      {
        question: "Which planet is known for its blue appearance and strong winds?",
        options: ["Neptune", "Mars", "Mercury", "Venus"],
        answer: "0",
      },
      {
        question: "What force keeps planets in orbit around the Sun?",
        options: ["Friction", "Gravity", "Magnetism", "Pressure"],
        answer: "1",
      },
    ],
  },
];

export default defaultQuizzes;