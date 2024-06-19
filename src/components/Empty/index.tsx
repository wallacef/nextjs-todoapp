import Image from "next/image"

export const EmptyContent = () => {
    return (
        <div className="max-w-5xl max-lg:px-4 w-full mt-4 text-gray-500 h-full items-center text-center justify-center flex flex-col">
            <hr className="w-full mb-16" />
            <Image
                src="/ClipboardTextRegular.svg"
                alt="Clipboard icon"
                className="dark:invert mb-2"
                width={56}
                height={56}
                priority
                color="white"
            />
            <p className="font-medium text-base">Você ainda não tem tarefas cadastradas</p>
            <span className="text-sm font-light">Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}