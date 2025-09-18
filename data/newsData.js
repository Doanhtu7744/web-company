// Common news data for the entire application
export const newsData = [
  {
    id: 1,
    title: 'Exploring Natural Beauty',
    description: 'A journey to explore the most beautiful and pristine natural landscapes around the world.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    content: `Exploring Natural Beauty - A Wonderful Journey

Nature always brings us wonderful and peaceful moments. From majestic mountain ranges to crystal blue beaches, each landscape has its own story.

Exploring nature not only helps us relax but also brings valuable experiences, helping us better understand the world around us and the importance of environmental protection.

Let's work together to protect and preserve these natural treasures for future generations.`
  },
  {
    id: 2,
    title: 'Exploring the Vast Universe',
    description: 'The latest discoveries about the universe and the unsolved mysteries of space.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    content: `Exploring the Vast Universe - Journey into Space

The universe with its twinkling stars and distant galaxies has always been an endless source of inspiration for humanity. Recent scientific discoveries have opened up many new understandings about space.

From searching for life beyond Earth to studying new planets, space science is developing at an unprecedented pace.

Advanced technologies help us look further and deeper into the universe, opening up endless possibilities for the future of humanity.`
  },
  {
    id: 3,
    title: 'Modern technology',
    description: 'The latest technological advances and their impact on everyday life.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    content: `Modern technology - Change your life

Technology is evolving at breakneck speed, changing the way we work, learn, and play. From artificial intelligence to the Internet of Things, everything is connected and automated.

New technological applications not only make life more convenient but also open up new opportunities in business and education.

However, we also need to consider the challenges and risks that technology brings to use it responsibly.`
  },
  {
    id: 4,
    title: 'City Life',
    description: 'The vibrant rhythm of the city and unique experiences in the urban environment.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    content: `City Life - Modern Rhythm

The city with its vibrant and culturally diverse life always attracts people. From skyscrapers to colorful small streets, every corner has its own story.

Urban life brings many career development opportunities and rich cultural experiences. However, it also comes with environmental challenges and life pressures.

Finding a balance between work and life in the city environment is an art that everyone needs to learn.`
  },
  {
    id: 5,
    title: 'Mountain Landscapes',
    description: 'The majestic beauty of high mountain ranges and wonderful trekking experiences.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    content: `Mountain Landscapes - Majestic Beauty

The high mountains with snow-capped peaks and lush green valleys create beautiful natural paintings. Mountain climbing is not only a physical challenge but also a journey of self-discovery.

On the mountain top, we can feel the vastness of nature and find peace in our souls. These moments will be unforgettable memories in life.

Be well prepared and respect nature when participating in mountain climbing activities to ensure safety and protect the environment.`
  },
  {
    id: 6,
    title: 'Modern Architecture',
    description: 'Unique and creative architectural works in the modern era.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    content: `Modern Architecture - Art and Technology

Modern architecture is not only an art but also a perfect combination of aesthetics and function. Unique architectural works have become symbols of cities around the world.

From green buildings that are environmentally friendly to bold designs that break all traditional rules, modern architecture always brings new experiences.

The application of new technology in construction has opened up endless possibilities for architects in realizing creative ideas.`
  },
  {
    id: 7,
    title: 'Information Technology',
    description: 'The development of information technology and its impact on modern society.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    content: `Information Technology - Digital Era

Information technology has completely changed the way we communicate, work and entertain ourselves. From smartphones to cloud computing, everything is digital and connected.

The development of AI, machine learning and big data is opening up new opportunities in every field from healthcare, education to business.

However, we also need to face the challenges of information security and privacy in the digital age.`
  },
  {
    id: 8,
    title: 'Reading Culture',
    description: 'The importance of reading books and reading culture in the technology age.',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    content: `Reading Culture - Treasure of Knowledge

In the digital age, reading books still plays an important role in developing thinking and expanding knowledge. Books not only provide information but also nourish the soul.

Building a reading habit from a young age will help us have a solid knowledge foundation and better critical thinking ability.

Take time to read books every day, even if it's just 15-30 minutes, to enrich your knowledge.`
  },
  {
    id: 9,
    title: 'Tropical Rainforest',
    description: 'Exploring the diverse and rich ecosystem of tropical rainforests.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    content: `Tropical Rainforest - Green Lungs of the Earth

Tropical rainforests are one of the most diverse ecosystems on Earth, containing millions of species of flora and fauna. These forests play an important role in regulating the global climate.

However, tropical rainforests are facing the risk of destruction due to human activities. Protecting and restoring forests is an urgent task for all humanity.

We need specific actions to protect these "green lungs" for future generations.`
  },
  {
    id: 10,
    title: 'Photography Art',
    description: 'Exploring the world of photography and how to capture beautiful moments in life.',
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413',
    content: `Photography Art - Capturing Moments

Photography is the art of capturing beautiful and meaningful moments in life. Each photo tells a story and conveys the emotions of the photographer.

With the development of technology, taking photos has become easier than ever. However, to have truly impressive photos, we need to understand light, shooting angles and how to tell stories through images.

Bring your camera and capture beautiful moments in your daily life.`
  }
];

// Function to get the first 3 news for Home and Subsidiary screens
export const getTopThreeNews = () => {
  return newsData.slice(0, 3);
};

// Function to get news by ID
export const getNewsById = (id) => {
  return newsData.find(news => news.id === parseInt(id));
};
