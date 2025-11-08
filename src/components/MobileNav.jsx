'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/arguments', label: 'Arguments' },
    { href: '/library', label: 'Library' },
    { href: '/thinkers', label: 'Thinkers' },
    { href: '/conversations', label: 'Conversations' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link href="/arguments" className="hover:text-ether transition-colors min-h-[44px] flex items-center">
          Arguments
        </Link>
        <Link href="/library" className="hover:text-ether transition-colors min-h-[44px] flex items-center">
          Library
        </Link>
        <Link href="/thinkers" className="hover:text-ether transition-colors min-h-[44px] flex items-center">
          Thinkers
        </Link>
        <Link href="/conversations" className="hover:text-ether transition-colors min-h-[44px] flex items-center">
          Conversations
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:text-ether transition-colors touch-manipulation"
        aria-label="Toggle menu"
        style={{ minWidth: '44px', minHeight: '44px' }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-void border-l border-ether/20 z-[70] overflow-y-auto"
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingRight: '0',
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-playfair bg-gradient-to-r from-white to-ether bg-clip-text text-transparent">
                    Menu
                  </h2>
                  <button
                    onClick={closeMenu}
                    className="p-2 hover:text-ether transition-colors touch-manipulation"
                    aria-label="Close menu"
                    style={{ minWidth: '44px', minHeight: '44px' }}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-4 text-lg hover:text-ether hover:bg-ether/5 rounded-lg transition-all touch-manipulation"
                        style={{ minHeight: '44px' }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
