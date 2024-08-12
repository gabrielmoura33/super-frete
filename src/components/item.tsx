type Props = {
  message: string
  date: string
}
export function Item({ message, date }: Props) {
  return (
    <div className="w-full h-[7rem] bg-white p-4 rounded-[1.2rem] flex flex-col gap-4">
      <p className="text-base overflow-hidden text-ellipsis line-clamp-2">
        {message}
      </p>
      <span className="text-sm text-grayscale5">{date} </span>
    </div>
  )
}
