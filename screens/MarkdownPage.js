import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Markdown from 'react-native-simple-markdown'
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class MarkdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.getMarkdown = this.getMarkdown.bind(this);
    this.renderLoadingView = this.renderLoadingView.bind(this);
    this.state = {markDownData: null, loaded: false};
  }

  static route = {
    navigationBar: {
     title: "Whats New",
    }
  }

  componentDidMount() {
    this.getMarkdown(this.props.markDownLink);
  }

  getMarkdown(link) {
    axios.get(link)
      .then((markdownData) => {
        this.setState({markdownData: markdownData.data, loaded: true});
        console.log('state', this.state.markdownData);
      })
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading What's New...
        </Text>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.container}>
        <Markdown>{this.state.markdownData}</Markdown>
      </View>
    )
  }
}

export default MarkdownPage;
