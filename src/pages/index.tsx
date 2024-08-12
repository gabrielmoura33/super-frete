import { Button } from '@/components/button'
import { TextInput } from '@/components/input'
import { List } from '@/components/list'
import Logo from '@/components/logo'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { control, watch } = useForm({})
  const messageWatch = watch('message')

  return (
    <div className="min-h-screen bg-grayscale100 ">
      <section className="flex flex-col  bg-white h-full pt-[20%] pb-[10%] px-6">
        <div className="self-center">
          <Logo />
        </div>

        <div className="flex flex-col justify-start mt-[10%]">
          <p className="text-lg text-grayscale8 font-semibold leading-[1.5rem]">
            Digite um texto abaixo
          </p>
          <TextInput
            control={control}
            name="message"
            placeholder="Insira sua mensagem*"
            label="Mensagem*"
          />
          <Button onClick={() => {}} disabled={!messageWatch}>
            Enviar
          </Button>
        </div>
      </section>
      <List />
    </div>
  )
}
