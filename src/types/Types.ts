export type ArticleSearchType = {
  _id: string;
  abstract: string;
  multimedia: {
    url: string;
    crop_name: string;
  }[];
  headline: {
    main: string;
  };
  pub_date: string;
  byline: {
    original: string;
  };
};

export type NewsProps = {
  _id: string;
  headline: string;
  description?: string;
  imageSource?: string;
  pubishedAt?: string;
  byLine: string;
  imageAlternative?: string;
};

export type TopNewsType = {
  _id: string;
  title: string;
  abstract: string;
  multimedia: { url: string; format: string }[];
  published_date: string;
  byline: string;
};
