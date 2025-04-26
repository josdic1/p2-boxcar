

function Filter({onChange, objValues}) {

return (
<>
<input type="text" name='textFilter' placeholder="Type here..." onChange={onChange} />
<select name="countryFilter" onChange={onChange} value={objValues.value}>
    <option default value='all' > All </option>
    <option value="Germany">Germany</option>
    <option value="Italy">Italy</option>
    <option value="Japan">Japan</option>
    <option value="Russia">Russia</option>
    <option value="Sweden">Sweden</option>
    <option value="UK">UK</option>
    <option value="USA">USA</option>
</select>
Discont. <input type='checkbox' name='discontinuedFilter' onChange={onChange} />
</>
)}

export default Filter
