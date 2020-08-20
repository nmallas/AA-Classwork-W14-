import React from "react"

const Headers = ({ titles, currentTab, selectTab }) => {

    function handleClick(e) {
        const idx = parseInt(e.target.id, 10);
        selectTab(idx);
        return;
    }

    const tabs = titles.map((title, idx) => {
        const headerClass = (idx === currentTab) ? 'active' : '';
        return (
            <li key={idx} id={idx} className ={headerClass} onClick={handleClick}>
            {title}
            </li>
        );
    })


    return (
        <ul className='tab-header'>
        {tabs}
        </ul>
    );
}

export default Headers;
