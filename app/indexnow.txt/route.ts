export function GET() {
  // put your hash here
  const hash = process.env.NEXT_PUBLIC_INDEX_NOW;

  return new Response(hash + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}