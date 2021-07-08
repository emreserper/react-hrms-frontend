import React, { useState,useEffect } from 'react'
import { Card, Image } from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {

  const [JobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
  })

  return (
    <Card.Group>
      {JobAdvertisements.map((jobAdvertisement)=>(
      <Card fluid key={jobAdvertisement.id}>
        <Card.Content  >
          <Card.Header as='a'>{jobAdvertisement.jobPositionName}</Card.Header>
          <Card.Content>{jobAdvertisement.companyName}</Card.Content>
          <Card.Meta>{jobAdvertisement.cityName}</Card.Meta>
          <Card.Content>
            Yeni mezun yetitirilmek üzere frontend developer arayışı
            <br></br>
            Kontenjan: {jobAdvertisement.numberOfPeople}
          </Card.Content>
        </Card.Content>
      </Card>
        
      ))}

    </Card.Group>
  )

}
