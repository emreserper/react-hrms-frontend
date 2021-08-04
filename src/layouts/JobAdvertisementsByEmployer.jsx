import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Button, Card } from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';
export default function JobAdvertisementsByEmployer() {

    let { id } = useParams();
    const [JobAdvertisements, setJobAdvertisements] = useState([]);
    let jobAdvertisementService = new JobAdvertisementService()

    useEffect(async () => {
        try {
            const resultJob = await jobAdvertisementService.getByEmployerId(id)
            setJobAdvertisements(resultJob.data.data)
        } catch (e) {
            // hata göster
        }
    }, [jobAdvertisementService.getByEmployerId])
    return (
        <div>
            <Container>
                <Card.Group itemsPerRow={4}>
                    {JobAdvertisements.map((jobAdvertisement) => (
                       
                        <Card key={jobAdvertisement.id} className={jobAdvertisement.isActive ?"":"deActive"}>
                           
                            <Card.Content>
                                <Card.Header>{jobAdvertisement.jobPosition?.name}</Card.Header>
                                <Card.Meta>
                                    {jobAdvertisement.city?.name}
                                </Card.Meta>
                                <br></br>
                                <Card.Description>
                                    {jobAdvertisement.description.length > 95 ? `${jobAdvertisement.description.substring(0, 95)}...` : jobAdvertisement.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                {jobAdvertisement.applicationDeadline ? <Card.Meta textAlign="left"><i>Son başvuru tarihi: {jobAdvertisement.applicationDeadline}</i> </Card.Meta> : ""}
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='violet' content='İncele' fluid as={NavLink} to={`/jobAdvertisements/${jobAdvertisement.id}`}/>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Container>
        </div>
    )
}
