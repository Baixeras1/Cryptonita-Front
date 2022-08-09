import styled from "styled-components";
import React from "react";
import Coin from "./Coin";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

const limitPage = 9;

const TableCoins = ({ coins }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    setItems(
      coins.slice(
        currentPage * limitPage,
        Math.min(currentPage * limitPage + limitPage),
        totalSize
      )
    );
  }, []);

  if (!coins) return <div>no coins</div>;

  let totalSize = coins.length;
  let totalPages = Math.ceil(totalSize / limitPage);
  let currentPage = 0;

  const handlePageClick = async (event, value) => {
    console.log(value);
    currentPage = value - 1;
    setPage(value);

    setItems(
      coins.slice(
        currentPage * limitPage,
        Math.min(currentPage * limitPage + limitPage),
        totalSize
      )
    );
    console.log(items);
  };

  return (
    <Wrapper>
      <Content>
        <PortfolioTable>
          <Divider />
          <Table className="table-dark mt-4 table-hover">
            <TableItem>
              <TableRow>
                <div style={{ flex: 2 }}>Name</div>
                <div style={{ flex: 2 }}>Price</div>
                <div style={{ flex: 2 }}>Cap. Mercado</div>
                <div style={{ flex: 2 }}>Last 7 days</div>
                <div style={{ flex: 0, color: "#0a0b0d" }}></div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {items.map((coin) => (
                <div key={coin.name}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>

        <Stack spacing={2}>
          <Pagination
            color="primary"
            variant="outlined"
            count={totalPages}
            page={page}
            onChange={handlePageClick}
            showFirstButton
            showLastButton
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginTop: 2,
            }}
          />
        </Stack>
      </Content>
    </Wrapper>
  );
};

export default TableCoins;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.div`
  width: 100%;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const styles = (theme) => ({
  paginationItemStyle: {
    marginLeft: "5px",
    color: "white",
  },
  paginationLinkStyle: {
    backgroundColor: "#b90000",
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: "#772e2e",
    },

    "&:active": {
      backgroundColor: "#772e2e",
    },
  },
});
