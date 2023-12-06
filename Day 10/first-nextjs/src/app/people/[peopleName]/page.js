export default function Page({ params }) {
  return (
    <div>
      <span>Hello, {params.peopleName}!</span>
    </div>
  );
}
