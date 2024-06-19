import Image from "next/image"

type TContentTask = TTask & {
    handleDelete(id: number): void
    handleUpdate(id: number): void
}

export const ContentTask = ({ id, description, isFinished, handleDelete, handleUpdate }: TContentTask) => {
    return (
        <div className={(
            isFinished
                ? "flex gap-2 text-gray-500 justify-between items-center w-full border rounded-lg p-5 border-gray-200 bg-gray-100 bg-transparent"
                : "flex gap-2 max-lg:px-4 text-gray-600 justify-between items-center w-full border rounded-lg p-5 border-gray-300 bg-gray-200 bg-transparent"
        )}>
            <div className="flex gap-3">
                <button onClick={() => handleUpdate(id)}>
                    <Image
                        src={isFinished ? "/CheckCircleFill.svg" : "/CircleRegular.svg"}
                        alt="Status icon"
                        className="dark:invert"
                        width={18}
                        height={18}
                        priority
                        color="white"
                    />
                </button>
                <span className={`text-sm text-left ${isFinished ? 'line-through' : ''}`}>{description}</span>
            </div>
            <button onClick={() => handleDelete(id)}>
                <Image
                    src="/TrashRegular.svg"
                    alt="Clipboard icon"
                    className="dark:invert max-w-none"
                    width={18}
                    height={18}
                    priority
                    color="white"
                />
            </button>
        </div>
    )
}