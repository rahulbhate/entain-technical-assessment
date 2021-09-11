import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
{
  /* 
    This component is used to display title and 
    description of each component
    .
  */
}
export const MetaDecorator = ({ title, description }) => {
  return (
    <div>
      <Helmet>
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </div>
  )
}
MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
