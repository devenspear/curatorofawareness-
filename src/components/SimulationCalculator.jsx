'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SimulationCalculator() {
  const [civSurvival, setCivSurvival] = useState(50);
  const [techGrowth, setTechGrowth] = useState(80);
  const [consciousnessProb, setConsciousnessProb] = useState(60);

  const probability = Math.round(
    (civSurvival * 0.4 + techGrowth * 0.4 + consciousnessProb * 0.2) / 100 * 95
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-deep/50 rounded-2xl backdrop-blur-md border border-ether/20">
      <h3 className="text-3xl font-playfair mb-6 text-center">Simulation Probability Calculator</h3>

      <div className="space-y-8">
        <div>
          <label className="flex justify-between mb-3 text-base font-medium">
            Civilization Survival Rate
            <span className="text-ether font-bold">{civSurvival}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={civSurvival}
            onChange={(e) => setCivSurvival(e.target.value)}
            className="w-full h-3 bg-void rounded-lg appearance-none cursor-pointer accent-ether touch-manipulation slider-ios"
            style={{ minHeight: '44px' }}
          />
        </div>

        <div>
          <label className="flex justify-between mb-3 text-base font-medium">
            Technology Growth
            <span className="text-ether font-bold">{techGrowth}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={techGrowth}
            onChange={(e) => setTechGrowth(e.target.value)}
            className="w-full h-3 bg-void rounded-lg appearance-none cursor-pointer accent-ether touch-manipulation slider-ios"
            style={{ minHeight: '44px' }}
          />
        </div>

        <div>
          <label className="flex justify-between mb-3 text-base font-medium">
            Consciousness Upload Probability
            <span className="text-ether font-bold">{consciousnessProb}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={consciousnessProb}
            onChange={(e) => setConsciousnessProb(e.target.value)}
            className="w-full h-3 bg-void rounded-lg appearance-none cursor-pointer accent-ether touch-manipulation slider-ios"
            style={{ minHeight: '44px' }}
          />
        </div>
      </div>

      <motion.div
        className="mt-8 p-6 bg-deep/70 rounded-xl text-center border border-ether/30"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-sm text-soft/60">Your Personal Odds:</div>
        <div className="text-6xl font-playfair my-2 bg-gradient-to-r from-ether to-deep bg-clip-text text-transparent">{probability}%</div>
        <div className="text-sm text-ether">Probability you&apos;re in a simulation</div>
      </motion.div>

      <p className="mt-6 text-xs text-soft/60">
        Based on Bostrom&apos;s trilemma: If civilizations survive, develop tech, and can simulate consciousness,
        then simulated minds vastly outnumber biological ones.
      </p>
    </div>
  );
}
