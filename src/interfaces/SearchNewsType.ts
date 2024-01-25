export default interface SearchNewsType {
  abstract: string;
  multimedia: {
    url: string;
    crop_name: string;
  }[];
  headline: {
    main: string;
  };
  pub_date: string;
  byline:{
    original: string;
  };
  
}
