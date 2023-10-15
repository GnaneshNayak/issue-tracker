import { Issue } from '@prisma/client';
import { Button } from '@radix-ui/themes';

type Props = {
  issueId: number;
};

const DeleteIssueButton = ({ issueId }: Props) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
