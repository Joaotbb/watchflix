import React from 'react'
import { motion } from 'framer-motion'

const OnScroll = ({ children, delay }) => (
  <motion.div
    transition={{
      ease: 'linear',
      duration: 1,
      delay
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    {children}
  </motion.div>
)

OnScroll.defaultProps = {
  delay: 0
}

export default OnScroll
