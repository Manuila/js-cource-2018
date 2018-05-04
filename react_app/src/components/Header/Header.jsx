import React, { Component } from 'react';
import scss from './header.scss';
import { Title } from '../Title/title';

const Header = () => {

    const appTitle = "Task 2";

    return (
    <header className="page__header">
        <Title title = {appTitle} />
    </header>
    );
}
export default Header