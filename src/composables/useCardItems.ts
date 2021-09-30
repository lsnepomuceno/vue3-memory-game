import Items, { CardItem } from '@/mocks/card-items'
import { reactive, ref, watch } from 'vue'

const itens = reactive<CardItem[]>([])

const validationItens = reactive<CardItem[]>([])
let currentItems = reactive(<CardItem>{})
const countFounded = ref(0)

watch(
  () => itens,
  (newValue) => {
    countFounded.value = newValue.filter(i => i.wasFound).length
  },
  { deep: true }
)

const generateRandomItems = (): void => {
  itens.length = 0;
  ([...Items, ...Items])
    .sort(() => Math.random() - 0.5) // generate random
    .forEach((item, i) => {
      const currentItem: CardItem = { ...item, unique: btoa(String(i)) }
      itens.push(currentItem)
    })
}

const registerCurrentItems = (items: CardItem): CardItem => (currentItems = items)

const process = (item: CardItem): void => {
  validationItens.push(item)

  if (validationItens.length === 2) {
    if (validationItens[0].title === validationItens[1].title) {
      validationItens.forEach(item => (item.wasFound = true))
      validationItens.length = 0
    } else {
      setTimeout(() => {
        validationItens.forEach(item => (item.isFlipped = false))
        validationItens.length = 0
      }, 700)
    }
  }
}

export default {
  itens,
  validationItens,
  currentItems,
  countFounded,
  generateRandomItems,
  registerCurrentItems,
  process
}
