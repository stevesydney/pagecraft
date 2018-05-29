import config from 'config.styles'

export default {
  root: {
    padding: 0,
    appearance: 'none',
    borderWidth: 0
  },
  primaryAction: {
    color: config.color.grey9,
    backgroundColor: config.color.indigo3,
    border: `1px solid ${config.color.indigo3}`,
    borderRadius: 4,
    padding: '7px 14px',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.91
  },
  secondaryAction: {
    color: config.color.indigo3,
    backgroundColor: 'transparent',
    border: `1px solid ${config.color.indigo3}`,
    borderRadius: 4,
    padding: '7px 14px',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.91
  }
}