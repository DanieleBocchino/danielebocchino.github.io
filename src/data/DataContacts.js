import {
  DEFAULT_SKILL_BLUE,
  DEFAULT_SKILL_GREEN,
  DEFAULT_SKILL_ORANGE,
  DEFAULT_SKILL_PURPLE,
  DEFAULT_SKILL_RED,
  DEFAULT_SKYPE,
  DEFAULT_TWITTER,
  DEFAULT_LINKEDIN,
  DEFAULT_CREEDLY,
  DEFAULT_SKILL_YELLOW,
} from "../functions/ColorFunction";
import { ReactComponent as MyGit } from "../svg/git.svg";
import { ReactComponent as MyMail } from "../svg/mail.svg";
import { ReactComponent as MyPhone } from "../svg/phone.svg";
import { ReactComponent as MyLinkedin } from "../svg/linkedin.svg";
import { ReactComponent as MyCreedly } from "../svg/creedly.svg";
import { ReactComponent as MyTwitter } from "../svg/twitter.svg";
import { ReactComponent as MySkype } from "../svg/skype.svg";
import { ReactComponent as MyResume } from "../svg/resume.svg";


export const contacts = [
  {
    data: "bocchino.daniele@gmail.com",
    name: "Email Address",
    href: `mailto:bocchino.daniele@gmail.com`,
    svg: MyMail,
    options: { color: DEFAULT_SKILL_RED },
  },
  {
    data: "(+39) 3311826439",
    name: "Phone Number",
    href: `tel:+393311826439`,
    svg: MyPhone,
    options: { color: DEFAULT_SKILL_GREEN },
  },
  {
    data: "Daniele Bocchino",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/daniele-bocchino-aa602a20b/",
    href: `https://www.linkedin.com/in/daniele-bocchino-aa602a20b/`,
    svg: MyLinkedin,
    options: { stroke: true, color: DEFAULT_LINKEDIN },
  },
  {
    name: "GitHub",
    data: "DanieleBocchino",
    link: "https://github.com/DanieleBocchino",
    href: `https://github.com/DanieleBocchino`,
    svg: MyGit,
    options: { stroke: true, color: DEFAULT_SKILL_PURPLE },
  },
  {
    name: "Twitter",
    data: "Daniele Bocchino",
    link: "https://twitter.com/DanieleSbocco",
    href: `https://twitter.com/DanieleSbocco`,
    svg: MyTwitter,
    options: { stroke: true, color: DEFAULT_TWITTER },
  },

  {
    name: "Credly",
    data: "Daniele Bocchino",
    link: "https://www.credly.com/users/daniele-bocchino",
    href: `https://www.credly.com/users/daniele-bocchino`,
    svg: MyCreedly,
    options: { stroke: true, color: DEFAULT_CREEDLY },
  },
  
  {
    name: "Skype",
    data: "Daniele Bocchino",
    link: "https://join.skype.com/invite/zVXdj4qawk9X",
    href: `https://join.skype.com/invite/zVXdj4qawk9X`,
    svg: MySkype,
    options: { stroke: true, color: DEFAULT_SKYPE },
  },
  {
    name: "Resume",
    data: "Daniele Bocchino",
    link: "https://danielebocchino.github.io/resume-bocchino-daniele-2026.pdf",
    href: `https://danielebocchino.github.io/resume-bocchino-daniele-2026.pdf`,
    svg: MyResume,
    options: { stroke: true, color: DEFAULT_SKILL_YELLOW },
  },
];
