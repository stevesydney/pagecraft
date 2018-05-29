import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classnames from 'classnames'

import styles from './Button.styles'

const Button = ({
  children,
  classes,
  className,
  disabled,
  styleType,
  tabIndex,
  type,
  ...props
}) => {

  const rootClasses = {
    [classes.root]: true,
    [classes.primaryAction]: styleType === 'primaryAction',
    [classes.secondaryAction]: styleType === 'secondaryAction'
  }

  return (
    <button className={classnames(rootClasses, className)} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  )

}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  styleType: PropTypes.oneOf([
    'primaryAction',
    'secondaryAction'
  ]),
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
}

Button.defaultProps = {
  tabIndex: 0,
  disabled: false
}

export default injectSheet(styles)(Button)
