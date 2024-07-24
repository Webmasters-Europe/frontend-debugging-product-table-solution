import TableRow from './TableRow';
import { Product } from '../lib/datatypes';

const Table = ({ salesData }: { salesData: Product[] }) => {
  return (
    <table className="divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product</th>
          <th scope="col">Code</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Profit</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {salesData.map((product) => (
          <TableRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
