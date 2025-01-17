import prisma from "./prisma";

export const getResumeUserInfo = async () => {
  const resumeInfo = await prisma.resumes.findUnique({
    where: { id: 1 },
    include: {
      user: true,
      resume_user_info: true,
      Skills_categories: {
        include: {
          Skills: true,
        },
      },
      works_resumes: {
        include: {
          Work_info: true,
        },
      },
      certifications_resumes: {
        include: {
          Certificacion_info: true,
        },
      },
      links_networks: {
        include: {
          link_info: true,
        },
      },
    },
  });

  if (!resumeInfo) {
    throw new Error("Resume not found");
  }
  console.log(JSON.stringify(resumeInfo, null, 2));

  return resumeInfo
};
