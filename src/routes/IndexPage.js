import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button,Input, Form, Grid, Header, Icon, Checkbox, Table, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';



class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {
      item: '',
    };
  }

  render() {
    const children = this.props;
    const Children = children.list.map((child, index)=>
      <Table.Row className={styles.item}  key={index}>
        <Table.Cell>
          <Checkbox
            className={(child.status ? styles.check : styles.noncheck)}
            checked={child.status}
            label={child.name}
            onChange={(e) => {
              children.dispatch({ type: 'example/check', index, value: !child.status });
            }}
          />
        </Table.Cell>
        <Table.Cell>
        <Button
          icon
          floated = 'right'
          onClick = {() => {children.dispatch({ type: 'example/delete', index });
          }}
        ><Icon name='close' size='tiny' /></Button></Table.Cell>
      </Table.Row>
    )
    return (
      <Grid className={styles.layout}
        textAlign='center'>
        <Grid.Column className={styles.column}>
          <Header as='h2' color='teal' textAlign='center' >
            Todo List
          </Header>
          <Input className={styles.input}
            value={this.state.item}
            placeholder="Enter the todo task..."
            onChange={(e) => { this.setState({ item: e.target.value }); }}
          />
          <Button
            primary
            disabled={this.state.item === ''}
            icon
            onClick={() => {
              children.dispatch({ type: 'example/add', item: { name: this.state.item, status: false } });
              this.setState({ item: '' });
            }}
          ><Icon name='plus' size='small' /> Add</Button>
          <Table>
            {Children}
          </Table>
        </Grid.Column>
      </Grid >
    );
  }

}


function mapStateToProps(state) {
  return {
    list: state.example.list,
  };
}

export default connect(mapStateToProps)(IndexPage);
