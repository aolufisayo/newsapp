import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TabBarIcon = (props) => {

  return (
    <Icon
      name={props.name}
      size={props.size}
      style={{ marginBottom: -3 }}
      color={props.color}
    />
  )

}

export default TabBarIcon;