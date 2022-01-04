import React from 'react';
import Logo from './Logo';
import TravalSearch from './TravalSearch';
import ViewSearch from './ViewSearch';
import DayNightControl from './DayNightControl';
import NavToggle from './NavToggle';
import CEchange from './CEchange';

const Nav = () => {
    return (
        <div className='header'>
            <Logo />
                <TravalSearch />
                <ViewSearch />
                <DayNightControl />
                <CEchange />
                <NavToggle />
        </div>
    )
};

export default Nav
