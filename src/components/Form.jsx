

function Form({ buttonText, formData, onSubmit, onChange, onClick }) {

    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="make">Make: </label>
                    <input type="text" id="make" name="make" value={formData.make} onChange={onChange} placeholder="Make..." /></div>

                <div><label htmlFor="model">Model: </label>
                    <input type="text" id="model" name="model" value={formData.model} onChange={onChange} placeholder="Model..." /></div>

                <div><label htmlFor="country">Country: </label>
                    <input type="text" id="country" name="country" value={formData.country} onChange={onChange} placeholder="Country..." /></div>

                <div><label htmlFor="year">Year: </label>
                    <input type="number" id="year" name="year" value={formData.year} onChange={onChange} placeholder="Year..." /></div>

                <div><label htmlFor="image">Image: </label>
                    <input type="text" id="image" name="image" value={formData.image} onChange={onChange} placeholder="Image..." /></div>

                <div><label htmlFor="discontinued">Discontinued: </label>
                    <input type="checkbox" id="discontinued" name="discontinued" checked={formData.discontinued}onChange={onChange} /></div>

                <div>
                    <button type='submit'> {buttonText} </button>
                    <button type='button' onClick={onClick}>Clear</button>
                </div>
            </form>
        </>
    )
}

export default Form

