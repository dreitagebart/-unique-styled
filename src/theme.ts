export default interface ITheme {
  root?: {
    primaryColor?: string
    secondaryColor?: string
    fontFamily?: string
    color?: string
  }
  badge?: {
    attached?: {
      size?: string
    }
    fontSize?: string
    padding?: string
    margin?: string
    primary?: {
      color?: string
      backgroundColor?: string
    }
    secondary?: {
      color?: string
      backgroundColor?: string
    }
    default?: {
      color?: string
      backgroundColor?: string
    }
  }
  sidebar?: {
    backgroundColor?: string
    color?: string
  }
  message?: {
    borderRadius?: string
    borders?: {
      error?: string
      success?: string
      warning?: string
      information?: string
    }
    colors?: {
      error?: string
      success?: string
      warning?: string
      information?: string
    }
    backgroundColors?: {
      error?: string
      success?: string
      warning?: string
      information?: string
    }
    padding?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
    margin?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
  }
  button?: {
    boxShadow?: string
    borderBottom?: {
      primary?: string
      secondary?: string
      default?: string
    }
    borderRadius?: number
    defaultColor?: string
    primaryColor?: string
    secondaryColor?: string
    padding?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
    margin?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
    hover?: {
      boxShadow?: string
      defaultColor?: string
      primaryColor?: string
      secondaryColor?: string
    }
    active?: {
      top?: number
      boxShadow?: string
    }
  }
  panel?: {
    padding?: string
    color?: string
    borderRadius?: number
  }
  tooltip?: {
    borderRadius?: number
    backgroundColor?: string
    color?: string
  }
  link?: {
    color?: string
    fontFamily?: string
    weight?: string
    decoration?: string
  }
  heading?: {
    backgroundColor?: string
    color?: string
  }
  avatar?: {
    color?: string
    backgroundColor?: string
  }
  input?: {
    color?: string
    backgroundColor?: string
  }
  icon?: {
    color?: string
    backgroundColor?: string
  }
}
