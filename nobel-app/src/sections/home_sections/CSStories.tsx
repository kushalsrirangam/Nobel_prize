import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Stories Data
const stories = [
  {
    title: 'Alan Turing – The Father of Computer Science',
    description: `Alan Turing was an English mathematician and logician who is considered the father of theoretical computer science and artificial intelligence...`,
    field: 'Mathematics, Computer Science',
    award: 'Turing Award',
    year: 1950,
    image: '/images/turing.jpg',
  },
  {
    title: 'Donald Knuth – Father of Algorithm Analysis',
    description: `Donald Knuth is one of the most influential computer scientists of the 20th century...`,
    field: 'Computer Science, Algorithm Design',
    award: 'Turing Award',
    year: 1974,
    image: '/images/knuth.jpg',
  },
  {
    title: 'Barbara Liskov – Nobel-Worthy Computing Achievements',
    description: `Barbara Liskov is known for her work in object-oriented programming and language design...`,
    field: 'Computer Science, Programming Languages',
    award: 'Turing Award',
    year: 2008,
    image: '/images/liskov.jpg',
  },
  {
    title: 'Grace Hopper – The Inventor of the Compiler',
    description: `Grace Hopper made pioneering contributions to programming languages and the COBOL language...`,
    field: 'Computer Science, Programming Languages',
    award: 'Presidential Medal of Freedom',
    year: 1969,
    image: '/images/hopper.jpg',
  },
  {
    title: 'John von Neumann – Founding Figure of Modern Computing',
    description: `John von Neumann’s architecture still powers modern computers...`,
    field: 'Mathematics, Computer Science, Physics',
    award: 'None (Nobel Prize not awarded)',
    year: 1955,
    image: '/images/von_neumann.jpg',
  },
  {
    title: 'Tim Berners-Lee – Inventor of the World Wide Web',
    description: `Tim Berners-Lee developed the first browser and founded W3C...`,
    field: 'Computer Science, Internet Technology',
    award: 'Turing Award',
    year: 2004,
    image: '/images/berners_lee.jpg',
  },
  {
    title: 'Jeffrey Ullman and John Hopcroft – Founders of Algorithmic Theory',
    description: `Ullman and Hopcroft co-authored a definitive algorithms textbook...`,
    field: 'Computer Science, Algorithms, Automata Theory',
    award: 'Turing Award',
    year: 1986,
    image: '/images/ullman_hopcroft.jpg',
  },
];

const CSStories = () => {
  // 👉 Correct: Trigger a global event to let Chatbot send the message
  const askAboutHero = (heroName: string) => {
    const message = `Tell me about ${heroName}`;
    window.dispatchEvent(new CustomEvent('chatbot-send-message', { detail: message }));
  };

  return (
    <section id="storytelling" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-blue-50 dark:bg-gray-900 rounded-3xl border-4 border-red-500 dark:border-red-400 shadow-md p-12 transition-colors duration-500">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white transition-colors duration-500">
            Computer Science Heroes
          </h2>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {stories.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => askAboutHero(item.title.split('–')[0].trim())}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-transform hover:scale-105 w-[300px] mx-auto cursor-pointer transition-colors duration-500"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-black dark:text-white transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-500">
                      {item.description}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-auto transition-colors duration-500">
                      <p><strong>Field:</strong> {item.field}</p>
                      <p><strong>Award:</strong> {item.award}</p>
                      <p><strong>Year:</strong> {item.year}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
};

export default CSStories;
