// import house images
import House1 from './assets/img/houses/vila-1.JPG';
import House2 from './assets/img/houses/vila-2.jpg';
import House3 from './assets/img/houses/vila-3.jpg';
import House4 from './assets/img/houses/vila-4.jpg';
import House5 from './assets/img/houses/vila-5.jpg';
import House6 from './assets/img/houses/vila-6.jpg';


import Apartment1 from './assets/img/apartments/ap-1.jpeg';
import Apartment2 from './assets/img/apartments/ap-2.jpg';
import Apartment3 from './assets/img/apartments/ap-3.png';
import Apartment4 from './assets/img/apartments/ap-4.jpg';
import Apartment5 from './assets/img/apartments/ap-5.jpeg';
import Apartment6 from './assets/img/apartments/ap-6.jpg';

import Apartment7 from './assets/img/apartments/ap-7.jpeg';
import Apartment8 from './assets/img/apartments/ap-8.jpg';
import Apartment9 from './assets/img/apartments/ap-9.jpg';
import Apartment10 from './assets/img/apartments/ap-10.jpg';
import Apartment11 from './assets/img/apartments/ap-11.jpeg';
import Apartment12 from './assets/img/apartments/ap-12.jpeg';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'ویلا',
    name: 'اجاره ویلا یک خوابه کیمیا ',
    description:
      'ویلا در شهر رامسر (ساداتشهر) واقع شده است. اقامتگاه در محیطی آرام ویلایی و بومی واقع است. اقامتگاه برای پارک 2 خودرو پارکینگ سرپوشیده دارد. قابل توجه میهمانان همراه با سالمند، کودک و افراد دارای معلولیت، این اقامتگاه در طبقه همکف و دارای 4 پله می باشد.',
    image: House1,
    imageLg: House1,
    city: 'رامسر',
    address: ' استان مازندران  3 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '80 متر  ',
    year: '1397',
    price: '1100000',
    agent: {
      image: Agent1,
      name: 'مجتبی رضایی',
      phone: '09901123423',
    },
  },
  {
    id: 2,
    type: 'ویلا',
    name: ' اجاره ویلا دوخوابه قلندری رامسر ',
    description:
      'اقامتگاه در طبقه دوم یک اقامتگاه دو طبقه قرار دارد؛ همکف پارکینگ و طبقه اول واحد میهمان دیگری می باشد. ',
    image: House2,
    imageLg: House2,
    city: 'رامسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '2',
    bathrooms: '1',
    surface: '87 متر  ',
    year: '1397',
    price: '890000',
    agent: {
      image: Agent2,
      name: 'اکبر عباسی ',
      phone: '09901123423',
    },
  },
  {
    id: 3,
    type: 'ویلا',
    name: 'اجاره ویلا سه خوابه باغ کندسر 2 رامسر',
    description:
      'ویلای کندسر در بخش مرکزی شهر رامسر در باغی به مساحت ۲۰۰۰ متر و در نزدیکی رودخانه صفارود قرار دارد و یک محیط پرنشاط برای اقامت است این واحد در طبقه دوم قرار دارد و از ویژگی‌‌های بارز این ویلا دسترسی سریع به بازار سنتی و مرکزی رامسر است که در فاصله کمتر از ۵ دقیقه‌‌ای ویلا قرار دارد.',
    image: House3,
    imageLg: House3,
    city: 'رامسر',
    address: ' استان مازندران  3 اتاق 6 نفر پایه + 8 نفر اضافه ',
    bedrooms: '6',
    bathrooms: '2',
    surface: '160 متر',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '09901123423',
    },
  },
  {
    id: 4,
    type: 'کلبه',
    name: 'اجاره کلبه در رامسر به میزبانی فرانک سياه مشته ',
    description:
      'فاصله با دربا 3 دقیقه پیاده و با جنگل دالخانی 20 کیلومتر است.',
    image: House4,
    imageLg: House4,
    city: 'رامسر',
    address: ' استان مازندران، رامسر  2 اتاق 4 نفر پایه + 2 نفر اضافه  ',
    bedrooms: '6',
    bathrooms: '3',
    surface: '90 متر  ',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '09901123423',
    },
  },
  {
    id: 5,
    type: 'کلبه',
    name: 'اجاره کلبه در رامسر به میزبانی نعمت خان رمکی ',
    description:
      'اقامتگاه در روستا گاورمک قرار دارد. اقامتگاه در محیطی آرام روستایی و غیر بومی واقع است. بافت محله کلبه جنگلی و مسیر دسترسی به اقامتگاه آسفالت می باشد. کلبه دربست است.',
    image: House5,
    imageLg: House5,
    city: 'رامسر',
    address: 'استان مازندران، رامسر 2 اتاق 4 نفر پایه + 2 نفر اضافه ',
    bedrooms: '5',
    bathrooms: '3',
    surface: '120 متر  ',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '09901123423',
    },
  },
  {
    id: 6,
    type: 'کلبه',
    name: 'اجاره کلبه دوخوابه استخردار آرتام رامسر',
    description:
      '  2 عدد مبل تخت خواب شو موجود است. ویلا در شهر شیرود (جاده ساحلی) واقع شده است. اقامتگاه در محیطی آرام روستایی و غیر بومی واقع است. اقامتگاه دارای دوربین مداربسته در درب ورودی و دارای نگهبان خارج از ویلا می باشد. ویلا دربست است. اقامتگاه برای پارک 8 خودرو پارکینگ روباز دارد.',
    image: House6,
    imageLg: House6,
    city: 'رامسر',
    address: 'استان مازندران، رامسر 2 اتاق 4 نفر پایه + 2 نفر اضافه ',
    bedrooms: '2',
    bathrooms: '3',
    surface: '180 متر  ',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '09901123423',
    },
  },
  {
    id: 7,
    type: 'آپارتمان',
    name: 'Apartament 1',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment1,
    imageLg: Apartment1,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '2',
    bathrooms: '1',
    surface: '90 متر  ',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '09901123423',
    },
  },
  {
    id: 8,
    type: 'آپارتمان',
    name: 'Apartament 2',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment2,
    imageLg: Apartment2,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '88 متر  ',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '09901123423',
    },
  },
  {
    id: 9,
    type: 'آپارتمان',
    name: 'Apartament 3',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment3,
    imageLg: Apartment3,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '2',
    bathrooms: '1',
    surface: '88 متر  ',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '09901123423',
    },
  },
  {
    id: 10,
    type: 'آپارتمان',
    name: 'Apartment 7',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment7,
    imageLg: Apartment7,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '5',
    bathrooms: '3',
    surface: '98 متر  ',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '09901123423',
    },
  },
  {
    id: 11,
    type: 'آپارتمان',
    name: 'Apartment 8',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment8,
    imageLg: Apartment8,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '7',
    bathrooms: '2',
    surface: '98 متر  ',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '09901123423',
    },
  },
  {
    id: 12,
    type: 'آپارتمان',
    name: 'Apartment 9',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment9,
    imageLg: Apartment9,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '4',
    bathrooms: '4',
    surface: '78 متر  ',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '09901123423',
    },
  },
  {
    id: 13,
    type: 'آپارتمان',
    name: 'Apartment 10',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment10,
    imageLg: Apartment10,
    city: 'چابکسر',
    address: ' استان مازندران  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '5',
    bathrooms: '2',
    surface: '88 متر  ',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '09901123423',
    },
  },
  {
    id: 14,
    type: 'آپارتمان',
    name: 'Apartment 11',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment11,
    imageLg: Apartment11,
    city: 'رودسر',
    address: ' استان گیلان  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '5',
    bathrooms: '2',
    surface: '88 متر  ',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '09901123423',
    },
  },
  {
    id: 15,
    type: 'آپارتمان',
    name: 'Apartment 12',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment12,
    imageLg: Apartment12,
    city: 'رودسر',
    address: ' استان گیلان  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '4',
    bathrooms: '3',
    surface: '76 متر  ',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '09901123423',
    },
  },
  {
    id: 16,
    type: 'آپارتمان',
    name: 'Apartment 4',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment4,
    imageLg: Apartment4,
    city: 'رودسر',
    address: ' استان گیلان  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '2',
    bathrooms: '1',
    surface: '76 متر  ',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '09901123423',
    },
  },
  {
    id: 17,
    type: 'آپارتمان',
    name: 'Apartment 5',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment5,
    imageLg: Apartment5,
    city: 'رودسر',
    address: ' استان گیلان  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '76 متر  ',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '09901123423',
    },
  },
  {
    id: 18,
    type: 'آپارتمان',
    name: 'Apartment 6',
    description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    image: Apartment6,
    imageLg: Apartment6,
    city: 'رودسر',
    address: ' استان گیلان  2 اتاق 5 نفر پایه + 2 نفر اضافه ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '76 متر  ',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '09901123423',
    },
  },
];
