import React from 'react';

import ThemeContext from './ThemeContext';

class App extends React.Component {
  render() {
    return (
      <div>
        <Headline>Hello React</Headline>

        <Paragraph>
          That's how you would use children in React
        </Paragraph>

        <SubHeadlineWithContext>
          Children and Context
        </SubHeadlineWithContext>
      </div>
    );
  }
}

// (Functional Sateless Component) Context Consumer

function Headline(props) {
  return (
    <ThemeContext.Consumer>
      {coloredTheme =>
        <h1 style={{ color: coloredTheme }}>
          {props.children}
        </h1>
      }
    </ThemeContext.Consumer>
  );
}

// (ES Class Component) Context Consumer

class Paragraph extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {coloredTheme =>
          <p style={{ color: coloredTheme }}>
            {this.props.children}
          </p>
        }
      </ThemeContext.Consumer>
    );
  }
}

// HOC as Context Consumer (1)

const getContext = Component =>
  class GetContext extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {coloredTheme => <Component { ...this.props } coloredTheme={coloredTheme} />}
        </ThemeContext.Consumer>
      );
    }
  }

// Component using the HOC (1) to consume context

function SubHeadline(props) {
  return (
    <h2 style={{ color: props.coloredTheme }}>
      {props.children}
    </h2>
  );
}

const SubHeadlineWithContext = getContext(SubHeadline);

export default App;
