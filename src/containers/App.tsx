import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import PostsContainer from '../view/Posts';

function App() {
  return (
    <RecoilRoot>
      <PostsContainer />
    </RecoilRoot>
  );
}
export default App