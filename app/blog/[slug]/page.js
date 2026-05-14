export default function BlogDetail({ params }) {
  return (
    <div>
      <h1>Blog Detail</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}