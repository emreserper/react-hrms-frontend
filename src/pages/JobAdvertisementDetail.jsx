import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Card, Image, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';
import { NavLink } from "react-router-dom";

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
                    <Card.Meta textAlign="right"><i>Oluşturulma tarihi: {jobAdvertisement.creationDate}</i></Card.Meta>
                    <Image
                        floated="left"
                        size="tiny"
                        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    />
                    <Card.Header >{jobAdvertisement.jobPosition?.name}</Card.Header>
                    <Card.Content className="teal linkhover" as={NavLink} to={`/EmployerPage/${jobAdvertisement.employer?.id}`}>{jobAdvertisement.employer?.companyName}</Card.Content>
                    <Card.Meta >{jobAdvertisement.city?.name}</Card.Meta>
                    <Card.Description>
                        <b className="teal">İş açıklaması:</b>
                        <br /> 
                        {jobAdvertisement.description}
                    </Card.Description>
                    <br />
                    <b className="teal">Maaş aralığı:</b><br />
                     {jobAdvertisement.minSalary ? <Card.Meta >Minimum maaş: {jobAdvertisement.minSalary} ₺</Card.Meta> : <Card.Meta>Minimum maaş belirtilmemiş.</Card.Meta>}
                     {jobAdvertisement.maxSalary ? <Card.Meta >Maximum maaş: {jobAdvertisement.maxSalary} ₺</Card.Meta> : <Card.Meta>Maximum maaş belirtilmemiş.</Card.Meta>}
                    <br />
                    <Card.Meta textAlign="left" ><i class="users icon teal"></i> <span className="teal">Kontenjan:</span> {jobAdvertisement.numberOfPeople}</Card.Meta>

                    <br />
                    {jobAdvertisement.applicationDeadline ? <Card.Meta textAlign="left"><i>Son başvuru tarihi: {jobAdvertisement.applicationDeadline}</i> </Card.Meta>: ""}
              

                    <br />
                    <Button fluid content=' Bu ilana başvur' color='violet' />

                </Card.Content>
            </Card>
        </Container>
    )
}
