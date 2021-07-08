import React, { useState, useEffect } from 'react'
import { Menu, Input, Dropdown, Label, Button } from "semantic-ui-react";
import CityAndJobPositionService from '../services/cityAndJobPositionService';
export default function LeftBar() {

  const [JobPositions, setJobPositions] = useState([]);
    let cityAndJobPositionService = new CityAndJobPositionService()

  useEffect(async () => {
    try {
        const result = await cityAndJobPositionService.getJobPosition()
        setJobPositions(result.data.data)
    } catch (e) {
        // hata göster
    }
  }, [cityAndJobPositionService ])

  return (
    <select className="ui search dropdown" >
      <option value="">Pozisyon Seçin</option>
      {JobPositions.map((jobPosition) => (
        <option key={jobPosition.id} value={jobPosition.id}>{jobPosition.name}</option>
      ))

      }
    </select>
  )
}