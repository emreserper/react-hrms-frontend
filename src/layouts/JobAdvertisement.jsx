import React, { useState, useEffect } from 'react'
import { Card, Image } from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import { NavLink } from 'react-router-dom';
export default function JobAdvertisementList() {

  const [JobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
  })

  return (
    <Card.Group >
      {JobAdvertisements.map((jobAdvertisement) => (
        <Card className="borderhover" as={NavLink} to={`/jobAdvertisements/${jobAdvertisement.id}`} fluid key={jobAdvertisement.id}>
          <Card.Content  >
            <Image
              floated="left"
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <Card.Header >{jobAdvertisement.jobPosition?.name}</Card.Header>
            <Card.Content className="teal linkhover" as={NavLink} to={`/EmployerPage/${jobAdvertisement.employer?.id}`}>{jobAdvertisement.employer?.companyName}</Card.Content>
            <Card.Meta >{jobAdvertisement.city?.name}</Card.Meta>
            <Card.Content font style={{ color: "black" }}>
            {jobAdvertisement.description.length > 95 ?`${jobAdvertisement.description.substring(0, 95)}...` : jobAdvertisement.description}
            </Card.Content>
            <div className="ui right floated meta">
             <i>{jobAdvertisement.creationDate}</i> 
            </div>
          </Card.Content>
        </Card>

      ))}

    </Card.Group>
  )

}
