export default function ErrorAlert({ message }: { message?: string | null }) {
    if (!message) return null;
    return (
      <div className="mb-4 rounded-lg border border-rose-700 bg-rose-900/40 px-3 py-2 text-sm text-rose-200">
        {message}
      </div>
    );
  }
  