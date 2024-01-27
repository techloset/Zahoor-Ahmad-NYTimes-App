export default interface ArticleSearchType {
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
  web_url: string;
}
