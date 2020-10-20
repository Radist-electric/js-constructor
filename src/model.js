import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

const text = `
Качественные видео по JavaScript тут: <a href="https://www.youtube.com/c/VladilenMinin/about">Владилен Минин</a>. Тут вы найдете большое количество уроков, посвященных веб-разработке на языке JavaScript и на технологиях, таких как: VueJS, ReactJS, Angular, NodeJS. 
`
export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to left, #ff0099, #493240)',
      color: ' #fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '10px',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock([
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
  new ImageBlock(image, {
    styles: {
      padding: '20px 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      height: 'auto',
      width: '600px'
    },
    alt: 'Это изображение Promotion'
  })
]