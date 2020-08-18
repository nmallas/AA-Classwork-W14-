import React from "react";

export default function Navigation () {
    return (
    <header>
        <h1>Petrack</h1>
        <nav>
            <ul>
                <li>
                    <a href="/pets">Pets</a>
                </li>
                <li>
                    <a href="/owners">Owners</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}
