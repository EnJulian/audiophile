import data from '../data/data'

export const categoryProductsArr = (categoryId) => {
   data.find(item => item.category === categoryId)
}
