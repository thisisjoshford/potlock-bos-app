const [isModalDonationOpen, setIsModalDonationOpen] = useState(false);
const [isModalDonationSucessOpen, setIsModalDonationSucessOpen] = useState(false);

const { ownerId } = props;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const SubRow1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 66%;

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 24px;
  }
`;

const SubRow2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  width: 33%;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    gap: 24px;
  }
`;

const DonationButton = styled.button`
  padding: 12px 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background: #fef6ee;
  border-radius: 6px;
  border: none;
  box-shadow: 0px -2px 0px 0px #464646 inset, 0px 0px 0px 1px #464646;
  &:hover {
    background: #dd3345;
    color: #fff;
  }
`;

// const FollowingMobile = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: flex-start;
//     gap: 24px;
//   }
// `;

return (
  <Container>
    {/* <FollowingMobile>
      <Widget
        src={`${ownerId}/widget/Project.FollowStats`}
        props={{ accountId: props.projectId }}
      />
      <Widget
        src={`${ownerId}/widget/Project.FollowButton`}
        props={{ accountId: props.projectId }}
      />
    </FollowingMobile> */}
    <SubRow1>
      <Widget
        src={`${ownerId}/widget/Project.FollowStats`}
        props={{ ...props, accountId: props.id }}
      />
      <Widget src={`${ownerId}/widget/Project.FollowButton`} props={{ accountId: props.id }} />
    </SubRow1>
    {props.tab === "project" && (
      <SubRow2>
        <DonationButton
          onClick={(e) => {
            e.preventDefault();
            setIsModalDonationOpen(true);
          }}
        >
          Donate
        </DonationButton>
        <Widget
          src={`${props.ownerId}/widget/Components.ModalDonation`}
          props={{
            ...props,
            transactionHashes: props.transactionHashes,
            ownerId: props.ownerId,
            projectId: props.projectId,
            isModalDonationOpen: isModalDonationOpen,
            isModalDonationSucessOpen: isModalDonationSucessOpen,
            onClose: () => setIsModalDonationOpen(false),
          }}
        />
      </SubRow2>
    )}
  </Container>
);
