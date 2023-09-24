import React from "react";
const Sdata = [
  {
    id: 1,
    images: "/images/241122612.webp",
    title: "Unforgettable Vacation Homes in Australia",
    description: "Experience luxury and relaxation in stunning vacation homes across Australia.This article is about the country. For the continent, see Australia (continent). For continental mainland, see mainland Australia. For other uses, see Australia (disambiguation). Not to be confused with Australasia or Austria."
  },
  {
    id: 2,
    images: "/images/235954988.webp",
    title: "Best Summer Festivals in Japan",
    description: "Celebrate the vibrant culture of Japan with the best summer festivals.Japan (Japanese: 日本, [ɲihoɴ] i, Nippon or Nihon,[nb 1] and formally 日本国, Nippon-koku or Nihon-koku)[nb 2] is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 14,125 islands, with the five main islands being Hokkaido, Honshu (the 'mainland'), Shikoku, Kyushu, and Okinawa. Tokyo is the nation's capital and largest city, followed by Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto."
  },
  {
    id: 3,
    images: "/images/The-Eiffel-Tower.jpg",
    title: "Historic Landmarks in France",
    description: "Explore the rich history and beauty of France's historic landmarks.France (French: [fʁɑ̃s] i), officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛːz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world. Metropolitan France shares borders with Belgium and Luxemburg to the north, Italy to the south east, Switzerland to the east, Germany to the north east, Andorra and Spain to the south and a maritime border with the United Kingdom. Its metropolitan area extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea;"
  },
  {
    id: 4,
    images: "/images/shutterstockRF_652472320-e9cc3cbf8d5d.jpg",
    title: "Natural Wonders in the United States",
    description: "Discover the breathtaking natural wonders found throughout the United States.The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America and consisting of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands,[i] and 326 Indian reservations. It is the world's third-largest country by both land and total area.[c] It shares land borders with Canada to its north and with Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia, and other nations."
  },
  {
    id: 5,
    images: "/images/photo-1520250497591-112f2f40a3f4.jpeg",
    title: "Cultural Heritage in India",
    description: "Immerse yourself in the diverse cultural heritage of India.India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; "
  },
  {
    id: 6,
    images: "/images/P3NK2DRTCVMIV4VWIG2BQCG4A4.avif",
    title: "Adventure Tourism in New Zealand",
    description: "Embark on thrilling adventures in the stunning landscapes of New Zealand.New Zealand (Māori: Aotearoa [aɔˈtɛaɾɔa]) is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu)—and over 700 smaller islands. It is the sixth-largest island country by area and lies east of Australia across the Tasman Sea and south of the islands of New Caledonia, Fiji, and Tonga. The country's varied topography and sharp mountain peaks, including the Southern Alps, owe much to tectonic uplift and volcanic eruptions. New Zealand's capital city is Wellington, and its most populous city is Auckland."
  },
  {
    id: 7,
    images: "/images/venice-rialto-bridge-by-night.jpg",
    title: "Iconic Cities in Italy",
    description: "Experience the charm and history of iconic Italian cities.Italy (Italian: Italia [iˈtaːlja] i), officially the Italian Republic[a][13][14] or the Republic of Italy,[15][16] is a country in Southern[17][18][19] and Western[20][note 1] Europe. Located in the middle of the Mediterranean Sea, it consists of a peninsula delimited by the Alps and surrounded by several islands.[21] Italy shares land borders with France, Switzerland, Austria, Slovenia and the enclaved microstates of Vatican City and San Marino. It has a territorial exclave in Switzerland (Campione) and an archipelago in the African Plate (Pelagie Islands). "
  },
  {
    id: 8,
    images: "/images/Delphi.jpg",
    title: "Ancient Ruins in Greece",
    description: "Journey through time and explore the ancient ruins of Greece.Greece,[a] officially the Hellenic Republic,[b] is a country in Southeast Europe, situated on the southern tip of the Balkan peninsula. Greece shares land borders with Albania to the northwest, North Macedonia and Bulgaria to the north, and Turkey to the east. The Aegean Sea lies to the east of the mainland, the Ionian Sea to the west, and the Sea of Crete and the Mediterranean Sea to the south."
  },
  {
    id: 9,
    images: "/images/great-wall-of-china.webp",
    title: "Great Wall of China",
    description: "Marvel at the grandeur of the Great Wall of China, a UNESCO World Heritage Site.China (Chinese: 中国; pinyin: Zhōngguó), officially the People's Republic of China (PRC),[k] is a country in East Asia. It is the world's second-most populous country with a population exceeding 1.4 billion. China spans the equivalent of five time zones and borders fourteen countries by land,[l] tied with Russia as having the most of any country in the world."
  },
  {
    id: 10,
    images: "/images/Photo-1-1.avif",
    title: "Machu Picchu in Peru",
    description: "Visit the awe-inspiring archaeological site of Machu Picchu in Peru.Peru (/pəˈruː/ i pə-ROO; Spanish: Perú [peˈɾu]; Quechua: Piruw [pɪɾʊw];[8] Aymara: Piruw [pɪɾʊw]), officially the Republic of Peru (Spanish: República del Perúi), is a country in western South America. It is bordered in the north by Ecuador and Colombia, in the east by Brazil, in the southeast by Bolivia, in the south by Chile, and in the south and west by the Pacific Ocean."
  },
  {
    id: 11,
    images: "/images/a8de205be1383cb7f0aaae9c8b063c05-20598-Cairo-GuidedTourofthePyramids-Sphinx-EgyptianMuseum-Bazaar-01.jpg",
    title: "Pyramids of Egypt",
    description: "Explore the ancient pyramids and mysteries of Egypt's past.Egypt (Arabic: مصر Miṣr [mesˁr], Egyptian Arabic pronunciation: [mɑsˤr]), officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and the Sinai Peninsula in the southwest corner of Asia. "
  },
  {
    id: 12,
    images: "/images/shutterstockRF_1563449509.avif",
    title: "Santorini, Greece",
    description: "Experience the beauty of Santorini, a stunning Greek island."
  },
  {
    id: 13,
    images: "/images/Authentic-safari-camping-in-Amboseli-and-the-Masai-Mara-2.jpg",
    title: "Safari in Kenya",
    description: "Embark on an authentic safari adventure in the wilds of Kenya.Kenya, officially the Republic of Kenya (Swahili: Jamhuri ya Kenya), is a country in East Africa. A member of the Commonwealth with a population of more than 47.6 million in the 2019 census,[11] Kenya is the 28th most populous country in the world[6] and 7th most populous in Africa. Kenya's capital and largest city is Nairobi, while its oldest and second largest city, "
  },

];

export default Sdata;
