const users = [
  {
    name: "test",
    email: "test@test.com",
    password: "test",
    username: "test",
  },
];

const resume_user_info = [
  {
    user_first_name: "John",
    user_last_name: "Doe",
    user_heading: "Software Engineer",
    user_email: "test@gmail.com",
    user_phone: "123-456-7890",
    user_address: "1234 Elm St, Springfield, IL 62701",
  },
];

const resumes = [
  {
    user_id: 1,
    created_at: new Date("2023-10-30T16:37:11.580Z"),
    updated_at: new Date("2023-10-30T16:37:11.580Z"),
    template_id: 1,
    resume_user_info_id: 1,
  },
];

const skills_categories = [
  {
    skill_type: "Programming Languages",
    resume_id: 1,
  },
];

const skills = [
  {
    skill_name: "JavaScript",
    skill_category_id: 1,
  },
];

const certificacion_info = [
  {
    certificacion_name: "Certified Kubernetes Administrator",
    certificacion_institution: "CNCF",
    url: "https://www.cncf.io/certification/cka/",
    sort_order: 1,
    resume_id: 1,
  },
];

const certifications_resumes = [
  {
    resume_id: 1,
    certificacion_info_id: 1,
  },
];

const work_info = [
  {
    work_title: "Software Engineer",
    work_company: "Tech Company",
    work_start_date: new Date("2020-01-01"),
    work_end_date: new Date("2022-01-01"),
    work_description: "Developed and maintained web applications.",
    work_location: "Remote",
    sort_order: 1,
    current_job: false,
  },
];

const works_resumes = [
  {
    resume_id: 1,
    work_info_id: 1,
  },
];

const link_info = [
  {
    network_id: 1,
    url: "https://github.com/johndoe",
    username: "johndoe",
  },
];

const links_networks = [
  {
    network_name: "GitHub",
    resume_id: 1,
    link_infoId: 1,
  },
];

export {
  users,
  resume_user_info,
  resumes,
  skills_categories,
  skills,
  certificacion_info,
  certifications_resumes,
  work_info,
  works_resumes,
  link_info,
  links_networks,
};