import { UpdateProductDto } from '@dto/product.dto';
import { Category } from '@models/category.model';
import { Product } from '@models/product.model';
import axios from 'axios';

export class BaseHttpService<TypeClass> {
  constructor(protected url: string) {}
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const data = await productService.getAll();
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asd',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url1);
  const data2 = await categoryService.getAll();
})();
