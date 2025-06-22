import React from 'react'

export default function ProductInfo({ productData }) {
  if (!productData) return null;

  const [features1, features2] = productData.features.split('\n\n');
  const [galleryImg1, galleryImg2, galleryImg3] = productData.gallery;

  return (
    <>
      <section className="section-padding flex flex-col gap-20 my-20 tablet:my-28 desktop:flex-row desktop:gap-[125px] desktop:my-40">
        <div className="flex flex-col gap-8 desktop:flex-1 desktop:max-w-[635px]">
          <h3 className="h3 uppercase">features</h3>
          <p className="text-body opacity-50 whitespace-pre-line">{features1}</p>
          {features2 && <p className="text-body opacity-50 whitespace-pre-line">{features2}</p>}
        </div>

        <div className="flex flex-col gap-8 tablet:flex-row desktop:flex-col desktop:w-[350px]">
          <h3 className="h3 tablet:flex-1 desktop:flex-none uppercase">in the box</h3>
          <div className="flex flex-col gap-2 tablet:flex-1 desktop:flex-none">
            {productData.includes.map(({ quantity, item }) => (
              <div key={item} className="flex items-center gap-6">
                <p className="font-bold text-accent w-8">{quantity}x</p>
                <p className="text-body opacity-50">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding flex flex-col gap-5 tablet:grid tablet:grid-cols-[2fr_3fr] tablet:grid-rows-2 tablet:gap-5">
        <div>
          <picture>
            <source srcSet={galleryImg1.desktop} media='(min-width: 769px)' />
            <source srcSet={galleryImg1.tablet} media='(min-width: 376px)' />
            <img className='rounded-lg w-full h-full object-cover' alt={`${productData.name} gallery shot 1`} src={galleryImg1.mobile} />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet={galleryImg2.desktop} media='(min-width: 769px)' />
            <source srcSet={galleryImg2.tablet} media='(min-width: 376px)' />
            <img className='rounded-lg w-full h-full object-cover' alt={`${productData.name} gallery shot 2`} src={galleryImg2.mobile} />
          </picture>
        </div>
        <div className="tablet:row-span-2">
          <picture>
            <source srcSet={galleryImg3.desktop} media='(min-width: 769px)' />
            <source srcSet={galleryImg3.tablet} media='(min-width: 376px)' />
            <img className='rounded-lg w-full h-full object-cover' alt={`${productData.name} gallery shot 3`} src={galleryImg3.mobile} />
          </picture>
        </div>
      </section>
    </>
  )
}