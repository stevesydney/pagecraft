import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import Button from './Button';

const styleTypes = {
  None: null,
  'Primary Action': 'primaryAction',
  'Secondary Action': 'secondaryAction'
}

const stories = storiesOf('Atoms/Buttons', module)
stories.addDecorator(withKnobs)

stories.add(
  'Action',
  () => (
    <Button
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      styleType={selectV2('Style type', styleTypes, 'None')}
    >
      {text('Label', 'Button')}
    </Button>
  )
)