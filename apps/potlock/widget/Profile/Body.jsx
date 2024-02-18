const {
  ownerId,
  projectId,
  REGISTRY_CONTRACT_ID,
  userIsRegistryAdmin,
  SUPPORTED_FTS: { NEAR },
  getTagsFromSocialProfileData,
} = props;

const accountId = props.accountId ?? context.accountId;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-top: 252px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 240px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1 1 0%;
  .nav-view {
    width: 100%;
    padding: 24px 50px;
    background: #f6f5f3;
  }
`;

const SidebarContainer = styled.div`
  width: 15%;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

return (
  <Wrapper>
    <Widget
      src={`${ownerId}/widget/Project.BannerHeader`}
      props={{
        ...props,
        backgroundStyle: {
          objectFit: "cover",
          left: 0,
          top: 0,
          height: "280px",
        },
      }}
    />
    {/* Side Nav */}
    <Container>
      <SidebarContainer>
        <Widget
          src={`${ownerId}/widget/Components.NavOptions`}
          props={{
            ...props,
          }}
        />
        <Widget
          src={`${ownerId}/widget/Project.Linktree`}
          props={{
            ...props,
          }}
        />
      </SidebarContainer>
      <Widget
        src={`${ownerId}/widget/Project.NavOptionsMobile`}
        props={{
          ...props,
        }}
      />
      {/* Body */}
      <Details>
        <Widget
          src={`${ownerId}/widget/Project.BodyHeader`}
          props={{
            ...props,
            id: projectId || accountId,
          }}
        />
        {userIsRegistryAdmin && projectId && (
          <Widget
            src={`${ownerId}/widget/Inputs.Select`}
            props={{
              noLabel: true,
              options: props.PROJECT_STATUSES.map((status) => ({
                value: status,
                text: status,
              })),
              value: { text: props.project.status, value: props.project.status },
              onChange: (status) => {
                if (status.value != project.status) {
                  setStatusReview({ ...statusReview, newStatus: status.value, modalOpen: true });
                }
              },
              containerStyles: {
                padding: "16px 24px",
              },
            }}
          />
        )}
        <div className="nav-view">
          <Widget
            src={props.navOptions.find((option) => option.id == props.nav).source}
            props={{
              ...props,
            }}
          />
        </div>
      </Details>
    </Container>
  </Wrapper>
);
