import cartData from "../data/cart"
import countCartItems from "./count-items"

const totalPrice = (cartArr) => {
   let total = 0
   cartData(cartArr).forEach(({ price, slug }) => {
      total += countCartItems(cartArr, slug) * price
   })
   return total
}

export default totalPrice;