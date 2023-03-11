import React from 'react';
import PostListPage from './pages/PostListPage';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

function App(){
  return(
    <ApolloProvider client={client}>

    <div>
      <Routes>
			  <Route path="/" element={<PostListPage />} />
			  <Route path='/post/:id' element={<PostPage /> } />
		  </Routes>
    </div>
    </ApolloProvider>

    )
};

export default App;