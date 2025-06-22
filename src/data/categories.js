import data from './data'

const categories = data.map(({ category }) => category)
const categoriesArr = [...new Set(categories)]
categoriesArr.push(categoriesArr.splice(0, 1)[0])

export default categoriesArr