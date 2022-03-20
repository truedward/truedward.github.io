interface IContact {
  link: string;
  text: string;
  subtext?: string;
}

interface IContactList {
  title: string;
  list: Array<IContact>;
}

type IContactLayout = Array<IContactList>;

export default IContactLayout;
