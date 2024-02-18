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
    source: `${props.ownerId}/widget/Project.Feed`,
    href: props.hrefWithEnv(`?tab=project&projectId=${props.projectId}&nav=feed`),
  },
  {
    label: "Donations",
    id: "donations",
    disabled: false,
    source: `${props.ownerId}/widget/Project.Donations`,
    href: props.hrefWithEnv(`?tab=project&projectId=${props.projectId}&nav=donations`),
  },
  {
    label: "Pots",
    id: "pots",
    disabled: true,
  },
  {
    label: "Attestations",
    id: "attestations",
    disabled: true,
  },
  {
    label: "Funding Raised",
    id: "funding",
    disabled: true,
  },
];

const ProfileOptions = (props) => [
  {
    label: "Social Feed",
    id: "feed",
    disabled: false,
    source: `mob.near/widget/MainPage.N.Feed`,
    href: props.hrefWithEnv(`?tab=profile&accountId=${props.accountId}&nav=feed`),
  },
  {
    label: "Donations",
    id: "donations",
    disabled: false,
    source: `${props.ownerId}/widget/Project.Donations`,
    href: props.hrefWithEnv(`?tab=profile&accountId=${props.accountId}&nav=donations`),
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
  ProfileOptions,
};
