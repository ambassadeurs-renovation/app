import yaml from 'js-yaml'
import fs from 'fs'

const files = [
  {
    name: 'ressources',
    path: 'ressources.yaml'
  }
]

files.forEach(file => {
  const data = yaml.load(fs.readFileSync(file.path, 'utf8'))
  fs.writeFileSync(`${file.name}.json`, JSON.stringify(data), 'utf8')
})
