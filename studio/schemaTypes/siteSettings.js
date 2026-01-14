export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "logoImage",
      title: "Logo Image (navbar)",
      type: "image",
      options: { hotspot: true },
    },

    { name: "businessName", title: "Business Name (SEO / fallback)", type: "string" },
    { name: "ownerName", title: "Owner Name", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "email", title: "Email", type: "string" },

    { name: "heroHeadline", title: "Hero Headline", type: "string" },
    { name: "heroSubheadline", title: "Hero Subheadline", type: "text" },

    {
      name: "heroImageDesktop",
      title: "Hero Image (Desktop — Wide)",
      description: "Crop wide. Put Eugene on the right third, leave space on the left for text.",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroImageMobile",
      title: "Hero Image (Mobile — 4:5 or Square)",
      description: "Crop so face + shoulders are centered and safe.",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "serviceAreas",
      title: "Service Areas",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (emoji)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "summary", title: "Summary", type: "text" },
            { name: "bullets", title: "Details", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    },
  ],
};
