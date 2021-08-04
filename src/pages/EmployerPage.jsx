import React from 'react'
import JobAdvertisementsByEmployer from '../layouts/JobAdvertisementsByEmployer';
import EmployerDetail from '../layouts/EmployerDetail';
export default function EmployerPage() {
   
    return (
        <div>
            <EmployerDetail></EmployerDetail>
            <br/>
            <JobAdvertisementsByEmployer></JobAdvertisementsByEmployer>
        </div>
    )
}
