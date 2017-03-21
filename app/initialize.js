import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

var Gun = require('gun'); 
var gun = new Gun({
    file: 'data.json',
    web: App,
    s3: {
        key: '', // AWS Access Key
        secret: '', // AWS Secret Token
        bucket: '' // The bucket you want to save to
    }
});


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
