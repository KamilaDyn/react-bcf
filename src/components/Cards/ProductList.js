import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
const StyledList = styled.ol`
  margin-top: 15px;
`;

const StyledThead = styled.thead`
  line-height: 32px;
  color: white;
  background-color: #444;
`;
const StyledTr = styled.tr`
  line-height: 32px;
`;
const StyledInput = styled.input`
pointer-events: none,
border: none;
`;

const ProductList = ({ click, childRef }) => {
  const [list, setList] = useState([
    { id: 1, name: "Wiertarka", count: "1" },
    { id: 2, name: "Wkrętarka", count: "1" },
    { id: 3, name: "Młotek", count: "1" },
    { id: 4, name: "Gwoździe", count: "1" },
  ]);

  return (
    <>
      <StyledList>
        <table>
          <StyledThead>
            <StyledTr>
              <th>Nazwa produktu</th>
              <th>Akcja</th>
            </StyledTr>
          </StyledThead>
          <tbody>
            {list.map((l, index) => (
              <StyledTr key={index}>
                <td>{l.name}</td>
                <td>
                  <Button onClick={() => click(l.id, l.name)}>Kup</Button>
                </td>
              </StyledTr>
            ))}
          </tbody>
        </table>
      </StyledList>
    </>
  );
};

export default ProductList;
