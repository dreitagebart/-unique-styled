import { IThemeInterface } from './'

const theme: IThemeInterface = {
  panel: {
    padding: '24px',
    color: '#333',
    borderRadius: 8
  },
  badge: {
    attached: { size: '12px' },
    fontSize: '0.9em',
    margin: '0 8px',
    padding: '4px',
    primary: {
      color: '#efefef',
      backgroundColor: '#ad2102'
    },
    secondary: {
      color: '#efefef',
      backgroundColor: '#7cb305'
    },
    default: {
      color: '#efefef',
      backgroundColor: '#666'
    }
  },
  message: {
    borderRadius: '8px',
    borders: {
      error: '0.5px solid #a8071a',
      success: '0.5px solid #237804',
      warning: '0.5px solid #ad6800',
      information: '0.5px solid #0050b3'
    },
    colors: {
      error: '#a8071a',
      success: '#237804',
      warning: '#ad6800',
      information: '#0050b3'
    },
    backgroundColors: {
      error: '#ffa39e',
      success: '#b7eb8f',
      warning: '#ffe58f',
      information: '#bae7ff'
    },
    padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  },
  sidebar: {
    color: '#efefef',
    backgroundColor: '#333'
  },
  button: {
    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.2)',
    borderBottom: {
      primary: '4px solid #610b00',
      secondary: '4px solid #254000',
      default: '4px solid #595959'
    },
    borderRadius: 8,
    defaultColor: '#a0a0a0',
    primaryColor: '#ad2102',
    secondaryColor: '#7cb305',
    padding: {
      top: 8,
      bottom: 8,
      right: 12,
      left: 12
    },
    margin: {
      top: 8,
      bottom: 8,
      right: 12,
      left: 12
    },
    hover: {
      defaultColor: '#999',
      primaryColor: '#871400',
      secondaryColor: '#5b8c00',
      boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.2)'
    },
    active: {
      top: 2,
      boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.4)'
    }
  },
  tooltip: {
    borderRadius: 8,
    backgroundColor: '#333',
    color: '#efefef'
  },
  root: {
    primaryColor: '#d4380d',
    secondaryColor: '#d4380d',
    fontFamily: 'Roboto, sans-serif',
    color: '#333'
  },
  link: {
    color: '#999',
    fontFamily: 'inherit',
    weight: 'bold',
    decoration: 'none'
  }
}

export default theme
