const timeFormatter = duration => {

  let hours = duration.match(/(?:\d+)(?=H)/);
  let minutes = duration.match(/(?:\d+)(?=M)/);
  let seconds = duration.match(/(?:\d+)(?=S)/);

  if(hours) {
    hours = ('0' + hours).slice(-2);
  }

  if(minutes) {
    minutes = ('0' + minutes).slice(-2);
  }

  if(seconds) {
    seconds = ('0' + seconds).slice(-2);
  }

  const formattedDuration = [ hours, minutes, seconds ].filter(Boolean).join(":");

  return formattedDuration;
}

export default timeFormatter;