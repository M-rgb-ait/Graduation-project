export default function ChatLoading() {
  return (
    <div className="flex">
      <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-3">
        <span className="h-2 w-2 animate-bounce rounded-full bg-foreground" />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-foreground"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-foreground"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
