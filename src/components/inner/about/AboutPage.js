import Footer from 'components/common/Footer'
import Data from 'components/common/Data.json'
import { MetaDecorator } from 'components/common/MetaDecorator'
import NavBar from 'components/common/NavBar'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import LoadingIndicator from 'components/common/LoadingIndicator'
export const AboutPage = ({ ...props }) => {
  let content = (
    <section className="dashboard-container">
      <MetaDecorator
        title={Data.AboutTitle}
        description={Data.AboutDescription}
      />
      <NavBar />
      {1 ? (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <section>
                <h2>About Us</h2>
                <p>
                  Entain plc (LSE: ENT) is one of the world’s largest
                  sports-betting and gaming groups, operating both online and in
                  the retail sector. Tax resident in the UK, with licenses in 27
                  countries, the Group employs a workforce of more than 24,000,
                  in 20 offices across five continents.
                </p>
                <p>
                  In December 2020 we rebranded our Group from GVC Holdings, to
                  reflect our ambition to be the world-leader in sports betting
                  and gaming entertainment.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingIndicator />
      )}
      <Footer />
    </section>
  )

  return content
}
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
