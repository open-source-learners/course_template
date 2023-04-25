import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "ADAMU M. MUHAMMAD",
    company: "Open Source Learners",
  },
  title: "A Superb Course",
  subtitle: "That Teaches Nice Things",
  frontendMastersLink: "",
  description: "A nice course for nice people.",
  keywords: ["a nice course", "for people", "to learn", "nice things"],
  social: {
    "linkedin": "adamu-muhammad-muhammad-13456b190",
    "github": "AdamsGeeky",
    "twitter": "AdamsGeeky"
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
