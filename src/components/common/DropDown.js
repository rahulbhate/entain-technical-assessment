import React from 'react'

const DropDown = ({ data, category, handleChange }) => {
  return (
    <>
      <label for="raceCategory">Choose Category:</label>
      <select
        name="raceCategory"
        id="raceCategory"
        onChange={handleChange}
        style={{ width: '50%' }}
      >
        <option>Select Category</option>
        {data.length === 0 ? (
          <option value="NO">No Categories Found</option>
        ) : (
          data.map((item, index) => {
            return <option value={item.race_name}>{item.race_name}</option>
          })
        )}
      </select>
    </>
  )
}
export default DropDown
