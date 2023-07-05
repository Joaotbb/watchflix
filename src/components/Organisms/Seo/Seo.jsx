import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Seo = ({ title, description, image }) => {
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
    >
      <meta
        property='og:title'
        content={title}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:image'
        content={'https://watchflix-nine.vercel.app/logo.svg'}
      />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Seo
