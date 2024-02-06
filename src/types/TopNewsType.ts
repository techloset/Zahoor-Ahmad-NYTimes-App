export default interface TopNewsType {
  _id: string;
  title: string;
  abstract: string;
  multimedia: { url: string; format: string }[];
  published_date: string;
  byline: string;
}
