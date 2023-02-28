import React from "react"
import Btn from '../components/Btn'


export default {
    title: "Btn",
    component: Btn
}

interface Args {
    bg: string;
    text: string;
    col: string;
}

const Template = (args: Args) => <Btn {...args} />

export const myBtn = Template.bind({})

//@ts-ignore
myBtn.args = {
    bg: 'red',
    text: 'something',
    col: 'blue'
}

