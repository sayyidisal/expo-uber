import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/lib';

const TouchIcon = ({ icon, iconSize, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={[gStyle.flexCenter, style]}
  >
    {React.cloneElement(icon, { size: iconSize })}
  </TouchableOpacity>
);

TouchIcon.defaultProps = {
  iconSize: 24,
  style: {}
};

TouchIcon.propTypes = {
  // required
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default TouchIcon;
