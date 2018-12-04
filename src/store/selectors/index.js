import { createSelector } from 'reselect'
// card object
  // card id: index
  // card type: mine(even numbers) || mine-free(odd numbers)
  // isActive: true || false

// type would actually be "mine" or "mine-free"
// logic to check even and odd num
export const cardSelector = createSelector(() => {
  let data = {}
  const cards = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  data = cards.map((card, index) => ({
    id: index,
    type: card,
    isActive: false,
  }))
  
  return data
})
