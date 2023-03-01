import { ComponentStory } from "@storybook/react";
import React from "react"
import Btn from '../components/Btn'


export default {
    title: "myComponents/Btn",
    component: Btn,
    argTypes: { handleClick: {action: 'handleClick has been triggered'}}
}

const Template: ComponentStory<typeof Btn> = args => <Btn {...args} />


export const red = Template.bind({})
red.args = {
    bg: 'red',
    text: 'something',
    col: 'black'
}


export const blue = Template.bind({})
blue.args = {
    bg: 'blue',
    text: 'something',
    col: 'black'
}

export const green = Template.bind({})
green.args = {
    bg: 'green',
    text: 'something',
    col: 'black'
}


