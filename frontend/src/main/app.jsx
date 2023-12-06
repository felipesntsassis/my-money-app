import React from 'react';

import '../common/template/dependences';

import Messages from '../common/msg/messages';
import Footer from '../common/template/footer';
import Header from '../common/template/header';
import SideBar from '../common/template/sideBar';

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
);
