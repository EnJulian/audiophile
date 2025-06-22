import { Link } from 'react-router-dom'
import categoriesArr from '../data/categories'
import { toTopSmooth } from './not-focusing'

export const Categories = (className) => categoriesArr.map(category => {
   return (
      <Link
         onClick={toTopSmooth}
         key={category} className={className} to={`/${category}`}>{category}</Link>
   )
})
