export function apiError(statusCode, message) {
  return {
    statusCode: statusCode,
    message: message,
  };
}

export function apiResponse(statusCode, message, data) {
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
}
