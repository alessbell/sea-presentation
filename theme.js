import React from 'react'
import theme, { Provider, GithubIcon } from 'mdx-deck-theme-garlic'

const config = {
  // eslint-disable-next-line react/display-name
  logo: () => <GithubIcon />,
  logoUrl: 'https://github.com/alessbell/sea-presentation',
  author: 'aless.co/sea-slides',
  authorUrl: 'https://aless.co/sea-slides',
}

const wrapper = props => <Provider {...props} {...config} />

export default {
  ...theme,
  Provider: wrapper,
}