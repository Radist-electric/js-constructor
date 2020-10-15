import { model } from './model'
import { templates } from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')
console.log(templates);
console.log(templates['title']);
const key = 'title'
console.log(templates[key]({ value: 'text' }));

model.forEach(block => {
  const toHTML = templates[block.type]
  if (toHTML) {
    $site.insertAdjacentHTML('beforeend', toHTML(block))
  }
})
