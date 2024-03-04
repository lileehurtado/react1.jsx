import  React from 'react';

const Header = ({textHeader}) => {
    return (
        <div className='header'>
            <h1 className='titulo'>{textHeader}</h1>
        </div>
    )
};

export default Header;