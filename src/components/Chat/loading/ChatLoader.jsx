import { useEffect, useState } from 'react'

export default function ChatLoader({
    isLoading
}) {

    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        if (isLoading) {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 500);
        return () => clearInterval(interval);
        }
    }, [isLoading]);

    return (
        <div className="flex flex-col items-center justify-center flex-1 h-full gap-3">
            <img
                src="/Logo.svg"
                alt="Logo"
                className="w-24 h-24 mb-4 animate-bounce"
            />
            <div className="text-gray-500 text-xl">
                Loading your discussion{".".repeat(dotCount)}
            </div>
            <p>
                <span className="text-green-500 font-semibold mt-3">Lumos.ai</span> is
                preparing your chat history.
            </p>
        </div>
    )
}
