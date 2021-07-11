import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Card, Image, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementDetail() {

    let { id } = useParams();
    const [jobAdvertisement, setJobAdvertisement] = useState({});

    let jobAdvertisementService = new JobAdvertisementService()

    useEffect(async () => {
      try {
        const resultJob = await jobAdvertisementService.getById(id)
        setJobAdvertisement(resultJob.data.data)
      } catch (e) {
        // hata göster
      }
  }, [jobAdvertisementService.getById])

    return (
        <Container >
            <Card fluid style={{ padding: "15px" }}>
                <Card.Content  >
                    <Card.Meta textAlign="right"> Oluşturulma tarihi: 11-02-2021</Card.Meta>
                    <Image
                        floated="left"
                        size="tiny"
                        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    />
                    <Card.Header >{jobAdvertisement.jobPosition?.name}</Card.Header>
                    <Card.Content className="teal">{jobAdvertisement.employer?.companyName}</Card.Content>
                    <Card.Meta >{jobAdvertisement.city?.name}</Card.Meta>
                    <Card.Description>
                        <b className="violet">İş açıklaması:</b><br /> {jobAdvertisement.description}
                    </Card.Description>
                    <br />
                     {jobAdvertisement.minSalary ? <Card.Meta >Minimum maaş: {jobAdvertisement.minSalary} ₺</Card.Meta> : <Card.Meta>Minimum maaş belirtilmemiş.</Card.Meta>}
                     {jobAdvertisement.maxSalary ? <Card.Meta >Maximum maaş: {jobAdvertisement.maxSalary} ₺</Card.Meta> : <Card.Meta>Maximum maaş belirtilmemiş.</Card.Meta>}
                    <br />
                    <Card.Meta textAlign="left"><i class="users icon teal"></i> {jobAdvertisement.numberOfPeople}</Card.Meta>

                    <br />
                    {jobAdvertisement.applicationDeadline ? <Card.Meta textAlign="left">Son başvuru tarihi: {jobAdvertisement.applicationDeadline} </Card.Meta>: ""}
              

                    <br />
                    <Button fluid content=' Bu ilana başvur' color='violet' />

                </Card.Content>
            </Card>
        </Container>
    )
}
