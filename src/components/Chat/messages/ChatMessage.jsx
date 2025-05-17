import MDStyleResponse from "../MDStyleResponse"
import { ThumbsUp, ThumbsDown, Copy } from "lucide-react"
import { getFileTypeColor } from "../../../utils/libs"

const ChatMessage = ({ isUser, content, files, sources }) => {
  if (isUser) {
    return (
      <div className="flex gap-3 mb-6 w-full">
        <div className="flex-1 flex justify-end">
          <div className="bg-[#eef6f1] border-2 border-[#e0f0e6] rounded-2xl p-4 inline-block w-[90%]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                <img src={"https://xsgames.co/randomusers/assets/images/favicon.png"} alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-800">{content}</p>
            </div>

            {files && files.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {files.map((file, index) => (
                    <div key={index} className="bg-[#fafcf4] rounded-md py-2 px-4 flex items-start text-sm flex-col">
                      <span className="font-extrabold" style={{
                        color: getFileTypeColor(file.type)
                      }}>{file.type}</span>
                      <div>
                        <div className="font-medium">{file.name}</div>
                        <div className="text-gray-500 text-xs">{file.filename}</div>
                      </div>
                    </div>
                  ))}
                </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 mb-6">
      <div className="flex-1">
        <div className="bg-[#f8f9fc] rounded-2xl p-4 shadow-sm border-2 border-[#e9efff]">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img src="/Logo.svg" alt="Logo Answer" />
            </div>
            <div className="prose max-w-none">
              <MDStyleResponse markdown={content} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-3 flex items-center gap-2">
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <ThumbsUp className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <ThumbsDown className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <Copy className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            {sources && (
              <div className="mt-3 flex items-center gap-1 text-base text-gray-500 border-2 border-[#E9EFFF] px-4 py-1 rounded-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{sources} Sources</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
