import {
  faArrowCircleDown,
  faArrowCircleUp,
  faQuestion,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Col, OverlayTrigger, Table, Tooltip } from 'react-bootstrap'
import 'assets/css/style.css'

{
  /* 
    This component is used for showing Shoppers List. 
  */
}
const DataTable = ({ data, setData, categories }) => {
  const currentTime = new Date().getTime() + 1 / 1000

  //   const raceData = Object.values(data.race_summaries).slice(0, 5)
  //   raceData.map((e) => console.log('DDDD', e.race_name))
  const [toggle, setToggle] = useState(true)
  const [category, setCategory] = useState('')
  useEffect(() => {
    console.log('called')
  }, [category])
  const handleChange = (e) => {
    data.sort((cust1, cust2) => {
      if (e === 'ASC') {
        setToggle(!toggle)
        return (
          cust1.meeting_name.localeCompare(cust2.meeting_name) ||
          cust1.advertised_start.seconds.localeCompare(
            cust2.advertised_start.seconds
          )
        )
      } else if (e === 'DESC') {
        setToggle(!toggle)
        return (
          cust2.meeting_name.localeCompare(cust1.meeting_name) ||
          cust2.advertised_start.seconds.localeCompare(
            cust1.advertised_start.seconds
          )
        )
      }
    })
  }
  const handleChange2 = (e) => {
    setCategory(e.target.value)

    const dd = data.filter((rc) => {
      return rc.race_name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(dd)
  }
  return (
    <>
      <div className="dashboard-card-big">
        <div className="d-flex align-items-center justify-content-between">
          <div className="big-title">Race Summaries</div>
        </div>
        <div className="big-divider"></div>
        <Col md={12} sm={12} lg={12} id="colname">
          <Table responsive="sm">
            <thead>
              <tr>
                <th className="fix-width">Race Number</th>
                <th style={{ width: '100px' }}>
                  Race Name{' '}
                  {toggle ? (
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      color="#04c56d"
                      onClick={(e) => handleChange('ASC')}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      color="#04c56d"
                      onClick={(e) => handleChange('DESC')}
                    />
                  )}
                </th>
                <th style={{ width: '100px' }}>Rating Id </th>
                <th style={{ width: '100px' }}>Meeting Name </th>
                <th style={{ width: '100px' }}>
                  Race Time{' '}
                  {toggle ? (
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      color="#04c56d"
                      onClick={(e) => handleChange('ASC')}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      color="#04c56d"
                      onClick={(e) => handleChange('DESC')}
                    />
                  )}
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td className="text-center" colspan="5">
                    No Data Available.
                  </td>
                </tr>
              ) : (
                data.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.race_number}</td>
                      <td>
                        {item.race_name} <br />
                      </td>
                      <td>{item.race_id}</td>
                      <td>{item.meeting_name}</td>
                      <td>
                        {currentTime > item.advertised_start.seconds
                          ? moment(item.advertised_start.seconds).format('LLLL')
                          : moment(item.advertised_start.seconds).format(
                              'LLLL'
                            )}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </Table>
        </Col>
      </div>
    </>
  )
}
export default DataTable
