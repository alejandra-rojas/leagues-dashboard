const home = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "title", type: "Section title", type: "string" },
    { name: "subtitle", type: "Section subtitle", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    { name: "callout", title: "Homepage Callout", type: "string" },
    { name: "next_league", title: "Next League Info", type: "string" },
  ],
};

export default home;
