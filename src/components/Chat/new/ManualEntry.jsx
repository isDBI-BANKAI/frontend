import { CircleDollarSign } from "lucide-react"

export default function ManualEntry({
    data, setData, handleSubmit, loading
}) {
    return (
        <form
            className="w-full mx-auto p-6 bg-white rounded-2xl border-2 border-[#E9FFEB] shadow-sm"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Amount Involved */}
                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-900">Amount Involved</label>
                    <div className="relative">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <div className="flex items-center pl-3 pr-2">
                                <span className="text-gray-500">$</span>
                            </div>
                            <input
                                type="text"
                                className="flex-1 py-2 px-1 outline-none"
                                value={data.amount || ""}
                                onChange={e => setData({ ...data, amount: e.target.value })}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">Enter the amount involved</p>
                </div>

                {/* Transaction Date */}
                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-900">Transaction Date</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <input
                            type="date"
                            placeholder="DD/MM/YYYY"
                            className="flex-1 py-2 px-3 outline-none"
                            value={data.date || ""}
                            onChange={e => setData({ ...data, date: e.target.value })}
                            disabled={loading}
                            required
                        />
                    </div>
                    <p className="text-sm text-gray-500">Select the transaction date</p>
                </div>

                {/* Parties Involved */}
                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-900">Parties Involved</label>
                    <textarea
                        className="w-full min-h-24 p-3 border border-gray-300 rounded-lg outline-none resize-none"
                        placeholder="ex : Al Baraka Bank (Buyer), GreenTech (Seller)."
                        value={data.parties || ""}
                        onChange={e => setData({ ...data, parties: e.target.value })}
                        disabled={loading}
                        required
                    />
                    <p className="text-sm text-gray-500">Enter all the parties involved</p>
                </div>

                {/* Journal Entry */}
                <div className="space-y-2">
                    <label className="text-lg font-medium text-gray-900">Journal Entry</label>
                    <textarea
                        className="w-full min-h-24 p-3 border border-gray-300 rounded-lg outline-none resize-none"
                        placeholder="Dr. GreenTech Equity 1,750,000 | Cr. Cash 1,750,000"
                        value={data.journal || ""}
                        onChange={e => setData({ ...data, journal: e.target.value })}
                        disabled={loading}
                        required
                    />
                    <p className="text-sm text-gray-500">Enter the journal needed.</p>
                </div>
            </div>

            {/* Proceed Button */}
            <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors"
                    disabled={loading}
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                    ) : (
                        <CircleDollarSign className="h-5 w-5" />
                    )}
                    <span>{loading ? "Processing..." : "Proceed"}</span>
                </button>
            </div>
        </form>
    )
}
