import { Typography, Box } from "@mui/material";

const experiences = [
  {
    role: "Principal Software Consultant II",
    company: "Neudesic, an IBM Company (Software Consulting)",
    location: "Remote",
    duration: "June 2022 - Current",
    description: [
      "Led development of multiple innovative React and Azure-based projects, including a career development platform, WebApp accelerators, and a hackathon-winning OpenAI implementation.",
      "Built POC for an ElasticSearch-based solution, supporting millions of document syncs.",
      "Optimized performance across multiple applications, improving efficiency by 90%+ using Blazor, EF Core, and Azure.",
      "Facilitated cross-functional collaboration and mentored a team of 5+ engineers, driving clear communication and growth.",
      "Served as a trusted advisor on a client project, generating $1M in revenue.",
      "Helped companies scale their tech teams through implementing agile methodologies, establishing code review processes, and creating comprehensive onboarding programs for new hires.",
      "Developed and led technical workshops to upskill existing team members in React, Azure, .NET and modern software architecture patterns.",
    ],
  },
  {
    role: "Mobile Software Engineer (Volunteer)",
    company: "Poolsuite FM (Music Streaming)",
    location: "Remote",
    duration: "May 2022 - April 2023",
    description: [
      "Led the rewrite of the Poolsuite FM app, improving user experience and cross-platform consistency.",
      "Coordinated and managed collaboration between frontend (React-Native) and backend team, ensuring seamless data integration with SoundCloud.",
    ],
  },
  {
    role: "Senior Mobile Software Engineer",
    company: "Knock (FinTech Startup)",
    location: "Remote",
    duration: "March 2021 - June 2022",
    description: [
      "Implemented push notifications, FullStory analytics, and Kustomer CRM integration in React Native app.",
      "Mentored junior engineers, focusing on React Native best practices and mobile app architecture.",
      "Authored technical articles on React Native development, published on Medium and Dev.to.",
      "Delivered dev talk on mobile app performance optimization techniques (Hermes, Flipper).",
    ],
  },
  {
    role: "Product Engineer",
    company: "Simpleview (Travel Tech)",
    location: "Remote",
    duration: "April 2019 - March 2021",
    description: [
      "Developed open-source cross-platform framework using React Native and React Native Web, reducing codebase duplication by 60%.",
      "Migrated web app to AWS, leveraging EC2, S3, and CloudFront for improved scalability and performance.",
      "Led Zerista mobile app development with React Native, integrating RESTful APIs and push notifications.",
      "Implemented CI/CD pipeline using Jenkins and Fastlane, automating iOS and Android app deployments.",
    ],
  },
  {
    role: "Mobile Developer/.NET Developer",
    company: "Sandhills Publishing",
    location: "Scottsdale, AZ",
    duration: "June 2017 - Feb 2019",
    description: [
      "Developed enterprise and public apps using Objective-C and C# from design to production.",
      "Tracked down and fixed crashes/bugs by removing memory leaks.",
      "Implemented iOS 10+ support with remote push notifications using OneSignal.",
    ],
  },
  // Add more experience here
];

export const Experience = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} marginBottom={2}>
          <Typography variant="h6" fontWeight="bold">
            {exp.role} - {exp.company}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {exp.location} | {exp.duration}
          </Typography>
          {exp.description.map((desc, idx) => (
            <Typography key={idx} variant="body2">
              • {desc}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};
