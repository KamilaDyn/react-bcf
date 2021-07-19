import React, { Children, useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import Heading from "./atoms/Heading";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";
import ProductList from "./Cards/ProductList";
import Sidebar from "./Layout/Sidebar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 100px);
  width: 95%;
  margin: 50px auto 0;
`;
const StyledList = styled.ol`
  border: 1px solid gray;
  margin-top: 15px;
`;

const Products = () => {
const [buyList, setBuyList] = useState([]);


  
const increment =index=>{
const  currentItems = [...buyList]
currentItems[index].count++
setBuyList(currentItems)
}
  const handleClick = (id, name, count, index) => {

    // setBuyList([...buyList, { id: id, name: name, count: "1" }]);
    const itemId = buyList.find((item) => item.id === id);
    
  
    if (!itemId) {
      setBuyList([...buyList, { id: id, name: name, count: count }]);
    } else {
      increment(index);
 
    }

  };



  return (
    <>
      <Wrapper>
        <Main>
          <Heading>Lista produktów</Heading>
          <ProductList click={handleClick}/>
        </Main>
        <Sidebar>
          <Heading>Twoja lista produktów</Heading>
          {buyList.length > 0 && (
            <StyledList>
              {buyList.map((item) => (
                <li key={item.id} id={item.id}>
                  {item.name}
               <span> {item.count}</span>
                </li>
              ))}
            </StyledList>
          )}
        </Sidebar>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Products;
