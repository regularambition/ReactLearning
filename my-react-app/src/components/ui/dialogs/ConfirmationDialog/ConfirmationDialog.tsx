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
  // 初期状態はnullで、この関数が呼び出された直後に実際のDOM要素が入る
  const dialogRef = useRef<HTMLDialogElement>(null);
  const messageId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      // Reactの機能ではなくブラウザが提供する HTMLDialogElement のメソッド
      dialog.showModal();
    } else if (!open && dialog.open) {
      // DOM要素のメソッド呼び出しはReact管轄外であり副作用にあたる
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
