import React from 'react'
import Input from './Input'

export default {
  title: 'Example/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const TextField = Template.bind({})
TextField.args = {
  type: 'text',
  placeholder: 'Textfield placeholder...',
  label: 'Text Field',
  id: 'textfield',
}

export const PasswordField = Template.bind({})
PasswordField.args = {
  type: 'password',
  placeholder: 'Textfield placeholder...',
  label: 'Text Field',
  id: 'textfield',
  value: 'Doni1234',
}
