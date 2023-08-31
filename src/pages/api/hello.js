// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return { props: { data } }
}