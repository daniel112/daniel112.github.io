import { ProjectCategory, ProjectData } from "../types";
import { ProjectPreviewCard } from "./ProjectPreviewCard";

interface AppData extends ProjectData {
  appImages: string[];
}

const data: AppData[] = [
  {
    appImages: [],
    title: "Piedmontese Beef Mobile App",
    description:
      "Mobile app created with Xamarin Native, where users can browse Piedmontese products, nutritional information, cookbooks and more.",
    image: "/projectAssets/apps/piedmontese-beef/appicon.webp",
    category: ProjectCategory.APPS,
    technologies: ["Xamarin", "Xamarin.iOS", "Fastlane", ".NET 6"],
  },
];
export const AppsPreview = () => {
  return (
    <>
      {data.map((appData, i) => {
        return (
          <ProjectPreviewCard
            ctaTitle={"View Details"}
            key={i}
            onClick={() => {}}
            maxPreviewChip={2}
            showPreviewChips
            {...appData}
          />
        );
      })}
    </>
  );
};
