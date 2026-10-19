// export default function HighlightText({
//   text,
//   search,
// }: {
//   text: string;
//   search: string;
// }) {
//   if (!search.trim()) return <>{text}</>;

//   const parts = text.split(new RegExp(`(${search})`, "gi"));

//   return (
//     <>
//       {parts.map((part, index) =>
//         part.toLowerCase() === search.toLowerCase() ? (
//           <span key={index} className="bg-yellow-200 text-black font-semibold">
//             {part}
//           </span>
//         ) : (
//           part
//         ),
//       )}
//     </>
//   );
// }

export default function HighlightText({
  text,
  search,
}: {
  text: string;
  search: string;
}) {
  const term = search.trim();

  if (!term) return <>{text}</>;

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedTerm})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <span key={index} className="bg-yellow-200 font-semibold text-black">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
