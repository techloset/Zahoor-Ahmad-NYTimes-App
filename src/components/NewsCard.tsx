interface NewsCardProps {
  imageSourse: string;
  title: string;
  description: string;
  imageAlternative: string;
}

const NewsCard = ({
  imageSourse,
  title,
  description,
  imageAlternative,
}: NewsCardProps) => {
  return (
    <div>
      <img src={imageSourse} alt={imageAlternative} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsCard;
