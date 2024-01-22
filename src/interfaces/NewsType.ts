export default interface NewsProps {
  _id: string;
  headline: string;
  description?: string;
  imageSource?: string;
  pubishedAt?: string;
  url?: string;
  byLine: string;
  imageAlternative?: string;
}