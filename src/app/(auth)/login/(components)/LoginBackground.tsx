import Image from 'next/image'

export default function LoginBackground() {
  return (
    <section>
      <Image
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute right-0 bottom-0"
        src="/icons/auth-bg-blue.svg"
        width={200}
        height={200}
        alt="bg-blue"
      />
      <Image
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute left-0 top-0"
        src="/icons/auth-bg-red.svg"
        width={200}
        height={200}
        alt="bg-blue"
      />
    </section>
  )
}
