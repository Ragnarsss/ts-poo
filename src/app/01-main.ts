import axios from 'axios';
import { Product } from './models/product.model';
(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    // const rta = await axios.get<Product[]>(
    //   'https://api.escuelajs.co/api/v1/products'
    // );
    // const data = rta.data as Product[]; Forma de hacerlo en librerias que no soportan tipado
    return data;
  }
  const rta2 = await getProducts();
  console.log(rta2);
})();
