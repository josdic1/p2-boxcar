import { useState, useEffect, useContext } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"
import BoxcarContext from "../contexts/BoxcarContext"

function Form() {
    const {selectedBoxcar, handleNew, handleUpdate} = useContext(BoxcarContext)
    const {inEditMode, setInEditMode } = useContext(LoaderModeContext)

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        manufacturer: '',
        country: '',
        year: 0,
        discontinued: false,
        image: '',
    })

    useEffect(() => {
       if(inEditMode) {
        setFormData({
            make: selectedBoxcar.make,
            model: selectedBoxcar.model,
            manufacturer: selectedBoxcar.manufacturer,
            country: selectedBoxcar.country,
            year: selectedBoxcar.year,
            discontinued: selectedBoxcar.discontinued,
            image: selectedBoxcar.image,
        })
       } 
    },[inEditMode, selectedBoxcar])


    const onFormChange = (e) => {
        const { name, value, type, checked } = e.currentTarget
        setFormData(prev => ({
            ...prev,
            [name]: type !== 'checkbox' ? value : checked 
        }))
    }

    const onSubmit = (e) => {
    let updated;
        e.preventDefault()
        if(inEditMode) {
            updated = {
                ...formData,
                id: selectedBoxcar.id,
            }
            handleUpdate(updated)  
        } else {
            updated = formData
            handleNew(updated)
        }
        onClear()
    }

    const onClear = () => {
        setFormData({
            make: '',
            model: '',
            manufacturer: '',
            country: '',
            year: '',
            discontinued: false,
            image: '',
            favorite: false
        })
        setInEditMode(false)
    }


    return (
    <>
    <form onSubmit={onSubmit}>
        <div>
    <label htmlFor="make">Make: </label>
    <input type="text" id="make" name="make" value={formData.make} onChange={onFormChange} placeholder="Make..." /></div>
    <div><label htmlFor="model">Model: </label>
    <input type="text"id="model" name="model" value={formData.model} onChange={onFormChange} placeholder="Model..." /></div>
    <div><label htmlFor="manufacturer">Manufacturer: </label>
    <input type="text" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={onFormChange} placeholder="Manufacturer..." /></div>
    <div><label htmlFor="country">Country: </label>
    <input type="text" id="country" name="country" value={formData.country} onChange={onFormChange} placeholder="Country..." /></div>
    <div><label htmlFor="year">Year: </label>
    <input type="number" id="year" name="year" value={formData.year} onChange={onFormChange} placeholder="Year..." /></div>
    <div><label htmlFor="image">Image: </label>
    <input type="text" id="image" name="image" value={formData.image} onChange={onFormChange} placeholder="Image..." /></div>
    <div><label htmlFor="discontinued">Avail? </label>
    <input type="checkbox" id="discontinued" name="discontinued" checked={formData.discontinued} onChange={onFormChange} /></div>
    <div>
    <button type='submit'>{inEditMode ? "Update" : "Create"}</button>
    <button type='clear' onClick={onClear}>Clear</button>
    </div>
    </form>
    </>
    )}
    
    export default Form