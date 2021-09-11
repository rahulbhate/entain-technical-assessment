import React from 'react'

const DropDown = ({ data, category, setCategory, setData, handleChange }) => {
  //   const raceData = Object.values(data.race_summaries).slice(0, 5)
  //   console.log(raceData)
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
