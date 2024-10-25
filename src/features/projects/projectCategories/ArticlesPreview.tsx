import { ProjectCategory, ProjectData, Technology } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";

const data: ProjectData[] = [
  {
    title: "Deep linking in React Native",
    description:
      "I wrote this guide to help developers implement deep linking with push notifications in React Native apps, based on my experience at Knock.",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*iOcPjfEZCfHEFZdT",
    summary:
      "In this article, I share my experience implementing deep linking with push notifications in React Native at Knock. I cover the entire process, from setting up custom URL schemes to handling deep links in various app states. My goal was to provide a clear, step-by-step guide that would save other developers time and frustration when tackling this complex feature.",
    category: ProjectCategory.ARTICLES,
    technologies: [Technology.REACT_NATIVE],
    link: {
      label: "Article",
      url: "https://medium.com/knock-engineering/react-native-push-notification-deep-links-5d0aa0375f2",
    },
  },
  {
    title: "Kustomer React Native SDK",
    description:
      "I created this open-source library to bridge Kustomer's native SDKs with React Native, enabling real-time customer support in our mobile app at Knock.",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3otvb2z646ytpt1hl2rv.jpg",
    summary:
      "In this article, I discuss the development of the kustomer-react-native library, which we created at Knock to integrate Kustomer's live chat and knowledge base features into our React Native mobile app. I explain our motivation for building this bridge between Kustomer's native SDKs and React Native, highlighting key features like push notification support. The library aims to simplify communication between agents and clients in React Native apps.",
    category: ProjectCategory.ARTICLES,
    technologies: [Technology.REACT_NATIVE],
    link: {
      label: "Article",
      url: "https://dev.to/knock/kustomer-react-native-library-4pbk",
    },
  },
];
/**
 * Show the list of article previews
 */
export const ArticlesPreview: React.FC = () => {
  return (
    <>
      {data.map((article) => (
        <ProjectPreviewCard
          onClick={() => {
            window.open(article.link?.url, "_blank");
          }}
          ctaTitle="View Article"
          key={article.title}
          {...article}
        />
      ))}
    </>
  );
};
