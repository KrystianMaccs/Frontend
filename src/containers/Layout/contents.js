export const artiste = () => {
  return [
    {
      name: "Dashboard",
      icon: "home",
      hasPerm: true,
      path: "/app/artiste/dashboard",
    },
    {
      name: "Upload Files",
      icon: "upload",
      hasPerm: true,
      path: "/app/artiste/files",
    },
    {
      name: "Distribution",
      icon: "move",
      hasPerm: true,
      path: "/app/artiste/distribution",
    },
    {
      name: "Royalties",
      icon: "inbox",
      hasPerm: true,
      path: "/app/artiste/royalty",
    },

    {
      name: "Payout",
      icon: "enter-down",
      hasPerm: true,
      path: "/app/artiste/payout",
    },
  ];
};

export const staff = () => {
  return [
    {
      name: "Dashboard",
      icon: "home",
      hasPerm: true,
      path: "/app/staff/dashboard",
    },
    {
      name: "Artiste",
      icon: "users",
      hasPerm: true,
      path: "/app/staff/artiste",
    },

    /* {
      name: "Files",
      icon: "home",
      hasPerm: true,
      path: "/app/staff/file",
    }, */
    {
      name: "Packages",
      icon: "database",
      hasPerm: true,
      path: "/app/staff/storage",
    },
    /*  {
      name: "Royalty",
      icon: "home",
      hasPerm: true,
      path: "/app/staff/royalty",
    }, */
    {
      name: "Payout",
      icon: "enter-down",
      hasPerm: true,
      path: "/app/staff/payout",
    },
    {
      name: "Advert",
      icon: "users",
      hasPerm: true,
      path: "/app/staff/advert",
    },
  ];
};
