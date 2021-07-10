import React, { useState, useEffect } from 'react'
import CandidateService from '../services/candidateService';
import { Container, Header, Table } from 'semantic-ui-react'
export default function Candidate() {
    const [candidates, setCandidates] = useState([]);
    let candidateService = new CandidateService();

    useEffect(async () => {
        try {
            const result = await candidateService.getCandidate()
            setCandidates(result.data.data)
        } catch (e) {
            // hata göster
        }
    }, [candidateService]);
    return (

        <Container>
            <br></br>
            <Header as='h2' color='violet' >
                İş Arayanlar Listesi
            </Header>
            <Table >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Tc Kimlik</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.firstName + " " + candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.email}</Table.Cell>
                            <Table.Cell>{candidate.nationalityId}</Table.Cell>
                            <Table.Cell>{candidate.birthDate}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>

    )
}
