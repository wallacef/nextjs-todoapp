import { ClipboardTextRegular } from "../Icons/ClipBoardTextRegular"

export const EmptyContent = () => {
    return (
        <div id="emptyContainer" className="max-w-5xl sm:px-4 w-full mt-4 text-gray-500 h-full items-center text-center justify-center flex flex-col">
            <hr className="w-full sm:px-4 mb-16" />
            <ClipboardTextRegular />
            <p className="font-medium text-base">Você ainda não tem tarefas cadastradas</p>
            <span className="text-sm font-light">Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}