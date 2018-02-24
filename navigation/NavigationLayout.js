import React, { Component } from 'react';
import {Stylesheet, Text} from 'react-native';
import { StackNavigation,TabNavigation, TabNavigationItem as TabItem,} from '@expo/ex-navigation';
import Icon from 'react-native-ionicons';
import Router from './router.js';

import HomeScreen from '../scenes/Home/HomeScreen';
import ProfileScreen from '../scenes/Profile/ProfileScreen';
import EventsScreen from '../scenes/Events/EventsScreen';
import ConnectionsScreen from '../scenes/Connections/ConnectionsScreen';

  
  export default class NavigationLayout extends React.Component {
    static route = {
      navigationBar: {
        visible: false,
      }
    }

    renderIcon(iconName, isSelected) {
        let color = isSelected ? '#ffffff' : '#999999' ;
        return(
            <Icon name ={iconName} size = {24} color={color} />
        )
    };

    renderTitle(isSelected, title){
        let color = isSelected ? '#ffffff' : '#999999' ;
        let titleStyle = {
            color: color,
            fontSize: 10 
        }
        return (
            <Text style ={titleStyle}> {title} </Text>
        )
    };
  
    render() {
      return (
        <TabNavigation
          id="main"
          navigatorUID="main"
          initialTab="home">

          <TabItem
            id="home"
            title="Home"
            selectedStyle={styles.selectedTab}
            renderTitle={this.renderTitle}
            renderIcon={(isSelected) => this.renderIcon('ios-home', isSelected)}>
            <StackNavigation
              id="home"
              navigatorUID="home"
              initialRoute={Router.getRoute('home')}
            />
          </TabItem>
  

          <TabItem
            id="events"
            title="Events"
            selectedStyle={styles.selectedTab}
            renderTitle={this.renderTitle}
            renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected)}>
            <StackNavigation
              id="events"
              initialRoute={Router.getRoute('events')}
            />
          </TabItem>

          <TabItem
            id="connections"
            title="Connections"
            selectedStyle={styles.selectedTab}
            renderTitle={this.renderTitle}
            renderIcon={(isSelected) => this.renderIcon('ios-people', isSelected)}>
            <StackNavigation
              id="connections"
              initialRoute={Router.getRoute('connections')}
            />
          </TabItem>
  
          <TabItem
            id="profile"
            title="Profile"
            selectedStyle={styles.selectedTab}
            renderTitle={this.renderTitle}
            renderIcon={(isSelected) => this.renderIcon('ios-person', isSelected)}>
            <StackNavigation
              id="profile"
              initialRoute={Router.getRoute('profile')}
            />
          </TabItem>
        </TabNavigation>
      );
    }
  }

  const styles = ({
    tabItem: {
      backgroundColor: 'black',
    },
    selectedTab: {
        backgroundColor: '#1f7a7a',
    },

  });