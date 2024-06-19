import Image from "next/image"

export const HeaderContent = () => {
    return (
        <div className="bg-gray-50 w-full h-44 flex items-center text-center justify-center">
            <div className="max-w-5xl flex items-center text-center justify-center w-full h-full">
                <Image
                    src="/logo.svg"
                    alt="Todoapp Logo"
                    className="dark:invert size-auto"
                    width="0"
                    height="0"
                />
            </div>
        </div>
    )
}