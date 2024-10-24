import { Typography, Box, List, ListItem, Divider } from "@mui/material";

const skills = [
  "JavaScript/TypeScript (React, React Native)",
  "Vite, Material UI, React Query, Redux Toolkit",
  ".NET Development (C#, ASP.NET Core, Entity Framework Core, LINQ, Code First Database)",
  "Responsive Design",
  "Microservices",
  "Cloud Development (Azure, AWS), Infrastructure as Code (Bicep), Containerization (Docker)",
  "People Management",
  "Agile Methodologies",
];

// const cSharpSkills = [
//   "C#",
//   "Blazor",
//   "ASP.NET Core",
//   "Entity Framework Core",
//   "LINQ",
//   "Code First Database",
// ];

// const azureSkills = [
//   "Cosmos DB",
//   "Bicep (IaC)",
//   "Azure Container Registry",
//   "Azure DevOps",
//   "YML",
//   "Azure Functions",
//   "Azure Key Vault",
//   "Azure Static Web Apps",
//   "Azure Storage",
//   "Azure SQL",
//   "Azure App Service",
//   "Azure API Management",
// ];

export const Skills = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="onPrimary">
        Skills
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <List dense>
        {skills.map((skill, index) => (
          <ListItem key={index} disableGutters>
            <Typography variant="body2" color="onPrimary">
              • {skill}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
