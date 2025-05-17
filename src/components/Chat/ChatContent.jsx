import { Share2, Settings, Plus, Paperclip, Send, Trash2, X, Check, ChevronDown, Camera } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import API from "../../utils/api-client";
import ChatNew from "./new/ChatNew";
import ChatDiscussion from "./ChatDiscussion";
import mockChats from "../../data/mockChats";
import { toast } from "react-toastify";

const aiModels = [
  {
    id: "chatgpt",
    name: "ChatGPT 4",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.5047 5.19742 27.7511 5.49804 26.0429C5.55718 26.0832 5.66048 26.1425 5.73461 26.1839L13.699 30.7844C13.8975 30.8985 14.1233 30.9533 14.3532 30.9519C14.583 30.9505 14.8078 30.8929 15.0044 30.7763L24.7672 25.1592V28.9413C24.7691 28.9573 24.7672 28.9733 24.7616 28.9881C24.7561 29.0029 24.7472 29.0157 24.7356 29.0255L16.7587 33.6525C14.9323 34.7072 12.7419 34.9612 10.7088 34.3494C8.67563 33.7375 7.00199 32.3121 6.39227 30.4999V31.0064Z"
          fill="currentColor"
        />
      </svg>
    ),
    color: "text-black",
  },
  {
    id: "claude",
    name: "Claude",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FF6000" />
      </svg>
    ),
    color: "text-orange-500",
  },
  {
    id: "copilot",
    name: "CoPilot",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#0078D4" />
        <circle cx="12" cy="12" r="6" fill="#50E6FF" />
        <circle cx="12" cy="12" r="3" fill="#F35325" />
      </svg>
    ),
    color: "text-blue-500",
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4" />
        <path d="M12 22L2 17L2 7L12 12L12 22Z" fill="#4285F4" />
        <path d="M12 22L22 17L22 7L12 12L12 22Z" fill="#4285F4" />
      </svg>
    ),
    color: "text-blue-600",
  },
  {
    id: "deepseek",
    name: "Deepseek",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="#5B7EFF"
        />
        <path
          d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z"
          fill="#5B7EFF"
        />
      </svg>
    ),
    color: "text-blue-500",
  },
]

const endpointMaps = {
  0: {
    endpoint: "agent/scenario-journaling/",
    key: "scenario",
  },
  1: {
    endpoint: "agent/fas-detection/",
    key: "journal",
  },
  2: {
    endpoint: "agent/fas-enhancement/",
    key: "journal",
  },
}

