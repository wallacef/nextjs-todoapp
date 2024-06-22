import { CheckCircleFill } from "../Icons/CheckCircleFill"
import { CircleRegular } from "../Icons/CircleRegular"
import { TrashRegular } from "../Icons/TrashRegular"

type TContentTask = TTask & {
    handleDelete(id: number): void
    handleUpdate(id: number): void
}

export const ContentTask = (props: TContentTask) => {
    const {
        id,
        description,
        isFinished,
        handleDelete,
        handleUpdate
    } = props

    return (
        <div className={(
            isFinished
                ? "flex gap-2 text-gray-500 justify-between items-center w-full border rounded-lg p-5 border-gray-200 bg-gray-100 bg-transparent"
                : "flex gap-2 max-lg:px-4 text-gray-600 justify-between items-center w-full border rounded-lg p-5 border-gray-300 bg-gray-200 bg-transparent"
        )}>
            <div className="flex gap-3">
                <button
                    id="handleFinish"
                    onClick={() => handleUpdate(id)}
                >
                    {isFinished ? (
                        <CheckCircleFill />
                    ) : (
                        <CircleRegular />
                    )}
                </button>
                <span className={`text-sm text-left description-task ${isFinished ? 'line-through' : ''}`}>{description}</span>
            </div>
            <button
                id="handleDelete"
                onClick={() => handleDelete(id)}
            >
                <TrashRegular />
            </button>
        </div>
    )
}