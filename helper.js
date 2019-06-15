function is200(data) {
  if (data.status == "200") {
    return data;
  } else return null;
}
module.exports = is200;
