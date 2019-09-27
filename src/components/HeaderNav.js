import React from 'react'
import './HeaderNav.css'
import { Container, Header, Button } from 'semantic-ui-react'


const HeaderNav = () => {
    return(
        <div className="NavBar">
            <div className="NavItem">전체 게시물</div>
            <div className="NavItem">Sopt notice</div>
            <div className="NavItem">Sopt Media</div>
            <div className="NavItem">Sopt 놀이터</div>
            <div className="NavItem">Server</div>
            <div className="NavItem">Android</div>
            <div className="NavItem">IOS</div>
            <div className="NavItem">기획</div>
            <div className="NavItem">디자인</div>            
        </div>
    )
}


export default HeaderNav 