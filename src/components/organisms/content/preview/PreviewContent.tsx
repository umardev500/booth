import { PreviewCanvas } from '../../../molecules'

export const PreviewContent: React.FC = () => {
    return (
        <div className="relative bg-slate-300 p-6 h-screen flex justify-center items-center">
            <div className="relative flex justify-center items-center pb-16 mb-20 ">
                <div className="flex items-center">
                    <PreviewCanvas />
                </div>
            </div>

            <div className="absolute bottom-16 flex items-center justify-center gap-10">
                {/* Done */}
                <div className="flex justify-center items-center flex-col cursor-pointer">
                    <div
                        className="text-gray-200 w-20 
                    h-20 bg-slate-600 rounded-full flex items-center justify-center"
                    >
                        <svg width="40" height="40" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.1225 1.91666H7.87749C4.25499 1.91666 3.35416 2.88457 3.35416 6.74666V17.5375C3.35416 20.0867 4.75332 20.6904 6.44957 18.8696L6.45916 18.86C7.24499 18.0262 8.44291 18.0933 9.12332 19.0037L10.0912 20.2975C10.8675 21.3229 12.1229 21.3229 12.8992 20.2975L13.8671 19.0037C14.5571 18.0837 15.755 18.0167 16.5408 18.86C18.2467 20.6808 19.6362 20.0771 19.6362 17.5279V6.74666C19.6458 2.88457 18.745 1.91666 15.1225 1.91666ZM8.62499 6.70832C9.15207 6.70832 9.58332 7.13957 9.58332 7.66666C9.58332 8.19374 9.16166 8.62499 8.62499 8.62499C8.08832 8.62499 7.66666 8.19374 7.66666 7.66666C7.66666 7.13957 8.08832 6.70832 8.62499 6.70832ZM14.375 13.4167C13.8383 13.4167 13.4167 12.9854 13.4167 12.4583C13.4167 11.9312 13.8479 11.5 14.375 11.5C14.9021 11.5 15.3333 11.9312 15.3333 12.4583C15.3333 12.9854 14.9117 13.4167 14.375 13.4167ZM15.2375 7.27374L8.78791 13.7233C8.64416 13.8671 8.46207 13.9342 8.27999 13.9342C8.09791 13.9342 7.91582 13.8671 7.77207 13.7233C7.6384 13.5881 7.56344 13.4056 7.56344 13.2154C7.56344 13.0252 7.6384 12.8427 7.77207 12.7075L14.2217 6.25791C14.4996 5.97999 14.9596 5.97999 15.2375 6.25791C15.5154 6.53582 15.5154 6.99582 15.2375 7.27374V7.27374Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <span className="mt-4 roboto font-medium text-slate-700">DONE</span>
                </div>
                {/* Print */}
                <div className="flex justify-center items-center flex-col cursor-pointer">
                    <div
                        className="text-gray-200 w-20 
                    h-20 bg-slate-600 rounded-full flex items-center justify-center"
                    >
                        <svg width="40" height="40" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.1225 1.91666H7.87749C4.25499 1.91666 3.35416 2.88457 3.35416 6.74666V17.5375C3.35416 20.0867 4.75332 20.6904 6.44957 18.8696L6.45916 18.86C7.24499 18.0262 8.44291 18.0933 9.12332 19.0037L10.0912 20.2975C10.8675 21.3229 12.1229 21.3229 12.8992 20.2975L13.8671 19.0037C14.5571 18.0837 15.755 18.0167 16.5408 18.86C18.2467 20.6808 19.6362 20.0771 19.6362 17.5279V6.74666C19.6458 2.88457 18.745 1.91666 15.1225 1.91666ZM8.62499 6.70832C9.15207 6.70832 9.58332 7.13957 9.58332 7.66666C9.58332 8.19374 9.16166 8.62499 8.62499 8.62499C8.08832 8.62499 7.66666 8.19374 7.66666 7.66666C7.66666 7.13957 8.08832 6.70832 8.62499 6.70832ZM14.375 13.4167C13.8383 13.4167 13.4167 12.9854 13.4167 12.4583C13.4167 11.9312 13.8479 11.5 14.375 11.5C14.9021 11.5 15.3333 11.9312 15.3333 12.4583C15.3333 12.9854 14.9117 13.4167 14.375 13.4167ZM15.2375 7.27374L8.78791 13.7233C8.64416 13.8671 8.46207 13.9342 8.27999 13.9342C8.09791 13.9342 7.91582 13.8671 7.77207 13.7233C7.6384 13.5881 7.56344 13.4056 7.56344 13.2154C7.56344 13.0252 7.6384 12.8427 7.77207 12.7075L14.2217 6.25791C14.4996 5.97999 14.9596 5.97999 15.2375 6.25791C15.5154 6.53582 15.5154 6.99582 15.2375 7.27374V7.27374Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <span className="mt-4 roboto font-medium text-slate-700">PRINT</span>
                </div>
            </div>

            <div className="absolute flex items-center top-10 left-10 cursor-pointer">
                <div className="text-slate-500 hover:text-slate-600">
                    <svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.77234 5.43585L3.20817 11L8.77234 16.5642M18.7915 11H3.364"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <span className="text-xl ml-8 text-slate-700 roboto">Preview</span>
            </div>
        </div>
    )
}
