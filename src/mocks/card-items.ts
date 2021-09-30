export interface CardItem {
  title: string
  isFlipped: boolean
  wasFound: boolean
  icon: string
  unique?: string
  style: { width: string, marginTop?: string }
}

export default <CardItem[]>[
  {
    title: 'React',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/react.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'Vue',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/vue.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'Svelte',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/svelte.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'Laravel',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/laravel.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'TypeScript',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/typescript.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'JavaScript',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/javascript.svg'),
    style: {
      width: '80px',
      marginTop: '20px'
    }
  },
  {
    title: 'PHP',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/php.svg'),
    style: {
      width: '100px'
    }
  },
  {
    title: 'NodeJS',
    isFlipped: false,
    wasFound: false,
    icon: require('@/assets/card-icons/nodejs.svg'),
    style: {
      width: '100px'
    }
  }
]
