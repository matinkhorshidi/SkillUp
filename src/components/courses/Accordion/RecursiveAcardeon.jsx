import React from 'react';
import Accordion from './Accordion';

class RecursiveAcardeon extends React.Component {
  constructListItem = (item) => {
    if (item.nestedItems) {
      return (
        <List key={item.key}>
          {item.nestedItems.map(this.constructListItem)}
        </List>
      );
    } else {
      return <ListItem key={item.key} item={item} />;
    }
  };
  render() {
    const { filarray } = this.props;
    return <Accordion>{filarray.map(this.constructListItem)}</Accordion>;
  }
}

export default RecursiveAcardeon;
