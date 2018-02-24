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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#33cccc',
    height: '80%',
  },
  innerContainer: {
    alignItems: 'center',
  },
  regInput:{
    height: 30, 
    width:300, 
    margin:10, 
    padding:5, 
    borderWidth: 1, 
    borderColor: "rgba(0,0,0,0.5)",
    backgroundColor:'#adebeb',
  },
  multiInput:{
    height: 150, 
    width:300, 
    margin:10,
    padding:5,  
    borderWidth: 1, 
    borderColor: "rgba(0,0,0,0.5)", 
    backgroundColor:'#adebeb',
  },
})

module.exports = styles
module.exports.constants = constants;

