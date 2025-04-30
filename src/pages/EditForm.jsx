import Form from "../components/Form";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoxcarContext from "../contexts/BoxcarContext";

function EditForm() {
    const { boxcars, handleUpdate } = useContext(BoxcarContext)

    const [ formData, setFormData ] = useState({
        id: '',
        make: '',
        model: '',
        country: '',
        year: 0,
        discontinued: false,
        image: '',
    })
        
    const navigate = useNavigate()

    const { id } = useParams()
    

    useEffect(() => {
        if(boxcars?.length > 0) {
        const selected = boxcars.find(b => b.id === id)
        const carToUpdate = {
            ...selected,
            id: id
        }
        setFormData(carToUpdate)
    }
    },[boxcars, id])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.currentTarget
        const updated = {
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        }
        setFormData(updated)
    }


const onSubmit = (e) => {
    e.preventDefault()
    handleUpdate(formData)
    navigate('/home')
}

const handleClear = () => {
    setFormData({
        make: '',
        model: '',
        country: '',
        year: 0,
        discontinued: false,
        image: '',
    })
}

return (
<>
<Form formData={formData} buttonText={"Update Car"} onSubmit={onSubmit} onClick={handleClear} onChange={handleChange}/>
</>
)}

export default EditForm