import IContactLayout from "@/interfaces/Contacts";

let Contacts: IContactLayout = [
  {
    title: "EMAIL:",
    list: [
      {
        text: "true.ed@icloud.com",
        subtext: "Priority",
        link: "mailto:true.ed@icloud.com",
      },
      {
        text: "true.a.e.p.o@gmail.com",
        link: "mailto:true.a.e.p.o@gmail.com",
      },
    ],
  },
  {
    title: "OTHER:",
    list: [
      {
        text: "LINKEDIN",
        link: "https://www.linkedin.com/in/edward-prykhozhay/",
      },
      {
        text: "GITHUB",
        link: "https://github.com/truedward/",
      },
      {
        text: "TELEGRAM",
        subtext: "Priority",
        link: "https://t.me/truedward",
      },
      {
        text: "INSTAGRAM",
        link: "https://www.instagram.com/true.ed/",
      },
    ],
  },
];

export default Contacts;
