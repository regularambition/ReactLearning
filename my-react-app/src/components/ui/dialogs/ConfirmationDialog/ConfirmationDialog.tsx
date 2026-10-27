import { useEffect, useId, useRef, type ReactNode } from 'react';
import PlainButton from '../../buttons/PlainButton/PlainButton';
import PlainButtonPair from '../../buttons/PlainButtonPair/PlainButtonPair';
import './ConfirmationDialog.css';

type ConfirmationDialogProps = {
  open: boolean;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

function ConfirmationDialog({
  open,
  children,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const messageId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      if (dialog.open) {
        dialog.close();
      }
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="confirmation-dialog"
      aria-labelledby={messageId}
      onCancel={(event) => {
        event.preventDefault();
        onCancel();
      }}
    >
      <p id={messageId} className="confirmation-dialog__message">
        {children}
      </p>

      <PlainButtonPair>
        <PlainButton onClick={onConfirm}>{confirmLabel}</PlainButton>
        <PlainButton autoFocus onClick={onCancel}>
          {cancelLabel}
        </PlainButton>
      </PlainButtonPair>
    </dialog>
  );
}

export default ConfirmationDialog;
