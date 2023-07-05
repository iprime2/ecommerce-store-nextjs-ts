import Billboard from '@/components/ui/Billboard'
import Container from '@/components/ui/Container'

const HomePage = () => {
  const billboard = [{''}]

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
