import React, { useState, useEffect } from 'react'
import { Card, Image } from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import { Link, NavLink } from 'react-router-dom';
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
            <Card.Header >{jobAdvertisement.jobPositionName}</Card.Header>
            <Card.Content className="teal linkhover" as={NavLink} to={"/register"}>{jobAdvertisement.companyName}</Card.Content>
            <Card.Meta >{jobAdvertisement.cityName}</Card.Meta>
            <Card.Content style={{ color: "black" }}>
            {jobAdvertisement.description}
            </Card.Content>
            <div className="ui right floated meta">
              {jobAdvertisement.creationDate}
            </div>
          </Card.Content>
        </Card>

      ))}

    </Card.Group>
  )

}
