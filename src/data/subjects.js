// ─────────────────────────────────────────────────────────────
// SUBJECTS DATA — Add new subjects here
//
// To add a new subject:
// 1. Copy one of the objects below and paste it at the end of the array
// 2. Fill in: id, title, description, route, icon, tag, color
// 3. Create the page file and route (see App.jsx comments)
// ─────────────────────────────────────────────────────────────

export const subjects = [
  {
    id: 'dbms',
    title: 'DBMS',
    fullTitle: 'Database Management Systems',
    
    route: '/dbms',

    tag: 'Core Subject',
    // color accent for the card glow — change freely
    color: '#3b82f6',
  },
  {
  id: 'oops',
  title: 'OOPS',
  fullTitle: 'Object Oriented Programming Systems',
  route: '/oops',

  tag: 'Core Subject',
  color: 'purple'
},
{
  id: 'daa',
  title: 'DAA',
  fullTitle: 'Design and Analysis of Algorithms',
  route: '/daa',
  
  tag: 'Core Subject',
  color: 'orange'
},

  // ── PASTE NEW SUBJECTS BELOW THIS LINE ──────────────────────
  // {
  //   id: 'os',
  //   title: 'OS',
  //   fullTitle: 'Operating Systems',
  //   description: 'Processes, scheduling, memory management, and more.',
  //   route: '/os',
  //   icon: '💻',
  //   tag: 'Core Subject',
  //   color: '#8b5cf6',
  // },
  {
  id: 'coa',
  title: 'COA',
  description: 'Computer Organization and Architecture resources',
  route: '/coa',

  tag: 'Core Subject',
  color: 'blue'
},
{
  id: 'ds',
  title: 'DS',
  fullTitle: 'Data Structures',
  route: '/ds',

  tag: 'Core Subject',
  color: 'green'
},
{
  id: 'os',
  title: 'OS',
  fullTitle: 'Operating Systems',
  route: '/os',
  
  tag: 'Core Subject',
  color: 'red'
},
{
  id: 'feee',
  title: 'FEEE',
  fullTitle: 'Fundamentals of Electrical and Electronics Engineering',
  route: '/feee',
  
  tag: 'Core Subject',
  color: 'yellow'
}
]

// ─────────────────────────────────────────────────────────────
// DBMS RESOURCES DATA
// Paste your actual links in the url fields below
// ─────────────────────────────────────────────────────────────

