import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <h1 className='text-2xl text-red-500 mb-3'>Hello World</h1>
      <Button>Submit</Button>
    </div>
  )
}
