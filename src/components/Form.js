import React, { useEffect, useState } from 'react'
import TableData from './TableData'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userSubmit } from '../redux/Action'
import { useSelector } from 'react-redux';


const Form = () => {
    const [userDetails, setUserDetails] = useState({ fname: "", lname: "", country: "", language: "", vehicle: [] })
    const [userData, setUserData] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const TableData = useSelector((state) => state?.data) || []
    const EditFormData = useSelector((state) => state?.editData) || { fname: "", lname: "", country: "", language: "", vehicle: [] }
    console.log(params, "edit Data");

    useEffect(() => {
        setUserData(TableData)
        if (params.id) {
            setUserDetails(EditFormData)
            setEditIndex(params.id)
        }
    }, [])

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const handleCheck = (e) => {
        const arr = [...userDetails.vehicle]
        if (e.target.checked) {
            arr.push(e.target.value)
        } else {
            const index = arr.indexOf(e.target.value)
            arr.splice(index, 1)
        }
        setUserDetails({ ...userDetails, vehicle: arr })
    }

    const handleSubmit = () => {
        if (validtion()) {
            const data = userData
            if (editIndex !== null) {
                data[editIndex] = userDetails
                setUserData(data)
                setEditIndex(null)
            } else {
                data.push(userDetails)

                setUserData([...data])
            }
            dispatch(userSubmit(data))
            handleReset()
        }
    }


    const handleReset = () => {
        setUserDetails({ fname: "", lname: "", country: "", language: "", vehicle: [] })
    }

    const handleDelete = (index) => {
        const newArr = [...userData]
        newArr.splice(index, 1)
        setUserData(newArr)
    }
    const handleEdit = (index) => {
        const arr = userData
        setUserDetails(arr[index])
        setEditIndex(index)
    }
    const handleNavigat = () => {
        navigate("/table")
    }

    const validtion = () => {
        let isValid = true;

        const msgError = document.getElementById("firstname");
        if (userDetails.fname.trim() === "") {
            msgError.innerHTML = "<span>First name is required</span>";
            isValid = false;
        } else {
            msgError.innerHTML = "";

        }

        const msgError1 = document.getElementById("lastname");
        if (userDetails.lname.trim() === "") {
            msgError1.innerHTML = "<span>Last name is required</span>";
            isValid = false;
        } else {
            msgError1.innerHTML = ""
        }

        const msgError2 = document.getElementById("crt");
        if (userDetails.country === "") {
            msgError2.innerHTML = "<span>Country is required</span>";
            isValid = false;
        }else {
            msgError2.innerHTML = ""
        }

        const msgError3 = document.getElementById("lgg");
        if (userDetails.language === "") {
            msgError3.innerHTML = " <span>Language is required</span>";
            isValid = false;
        }else {
            msgError3.innerHTML = ""
        }

        const msgError4 = document.getElementById("vehicle");
        if (userDetails.vehicle.length === 0) {
            msgError4.innerHTML = "<span>At least one vehicle is required</span>";
            isValid = false;
        }else {
            msgError4.innerHTML = ""
        }

        return isValid;
    }

    return (
        <div>
            <form action="#" onsubmit="return validtion()">
                <h3>Contact Form</h3>
                <div className="container-fluid">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" onChange={(e) => handleChange(e)} value={userDetails.fname} name="fname" placeholder="Your name.." class="form-control" /><br/>
                    <div>
                        <span id='firstname'></span>
                    </div>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" onChange={(e) => handleChange(e)} value={userDetails.lname} name="lname" placeholder="Your last name.." class="form-control" /><br/>
                    <div>
                        <span id='lastname'></span>
                    </div>

                    <label for="country">Country</label>
                    <select id="country" onChange={(e) => handleChange(e)} value={userDetails.country} name="country" class="form-control">
                        <option value="">Select Country</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select><br></br>
                    <div>
                        <span id='crt'></span>
                    </div>

                    <label>Please select your favorite Web language:</label><br/>
                    <input type="radio" id="html" name="language" value="HTML" checked={userDetails.language === "HTML"} onChange={(e) => handleChange(e)} />
                    <label for="html">HTML</label><br />
                    <input type="radio" id="css" name="language" value="CSS" checked={userDetails.language === "CSS"} onChange={(e) => handleChange(e)} />
                    <label for="css">CSS</label><br />
                    <input type="radio" id="javascript" name="language" value="JavaScript" checked={userDetails.language === "JavaScript"} onChange={(e) => handleChange(e)} />
                    <label for="javascript">JavaScript</label>
                    <br/>
                    <div>
                        <span id='lgg'></span>
                    </div>

                    <label>Please select your Vehicle:</label><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={userDetails.vehicle.includes("Bike")} onChange={(e) => handleCheck(e)} />
                    <label for="vehicle1"> I have a bike</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={userDetails.vehicle.includes("Car")} onChange={(e) => handleCheck(e)} />
                    <label for="vehicle2"> I have a car</label><br />
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={userDetails.vehicle.includes("Boat")} onChange={(e) => handleCheck(e)} />
                    <label for="vehicle3"> I have a boat</label><br />
                    <div>
                        <span id='vehicle'></span>
                    </div>

                    <button type="button" onClick={() => handleSubmit()}>Sumbit</button>
                    <button type="button" style={{ marginLeft: 8 }} onClick={() => handleNavigat()}>Go to Table</button>
                </div>
            </form>
        </div>
    )
}


export default Form
