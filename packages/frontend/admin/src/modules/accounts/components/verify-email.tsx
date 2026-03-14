import { ConfirmDialog } from '../../../components/shared/confirm-dialog';

export const VerifyEmailDialog = ({
  open,
  email,
  onClose,
  onConfirm,
  onOpenChange,
}: {
  open: boolean;
  email: string;
  onClose: () => void;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Verify Email"
      description={
        <>
          Are you sure you want to mark{' '}
          <span className="font-bold">{email}</span> as verified?
        </>
      }
      confirmText="Verify"
      confirmButtonVariant="default"
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );
};
