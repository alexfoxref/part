
import Photo7 from '../../theme/images/Lada/Васич Екатерина.jpg';
import Photo8 from '../../theme/images/Lada/Гилибранд Лариса Аркадьевна.jpg';
import Photo9 from '../../theme/images/Lada/Гусаров Михаил Юрьевич.jpg';
import Photo10 from '../../theme/images/Lada/Зоткина Ольга Николаевна.jpg';
import Photo11 from '../../theme/images/Ladushki/Вязова Жанна Алексеевна.jpg';
import Photo12 from '../../theme/images//Ladushki/Коношенко Татьяна Анатольевна.jpg';
import Photo1 from '../../theme/images/Lada/Гурылева Елена Николаевна.jpg';
import Photo2 from '../../theme/images/Lada/Заузолкова Марина Евгеньевна.jpg';
import Photo3 from '../../theme/images/Lada/Коновалов Олег Анатольевич.jpg';
import Photo4 from '../../theme/images/Lada/Литвинович Тамара Викторовна.jpg';
import Photo5 from '../../theme/images/Lada/Лузин Анатолий Владимирович.jpg';
import Photo6 from '../../theme/images/Lada/Мизина Татьяна Валериевна.jpg';
import Photo13 from '../../theme/images/Lada/Мишенева Екатерина Александровна.jpg';
import Photo14 from '../../theme/images/Lada/Никишин Владимир Алексеевич.jpg';
import Photo15 from '../../theme/images/Lada/Плюснина Ирина Николаевна.jpg';
import Photo16 from '../../theme/images/Lada/Шучалин Олег Генрихович.jpg';
import Photo17 from '../../theme/images/Ladushki/Гилибранд Лариса Аркадьевна.jpg';
import Photo18 from '../../theme/images/Ladushki/Горбицкая Марина Сергеевна.jpg';
import Photo19 from '../../theme/images/Ladushki/Лузин Анатолий Владимирович.jpg';
import Photo20 from '../../theme/images/Ladushki/Плюснина Ирина Николаевна.jpg';
import Photo21 from '../../theme/images/Ladushki/Сандакова Светлана Елисеевна.jpg';
import Photo22 from '../../theme/images/Ladushki/Семянникова Наталья Анатольевна.jpg';
import Photo23 from '../../theme/images/Ladushki/Смирнова Лариса Анатольевна.jpg';
import Photo24 from '../../theme/images/Ladushki/Тихонова Елена Александровна.jpg';
import Photo25 from '../../theme/images/Ladushki/Цыцарева Юлия Владимировна.png';


export const specialists = [
  {
    title: 'Мизина Татьяна Валериевна',
    subjects: ['Руководитель медицинских офисов'],
    spec:
      [],
    photo: Photo6
  },
  {
    title: 'Заузолкова Марина Евгеньевна',
    subjects: ['УЗИ'],
    spec: [{
      sbj: 'УЗИ органов малого таза, акушерское УЗИ',
      place: 'Филиал',
      descr: ""
    }],
    photo: Photo2
  },
  {
    title: 'Никишин Владимир Алексеевич',
    subjects: ['Общий прием', 'Планирование беременности'],
    spec: [{
      sbj: 'общий прием, планирование беременности, кольпоскопия, консультация супружеских пар, нарушение менструального цикла, подготовка к ЭКО, проблемы невынашивания, ведение беременности',
      place: 'Филиал',
      descr: ""
    }],
    photo: Photo14
  },
  {
    title: 'Гилибранд Лариса Аркадьевна',
    subjects: ['УЗИ'],
    spec: [{
      sbj: 'УЗИ органов малого таза, маммологическое обследование, акушерское УЗИ',
      place: 'Детский филиал',
      descr: ""
    }],
    photo: Photo17
  },
  {
    title: 'Сандакова Светлана Елисеевна',
    subjects: ['Общий прием'],
    spec: [{
      sbj: 'общий прием, планирование беременности, вопросы контрацепции, кольпоскопия, консультация супружеских пар по вопросам бесплодия, интимная контурная пластика',
      place: 'Детский филиал',
      descr: ""
    }],
    photo: Photo21
  },
  {
    title: 'Зоткина  Ольга Николаевна',
    subjects: ['УЗИ'],
    spec: [{
      sbj: 'УЗИ сердца и сосудов',
      place: 'Филиал',
      descr: ""
    }],
    photo: Photo10
  },
];

export const specialistsBreadcrumbs = [
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Филиал',
    link: '/'
  },
  {
    title: 'Специалисты',
    link: '/specialists'
  },
];

export const specialistBreadcrumbs = [
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Филиал',
    link: '/'
  },
  {
    title: 'Специалисты',
    link: '/specialists'
  },
  {
    title: 'Горбицкая Марина Сергеевна',
    link: '/specialist'
  },
];

export const medicalServices = [
  {
    id: 1,
    title: 'УЗИ органов малого таза',
    subjects: 'УЗИ',
    descr: 'акушерское УЗИ консультация по вопросам контрацепции, послеродового периода, климактерического периода',
    photo: Photo7
  },
  {
    id: 2,
    title: 'Общий прием, планирование беременности',
    subjects: 'Консультация',
    descr: 'Кольпоскопия, консультация супружеских пар',
    photo: Photo8
  },
  {
    id: 3,
    title: 'УЗИ органов брюшной полости',
    subjects: 'УЗИ',
    descr: '',
    photo: Photo9
  },
  {
    id: 4,
    title: 'УЗИ щитовидной железы',
    subjects: 'УЗИ',
    descr: '',
    photo: Photo10
  },
  {
    id: 5,
    title: 'Эхокардиография',
    subjects: 'Эхокардиография',
    descr: 'Эхокардиография',
    photo: Photo11
  },
  {
    id: 6,
    title: 'Лечение эндокринных нарушений, сахарного диабета, коррекция веса',
    subjects: 'Консультация',
    descr: '',
    photo: Photo12
  },
];

export const medicalServicesBreadcrumbs = [
  {
    title: 'Услуги',
    link: '/medicalServices'
  },
  {
    title: 'Все услуги',
    link: '/'
  },
];

export const medicalServiseBreadcrumbs = [
  {
    title: 'Услуги',
    link: '/MedicalServises'
  },
  {
    title: 'УЗИ',
    link: '/'
  },
  {
    title: 'УЗИ органов малого таза',
    link: '/'
  },
];

export const doctors = [
  {id: 0, name: 'Иван Иавнов', specialisation: 'терапевт'},
  {id: 1, name: 'Семен Семенов', specialisation: 'стоматолог'},
  {id: 2, name: 'Максим Максимов', specialisation: 'проктолог'},
  {id: 3, name: 'Сергей Сергеев', specialisation: 'гинеколог'},
  {id: 4, name: 'Александр Александров', specialisation: 'дерматолог'},
  {id: 5, name: 'Николай Николаев', specialisation: 'венеролог'},
  {id: 6, name: 'Константин Константинов', specialisation: 'отоларинголог'},
  {id: 7, name: 'Степан Степанов', specialisation: 'андролог'},
  {id: 8, name: 'Ирина Васильева', specialisation: 'педиатр'},
  {id: 9, name: 'Инна Куликова', specialisation: 'терапевт'},
  {id: 10, name: 'Лариса Игнатьева', specialisation: 'хирург'},
  {id: 11, name: 'Роман Романов', specialisation: 'стоматолог'}
]