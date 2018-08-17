import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { THEME } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: THEME.BACKGROUND,
  },
});

function Container(props) {
  return (
    <View style={[styles.container, props.padding ? { padding: 20 } : {}]}>
      {props.children}
    </View>
  );
}

Container.propTypes = {
  padding: PropTypes.bool,
};

Container.defaultProps = {
  padding: false,
};

export default Container;
