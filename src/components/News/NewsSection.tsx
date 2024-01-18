import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface ArticleProps {
  _id: string;
  abstract: string;
  byLine: {
    original: string;
  };
  headline: {
    main: string;
  };
  lead_paragraph: string;
  web_url: string;
  multimedia: {
    url: string;
  };
  pub_date: string;
}
export default function NewsSection() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  useEffect(() => {
    console.log("NewsSection");
    const fetchNews = async () => {
      const response = await fetch(
        // `https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=g5w08PXd2Id8U1hqCGztsUCeqtqJzAKh`
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=g5w08PXd2Id8U1hqCGztsUCeqtqJzAKh"
        //`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.API_KEY}}`
      );
      const data = await response.json();
      console.log(data.response.docs);
      setArticles(data.response.docs);
    };
    fetchNews();
  }, []);
  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] ">
      <h3 className="font-bold text-3xl text-center">News Section</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px] ">
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <NewsCard
          _id="1"
          byLine="Zahoor Ahmad"
          headline="John Lewis, civil rights giant, crosses infamous Selma bridge one final time"
          description="Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          key={1}
          pubishedAt="2024-01-05"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
      </div>
      {/* {articles.map((article) => {
        const {
          _id,
          web_url,
          headline: { main },
          lead_paragraph,
          byLine: { original },
          multimedia: { url },
          abstract,
          pub_date,
        } = article;
        return (
          <NewsCard
            _id={_id}
            key={_id}
            byLine={original}
            headline={main}
            description={lead_paragraph}
            url={web_url}
            imageSource={`https://nytimes.com/${url}`}
            imageAlternative={abstract}
            pubishedAt={pub_date}
          />
        );
      })} */}
      {/* {articles.map((ar) => {
        return <div>{ar.abstract}</div>;
      })} */}
    </div>
  );
}
