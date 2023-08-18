import axios from 'axios';
(async () => {
  function delay(time: number) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAs() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  const rta = await getProducts();
  console.log(rta.data);

  const rta2 = await getProductsAs();
  console.log(rta2);
})();
