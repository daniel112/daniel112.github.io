import { ProjectData, ProjectCategory } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";

const data: ProjectData[] = [
  {
    title: "Author: OpenAI Real-time audio translation",
    description:
      "Real time voice translation utilizing OpenAI's Whisper for transcript and ChatCompletion for translation.",
    image:
      "https://github.com/daniel112/openai-hackathon-realtime-translation/raw/main/img/2023-03-29-19-11-23.png",
    category: ProjectCategory.OPEN_SOURCE,
    technologies: [],
    link: {
      label: "repo",
      url: "https://github.com/daniel112/openai-hackathon-realtime-translation",
    },
  },
  {
    title: "Author: React Native Open AI POC",
    description:
      "Proof of Concept of generating UI at run time. Utilizing OpenAI and React Native",
    image:
      "https://opengraph.githubassets.com/e35064b0cfbb4262c7315fc12cf0b0ba189936b7c9424f5b03cd73fe2e87d859/daniel112/react-native-open-ai-demo",
    category: ProjectCategory.OPEN_SOURCE,
    technologies: [],
    link: {
      label: "repo",
      url: "https://github.com/daniel112/react-native-open-ai-demo",
    },
  },
  {
    title: "Contributor: React Native Paper",
    description:
      "I Contributed to the React Native Paper project by improving and extending the Banner Component.",
    image:
      "https://opengraph.githubassets.com/e35064b0cfbb4262c7315fc12cf0b0ba189936b7c9424f5b03cd73fe2e87d859/callstack/react-native-paper",
    category: ProjectCategory.OPEN_SOURCE,
    technologies: [],
    link: {
      label: "repo",
      url: "https://github.com/callstack/react-native-paper/pull/2758",
    },
  },
  {
    title: "Contributor: Microsoft Cognitive services speech sdk",
    description:
      "I Contributed to the Microsoft Cognitive Services Speech SDK identifying a bug in their SDK related to disfluency.",
    image:
      "https://opengraph.githubassets.com/e35064b0cfbb4262c7315fc12cf0b0ba189936b7c9424f5b03cd73fe2e87d859/microsoft/cognitive-services-speech-sdk-js",
    category: ProjectCategory.OPEN_SOURCE,
    technologies: [],
    link: {
      label: "repo",
      url: "https://github.com/microsoft/cognitive-services-speech-sdk-js/issues/670",
    },
  },
  {
    title: "Author: Kustomer React Native SDK",
    description:
      "React Native Wrapper for Kustomer's native chat and knowledgebase features. Developed using Typescript, Java, Objective-C",
    image:
      "https://opengraph.githubassets.com/e35064b0cfbb4262c7315fc12cf0b0ba189936b7c9424f5b03cd73fe2e87d859/knockaway/kustomer-react-native",
    category: ProjectCategory.OPEN_SOURCE,
    technologies: [],
    link: {
      label: "repo",
      url: "https://github.com/knockaway/kustomer-react-native",
    },
  },
];

export const OpenSourcePreview: React.FC = () => {
  return (
    <>
      {data.map((article) => (
        <ProjectPreviewCard
          onClick={() => {
            window.open(article.link?.url, "_blank");
          }}
          ctaTitle="View GitHub"
          key={article.title}
          {...article}
        />
      ))}
    </>
  );
};
