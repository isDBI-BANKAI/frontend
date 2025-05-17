import { useEffect, useState } from "react";
import ChatSidebar from "../../components/Chat/ChatSidebar";
import ChatContent from "../../components/Chat/ChatContent";
import { toast } from "react-toastify";
import mockChats from "../../data/mockChats";

export default function Chat() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isHistoryLoading, setIsHistoryLoading] = useState(false);
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        const getUserHistory = async () => {
            setIsHistoryLoading(true);
            try {
                // Replace with your actual API call
                // const response = await fetch('/api/chat/history');
                // const data = await response.json();
                // Do something with data
                await new Promise((resolve) => setTimeout(resolve, 3000));
                setHistoryList(mockChats);
            } catch (error) {
                // Handle error if needed
                toast.error("Failed to fetch user history");
            } finally {
                setIsHistoryLoading(false);
            }
        };
        getUserHistory();
    }, []);

    return (
        <div className="flex h-screen font-BG w-full">
            <ChatSidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isHistoryLoading={isHistoryLoading}
                recentChats={historyList}
            />
            <ChatContent />
        </div>
    );
}
