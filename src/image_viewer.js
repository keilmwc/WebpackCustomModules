import '../styles/image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const smallImage = document.createElement('img');
const bigImage = document.createElement('img');
smallImage.src = small;
bigImage.src = big;

// Append image to end of DOM body
document.body.appendChild(smallImage);
document.body.appendChild(bigImage);

