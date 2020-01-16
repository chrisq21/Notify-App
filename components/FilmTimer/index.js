import React from "react"
import {
  ProgressViewIOS,
  View,
  Button,
  Text,
  Vibration,
} from "react-native"
import { Notifications } from "expo"
import * as Permissions from "expo-permissions"
import { default as mockLocalNotificationData } from "../../lib/data/localNotification"

class FilmTimer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filmDuration: 0.0,
      hasNotificationPermissions: false,
      didUnmount: false,
    }

    this.handleStartTimerPress = this.handleStartTimerPress.bind(this)
  }

  async componentDidMount() {
    this.requestNotificationPermissions()
  }

  componentWillUnmount() {
    this.setState({ didUnmount: true })
  }

  async requestNotificationPermissions() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (result.status === "granted") {
      if (!this.state.hasNotificationPermissions)
        this.setState({ hasNotificationPermissions: true })
    }
  }

  handleStartTimerPress() {
    this.scheduleNotifications()
  }

  getNotificationTime(notificationTimeMS) {
    // TODO Move to helper function and test
    return new Date().getTime() + notificationTimeMS * 1000
  }

  scheduleNotifications() {
    const { navigation } = this.props
    const notificationArray = navigation.getParam("notifications", [])
    notificationArray.map(notification => {
      this.scheduleNotification(notification.notificationTime)
    })
  }

  async scheduleNotification(notificationTimeMS) {
    const schedulingData = {
      time: this.getNotificationTime(notificationTimeMS),
    }
    try {
      await Notifications.scheduleLocalNotificationAsync(
        mockLocalNotificationData,
        schedulingData
      )
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { hasNotificationPermissions } = this.state
    const { navigation } = this.props
    const title = JSON.stringify(navigation.getParam("title", ""))

    return (
      <View>
        <Text>{title}</Text>
        {!hasNotificationPermissions && (
          <Text>No notification permssions accepted</Text>
        )}
        {hasNotificationPermissions && (
          <>
            <Button
              title="Start Timer"
              onPress={this.handleStartTimerPress}
            />
            <ProgressViewIOS progress={this.state.filmDuration} />
          </>
        )}
      </View>
    )
  }
}

export default FilmTimer
