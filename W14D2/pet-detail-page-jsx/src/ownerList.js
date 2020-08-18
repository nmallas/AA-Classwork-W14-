import React from "react";
import OwnerLink from "./ownersLink"

export default function OwnerList(props) {
    return (
        <>
            <h2>Owners</h2>
            <ul>
                {props.owners.map(owner =>
                    <li key={owner.id}>
                        <OwnerLink firstName={owner.firstName} lastName={owner.lastName} href={owner.href}/>
                    </li>
                )}
            </ul>
        </>
    )
}

OwnerList.defaultProps = {
    owners: [{firstName: "", lastName: "", href: ""}]
};
