import React from 'react'
import { Link } from 'react-router-dom'
import { Card,CardTitle,CardText } from 'reactstrap'
const Home = () => {
  return (
    <>
      <div>
        <Card
          body
          className="my-5 mx-auto"
          style={{
            width: '18rem'
          }}
        >
          <CardTitle tag="h5">
            User Form Task
          </CardTitle>
          <CardText>
            Click on below button to go to user form.
          </CardText>
          <Link to='/user-form' color="primary" className='btn btn-primary'>
            User Form
          </Link>
        </Card>
        
      </div>
    </>
  )
}

export default Home
