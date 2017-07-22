import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App vtext='Vertical' btext='Bottom' mtext='Middle' htext='Heading' width ='250' height='250' source = 'https://tympanus.net/Development/MorphingBackgroundShapes/img/3.jpg' boxpos='end' hpos='center' hsize='80' animation={true}/>, document.getElementById('root'));
