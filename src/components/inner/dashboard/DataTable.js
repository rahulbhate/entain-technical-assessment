import {
  faArrowCircleDown,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Col, Table } from 'react-bootstrap'
import 'assets/css/style.css'

{
  /* 
    This component is used for showing Shoppers List. 
  */
}
const DataTable = ({ loadData, date, data, categories }) => {
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    console.log('called')
  }, [])
  const handleChange = (e) => {
    data.sort((a, b) => {
      if (e === 'ASC') {
        setToggle(!toggle)
        return a.meeting_name.localeCompare(b.meeting_name)
      } else if (e === 'DESC') {
        setToggle(!toggle)
        return b.meeting_name.localeCompare(a.meeting_name)
      }
    })
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
                <th style={{ width: '100px' }}>Race Id </th>
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
                data
                  .sort((a, b) =>
                    moment(a.advertised_start.seconds * 1000)
                      .format('LTS')
                      .localeCompare(
                        moment(b.advertised_start.seconds * 1000).format('LTS')
                      )
                  )
                  .filter(
                    (item) =>
                      moment(item.advertised_start.seconds * 1000).diff(
                        moment(date),
                        'minutes'
                      ) > 1
                  )
                  .map((item, index) => {
                    return (
                      <tr key={item.race_id}>
                        <td>{item.race_number}</td>
                        <td>
                          {item.race_name} <br />
                        </td>
                        <td>{item.race_id}</td>
                        <td>{item.meeting_name}</td>
                        <td>
                          {`Race Start Time:${moment(
                            item.advertised_start.seconds * 1000
                          ).format('LTS')}`}
                          <br />
                          {`Current Time: ${moment(date).format(
                            ' h:mm:ss A'
                          )}`}{' '}
                          <br />
                          {`${moment(item.advertised_start.seconds * 1000).from(
                            moment(date)
                          )}`}{' '}
                          <br />
                          {moment(item.advertised_start.seconds * 1000).diff(
                            moment(date),
                            'minutes'
                          ) < 1
                            ? 'Race Started'
                            : 'Race Not Started'}
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
