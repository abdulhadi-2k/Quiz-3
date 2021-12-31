import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<PostMessages />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <PostMessages /> */}
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default App;
