const color = require('colors');

const PRODUCT_DISCOUNT = {
  christmas: 0.40,
  black_friday: 0.60,
  easter: 0.10
}

const calculateDiscount = (product, discount) => {
  const selectedDiscount = PRODUCT_DISCOUNT[discount];
  if (selectedDiscount) {
    return product.price - (product.price * (selectedDiscount));
  }
  return product.price;
}

const calculateTotal = (products, discount) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += calculateDiscount(products[i], discount);
  }
  return total;
}

const showInvoice = (products, discount) => {
  for(let i = 0; i < products.length; i++) {
    console.log(color.blue(`${products[i].name}.........$${products[i].price}`));
  }
  console.log(color.green(`Grand total: ${calculateTotal(products, discount)}`));
}

const main = (discount) => {
  const products = [
    {
      id: 'product_1',
      name: 'iPhone 12',
      price: 2500
    },
    {
      id: 'product_2',
      name: 'Google Pixel',
      price: 2800
    },
    {
      id: 'product_3',
      name: 'Xiaomi Mi Band',
      price: 300
    },
    {
      id: 'product_4',
      name: 'Galaxy Tab S',
      price: 1800
    },
  ];
  showInvoice(products, discount);
}

main('easter');