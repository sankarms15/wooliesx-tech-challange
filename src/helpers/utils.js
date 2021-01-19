export const formatNumber = (price) => (`${new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
}).format(price)}`)