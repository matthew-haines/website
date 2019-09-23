import React from 'react';

function NavbarItem(props) {
    return <h1><a href={props.link}>{props.text}</a></h1>
}

class Navbar extends React.Component {
    render() {
        return NavbarItem({link: "index.html", text: "yeet"}); 
    }
}

export default Navbar;