export const dbmsResources = {
  topLinks: [
    {
  id: 'lessonplan',
  label: 'Lesson Plan',
  icon: '📘',
  description: 'Official course lesson plan and syllabus',
  url: 'https://drive.google.com/file/d/18d10DlgtuI3_XmJgxqOBP6jOZ46TNTqa/view'
},
    
    {
      id: 'playlist',
      label: 'DBMS Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist by Gate Smashers',
      url: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y', // ← PASTE PLAYLIST LINK HERE
    },
    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers', // ← PASTE PYQ LINK HERE
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'Introduction & ER Model',
      description:
        'Database concepts, architecture, data models, ER diagrams, entity sets, relationships, and constraints.',
         // ← PASTE LINK
         notesUrl: "/dbms/unit1.pdf"
    },
    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'Relational Model & SQL',
      description:
        'Relational algebra, SQL queries, joins, aggregation, subqueries, views, and integrity constraints.',
      notesUrl: "/dbms/unit2.pdf"
    },
    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'Advance sql &  PL/SQL',
      description:
        'Advanced SQL concepts including PL/SQL, triggers, relational algebra, and nested queries.',
        notesUrl: "/dbms/unit3.pdf"
      
    },
    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: ' SCHEMA REFINEMENT AND NORMAL FORMS ',
      description:
        'Normalization, functional dependencies, and schema refinement techniques for efficient database design.',
        notesUrl: "/dbms/unit4.pdf"
   
    },
    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: 'INTRODUCTION TO TRANSACTION MANAGEMENT, CONCURRENCY CONTROL AND CRASH RECOVERY ',
      description:
        'Transactions, ACID properties, concurrency control, locking, and crash recovery in DBMS.',
        notesUrl: "/dbms/unit5.pdf"
      
    },
  ],
}
export const coaResources = {
  topLinks: [
    
    {
  id: 'lessonplan',
  label: 'Lesson Plan',
  icon: '📘',
  description: 'Official course lesson plan and syllabus',
  url: 'https://drive.google.com/file/d/1HL0g34KYadoju1UbWvpWzBndW16SHQuQ/view'
},
    {
      id: 'playlist',
      label: 'COA Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist by Gate Smashers',
      url: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=3625sCYfI14ZxT-l', // ← PASTE PLAYLIST LINK HERE
    },
    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers', // ← PASTE PYQ LINK HERE
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'OVERVIEW OF COMPUTER ARCHITECTURE AND ORGANIZATION',
      description:
        'Introduction to computer architecture, instruction sets, CPU organization, addressing modes, and RISC vs CISC concepts.',
         // ← PASTE LINK
         notesUrl: "/coa/unit1.pdf"
    },
    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: ' CONTROL UNIT DESIGN & ALU OPERATIONS',
      description:
        'Study of control unit design, bus organization, arithmetic operations, multipliers, division algorithms, and floating point arithmetic.',
      notesUrl: "/coa/unit2.pdf"
    },
    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'MEMORY SYSTEM ORGANIZATION AND ARCHITECTURE',
      description:
        'Concepts of cache memory, memory hierarchy, mapping techniques, replacement policies, and secondary storage systems.',
        notesUrl: "/coa/unit3.pdf"
      
    },
    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: ' I/O ORGANIZATION ',
      description:
        'Understanding data transfer methods, interrupt handling, DMA, serial and parallel I/O, buses, and RAID architecture.',
        notesUrl: "/coa/unit4.pdf"
   
    },
    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: ' PIPELINING ',
      description:
        'Introduction to pipelining, pipeline hazards, parallel processors, multiprocessing systems, and GPU fundamentals.',
        notesUrl: "/coa/unit5.pdf"
      
    },
  ],
}
export const dsResources = {
  topLinks: [
    
    {
  id: 'lessonplan',
  label: 'Lesson Plan',
  icon: '📘',
  description: 'Official course lesson plan and syllabus',
  url: 'https://drive.google.com/file/d/19djQMG2W0fSKP8RTImRjbnmCXhr7al3y/view'
},
    {
      id: 'playlist',
      label: 'ds Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist',
      url: 'https://youtube.com/playlist?list=PLXj4XH7LcRfAhaLFnq4fQ5ASOqKd08-Us&si=q2KC_e-3wOSI7QHc', // ← PASTE PLAYLIST LINK HERE
    },
    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers', // ← PASTE PYQ LINK HERE
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'Introduction and Lists',
      description:
        'Introduction to Abstract Data Types, arrays, linked lists, polynomial ADT, and radix sort techniques',
         // ← PASTE LINK
         notesUrl: "/ds/unit1.pdf"
    },
    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'Stacks and Queues',
      description:
        'Study of stack and queue implementations, expression conversion, symbol balancing, and function call applications.',
      notesUrl: "/ds/unit2.pdf"
    },
    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'TREES ',
      description:
        'Concepts of binary trees, binary search trees, AVL trees, traversals, and B-Trees for hierarchical data storage.',
        notesUrl: "/ds/unit3.pdf"
      
    },
    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: ' Hashing, Searching and Sorting ',
      description:
        'Understanding hashing techniques, heaps, searching algorithms, and important sorting methods like merge sort and quick sort.',
        notesUrl: "/ds/unit4.pdf"
    },
    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: ' GRAPHS ',
      description:
        'Introduction to graph representations, shortest path algorithms, minimum spanning trees, and graph traversal techniques.',
        notesUrl: "/ds/unit5.pdf"
      
    },
    {
      id: 'QuestionBank',
      title: 'Question Bank',
      subtitle: 'Compilation of Important Questions',
      description:
        'A comprehensive collection of previous year questions and practice problems.',
        notesUrl: "/ds/qbb.pdf"
      
    },

  ],
}
export const oopsResources = {
  topLinks: [
    
    {
  id: 'lessonplan',
  label: 'Lesson Plan',
  icon: '📘',
  description: 'Official course lesson plan and syllabus',
  url: 'https://drive.google.com/file/d/1vVsS-TxsL4aBLc6rBLIZHmE5I-14lOtW/view'
},
    {
      id: 'playlist',
      label: 'OOPS Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist',
      url: 'https://youtube.com/playlist?list=PLqleLpAMfxGCbdaJ6SoExDfHrTfRDeWeG&si=sIr2BawzJ0rln5Ap', // ← PASTE PLAYLIST LINK HERE
    },
    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers', // ← PASTE PYQ LINK HERE
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'Introduction and Program Control',
      description:
        'Introduction to programming paradigms, Java basics, data types, operators, and control flow statements.',
         // ← PASTE LINK
         notesUrl: "/oops/unit1.pdf"
    },
    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'Object-Oriented Principles',
      description:
        'Study of classes, objects, constructors, methods, overloading, static members, and Java I/O fundamentals.',
      notesUrl: "/oops/unit2.pdf"
    },
    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'Arrays, Strings and Inheritance ',
      description:
        'Concepts of arrays, strings, inheritance, method overriding, abstract classes, and StringBuffer operations in Java.',
        notesUrl: "/oops/unit3.pdf"
      
    },
    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: ' Interfaces and Packages',
      description:
        'Understanding interfaces, multiple inheritance, packages, imports, and file handling in Java.',
        notesUrl: "/oops/unit4.pdf"
    },
    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: ' Exception Handling and Concurrency',
      description:
        'Introduction to exception handling, multithreading, inner classes, and lambda expressions in Java.',
        notesUrl: "/oops/unit5.pdf"
      
    },
    {
      id: 'QuestionBank',
      title: 'Question Bank',
      subtitle: 'Compilation of Important Questions',
      description:
        'A comprehensive collection of previous year questions and practice problems.',
        notesUrl: "/oops/qbb.pdf"
      
    },
    {
  id: 'inheritance',
  title: 'Inheritance',
  subtitle: 'Inheritance Notes',
  description:
    'Case study questions on inheritance.',
  notesUrl: '/oops/inheritance.pdf'
},

