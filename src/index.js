import { message } from './components/foo';

import fruit from './fruits';
console.log(fruit.apple);

import Tweet from './Tweet';
import ReactDOM from 'react-dom';
 
ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);
