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
        params: {
          link_view: true,
        },
      },
      {
        text: "GITHUB",
        link: "https://github.com/truedward/",
        params: {
          link_view: true,
        },
      },
      {
        text: "TELEGRAM",
        subtext: "Priority",
        link: "https://t.me/truedward",
        params: {
          link_view: true,
        },
      },
      {
        text: "INSTAGRAM",
        link: "https://www.instagram.com/true.ed/",
        params: {
          link_view: true,
        },
      },
    ],
  },
];

export default Contacts;
