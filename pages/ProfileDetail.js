import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, Col, Container, ListGroup, ListGroupItem } from 'reactstrap'
import UseUserDetail from '../hooks/useUserDetail'

const ProfileDetail = () => {
  const {query}=useRouter()
  console.log(query.userId)
  const userId=Number(query.userId)
  const user=UseUserDetail(userId)
  console.log(user.data)
  return (
    <div>
    <Container>
      <Col>
<Card>
<Image src={user?.data?.image} width={40} height={40} alt="profile" />
  <CardBody>
<CardTitle tag="h6">
{}
</CardTitle>
<ListGroup horizontal>
  <ListGroupItem>

  </ListGroupItem>
  <ListGroupItem>

  </ListGroupItem>
</ListGroup>
  </CardBody>
</Card>

      </Col>
    </Container>
    </div>
  )
}

export default ProfileDetail