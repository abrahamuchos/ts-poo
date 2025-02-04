import axios from 'axios';


(async () => {

  function delay(ms: number) {
    return new Promise<number>(
      (resolve, reject) => {
        return setTimeout(resolve, ms);
      })
  }

  function getProducts() {
    return axios.get('https://api.escuelajs.co/api/v1/products');
  }

  async function getProductAsync() {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products');

    return res.data;
  }

  console.log('start');
  const res = await delay(1000);
  console.log(res);
  console.log('end');


  console.log('start');
  const products = await getProducts();
  console.log(products); // Print all products

})();


