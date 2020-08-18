import React from 'react';
import Navigation from './navigation';
import PetDetail from './petDetails'


const PetDetailPage = (props) => {
    return (
    <>
        <Navigation></Navigation>
        <PetDetail pet={props.pet}></PetDetail>
    </>
    );
}

export default PetDetailPage;
