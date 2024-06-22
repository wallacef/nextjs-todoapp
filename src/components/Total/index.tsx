
type TTotalContent = {
    totalCreated: number
    totalFinished: number
}

export const TotalContent = ({ totalCreated, totalFinished }: TTotalContent) => {
    return (
        <div id="totalContent" className="max-w-5xl sm:px-4 w-full mt-16 gap-8 mb-4 text-gray-500 text-sm h-full justify-between flex">
            <div className="flex gap-2 text-center items-center">
                <span className="font-medium">Tarefas criadas</span>
                <div id="totalCreatedValue" className="bg-purple-600 rounded-full size-6 flex text-center items-center justify-center text-white">
                    {totalCreated}
                </div>
            </div>
            <div className="flex gap-2 text-center items-center">
                <span className="font-medium">Concluídas</span>
                <div id="totalFinishedValue" className="bg-green-600 rounded-full size-6 flex text-center items-center justify-center text-white">
                    {totalFinished}
                </div>
            </div>
        </div>
    )
}