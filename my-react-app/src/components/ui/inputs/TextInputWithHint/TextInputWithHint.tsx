import type { InputHTMLAttributes } from 'react';
import './TextInputWithHint.css';

type TextInputWithHintProps = {
  label: string;
  hint: string;
  errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

function TextInputWithHint({
  label,
  hint,
  errorMessage,
  id,
  ...inputProps
}: TextInputWithHintProps) {
  const hintId = id ? `${id}-hint` : undefined;
  const errorId = id && errorMessage ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="text-input-with-hint">
      <label className="text-input-with-hint__label" htmlFor={id}>
        {label}
      </label>

      <input
        {...inputProps}
        id={id}
        className="text-input-with-hint__input"
        aria-describedby={describedBy}
        aria-invalid={errorMessage ? true : undefined}
      />

      <p id={hintId} className="text-input-with-hint__hint">
        {hint}
      </p>

      {errorMessage && (
        <p
          id={errorId}
          className="text-input-with-hint__error"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default TextInputWithHint;
