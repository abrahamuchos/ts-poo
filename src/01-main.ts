import axios from 'axios';

import {Product} from './models/product.model';

(async () => {

  async function getProducts(): Promise<Product[]> {
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // code that alter data
    return data;
  }

  const products = await getProducts();
  console.log(products);
})();


