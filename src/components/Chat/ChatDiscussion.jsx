import ChatMessage from "./messages/ChatMessage"
import ChatLoader from "./loading/ChatLoader";

export default function ChatDiscussion({
  chatContent,
  isContentLoading,
}) {

  return (
    <div className="mx-auto px-4 w-full h-full">
      <div className="space-y-6 h-full">
        {isContentLoading ? (
          <ChatLoader
            isLoading={isContentLoading}
          />
        ) : (
          chatContent?.context?.map((msg, idx) => (
            <ChatMessage
              key={idx}
              isUser={msg.isUser}
              content={msg.content}
              files={msg.files}
              sources={msg.sources}
            />
          ))
        )}
      </div>
    </div>
  )
}
