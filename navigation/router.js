import { createRouter } from '@expo/ex-navigation';
import Layout from './NavigationLayout.js';
import HomeScreen from '../scenes/Home/HomeScreen.js';
import ProfileScreen from '../scenes/Profile/ProfileScreen.js';
import EventsScreen from '../scenes/Events/EventsScreen.js';
import ConnectionsScreen from '../scenes/Connections/ConnectionsScreen.js';


  export default  Router = createRouter(() => ({
    layout: () => Layout,
    home: () => HomeScreen,
    profile: () => ProfileScreen ,
    events:() => EventsScreen,
    connections: () => ConnectionsScreen,
  }));