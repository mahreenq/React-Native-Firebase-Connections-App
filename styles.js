import React, { StyleSheet, Dimensions,} from 'react-native';
const constants = {
  actionColor: '#24CE84'
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6f5f5',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#d6f5f5',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    flex:2
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: '#33cccc',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  eventsli:{
    backgroundColor: '#fff',
    borderBottomColor: '#d6f5f5',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flex:1,
    flexDirection:'row',
  },
  eventsliText:{
    color: '#1f7a7a',
    fontSize: 16,
    flex:2,
    paddingBottom: 2,
  },
  eventDateTime:{
    color: 'grey',
    fontSize:11,
    paddingRight:5,
  },
  eventDescText:{
    fontSize:13,
  },
  loginInputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: 'black',
    fontSize: 18,
    fontWeight: '200',
    flex: 1,
    height: 150,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft:20,
},
loginContainer: {
    height: 60,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    borderColor: 'gray',
    margin:15,
},
    roundedProfileImage: {
      width:80, 
      height:80, 
      borderWidth:2,
      borderColor:'white', 
      borderRadius:40
    },
    connectionsli:{
      backgroundColor: '#2eb8b8',
      borderBottomColor: '#fff',
      borderTopColor: '#fff',
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 14,
      paddingBottom: 16,
      flex:1,
      flexDirection:'row',
      alignItems:'center',
    },

})

 module.exports = styles;
 module.exports.constants = constants;

