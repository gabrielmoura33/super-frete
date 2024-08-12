import { Item } from './item'

type Props = {}
export function List(props: Props) {
  return (
    <section className="py-8 px-4 h-full flex flex-col">
      <p className="text-lg text-grayscale8 font-semibold leading-[1.5rem]">
        Mensagens Enviadas
      </p>
      <div className="mt-4 flex flex-col gap-4 max-h-[26rem] overflow-y-auto">
        <Item
          date="11/08/2024 - 22:24"
          message="Oi 😁 esta é a sua mensagem enviada anteriormente."
        />
        <Item
          date="11/08/2024 - 22:24"
          message="Oi 😁 esta é a sua mensagem enviada anteriormente."
        />
        <Item
          date="11/08/2024 - 22:24"
          message="Oi 😁 esta é a sua mensagem enviada anteriormente."
        />
        <Item
          date="11/08/2024 - 22:24"
          message="Oi 😁 esta é a sua mensagem enviada anteriormente."
        />
      </div>
    </section>
  )
}
