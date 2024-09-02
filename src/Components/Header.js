/*
import react from 'react';
const Header = () => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}
export default Header;
*/

import react from 'react';

const Header = () => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}
export default react.memo(Header);
