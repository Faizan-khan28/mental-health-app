import { useState } from "react";

export default function DailyQuotes() {
  const quotes = [
    "It's okay to not be okay. Just don't give up.",
    "Your feelings are valid. You are not alone in this.",
    "Breathe. Everything will be okay, even if it doesn’t feel like it right now.",
    "You have survived 100% of your bad days. You can survive today too.",
    "Healing is not a straight line. Take it one step at a time.",
    "You are not your thoughts. Let them pass like clouds in the sky.",
    "Even the darkest night will end, and the sun will rise again.",
    "It’s okay to take a break. You don’t have to have everything figured out right now.",
    "The fact that you’re trying is already enough. Be kind to yourself.",
    "You are not behind. You are exactly where you need to be.",
    "Your mind is lying to you. You are loved, you are important, and you matter.",
    "Small progress is still progress. Keep going, even if it’s slow.",
    "Your worth is not determined by your productivity.",
    "Focus on what you can control, and let go of what you can't.",
    "One moment at a time, one step at a time. You are doing better than you think.",
    "Your struggles do not define you. Your strength does.",
    "Be patient with yourself. Healing takes time.",
    "You don’t have to carry everything alone. It's okay to ask for help.",
    "You deserve the same kindness you give to others.",
    "No storm lasts forever. This too shall pass.",
    "Take a deep breath. Relax your shoulders. Everything will be alright.",
    "Your thoughts are not facts. Don’t believe everything you think.",
    "You are more than your anxiety. It does not control you.",
    "You are not failing; you are learning.",
    "Sometimes, just getting out of bed is an achievement. Be proud of yourself.",
    "Progress, not perfection. Give yourself grace.",
    "Your value is not measured by what you accomplish in a day.",
    "You are enough. Just as you are, right now.",
    "Overthinking will not change the outcome. Trust the process.",
    "It’s okay to rest. You don’t have to do everything today.",
    "You are strong, even when you don’t feel like it.",
    "Happiness is not a destination, but a journey. Be present.",
    "You are not alone in this. Reach out if you need to.",
    "Your best is enough, no matter what it looks like today.",
    "You don’t have to be positive all the time. Allow yourself to feel.",
    "You are doing better than you think. Keep going.",
    "Even when your mind tells you otherwise, you are worthy of love and peace.",
    "Self-care is not selfish. Take care of yourself first.",
    "Worrying does not take away tomorrow’s troubles, it takes away today’s peace.",
    "Be gentle with yourself. You are doing your best.",
    "The weight you are carrying is not yours to bear alone.",
    "You don’t have to fix everything. Some things just need time.",
    "Your journey is unique. Stop comparing yourself to others.",
    "Your mental health matters. Take time to heal.",
    "Let go of the guilt. You deserve peace too.",
    "You are growing in ways you don’t even realize yet.",
    "Even on your worst days, you are still worthy of love and kindness.",
    "Sometimes the bravest thing you can do is simply keep going.",
    "Your emotions are temporary. They do not define you.",
    "Perfection is a myth. Just be you.",
    "Don't believe everything you think. Your mind plays tricks on you when you're anxious.",
    "It’s okay if all you did today was survive.",
    "Life doesn’t have to be perfect to be beautiful.",
    "Give yourself permission to slow down and just breathe.",
    "Not every thought deserves your attention. Let the negative ones go.",
    "No one has it all figured out. And that’s okay.",
    "Your struggles are not weaknesses. They are proof of your strength.",
    "Stop judging yourself for how you cope. You are doing your best.",
    "Your past does not define you. You are allowed to start over.",
    "You are worthy of rest, love, and kindness.",
    "Do not let temporary emotions make permanent decisions.",
    "You are stronger than you feel right now.",
    "Healing isn't linear. Some days are harder than others, and that’s okay.",
    "You deserve peace, even on your hardest days.",
    "What you are going through right now will not last forever.",
    "The only way out is through. Keep going.",
    "You are not weak for struggling. You are strong for continuing to fight.",
    "Take it day by day, or even moment by moment if needed.",
    "You are worthy of happiness, no matter what your mind tells you.",
    "Your thoughts do not define you. Let them pass like waves in the ocean.",
    "You do not have to be perfect to be loved.",
    "Even when you feel broken, you are still whole.",
    "The past is gone. The future is unknown. Focus on the present moment.",
    "You deserve to be kind to yourself.",
    "Nothing in nature blooms all year. Be patient with yourself.",
    "The hardest times often lead to the greatest growth.",
    "Your battle is tough, but so are you.",
    "Give yourself the love you so freely give to others.",
    "Your peace is more important than people’s opinions.",
    "Do not let anxiety control your future. Live for today.",
    "You are allowed to say no. Protect your energy.",
    "Even if today was tough, tomorrow is a new beginning.",
    "You are not broken. You are a work in progress.",
    "You don’t need to have all the answers right now.",
    "You are not alone. You are loved. You are enough.",
    "You don’t have to fix everything right now. One step at a time.",
    "Let go of what you can’t control and focus on what you can.",
    "One small act of self-care can change your whole day.",
    "You are not a burden. You are a blessing.",
    "You don’t need permission to rest.",
    "You are not falling behind. You are on your own path.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex sm:mb-20 flex-col sm:flex-row sm:justify-center sm:gap-40 items-center text-center p-6">
      <div>
        <img className="w-[300px] sm:w-[500px]" src="/motivation.jpg" alt="" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mt-6">
          Mental Wellness 💜
        </h2>
        <p className="mt-2 italic text-lg px-4">{`"${quote}"`}</p>

        <button
          className="mt-4 px-6 py-3 cursor-pointer hover:scale-110 transition-transform duration-300 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700"
          onClick={generateNewQuote}
        >
          Get a Calming Quote
        </button>
      </div>
    </div>
  );
}
