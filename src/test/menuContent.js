import React from 'react';
import 'test/menuContent.css';

const items = [];
for(let i =1; i<=5; i++){
items.push(i)
}

const menuContent = (props) => {
    return (
        <div className="menu">
            {items.map(i => <div className="menu-item" key={i}>
                <a 
                href="/"
                onClick={props.clseCallback}
                target="_blank">
                Menu item {i}    
                </a>
            </div>)}
        </div>
    );
};

export default menuContent;