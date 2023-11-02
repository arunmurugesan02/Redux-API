const countActions = {
  INCREMENT_LOADING: 'INCREMENT_LOADING',
  INCREMENT_SUCCESS: 'INCREMENT_SUCCESS',
  INCREMENT_ERROR: 'INCREMENT_ERROR',
  DECREMENT_LOADING: 'DECREMENT_LOADING',
  DECREMENT_SUCCESS: 'DECREMENT_SUCCESS',
  DECREMENT_ERROR: 'DECREMENT_ERROR',
};

const incrementLoading = (payload = null) => {
  return {
    type: countActions.INCREMENT_LOADING,
    payload,
  };
};

const incrementSuccess = response => {
  return {
    type: countActions.INCREMENT_SUCCESS,
    response,
  };
};

const incrementError = error => {
  return {
    type: countActions.INCREMENT_ERROR,
    error,
  };
};

const decrementLoading = payload => {
  return {
    type: countActions.DECREMENT_LOADING,
    payload,
  };
};

const decrementSuccess = response => {
  return {
    type: countActions.DECREMENT_SUCCESS,
    response,
  };
};

const decrementError = error => {
  return {
    type: countActions.DECREMENT_ERROR,
    error,
  };
};

export {
  incrementLoading,
  incrementSuccess,
  incrementError,
  decrementLoading,
  decrementSuccess,
  decrementError,
};
export default countActions;
