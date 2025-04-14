import  { useState } from 'react';
import { Heart, Code2, X, Check, Github, Coffee, MessageCircleHeart as MessageHeart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [step, setStep] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const questions = [
    {
      text: "Hey! I've been debugging my feelings for 60 days(PS: SnapStreak)...",
      icon: <Code2 className="w-8 h-8 text-pink-500" />,
    },
    {
      text: "And I think we make a perfect pair programming match!",
      icon: <Github className="w-8 h-8 text-pink-500" />,
    },
    {
      text: "You're like the semicolon to my JavaScript ...",
      icon: <Coffee className="w-8 h-8 text-pink-500" />,
    },
    {
      text: "Would you commit to being my girlfriend?",
      icon: <MessageHeart className="w-8 h-8 text-pink-500" />,
    },
  ];

  const moveNoButton = () => {
    setNoCount(prev => prev + 1);
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({ x, y });
  };

  const handleYes = () => {
    setShowFinal(true);
  };

  if (showFinal) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-32 h-32 text-pink-500 mx-auto" />
          </motion.div>
          <h1 className="text-4xl font-bold mt-8 text-gray-800">
            You've made me the happiest CMPE alive! 💕
          </h1>
          <p className="mt-4 text-gray-600">
           Officially welcomem to Rajjyas Multiverse!! 🚀
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-xl p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              {questions[step].icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              {questions[step].text}
            </h2>
            
            {step < questions.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
              >
                Continue
              </button>
            ) : (
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleYes}
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Yes! Let's code together!!
                </button>
                
                <motion.button
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                  }}
                  style={{
                    position: noCount > 0 ? 'fixed' : 'static',
                  }}
                  onClick={moveNoButton}
                  className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-5 h-5" />
                  No {noCount > 0 ? `(tried ${noCount} times)` : ''}
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;