export const formatTimeDifference = (publishedDate: string): string => {
  const currentTime: Date = new Date();
  const articleTime: Date = new Date(publishedDate);

  const timeDifferenceInMilliseconds: number =
    currentTime.getTime() - articleTime.getTime();
  const timeDifferenceInHours: number = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60)
  );

  return `${timeDifferenceInHours} hours ago`;
};
