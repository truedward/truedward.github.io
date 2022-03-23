interface IContact {
  link: string;
  text: string;
  subtext?: string;
  params?: {
    link_view?: boolean;
  };
}

interface IContactList {
  title: string;
  list: Array<IContact>;
}

type IContactLayout = Array<IContactList>;

export default IContactLayout;
