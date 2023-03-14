//import match from 'nodemon/lib/monitor/match'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallRating } from '../../actions/productActions'
import Loader from '../shared/Loader'
import Message from '../shared/Message'
import { Table } from 'react-bootstrap'

const Ratinglist = ({match}) => {

    const userState = useSelector(state => state.getAllProductReviewsReducer)
  const {loading,error,product} = userState
  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(getallRating(match.params.id))
  },[dispatch, match])
  return (
    <div>
      <h1>Reviewlist</h1>

{loading && (<Loader/>)}
        { error && <Message variant="danger">Error While Fetching Reviews</Message>}
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>User Id</th>
      <th>Product Id</th>
      <th> Name</th>
      <th>Comment</th>
      <th>Rating</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</Table>
        
    </div>
  )
}

export default Ratinglist