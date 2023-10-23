const accountId = props.projectId;
if (!accountId) {
  return "No account ID";
}

const link =
  props.link &&
  (props.link === true
    ? `https://near.social/mob.near/widget/ProfilePage?accountId=${accountId}`
    : props.link);

const profile = props.profile ?? Social.getr(`${accountId}/profile`);

if (profile === null) {
  return "Loading";
}

const name = profile.name || "No-name profile";
const image = profile.image;
const backgroundImage = profile.backgroundImage;
const tags = Object.keys(profile.tags ?? {});
const imageStyle = props.imageStyle ?? {};
const backgroundStyle = props.backgroundStyle ?? {};
const containerStyle = props.containerStyle ?? {};

// const backgroundHeight = parseInt(backgroundStyle.height?.split("px")[0]) ?? 100;
// const imageHeight = parseInt(imageStyle.height?.split("px")[0]) ?? 60;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 -12px;
`;

// console.log("props.backgroundStyle: ", props.backgroundStyle);
// console.log("props.imageStyle: ", props.imageStyle);
// console.log("backgroundHeight: ", backgroundHeight);
// console.log("imageHeight: ", imageHeight);

// console.log("backgroundHeight - imageHeight / 2: ", backgroundHeight - imageHeight / 2);

console.log("props.children: ", props.children);

return (
  <div className="pt-0 position-relative" style={{ ...containerStyle }}>
    {backgroundImage && (
      <Widget
        src="mob.near/widget/Image"
        props={{
          image: backgroundImage,
          alt: "profile background",
          className: "position-absolute w-100",
          style: { ...backgroundStyle },
          fallbackUrl:
            "https://ipfs.near.social/ipfs/bafkreibmiy4ozblcgv3fm3gc6q62s55em33vconbavfd2ekkuliznaq3zm",
        }}
      />
    )}
    <div
      className="profile-picture d-inline-block"
      style={{ transform: `translateY(${props.profileImageTranslateYPx ?? 160}px)` }}
    >
      <Widget
        src="mob.near/widget/ProfileImage"
        props={{
          profile,
          accountId,
          style: { ...imageStyle },
          className: "mb-2",
          imageClassName: "rounded-circle w-100 h-100 img-thumbnail d-block",
          thumbnail: false,
        }}
      />
    </div>
    {props.children && props.children}
  </div>
);
