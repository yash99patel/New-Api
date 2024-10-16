import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { userDelete, userEdit } from '../redux/Action'
import { userEvent } from '@testing-library/user-event';

const TableData = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const TableData = useSelector((state) => state?.data) || []
    const handleNavigat = () => {
        navigate("/")
    }

    const handleEdit = (index) => {
        dispatch(userEdit(index))
        navigate(`/edit/${index}`)

    }

    const handleDelete = (index) => {
        dispatch(userDelete(index))
    }
    return (
        <div>
            <h2>User Details Table</h2>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Vehicle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.country}</td>
                            <td>{item.language}</td>
                            <td>{item.vehicle}</td>
                            <td>
                                <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                                <button type="button" style={{ background: "red", margin: "5px" }} onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={() => handleNavigat()}>Go to Form</button>
        </div>
    )
}

export default TableData
