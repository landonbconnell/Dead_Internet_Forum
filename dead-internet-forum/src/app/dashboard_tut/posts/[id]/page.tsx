export default async function Page({ params }: { params: { id: string } }) {
  params = await params;
  return <div>My Post: {params.id}</div>;
}
