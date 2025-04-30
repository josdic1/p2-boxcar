import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react"
import BoxcarContext from "../contexts/BoxcarContext"

function NewForm() {
    const { handleNew } = useContext(BoxcarContext)

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        country: '',
        year: 0,
        discontinued: false,
        image: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.currentTarget
        const newBoxcar = {
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        }
        setFormData(newBoxcar)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handleNew(formData)
        handleClear()
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
<Form buttonText={"Create New"} formData={formData} onChange={handleChange} onSubmit={onSubmit} onClick={handleClear}/>
</>
    )
}

export default NewForm
