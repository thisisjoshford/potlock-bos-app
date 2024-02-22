const ProjectOptions = (props) => [
  {
    label: "Home",
    id: "home",
    disabled: false,
    source: `${props.ownerId}/widget/Project.About`,
    href: props.hrefWithEnv(`?tab=project&projectId=${props.projectId}&nav=home`),
  },
  {
    label: "Social Feed",
    id: "feed",
    disabled: false,
    source: `${props.ownerId}/widget/Profile.Feed`,
    href: props.hrefWithEnv(`?tab=project&projectId=${props.projectId}&nav=feed`),
  },
  {
    label: "Pots",
    id: "pots",
    disabled: true,
  },
  // {
  //   label: "Attestations",
  //   id: "attestations",
  //   disabled: true,
  // },
  {
    label: "Funding raised",
    id: "funding",
    disabled: false,
    source: `${props.ownerId}/widget/Profile.DonationsTable`,
    href: props.hrefWithEnv(`?tab=project&projectId=${props.projectId}&nav=funding`),
  },
  {
    label: "",
    id: "followers",
    disabled: false,
    source: `${props.ownerId}/widget/Profile.FollowTabs`,
  },
  {
    label: "",
    id: "following",
    disabled: false,
    source: `${props.ownerId}/widget/Profile.FollowTabs`,
  },
];

return {
  ProjectOptions,
};