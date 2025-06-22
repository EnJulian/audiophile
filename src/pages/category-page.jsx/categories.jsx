import React from 'react'
import data from '../../data/data.json'
import BestGear from '../../components/best-audio-gear'
import CategoriesList from '../../components/navbar/categories'
import CategoryProducts from './products-under-category'

export default function Category({ categoryName }) {
  const categoryProducts = data.filter(item => item.category === categoryName).reverse();

  return (
    <div>
      <header className="bg-dark text-light flex justify-center items-center py-8 tablet:py-24">
        <h2 className="h2 uppercase">{categoryName}</h2>
      </header>

      <CategoryProducts categoryProducts={categoryProducts} />

      <div className="mt-28 space-y-28 tablet:mt-40 tablet:space-y-40">
        <CategoriesList closeNav={() => {}} />
        <BestGear />
      </div>
    </div>
  )
}