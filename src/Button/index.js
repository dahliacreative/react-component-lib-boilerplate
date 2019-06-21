import React from 'react'
import { css } from '@emotion/core'

const styles = css`
    border: none;
    background-color: #ff2f4c;
    color: #fff;
`

const Button = props => <button css={styles}>{props.children}</button>

export default Button
