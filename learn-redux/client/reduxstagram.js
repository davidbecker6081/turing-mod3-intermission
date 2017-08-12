import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'
import Main from './components/Main'
var gi = require('gitignore');

render(<Main/>, document.getElementById('root'))
