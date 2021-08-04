import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Item} from "semantic-ui-react";
import EmployerService from '../services/employerService';
import { useParams } from "react-router";
export default function EmployerDetail() {

    let { id } = useParams();
    const [Employer, setEmployer] = useState({});
    let employerService = new EmployerService()
    
    useEffect(async () => {
        try {
            const resultJob = await employerService.getById(id)
            setEmployer(resultJob.data.data)
        } catch (e) {
            // hata göster
        }
    }, [employerService.getById])
    return (
        <div>

            <Container>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                        <Item.Content>
                            <Item.Header ><h3 className="violet">{Employer.companyName}</h3></Item.Header>
                            <Item.Description><i class="linkify icon teal"></i> {Employer.webAdress}</Item.Description>
                            <Item.Description>
                            <i class="envelope icon teal"></i> {Employer.email}
                            </Item.Description>
                            <Item.Description>
                            <i class="phone icon teal"></i> {Employer.phoneNumber}
                            </Item.Description>
                         
                        </Item.Content>
                        
                    </Item>
                </Item.Group>
     <div>    Firmamız 1997 yılında Balıkesir'in Ayvalık ilçesinde kurulmuş olup; 2000 metrekare kapalı alanda hizmet veren  sektörün en eski firmalarından biridir.  Kurucumuz Celal KAHYAOĞLU  gıda sektöründe uzun yıllar boyunca edindiği deneyim ve bilgi birikimi ile  yüksek teknoloji ve imalat konusunda uzmanlaşmış bir ekiple birleştirerek   gıda ve kimya  sektörünün her alanına hitap eden paslanmaz çelik imalatlar yapmaya başlamıştır.
<br></br><br></br>
Sayın Celal KAHYAOĞLU  alanında Türkiyenin önde gelen firmaları Komili Yağ ve sabun sanayi , Anagıda-Kırlangıç , Tariş , Marmara Birlik , Başer Gıda San , Yudum yağ sanayi , Rast gıda , Zeryağ , Tarım Kredi Kooperatifleri , Güneydoğu Birlik , Elit Gıda Aş. , Verde , Sunar Yağ San. , Oruçoğlu yağ san. ve bunun gibi birçok firmanında  bulunduğu yurtiçi ve yurtdışındaki  büyüklü küçüklü birçok fabrikanın danışmanlık , proje , imalat ve montaj aşamalarına imzasını atmış , konusunda yetkin bir kişidir. Ayrıca yurtiçi ve yurtdışında  rafine, gliserin , biodizel , sabun tesisi , soğutma hatları ve arıtma tesisleri gibi birçok tesise danışmanlık, proje, imalat ve montoj hizmetleri vermiştir.
<br></br><br></br>
</div>
                <h2><span className="violet">{Employer.companyName}</span> Mevcut iş ilanları..</h2>
                <hr/>
            </Container>
        </div>
    )
}
