import Data from 'components/common/Data.json'
import { MetaDecorator } from 'components/common/MetaDecorator'
import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
{
  /* 
    This component is used to display user if page not found or
    user types invalid URL redirects to Error 404 page
  */
}
const Error404 = ({ ...props }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <React.Fragment>
      <MetaDecorator
        title={Data.PageNotFoundTitle}
        description={Data.PageNotFoundDescription}
      />
      <div className="body">
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x1_5"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
        </div>
        <div class="c">
          <div class="_404">404</div>
          <hr />
          <div class="_1">THE PAGE</div>
          <div class="_2">WAS NOT FOUND</div>
          <div>
            <Button
              variant="dark"
              style={{ fontSize: '18px', marginTop: '5px' }}
              onClick={handleClick}
            >
              {' '}
              Redirect me to home{' '}
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Error404)
