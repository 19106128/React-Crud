import React, { useState } from 'react';

const ProductSearch = () => {
  // State variable
  const [prodName, setProdName] = useState('');
  const [responseData, setResponseData] = useState(null);

  // Form submission Function
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Base URL
    const baseUrl = 'http://35.200.144.96:8859/dixtest/product/get';
    const queryParams = new URLSearchParams({
      prod_name: prodName
    }).toString();
    const url = `${baseUrl}?${queryParams}`;

    // GET request using fetch
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response from server:', data);

      setResponseData(data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Search product</h2>
          <label>Product Name:</label>
          <input type="text" placeholder='Enter product name' id="prod_name" value={prodName} onChange={(e) => setProdName(e.target.value)} required
          />
        </div><br/>
        <button type="submit">Search</button>
      </form>

      {responseData && (
        <div>
          <h2>Search Results</h2>
          <table>
          <thead>
            <tr>
              <th>Product ID</th>
               <th>Product Name</th>
               <th>Unit Cost</th>
             </tr>
         </thead>
         <tbody>
          {responseData.data.map((product)=>(
            <tr key={product.prod_id}>
            <td>{product.prod_id}</td>
            <td>{product.prod_name}</td>
             <td>{product.unit_cost}</td>
            </tr>
          ))}
       </tbody>
      </table>
      
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
