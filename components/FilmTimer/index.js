import React from "react";
import { ProgressViewIOS, View, Button, Text, Vibration } from "react-native";

class FilmTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmDuration: 0.0,
      demoTargetText: "Target percentage not yet reached",
      didUnmount: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentWillUnmount() {
    this.setState({ didUnmount: true });
    this.stopTimer();
  }

  componentDidUpdate() {
    const { filmDuration, demoTargetText } = this.state;
    const targetTime = 15;
    if (
      filmDuration >= targetTime / 100 &&
      demoTargetText !== "Reached target percentage. Start vibration"
    ) {
      const PATTERN = [600, 600, 600];
      Vibration.vibrate(PATTERN);
      this.setState({
        demoTargetText: "Reached target percentage. Start vibration"
      });
    }
  }

  startTimer() {
    const { navigation } = this.props;
    const { didUnmount } = this.state;
    const totalSeconds = JSON.stringify(
      navigation.getParam("totalSeconds", 0.0)
    );
    const incrementer = 1 / totalSeconds;
    this.interval = setInterval(() => {
      if (!didUnmount) {
        this.setState({ filmDuration: this.state.filmDuration + incrementer });
      }
    }, 1000);
  }

  stopTimer() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    const { demoTargetText, filmDuration } = this.state;
    const { navigation } = this.props;
    const title = JSON.stringify(navigation.getParam("title", ""));
    const totalSeconds = JSON.stringify(
      navigation.getParam("totalSeconds", 0.0)
    );
    const percentage = filmDuration * 100;
    return (
      <View>
        <Text>{title}</Text>
        <Text>Total time: {totalSeconds} seconds</Text>
        <Text>Target Vibration percentage: 15%</Text>
        <Text>Percentage complete: {percentage}%</Text>
        <Text>{demoTargetText}</Text>
        <Button title="Start Timer" onPress={this.startTimer} />
        <Button title="Stop Timer" onPress={this.stopTimer} />
        <ProgressViewIOS progress={this.state.filmDuration} />
      </View>
    );
  }
}

export default FilmTimer;
