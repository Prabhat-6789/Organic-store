import ProductList from "./productList";
const Products = ({products}) => {
  console.log("everything: ");    
  return (
        <div>
          <div style={{textAlign:'center'}}>
            <h1>Products</h1>
          </div>
          <ProductList products={products} productsPerPage={9} />
        </div>
      );
}
 
export default Products;