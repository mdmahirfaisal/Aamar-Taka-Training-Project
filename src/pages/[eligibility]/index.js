import { useRouter } from 'next/router';
import React from 'react';
import NotFound from '../../components/SharedComponents/NotFound/NotFound';

const Index = () => {
    const router = useRouter();
    const eligibility = router?.query?.eligibility
    console.log(eligibility);

    // let dynamicData = null;
    // if (loan === "personal-loan") {
    //     dynamicData = <PersonalLoan />
    // }
    // else if (loan === "home-loan") {
    //     dynamicData = <HomeLoan />
    // }
    // else if (loan === "car-loan") {
    //     dynamicData = <CarLoan />
    // }

    return (
        <div>
            <h2>this is eligibility</h2>
        </div>
    );
};

export default Index;