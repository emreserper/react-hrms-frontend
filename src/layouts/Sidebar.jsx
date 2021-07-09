import React, { useState, useEffect } from 'react'
import { Menu, Input, Dropdown, Label, Button } from "semantic-ui-react";
import CityAndJobPositionService from '../services/cityAndJobPositionService';
export default function LeftBar() {

  const [JobPositions, setJobPositions] = useState([]);
  const [Cities, setCities] = useState([]);
  let cityAndJobPositionService = new CityAndJobPositionService()

  useEffect(async () => {
    try {
      const resultJob = await cityAndJobPositionService.getJobPosition()
      setJobPositions(resultJob.data.data)
    } catch (e) {
      // hata göster
    }
  }, [cityAndJobPositionService.getJobPosition])

  useEffect(async () => {
    try {
      const resultCity = await cityAndJobPositionService.getCity()
      setCities(resultCity.data.data)
    } catch (e) {
      // hata göster
    }
  }, [cityAndJobPositionService.getCity])

  const jobPositions = JobPositions.map((jobPosition) => ({
    key: jobPosition.id,
    text: jobPosition.name,
    value: jobPosition.id,
  }))

  const cities = Cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.id,
  }))


  return (

    <Menu vertical>
         <Menu.Item>
        <Button  color='violet' content='En yeni ilanlar' fluid />
      </Menu.Item>
      <Menu.Item>
        <Input size="mini" type="number" fluid placeholder="En Düşük Maaş">
          <Label basic>₺</Label>
          <input />
        </Input>
      </Menu.Item>
      <Menu.Item>
        <Input size="mini" type="number" fluid placeholder="En Yüksek Maaş">
          <Label basic>₺</Label>
          <input />
        </Input>
      </Menu.Item>
      <Menu.Item>
      <Dropdown placeholder='İş Pozisyonu' fluid search selection options={jobPositions} />
      </Menu.Item>

      <Menu.Item>
      <Dropdown placeholder='Şehir' fluid search selection options={cities} />
      </Menu.Item>


      <Menu.Item>
        <Button color='teal' content='Ara!' fluid />
      </Menu.Item>
    </Menu>

  )
}