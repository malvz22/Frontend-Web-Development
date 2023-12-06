export default function Page({ params }) {
  return (
    <div>
      <span>
        Hello, {params.peopleName} ({params.age})
      </span>
    </div>
  );
}
