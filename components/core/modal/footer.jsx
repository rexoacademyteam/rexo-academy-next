export default function ModalFooter({ children }) {
    return (
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
            {children}
        </div>
    )
}
