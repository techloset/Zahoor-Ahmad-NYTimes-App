export default interface BreakingNewsType {
  _id: string;
  title: string;
  abstract: string;
  url: string;
  multimedia: { url: string; format: string }[];
  published_date: string;
  byline: string;
}