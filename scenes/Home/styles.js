const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6f5f5',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
})

module.exports = styles
module.exports.constants = constants;
