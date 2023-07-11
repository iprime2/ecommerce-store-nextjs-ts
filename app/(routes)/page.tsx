import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductsList from '@/components/ProductsList'
import Billboard from '@/components/ui/Billboard'
import Container from '@/components/ui/Container'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('887724da-e7d0-4ebf-8648-620a1d0ec5e8')
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-8 lg:px-8'>
          <ProductsList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
