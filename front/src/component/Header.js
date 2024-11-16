import React from 'react';

const Header = () => {
    return (
        <>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/add-new-data">Add New User</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>

        </>
    );
}

export default Header;
