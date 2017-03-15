import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import marked from 'marked';
import HTMLView from 'react-native-htmlview';
import axios from 'axios';
import LoadingView from './LoadingView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class MarkdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.getMarkdown = this.getMarkdown.bind(this);
    this.state = {markDownData: null, loaded: false};
  }

  static route = {
    navigationBar: {
     title: "Whats New",
    }
  }

  componentDidMount() {
    this.getMarkdown(this.props.userLink);
  }

  getMarkdown(link) {
    axios.get(link)
      .then((markdownData) => {
        this.setState({markdownData: marked(markdownData.data), loaded: true});
      })
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingView />
    }
    return (
      <View style={styles.container}>
        <HTMLView
          value={this.state.markdownData}
        />
      </View>
    )
  }
}

export default MarkdownPage;
