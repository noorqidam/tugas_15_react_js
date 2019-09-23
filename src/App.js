import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid, Container, Header, Icon, Label, Feed, Table, Menu, Comment, Search, Image, Form, Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right" colSpan='2'><Search placeholder='Search Document...' /></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nama document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
        <br />
        <Grid container>
          <Grid.Column width={12}>
            <Comment.Group>
              <Header as='h3' dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Satria</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>Hallo...!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Danang</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:50AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Kerjakan Sesuatu Semampu Kamu...</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Ricky</Comment.Author>
                      <Comment.Metadata>
                        <div>1 days ago</div>
                      </Comment.Metadata>
                      <Comment.Text>Kmu Sekarang Dimana Danang ? </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Joe</Comment.Author>
                  <Comment.Metadata>
                    <div>1 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                <Feed.Date>3 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      4 Likes
                </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra text>Saya Senang Belajar Pemrograman</Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Extra text>David added 2 new Image</Feed.Extra>
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a href='/'><Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /></a>
                    <a href='/'><Image src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' /></a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      2 Likes
                </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid>
      </div >
    );
  }
}

export default App;

