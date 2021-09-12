import Footer from 'components/common/Footer'
import Data from 'components/common/Data.json'
import { MetaDecorator } from 'components/common/MetaDecorator'
import NavBar from 'components/common/NavBar'
import React, { useState, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import DataTable from './DataTable'
import DropDown from 'components/common/DropDown'
import { loadData } from 'redux/thunks/Thunks'
import LoadingIndicator from 'components/common/LoadingIndicator'

export const DashboardPage = ({ loadData, data, ...props }) => {
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  }, [date])

  function tick() {
    setDate(new Date())
  }
  useEffect(() => {
    console.log('USE EFFECT CALLED')
    getData()
  }, [])
  async function getData() {
    await loadData()
  }
  const handleChange = (e) => {
    const dd = Object.values(data.data.race_summaries)
    setCategory(e.target.value.toLowerCase())
    const ss = dd.filter((rc) => rc.race_name.toLowerCase().includes(category))
    console.log(ss)
    return ss
  }
  let content = (
    <section className="dashboard-container">
      <MetaDecorator
        title={Data.DashboardTitle}
        description={Data.DashboardDescription}
      />
      <NavBar />

      {data.data ? (
        <>
          <Container>
            <Col lg={12} md={12} sm={12} xs={12}>
              <section>
                <h2>Dashboard</h2>
              </section>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <DropDown
                data={Object.values(data.data.race_summaries).slice(0, 5)}
                category={category}
                handleChange={handleChange}
              />
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <DataTable
                date={date}
                setDate={setDate}
                data={Object.values(data.data.race_summaries)
                  .slice(0, 5)
                  .filter((rc) =>
                    rc.race_name.toLowerCase().includes(category)
                  )}
              />
            </Col>
          </Container>
        </>
      ) : (
        <LoadingIndicator />
      )}
      <Footer />
    </section>
  )

  return content
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = {
  loadData,
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
