export function createSuccessResponse(data, message) {
  if (data === undefined && message === undefined) throw new Error('"data" or "message" must be defined when calling createSuccessResponse.');
  return {
    status: 'success',
    message,
    data: data && data.data
      ? data.data
      : (data) || {},
  };
}

export function createErrorResponse(error, message, data) {
  const json = {
    status: 'error',
  };

  if (message) {
    json.message = message;
  } else {
    json.message = error.message;
  }

  if (data) {
    json.data = data;
  } else if (error.data) {
    json.data = error.data;
  }
  return json;
}
