import { Product } from '../lib/datatypes';

const TableRow = ({ product }: { product: Product }) => {
  const {
    id,
    product: productName,
    productCode,
    quantity,
    price,
    profit,
  } = product;

  return (
    <tr>
      <td className="id-column">{id}</td>
      <td className="product-info-column">{productName}</td>
      <td className="product-info-column">{productCode}</td>
      <td className="product-num-column">{quantity}</td>
      <td className="product-num-column">${price.toFixed(2)}</td>
      <td className="product-num-column">${profit.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
