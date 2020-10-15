import image from './assets/image.png'
export const model = [
  { type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
    tag: 'h2',
    styles: `background: linear-gradient(to left, #ff0099, #493240);color: #fff;text-align: center; padding: 1.5rem`

    // Так как строку читать неудобно, то переделаем стили в объект
    // styles: {
    //   background: 'linear-gradient(to left, #ff0099, #493240)',
    //   color:' #fff',
    //   'text-align': 'center',
    //   padding: '1.5rem'
    // }
  } },
  { type: 'text', value: 'He we go with some text' },
  {
    type: 'columns', value: [
      '111111111',
      '222222222',
      '333333333',
      '444444444'
    ]
  },
  {type: 'image', value: image}
]