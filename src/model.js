import image from './assets/image.png'
import {Block} from './classes/blocks'

const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://www.youtube.com/c/VladilenMinin/about">Владилен Минин</a>. Тут вы найдете большое количество уроков, посвященных веб-разработке на языке javascript и на технологиях, таких как: VueJS, ReactJS, Angular, NodeJS
`
export const model = [
  new Block('title', 'Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to left, #ff0099, #493240)',
      color: ' #fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new Block('text', text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '10px',
      'font-weight': 'bold'
    }
  }),
  new Block('columns', [
    'Приложения на чистом JavaScript без использования библиотек',
    'Принципы SOLID и ООП в JavaScript',
    'Самостоятельное создание любых UI просто и интересно',
    'Размещение готового проекта на Firebase или Heroku'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '20px',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new Block('image', image, {
    styles: {
      padding: '20px 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      height: 'auto',
      width: '500px'
    },
    alt: 'Это изображение Promotion'
  })
]