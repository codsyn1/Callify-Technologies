type FormSubmitStatusProps = {
  sent: boolean;
  error: string | null;
  className?: string;
};

export function FormSubmitStatus({
  sent,
  error,
  className = "mt-4 text-sm",
}: FormSubmitStatusProps) {
  if (error) {
    return (
      <p className={`${className} text-red-600`} role="alert">
        {error}
      </p>
    );
  }

  if (sent) {
    return (
      <p className={`${className} text-muted`} role="status">
        Thanks! We received your message and will be in touch soon.
      </p>
    );
  }

  return null;
}
