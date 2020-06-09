import React, { Fragment } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

// const awesomeCard = css`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
//   border: none;
// `;

const Card = styled.div`
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: aqua;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Form />
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);
export default App;
