import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import marked from 'marked';
import HTMLView from 'react-native-htmlview';
import axios from 'axios';

import LoadingView from './LoadingView';
import AppleView from './AppleView';
import AndroidView from './AndroidView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class MarkdownPage extends Component {
  static route = {
    navigationBar: {
      title: 'Whats New',
    },
  }

  constructor(props) {
    super(props);

    this.getMarkdown = this.getMarkdown.bind(this);
    this.renderProperView = this.renderProperView.bind(this);
    this.state = {markDownData: null, loaded: false};
    console.log('props', this.props);
  }
  componentDidMount() {
    if (this.props.markdownLink !== undefined) {
      this.getMarkdown(this.props.markdownLink);
    }
  }

  getMarkdown(link) {
    axios.get(link)
      .then((markdownData) => {
        this.setState({markdownData: marked(markdownData.data), loaded: true});
      })
  }

  renderProperView() {
    if (this.props.operatingSystem === 'iOS' && this.props.appId !== undefined) {
      return <AppleView appId="284910350" />
    } else if (this.props.operatingSystem === 'android' && this.props.appId !== undefined) {
      return <AndroidView appId="284910350" />
    }
    return null
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingView />
    }
    return (
      <View style={styles.container}>
        {
          this.props.operatingSystem !== undefined
          ? this.renderProperView()
          : <HTMLView value={this.state.markdownData} />}
      </View>
    )
  }
}

export default MarkdownPage;
