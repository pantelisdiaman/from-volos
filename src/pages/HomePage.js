import React from 'react';

const HomePage = () => {
  const menuItems = [
    "Αρχική", "Ποδόσφαιρο", "Μπάσκετ", "Διοίκηση",
    "Live", "Κόσμος", "Επικαιρότητα", "Εγγραφή"
  ];

  // Demo άρθρα
  const demoArticles = [
    {
      id: 1,
      title: "Τίτλος Άρθρου 1",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "01/01/2023",
      comments: 0,
      theme: "Ποδόσφαιρο", // Νέο πεδίο
      image: "/images/img.jpg"
    },
    {
      id: 2,
      title: "Τίτλος Άρθρου 2",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "02/01/2023",
      comments: 1,
      theme: "Μπάσκετ",
      image: "/images/img.jpg"
    },
    {
      id: 3,
      title: "Τίτλος Άρθρου 3",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "03/01/2023",
      comments: 2,
      theme: "Διοίκηση",
      image: "/images/img.jpg"
    },
    {
      id: 4,
      title: "Τίτλος Άρθρου 4",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "01/01/2023",
      comments: 0,
      theme: "Ποδόσφαιρο", // Νέο πεδίο
      image: "/images/img.jpg"
    },
    {
      id: 5,
      title: "Τίτλος Άρθρου 5",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "02/01/2023",
      comments: 1,
      theme: "Μπάσκετ",
      image: "/images/img.jpg"
    },
    {
      id: 6,
      title: "Τίτλος Άρθρου 6",
      shortDesc: "Σύντομη περιγραφή για το άρθρο...",
      date: "03/01/2023",
      comments: 2,
      theme: "Διοίκηση",
      image: "/images/img.jpg"
    }
  ];

  return (
    <div
        className="flex flex-col min-h-screen bg-gray-300"
    >
      {/* Λευκό πάνω μέρος με logo και μενού */}
      <div>
        {/* Header με Logo */}
        <header className="flex justify-center pt-4 pb-4">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-36 w-auto" // Μικρότερο logo
          />
        </header>

        {/* Συμπαγές μενού */}
        <nav className="px-4"> {/* Μικρότερο padding κάτω */}
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3 w-full mx-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="flex-1 min-w-[100px] max-w-[150px]"> {/* Προσαρμογή πλάτους */}
                <button className="w-full py-2 px-2 bg-red-600 hover:bg-red-700 text-white
                                  font-medium rounded-md transition duration-200 shadow-sm text-sm">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Περιεχόμενο με background image */}
      <div
        className="flex-grow"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {demoArticles.map(article => (
              <div key={article.id} className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden">
                {/* Εικόνα άρθρου */}
                <div className="group block w-full overflow-hidden">
                  <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 ratio */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Περιεχόμενο άρθρου */}
                <div className="p-4">
                  {/* Θέμα */}
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded mb-2">
                    {article.theme}
                  </span>

                  {/* Τίτλος */}
                  <h3 className="text-lg font-bold text-red-700 mb-2">{article.title}</h3>

                  {/* Περιγραφή */}
                  <p className="text-gray-700 mb-3">{article.shortDesc}</p>

                  {/* Ημερομηνία & Σχόλια */}
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-500">{article.date}</p>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-gray-500">{article.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-6 px-4 mt-8">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p className="text-xl font-bold mb-4">© Copyright 2025 From Volos</p>
          <p className="mb-2">
            Οι απόψεις που εκφράζονται στα σχόλια αντιπροσωπεύουν αποκλειστικά τους σχολιαστές
            και δεν εκφράζουν υποχρεωτικά την άποψη της ιστοσελίδας μας.
          </p>
          <p>
            Δεν ευθυνόμαστε για το περιεχόμενο των σχολίων. Οποιαδήποτε υλικό
            θεωρείται προσβλητικό ή ανάρμοστο μπορεί να αναφερθεί στη διαχείριση.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;