import React from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
    trackMouse: true,
  });

  return (
    <div className='row' {...handlers}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.array,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
