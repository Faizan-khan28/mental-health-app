
export default function DailyQuotes () {
    const quotes = [
        "You are stronger than you think!",
        "One small positive thought can change your whole day.",
        "Your feelings are valid. You matter."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return (
        <div className="text-center p-6 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold">Daily Motivation 💡</h2>
          <p className="mt-2 italic">"{randomQuote}"</p>
        </div>
    );
}