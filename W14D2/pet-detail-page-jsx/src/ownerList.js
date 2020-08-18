import React from "react";

export default function OwnerList(props) {
    return (
        <>
            <h2>Owners</h2>
            <ul>
                {props.owners.map(owner =>
                    <li key={owner.id}>
                        {owner.firstName}
                    </li>
                )}
            </ul>
        </>
    )
}

OwnerList.defaultProps = {
    owners: []
};