{
  id: 'stringbuffer',
  title: 'String and StringBuffer',
  subtitle: 'Strings and Buffer Operations',
  description:
    'Programs on strings and stringBuffer.',
  notesUrl: '/oops/string and string buffer.pdf'
},

{
  id: 'labprograms',
  title: 'Lab Programs',
  subtitle: 'OOPS Lab Practice',
  description:
    'Collection of OOPS lab programs, coding exercises, and practical implementations in Java.',
  notesUrl: '/oops/labprograms.pdf'
},

  ],
}
export const osResources = {
  topLinks: [
    {
      id: 'lessonplan',
      label: 'Lesson Plan',
      icon: '📘',
      description: 'Official course lesson plan and syllabus',
      url: 'https://drive.google.com/file/d/1qx81BurkoE5JJAZiC6Mi-bT84tAW_DGG/view'
    },

    {
      id: 'playlist',
      label: 'OS Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist for Operating Systems',
      url: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
    },

    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers',
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'Overview of Operating Systems',
      description:
        'Introduction to operating systems, OS structures, hardware organization, system calls, interrupts, and virtualization tools.',
      notesUrl: "/os/unit1.zip"
    },

    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'Process Management and Scheduling',
      description:
        'Concepts of processes, CPU scheduling algorithms, multithreading, multi-core programming, and thread libraries.',
      notesUrl: "/os/unit2.zip"
    },

    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'Process Synchronization and Deadlock',
      description:
        'Study of synchronization techniques, semaphores, monitors, race conditions, and deadlock handling methods.',
      notesUrl: "/os/unit3.zip"
    },

    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: 'Memory Management',
      description:
        'Memory allocation, paging, segmentation, virtual memory, file systems, and file-system implementation concepts.',
      notesUrl: "/os/unit4.zip"
    },

    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: 'I/O Systems and Virtualization',
      description:
        'I/O systems, disk scheduling, protection mechanisms, virtualization, and comparative study of modern operating systems.',
      notesUrl: "/os/unit5.zip"
    },
    {
      id: 'pyq1',
      title: 'Previous Year Questions',
      subtitle: 'Operating Systems',
      description:
        'Collection of previous year questions for practice unit 3-5.',
      notesUrl: "/os/ospyq.pdf"
    },
  ],
}
export const daaResources = {
  topLinks: [
    {
      id: 'lessonplan',
      label: 'Lesson Plan',
      icon: '📘',
      description: 'Official course lesson plan and syllabus',
      url: 'https://drive.google.com/file/d/14NpgatOY0acMa5x5ZpGjwPVR2kiHIshf/view'
    },

    {
      id: 'playlist',
      label: 'DAA Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist for DAA',
      url: 'https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&si=wwn4xylwUJ_ZUSSN',
    },

    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers',
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'Introduction to Algorithms and Analysis',
      description:
        'Introduction to algorithms, problem-solving techniques, asymptotic analysis, and algorithm efficiency concepts.',
      notesUrl: "/daa/unit1.pdf"
    },

    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'Divide and Conquer & Greedy Method',
      description:
        'Study of divide and conquer algorithms, greedy strategies, sorting methods, shortest paths, and spanning trees.',
      notesUrl: "/daa/unit2.pdf"
    },

    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'Dynamic Programming',
      description:
        'Dynamic programming techniques including shortest paths, knapsack problems, TSP, and optimal search trees.',
      notesUrl: "/daa/unit3.pdf"
    },

    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: 'Backtracking and Branch & Bound',
      description:
        'State space search techniques including graph traversal, N-Queens, graph coloring, and branch & bound methods.',
      notesUrl: "/daa/unit4.pdf"
    },

    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: 'NP-Hard and NP-Complete Problems',
      description:
        'Concepts of P, NP, NP-Complete, NP-Hard problems, Cooks theorem, and approximation algorithms.',
      notesUrl: "/daa/unit5.pdf"
    },
    {
      id: 'extra material',
      title: 'Extra Material',
      subtitle: 'Additional Resources for DAA',
      description:
        'Supplementary materials and practice problems for DAA.',
      notesUrl: "/daa/extra.pdf"
    },
  ],
}
export const feeeResources = {
  topLinks: [
    {
      id: 'lessonplan',
      label: 'Lesson Plan',
      icon: '📘',
      description: 'Official course lesson plan and syllabus',
      url: 'https://drive.google.com/file/d/1CmDcUWq3_C3kLiXPHGVomrAVoWAwL_Tb/view'
    },

    {
      id: 'playlist',
      label: 'FEEE Playlist',
      icon: '▶️',
      description: 'Full YouTube playlist for FEEE',
      url: 'https://youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&si=SFJo-IHggb2UJA4F',
    },

    {
      id: 'pyqs',
      label: 'PYQs Repository',
      icon: '📝',
      description: 'Previous year questions for practice (Use your GITAM account)',
      url: 'https://digitalrepository.gitam.edu/old_question_papers',
    },
  ],

  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      subtitle: 'DC Circuits',
      description:
        'Study of circuit elements, Kirchhoffs laws, mesh and nodal analysis, superposition, and network theorems.',
      notesUrl: "/feee/unit1.pdf"
    },

    {
      id: 'unit2',
      title: 'Unit 2',
      subtitle: 'AC Circuits',
      description:
        'Concepts of AC circuits, RL/RC/RLC circuits, power factor, and three-phase systems.',
      notesUrl: "/feee/unit2.pdf"
    },

    {
      id: 'unit3',
      title: 'Unit 3',
      subtitle: 'Semiconductor Devices',
      description:
        'Introduction to PN junction diodes, rectifiers, Zener diodes, MOSFETs, amplifiers, and switching operations.',
      notesUrl: "/feee/unit3.pdf"
    },

    {
      id: 'unit4',
      title: 'Unit 4',
      subtitle: 'Operational Amplifiers',
      description:
        'Study of op-amp configurations, gain analysis, difference amplifiers, filters, integrators, and differentiators.',
      notesUrl: "/feee/unit4.pdf"
    },

    {
      id: 'unit5',
      title: 'Unit 5',
      subtitle: 'Evolution of Communication Systems',
      description:
        'Overview of communication systems including AM/FM, GSM, cellular communication, and modern wireless technologies.',
      notesUrl: "/feee/unit5.pdf"
    },

    {
      id: 'extra-material',
      title: 'Extra Material',
      subtitle: 'Additional Resources for FEEE',
      description:
        'other pdfs and ppts from various models .',
      notesUrl: "/feee/extra.zip"
    },
  ],
}