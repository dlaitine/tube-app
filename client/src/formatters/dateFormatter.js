const dateFormatter = date => {

  const formattedDate = date.match(/.+?(?=T)/);
  return formattedDate;
}

export default dateFormatter;