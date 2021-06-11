import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Ticnitien = () => {
    const [tickets, setTickets] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/api/ticketTichnician')
        .then(response => {
            // const Data = response.data.map((res) => {
            //     return res.ticket_Id
            // })
            console.log(response.data);
            setTickets(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const acceptedTicket = (id) => {
        axios.put(`http://localhost:3000/api/accept/${id}`)
        .then((response) => {
        //    console.log(response.data.message);
           setMessage(response.data.message)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const refuseTicket = (id) => {
        axios.put(`http://localhost:3000/api/refuse/${id}`)
        .then((response) => {
        //    console.log(response.data.message);
           setMessage(response.data.message)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h1>welcome Technician</h1>
            {message ?  <div class="alert alert-primary mt-3" role="alert">
                        {message}
                        </div> 
            : null}
            {tickets.map((ticket, index) => (
                
                 <div class="row d-inline-flex mt-5">
                    <div class="col-md-3 p-2">
                        {ticket.etat !== 'Non_Affecte' ? 
                        (<>
                        <div key= {index} className="card mr-5" style={{width: "18rem"}}>
                            <div className="card-header ">
                                {ticket.id_ticket.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> {ticket.id_ticket.ticket_type}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">urgence : {ticket.id_ticket.urgence}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">state : {ticket.id_ticket.etat}</h6>
                                <p className="card-text">Description : {ticket.id_ticket.description}</p>
                                <hr/>
                                {ticket.etat !== 'Cloture' ? 
                                    (<>
                                        <button type="button" className="btn btn-outline-info btn-sm ml-5" onClick={()=> {acceptedTicket(ticket._id)}} >Accept</button>
                                        <button type="button" className="btn btn-outline-danger btn-sm ml-5" onClick={()=> {refuseTicket(ticket._id)}}  >Refuse</button>
                                    </>) : null }
                                
                                
                            </div>
                        </div>
                        </>) : null}
                    </div>
                </div>
                
                
            ))}
        </div>
    )
}

export default Ticnitien