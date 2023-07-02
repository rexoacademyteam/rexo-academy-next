import { useMemo } from "react"

// TODO: Add modal as utility class
export default function Modal({ open, children, onClose }) {
    const overlay = useMemo(() => {
        const base = 'bg-slate-800 bg-opacity-60 w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto '
        if (open) {
            return base
        }
        return base + 'hidden'
    }, [open])

    const onVoid = e => {
        e.stopPropagation()
    }

    return (
        <div onClick={onClose} className={overlay}>
            <div onClick={onVoid} className="opacity-100 duration-500 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    {children}
                </div>
            </div>
        </div>
    )
}