export default function ChatContent({
}) {
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState(aiModels[0]);
  const [files, setFiles] = useState([]);
  const [showAttachments, setShowAttachments] = useState(false);
  const [inputText, setInputText] = useState("");
  const fileInputRef = useRef(null);
  const attachmentRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCategoryOption, setActiveCategoryOption] = useState(null);
  const [isManualEntry, setManualEntry] = useState(false);

  const params = useParams();
  const { id } = params;
  const HAS_CONTENT = !!id && id !== "new";

  const [isContentLoading, setIsContentLoading] = useState(false);
  const [chatContent, setChatContent] = useState({});
  useEffect(() => {
    const getChatContent = async () => {
        setIsContentLoading(true);
        try {
            // Replace with your actual API call
            // const response = await fetch('/api/chat/history');
            // const data = await response.json();
            // Do something with data
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setChatContent(mockChats.find(chat => chat.id == id));
        } catch (error) {
            // Handle error if needed
            toast.error("Failed to fetch user history");
        } finally {
            setIsContentLoading(false);
        }
    };
    getChatContent();
  }, [id]);

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e?.target?.files ?? file).map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      progress: 100,
      file: file
    }))
    setFiles([...files, ...newFiles])
    setShowAttachments(true)
  }

  const handleRemoveFile = (id) => {
    setFiles(files.filter((file) => file.id !== id))
    if (files.length <= 1) {
      setShowAttachments(false)
    }
  }

  const handlePaperclipClick = () => {
    setShowAttachments(!showAttachments)
  }

  const handleAddFileClick = () => {
    fileInputRef.current.click()
  }

  const deleteAllFiles = () => {
    setFiles([])
    setShowAttachments(false)
  }

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    setShowModelDropdown(false)
  }

  const getBotResultFormat = (type, data) => {
    let obj = {
      isUser: false,
      sources: data?.references?.length,
    }
    if (+type == 0) {
      obj.content = [
        "### Calculations:",
        data?.calculations,
        "### Reasoning:",
        data?.reasoning,
        "### Journal:",
        data?.journal
      ].join('\n');
    } else if (+type == 1) {
      obj.content = [
        "### References:",
        data?.references.join('\n'),
        "### Reasoning:",
        data?.reasoning,
        "### Detections:",
        (Array.isArray(data?.detections)
          ? data.detections.map(
          (d, i) =>
            `- [${d.index}] ${d.name} (probability: ${d.probability})`
        ).join('\n')
          : data?.detections || "None"
        )
      ].join('\n');
    } else if (+type == 2) {
      obj.content = [
        "### Detections:",
        (Array.isArray(data?.detections)
          ? data.detections.map(
          (d, i) =>
            `- [${d.index}] ${d.name} (probability: ${d.probability})`
        ).join('\n')
          : data?.detections || "None"
        ),
        "### Reasoning:",
        data?.reasoning,
        "### References:",
        data?.references.join('\n')
      ].join('\n');
    } else {
      obj.content = [ //TODO: ADD CHALLENGE 4!!
        "### Calculations:",
        data?.calculations,
        "### Reasoning:",
        data?.reasoning,
        "### Journal:",
        data?.journal
      ].join('\n');
    }
    return obj;
  }

  const [conData, setConData] = useState(null);
  const [sendPromptLoading, setSendPromptLoading] = useState(false);
  const sendPrompt = async () => {
    const { endpoint: sendHitEndpoint, key: sendKey } = endpointMaps[+activeCategory] || {};
    setSendPromptLoading(true);
    setConData(null);
    try {
      const res = await API.post(sendHitEndpoint, {
        [sendKey]: inputText
      });
      const myid = Math.floor(Math.random() * 100);
      setConData({
        id: myid,
        title: `Discussion N: ${myid}`,
        context: [
            {
                isUser: true,
                content: inputText,
            },
            getBotResultFormat(activeCategory, res?.data)
        ],
        category: activeCategory,
        option: activeCategoryOption
      })
      setInputText("");
      setFiles([]);
      setShowAttachments(false);
      toast.success("Prompt submitted and the response is awaiting!!")
    } catch (error) {
      console.log(error)
      toast.error("Failed to send prompt");
    } finally {
      setSendPromptLoading(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col h-screen relative bg-[#fdfdfd]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b">
        <div className="flex items-center">
          <div
            className="flex items-center gap-2 mr-4 cursor-pointer"
            onClick={() => setShowModelDropdown(!showModelDropdown)}
          >
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              {selectedModel.icon}
            </div>
            <span className="text-base font-medium">{selectedModel.name}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          {/* Model Dropdown */}
          {showModelDropdown && (
            <div className="absolute top-16 left-6 bg-white shadow-lg rounded-md border z-50 w-48">
              <div className="py-1 max-h-60 overflow-y-auto">
                {aiModels.map((model) => (
                  <div
                    key={model.id}
                    className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedModel.id === model.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => handleModelSelect(model)}
                  >
                    <div className="w-5 h-5 flex-shrink-0">{model.icon}</div>
                    <span className={`text-sm ${model.color}`}>{model.name}</span>
                    {selectedModel.id === model.id && <Check className="h-4 w-4 text-green-500 ml-auto" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-base font-medium">{id == "new" ? "Start a new discussion!" : isContentLoading ? 'Loading...' : chatContent?.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Settings className="h-5 w-5" />
          </button>
          <Link to='/chat/new' onClick={() => {
            setConData(null);
            if (activeCategory == 1) {
              setActiveCategoryOption(0);
              setManualEntry(false);
            }
          }} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-base">
            <Plus className="h-4 w-4" />
            New Chat
          </Link>
        </div>
      </header>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto px-40 pt-8 pb-2">
        {
          (!HAS_CONTENT && (!conData || Object.keys(conData).length === 0))
          ?
          <ChatNew
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeCategoryOption={activeCategoryOption}
            setActiveCategoryOption={setActiveCategoryOption}
            setInputText={setInputText}
            setFiles={setFiles}
            isManualEntry={isManualEntry}
            setManualEntry={setManualEntry}
          />
          :
          <ChatDiscussion
            chatContent={
              chatContent && !!Object.keys(chatContent).length
              ? chatContent
              : conData
            }
            isContentLoading={isContentLoading}
          />
        }
      </div>

      {/* Input Area */}
      <div className="py-4 mx-40 relative">
        <div className="relative rounded-lg border-2 border-[#f3f3f3] bg-white shadow-sm">
          <div className="w-full p-2.5">
            <textarea
              placeholder="Ask me a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-3 resize-none text-xl focus:outline-none min-h-[110px] rounded-lg border-2 shadow-sm focus:border-green-500"
              rows={2}
              autoFocus
            ></textarea>
          </div>
          <div className="flex items-center justify-between p-2 border-t">
            <div className="flex gap-2 relative">
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" multiple />

              {/* Paperclip Button */}
              <button
                onClick={handlePaperclipClick}
                id="paperclip-button"
                className={`relative p-2 text-gray-500 rounded-full hover:bg-gray-100 ${
                    !!files.length ? "bg-gray-100 text-green-500" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Paperclip className="h-6 w-6" />
                {!showAttachments && !!files.length && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {files.length}
                  </span>
                )}
              </button>

              {/* File Attachment Tooltip */}
              {showAttachments && (
                <div
                  ref={attachmentRef}
                  className="absolute bottom-12 -left-2.5 bg-white rounded-lg shadow-lg border w-[400px] z-10"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Attached Files</h3>
                      <div className="flex items-center gap-2">
                        <button onClick={deleteAllFiles} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                          <Trash2 className="h-5 w-5 text-green-500" />
                        </button>
                        <button
                          onClick={handleAddFileClick}
                          className="flex items-center gap-1 bg-gray-50 text-green-600 font-medium px-4 py-2 rounded-full"
                          id="add-file-button"
                        >
                          <span>Add</span>
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      {
                        !files.length
                        && (
                          <div className="flex items-center justify-center py-3">
                            <span className="text-gray-400">No files attached</span>
                          </div>
                        )
                      }
                      {files.map((file) => (
                        <div key={file.id} className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-2">
                            <Paperclip
                              className={`h-5 w-5 ${file.progress < 100 ? "text-gray-300" : "text-gray-400"}`}
                            />
                            <span className={file.progress < 100 ? "text-gray-300" : "text-gray-800"}>{file.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {file.progress < 100 && (
                              <span className="text-green-500 font-medium">{file.progress}%</span>
                            )}
                            <button className="text-gray-400" onClick={() => handleRemoveFile(file.id)}>
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45 border-r border-b"></div>
                </div>
              )}

              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <Camera className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-400">{inputText.length}/3000</span>
              <button className={`p-1.5 bg-green-600 text-white rounded-full ${
                (!(sendPromptLoading || !!!inputText || ((activeCategory == 2) && (activeCategoryOption == null)))) ? "opacity-100 hover:bg-green-700" : "opacity-50 cursor-not-allowed"
                }`} disabled={sendPromptLoading || !!!inputText || ((activeCategory == 2) && (activeCategoryOption == null))}
                onClick={sendPrompt}
              >
                {
                  sendPromptLoading
                  ?
                  <svg
                    className="h-6 w-6 text-black animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-80"
                      fill="currentColor"
                      d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z"
                    />
                  </svg>
                  :
                  <Send className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
