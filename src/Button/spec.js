import React from 'react'
import { mount } from 'enzyme'
import Button from './'

describe('<Button/>', () => {
    it('renders without crashing', () => {
        const component = mount(<Button>My Button</Button>)
        expect(component.text()).toBe('My Button')
    })
})
