const isJson = (json: string) => {
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }
};

export default isJson;
