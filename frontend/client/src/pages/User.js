/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import React, {useState, useEffect} from "react"
import {Modal, Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'


 const userTach = () =>{
  const [show, setShow] = useState(false);
  const [tickets, setTickets] = useState([])
  const initialState = {title: '', ticket_type: '', urgence: '', description:''}
    
  const [ticketInfo, setTicketInfo] = useState(initialState)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios.get('http://localhost:3000/api/allTicketUser')
    .then(response => {
        const Data = response.data
        console.log(Data);
        setTickets(Data)
    }).catch(error => {
        console.log(error);
    })
}, [])

 

  
 const handleChange = (e) => {
    setTicketInfo({
            ...ticketInfo,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/addTicket', ticketInfo)
        .then((data) => {
            console.log(data)
            if(data) return console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
   
    return (
        <div className="container container-fluid">
            <Link to= "/userTach">
            <h1 className = "mb-3 mt-3">List of All Ticket</h1>
            </Link>
            <Button variant="info" onClick={handleShow}>
                Add New Ticket
            </Button>
            <br/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name='title' onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Type of Ticket</Form.Label>
                            <Form.Control as="select" name='ticket_type' onChange={handleChange}>
                            <option> </option>
                            <option>designer</option>
                            <option>Web Developer</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>urgence</Form.Label>
                            <Form.Control as="select" name='urgence' onChange={handleChange}>
                            <option> </option>
                            <option>Normal</option>
                            <option>Moyen</option>
                            <option>Urgence</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name='description' onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>


            {tickets.map((ticket, index) => {
                return  <div class="row d-inline-flex">
                <div class="col-md-3 p-2">  
                    <div key= {index} className="card mr-5" style={{width: "18rem"}}>
                        <div className="card-header ">
                            {ticket.title}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {ticket.type}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">urgence: {ticket.urgence}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">StatuS of Ticket : {ticket.etat}</h6>
                            <p className="card-text">Description : {ticket.description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            })}
               
        </div>
    )
}




export default userTach