import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import marked from 'marked';
import HTMLView from 'react-native-htmlview';
import RNFS from 'react-native-fs';

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
    this.count = 0;
    this.getMarkdown = this.getMarkdown.bind(this);
    this.renderProperView = this.renderProperView.bind(this);
    this.noUserLinkSubmitted = this.noUserLinkSubmitted.bind(this);
    this.state = {markDownData: null, loaded: false};
    this.readLocalMDFileIOS = this.readLocalMDFileIOS.bind(this);
    this.readLocalMDFileAndroid = this.readLocalMDFileAndroid.bind(this);
    // console.log('props', this.props);
  }
  componentDidMount() {
    if (this.props.markdownLink !== undefined) {
      this.getMarkdown(this.props.markdownLink);
    } else if (this.props.markdownLink === undefined && this.props.operatingSystem !== undefined) {
      this.noUserLinkSubmitted();
    }
  }

  getMarkdown(link) {
    axios.get(link)
      .then((markdownData) => {
        this.setState({markdownData: marked(markdownData.data), loaded: true});
      })
  }

  readLocalMDFileAndroid() {
    RNFS.readFileAssets('CHANGELOG.md', 'ascii')
      .then((contents) => {
        this.setState({markDownData: marked(contents)})
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }

  readLocalMDFileIOS() {
    RNFS.readFile('/Users/Loren1/Code/netBeast/markdownViewer/markdownFiles/CHANGELOG.md', 'ascii')
      .then((contents) => {
        this.setState({markDownData: marked(contents)})
      })
      .catch((err) => {
        console.warn(err.message);
      })
  }

  noUserLinkSubmitted() {
    this.setState({loaded: true});
  }

  renderProperView() {
    // console.log('in function', this.props);
    if (this.props.operatingSystem === 'iOS' && this.props.markdownLink === undefined) {
      console.log('in if');
      return <AppleView appId="284910350" readMD={this.readLocalMDFileIOS} mdData={this.state.markDownData} />
    } else if (this.props.operatingSystem === 'android') {
      return <AndroidView appId="284910350" readMD={this.readLocalMDFileAndroid} mdData={this.state.markDownData} />
    }
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingView />
    }
    return (
      <View style={styles.container}>
        {
          this.props.operatingSystem !== undefined && this.state.markdownData === undefined
          ? this.renderProperView()
          : <HTMLView value={this.state.markdownData} />
        }
      </View>
    )
  }
}

export default MarkdownPage;
