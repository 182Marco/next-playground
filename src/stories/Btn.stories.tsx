import React from "react"
import Btn from '../components/Btn'


export default {
    title: "myComponents/Btn",
    component: Btn
}

interface Args {
    bg: string;
    text: string;
    col: string;
    size: 's' | 'm' | 'l'
}

const Template = (args: Args) => <Btn {...args} />

export const myBtn = Template.bind({})

//@ts-ignore
myBtn.args = {
    bg: 'red',
    text: 'something',
    col: 'blue'
}

