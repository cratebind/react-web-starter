# Cratebind React Starter Template

1.  [Javascript Style Guide](#style)
2.  [State Containers](#state-containers)
3.  [CSS](#CSS)
4.  [Testing](#testing)

## Style

For the most part, follow the [AirBNB Javascript Style Guide](https://github.com/airbnb/javascript). We've disabled a few rules in our `.eslintrc` file, but when in doubt defer to their guide.

## Components

### Best Practices
- Stateless components should be functional and not extend from React class. Stateless functional components should try to deconstruct all variables before returning JSX

```jsx
// Bad
class Pizza extends React.Component {
  render() {
    return <div>{this.props.price}</div>
  }
}

// Good
const Pizza = (props) => {
  // Deconstruct variables before returning JSX
  const { price } = props;
  return <div>{price}</div>
}
```

- Prefer to use Axios for API requests because it's cleaner than `Fetch` and is an extremely small library
```js
axios.get('https://api.pizza.com/all')
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    throw new Error(error);
  });
```

- Try to use Async / Await in place of promise / `.then` chains whenever possible.
```jsx
class Pizza extends React.Component {
  componentDidMount = async () => {
    // Order pizza
    try {
      const order = await axios.post('https://api.pizza.com/order', {
        toppings: ['Pepperoni', 'Sausage', 'Onions']
      });
    } catch (error) {
      alert('Something terrible has happened with your order');
      throw new Error(error);
    }
  }
}

```

## State Containers
### (Redux, Mobx, Context API, etc)

This template comes without a state container on purpose. State containers should only be added to projects that have highly nested state. In those cases, try to use the [Context API](https://www.youtube.com/watch?v=XLJN4JfniH4) because it's built into React and more standardized. In most cases try to avoid relying on Redux as it creates a lot of boilerplate code and API requests get messy quickly.

## CSS

Prefer to use [styled components](http://styled-components.com/) to help keep components self-contained. When creating a custom component that you intend to style, wrap it in a styled component `div`.

```jsx
import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: red;
  padding: 8px 14px;
`;

const Button = props => {
  return <StyledButton>{props.text}</StyledButton>;
};
```

## Testing

All components should have unit tests using Jest.

## Text Editor

Settings for VS Code are provided by default. These include helpful format-on-save features using ES Lint and Prettier. They can be turned off if preferred, but are strongly encouraged as they help keep code formatted and standard across projects.

## Git Hooks
TODO