import React, { useState } from 'react';

const ProductForm = () => {
  // State variables
  const [prodName, setProdName] = useState('');
  const [unitCost, setUnitCost] = useState('');

  // Form submission function
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Base URL
    const baseUrl = 'http://35.200.144.96:8859/dixtest/product/save';
    const queryParams = new URLSearchParams({
      prod_name: prodName,
      unit_cost: unitCost
    }).toString();
    const url = `${baseUrl}?${queryParams}`;

    // POST request using fetch
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response from server:', data);
      alert("The Product is Added");

      // Reset the form after successful submission
      setProdName('');
      setUnitCost('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
   <div>
      <h2>Add Product</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="prod_name">Product Name:</label><br/>
        <input type="text"    id="prod_name" placeholder='Enter product' value={prodName}  onChange={(e) => setProdName(e.target.value)}  required
        />
          <br/><br/>
      </div>
      <div>
        <label htmlFor="unit_cost">Unit Cost:</label><br/>
        <input   type="number"   id="unit_cost"  placeholder='Enter unit cost'   value={unitCost} onChange={(e) => setUnitCost(e.target.value)}  required
        /><br/>
      </div><br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ProductForm;
