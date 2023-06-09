const converter = value => {
  const dateString = value;
  const date = new Date(dateString);
  const currentDate = new Date();

  const timeDiffInMilliseconds = currentDate.getTime() - date.getTime();
  const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000);

  let formattedDate;

  if (timeDiffInSeconds < 60) {
    formattedDate = `${timeDiffInSeconds} seconds ago`;
  } else if (timeDiffInSeconds < 3600) {
    const minutes = Math.floor(timeDiffInSeconds / 60);
    formattedDate = `${minutes} minutes ago`;
  } else if (timeDiffInSeconds < 86400) {
    const hours = Math.floor(timeDiffInSeconds / 3600);
    formattedDate = `${hours} hours ago`;
  } else {
    const days = Math.floor(timeDiffInSeconds / 86400);
    formattedDate = `${days} days ago`;
  }

  return formattedDate;
};

export {converter};
