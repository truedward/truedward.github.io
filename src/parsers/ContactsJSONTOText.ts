import IContactLayout from "@/interfaces/Contacts";

export default (layout: IContactLayout): string => {
  let result = ``;

  layout.forEach((contact_list) => {
    result += contact_list.title + `\n`;

    contact_list.list.forEach((contact) => {
      let link_text =
        contact.params && contact.params.link_view
          ? contact.link
          : contact.text;

      if (contact.subtext) link_text += ` (${contact.subtext})`;

      result += "\t" + link_text + "\n";
    });
  });

  return result;
};
