const formatValidationErrors = (errorsArray) => {
  return errorsArray.reduce((acc, error) => {
    const fieldName = error.path || 'unknown';
    if (!acc[fieldName]) {
      acc[fieldName] = [];
    }
    acc[fieldName].push(error.msg);
    return acc;
  }, {});
};

module.exports = formatValidationErrors;
