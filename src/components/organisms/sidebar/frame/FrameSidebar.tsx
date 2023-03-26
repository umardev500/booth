import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import 'simplebar-react/dist/simplebar.min.css'
import { AppContext, type AppContextData } from '../../../../context'
import { List } from './List'

export const FrameSidebar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const context = useContext(AppContext) as AppContextData
    const [containerHeight, setContainerHeight] = useState<number>(0)
    const loadingRef = useRef('')

    const handleOpen = useCallback(() => {
        const input = inputRef.current
        if (input != null) {
            input.click()
        }
    }, [])

    useEffect(() => {
        const input = inputRef.current as HTMLInputElement
        if (input != null) {
            input?.addEventListener('change', (e: Event) => {
                const id = toast.loading('Loading...', { className: 'roboto' })
                loadingRef.current = id
                const files = (e.target as HTMLInputElement).files as FileList
                const filesLen = files?.length ?? 0

                if (filesLen > 0) {
                    const dataUrls: string[] = []
                    for (let i = 0; i < filesLen; i++) {
                        const file = files[i]
                        const reader = new FileReader()
                        reader.readAsDataURL(file)

                        reader.onload = (eReader) => {
                            const dataURL = eReader.target?.result as string
                            dataUrls.push(dataURL)

                            if (dataUrls.length === filesLen) {
                                context.setImages(dataUrls)
                            }
                        }
                    }
                }
            })
        }
    }, [])

    useEffect(() => {
        toast.dismiss(loadingRef.current)
        const id = toast.success('Image loaded!', { className: 'roboto' })
        return () => {
            toast.remove(id)
        }
    })

    const handleClick = useCallback((index: number) => {
        // toast.loading('Loading...')
        context.setOverlayToggle(true)
        context.setCurrentPreview(index)
    }, [])

    useEffect(() => {
        const container = imageContainerRef.current
        const height = container?.offsetHeight ?? 0
        setContainerHeight(height)
    }, [])

    return (
        <div className="w-80 bg-gray-800 fixed flex flex-col left-0 top-0 bottom-0 pl-6">
            <div>
                <div className="h-24 flex justify-center py-3">
                    {/* <img className="w-16" src="vite.svg" alt="" /> */}
                    <img className="w-28 h-10 mt-4 object-contain" src="logo-white.png" alt="" />
                </div>

                <div className="flex mb-4 justify-end mt-1.5 pr-6">
                    <input ref={inputRef} className="hidden" type="file" id="file-input" multiple accept="image/*" />
                    <button onClick={handleOpen} className="text-base roboto bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium">
                        Select Folder
                    </button>
                </div>
            </div>

            <div ref={imageContainerRef} className="flex-1 mb-4 images-container relative">
                <List images={context.images} onClick={handleClick} containerHeight={containerHeight} />
            </div>
        </div>
    )
}
