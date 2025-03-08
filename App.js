import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from'./components/Footer.js';
import AddItem from './components/AddItem.js';
function App() {
  const initialProducts = [
    {
      price: 99999,
      name: "iPhone 15",
      quantity: 0,
      image: "https://images.apple.com/v/iphone-15/d/images/overview/hero/hero_static__c7t5ux5q2tte_large.jpg"
    },
    {
      price: 9999,
      name: "Redmi Note 10 Pro Max",
      quantity: 0,
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-10-pro.jpg"
    }
  ];
  
  

  const [productList, setProductList] = useState(initialProducts);
  let [ totalAmount , setTotalAmount] = useState(0);
  
  const incQuan = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    setTotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const decQuan = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    } 
    setTotalAmount(newtotalAmount);
    setProductList(newProductList);
  };

  const resetQuan = () => {
    let newProductList = productList.map((product) => ({
      ...product,
      quantity: 0
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
     newtotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index , 1);
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  }
  const addItem = (name, price, image) => {
    let newProductList = [...productList];
    newProductList.push({
      price: Number(price),
      name: name,
      quantity: 0,
      image: image || "https://via.placeholder.com/100" // Default image if none provided
    });
    setProductList(newProductList);
  };
  
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
  <AddItem  addItem={addItem}/>
  <ProductList 
    productList={productList} 
    incQuan={incQuan} 
    decQuan={decQuan}  
    removeItem={removeItem} 
  />
</main>

      <Footer totalAmount={totalAmount} resetQuan={resetQuan}/>
    </>
  );
}

export default App;
