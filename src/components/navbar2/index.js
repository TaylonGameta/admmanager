import React from 'react'


export default function Navbar2(props){

    var Items = props.items.items
    
    const listItems = Items.map((item,index)=>
        <React.Fragment key={index}>
            <a href='/' className="navbar2item bold">{item.title}</a>
            {item.item1 ? <a href={item.item1.url} className="navbar2item">{item.item1.title}</a> : ""}
            {item.item2 ? <a href={item.item2.url} className="navbar2item">{item.item2.title}</a> : ""}
        </React.Fragment>
    )
    
    return(
        <div className="navbar2">
            {listItems}
            
        </div>
    )
}