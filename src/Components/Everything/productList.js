import React, { useState } from 'react';
//import { CiStar } from "react-icons/ci";
import GroceryProduct from '../HomeComp/groceryProduct';

const ProductList = ({ products, productsPerPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (option) => {
    setSortBy(option);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const sortProducts = (products) => {
    if (sortBy === 'lowToHigh') {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highToLow') {
      return products.slice().sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleInputChange}
            style={{width:'50%',height:'30px'}}
        />
      </div>

      {/*dropdown button starts*/}
      <div style={{display:'flex',justifyContent:'flex-end',marginRight:'50px',marginTop:'20px'}}>
        <label style={{width:'100px'}}>Sort by Price: </label>
        <select onChange={(e) => handleSort(e.target.value)} value={sortBy}>
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      {/*dropdown button ends*/}

      <div>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
                {currentProducts.map((product,index) => (
                    <li key={product.id} style={{ margin: '10px', flexBasis: '30%', maxWidth: '30%',marginLeft: index % 3 === 0 ? '50px' : '0' }}>
                    <GroceryProduct productId={product.id} prod={product.image} productName={product.name} productRate={product.price}/>
                    </li>
                ))}
                </ul>
            </div>
            <div style={{marginBottom:'10px'}}>
              <button onClick={handlePrevPage} 
              disabled={currentPage === 1} style={{backgroundColor:'green',
                                                    borderRadius:'3px',
                                                    border:'1px',
                                                    margin:'5px',
                                                    cursor:'pointer'}}>
                Prev
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages} style={{backgroundColor:'green',
                                                              borderRadius:'3px',
                                                              border:'1px',
                                                              margin:'5px',
                                                              cursor:'pointer'}}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
