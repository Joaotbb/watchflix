import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'



const Seo = ({ title, description }) => {

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      description={description}
      meta={[
        {
          name: 'description',
          content: description
        }
      ]}
    ></Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Seo