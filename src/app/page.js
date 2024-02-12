import productsData from './top100gpus.json';
import './ProductTable.css';
function ProductTable() {
  
  return (
    <div className="table-container">
      <h2>Amazon's Current Top 100 Bestselling Graphics Cards </h2>
      <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Price</th>
            <th>Stars</th>
            <th>Brand</th>
            <th>Ratings</th>
            <th>RAM</th>
            <th>Coprocessor</th>
            <th>Memory</th>
            <th>Speed</th>
            <th>Display Interface</th>
            <th>Affiliate Link</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.rank}>
              <td>{product.rank}</td>
              <td>{product.price}</td>
              <td>{product.stars}</td>
              <td>{product.brand}</td>
              <td>{product.ratings}</td>
              <td>{product.graphicsRam}</td>
              <td>{product.graphicsCoprocessor}</td>
              <td>{product.dedicatedMemory}</td>
              <td>{product.gpuClockSpeed}</td>
              <td>{product.videoOutputInterface}</td>
              <td><a href={product.link}>{product.name}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Updated 02/10/2024</h4>
    </div>
  </div>
  );
}

export default ProductTable;