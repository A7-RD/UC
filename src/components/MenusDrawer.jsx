'use client'

import { useEffect, useRef } from 'react'
import { PaperTexture, paperTexturePresets } from '@paper-design/shaders-react'
import MenuItem from './MenuItem'

const ANTIPASTI = [
  { title: 'Bruschetta Caponata', description: 'Eggplant, Tomato, Celery, Capers', price: '$12' },
  { title: 'Tuna Crudo al Pepe', description: 'Olives, Fresh Herbs', price: '$24' },
  { title: 'Baked Clams Oreganata', description: 'Oregano-Scented Breadcrumbs, Preserved Lemon', price: '$18' },
  { title: 'Fritto Misto', description: 'Tempura-Fried Seafood, Shishitos, Charred Lemon Aïoli', price: '$18' },
  { title: 'Arancini', description: 'Spring Peas, Saffron, Mozzarella, Salsa Rossa', price: '$16' },
  { title: 'Carpaccio Cipriani', description: 'Parmigiano-Reggiano, Arugula, Lemon', price: '$23' },
  { title: 'Meatballs', description: 'Beef, Veal & Pork in Ragù', price: '$16' },
  { title: 'Cioppino', description: "Shellfish, White Wine, Tomato, 'Nduja", price: '$26' },
  { title: 'Whole Roasted Artichoke', description: 'Aïoli, Gremolata', price: '$15' },
  { title: 'Prosciutto & Figs', description: 'Parmigiano-Reggiano, Aged Balsamic', price: '$22' },
]

const SALADS = [
  { title: 'Caesar Salad', description: 'Garlic Croutons & Parmigiano-Reggiano', price: '$16' },
  { title: 'Chopped Salad Urbano', description: 'Iceberg, Radicchio, Salami, Chickpeas, Artichokes, Pepperoncini, Herb Vinaigrette', price: '$14' },
  { title: 'Chicories', description: 'Radicchio, Endive, Castelfranco, Blood Orange, La Tur Cheese', price: '$16' },
]

const PASTA = [
  { title: 'Straci Con Pesto', description: 'Kale, Walnut, Pecorino', price: '$22' },
  { title: 'Lobster Ravioli Fra Diavolo', description: 'Calabrian Chile, Tomato', price: '$46' },
  { title: 'Spring Pea Tortelloni', description: 'Preserved Lemon, Basil, Crispy Prosciutto', price: '$26' },
  { title: 'Spaghetti Carbonara', description: 'Pancetta, Peas', price: '$20' },
  { title: 'Linguine Vongole', description: 'Littleneck Clams, Chile, Garlic', price: '$28' },
  { title: 'Baked Mezzi-Rigatoni', description: "Ragù with Jimmy's Italian Sausage", price: '$26' },
]

const ENTREES = [
  { title: 'Wild Shrimp Zafferano', description: 'Fregola, Saffron, Tomato, Pecorino Sardo', price: '$28' },
  { title: 'Pistachio-Crusted Snapper', description: 'Grilled Chard, Preserved Lemon Vinaigrette', price: '$34' },
  { title: 'Chicken Al Mattone', description: 'Rapini, Lemon & Herb Butter Sauce', price: '$32' },
  { title: 'Duck Fagioli E Scarola', description: 'Cannellini Beans & Escarole', price: '$38' },
  { title: 'Lamb Chops Urbano', description: 'Fennel Salad, Salsa Verde', price: '$36' },
  { title: 'Svizzerina Al Barolo', description: 'Chopped NY Strip, Potato Crisps, Barolo Sauce', price: '$36' },
]

export default function MenusDrawer({ isOpen, onClose }) {
  const backdropRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    backdropRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const backdrop = backdropRef.current
      if (!backdrop || document.activeElement !== backdrop) return
      e.preventDefault()
      backdrop.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <button
        ref={backdropRef}
        type="button"
        aria-label="Close menus"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Sliding white panel */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-6 flex justify-center pointer-events-none">
        <div
          className={`relative w-full max-w-[800px] bg-mist-400 shadow-[0_-4px_24px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-in-out flex flex-col pointer-events-auto ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: 'min(88vh, 680px)', minHeight: 'min(88vh, 680px)' }}
          aria-hidden={!isOpen}
          aria-modal={isOpen}
          role="dialog"
        >
        <div className="flex flex-col min-h-0 flex-1 px-6 pt-8 pb-6 w-full">
          <div
            className="flex-1 min-h-0 overflow-auto pt-8 pb-8"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%)',
            }}
          >
            <h2 className="font-display text-6xl leading-16 tracking-tighter text-espresso text-center m-0 flex flex-col justify-center items-center menu-drawer-blur">ANTIPASTI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 mt-4 w-full justify-items-center">
              {ANTIPASTI.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
            <h2 className="font-display text-6xl leading-16 tracking-tighter text-espresso text-center m-0 flex flex-col justify-center items-center mt-12 menu-drawer-blur">SALADS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3 mt-4 w-full justify-items-center">
              {SALADS.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-12 mt-12 w-full">
              <section className="flex-1 min-w-0 md:min-w-[280px]">
                <h2 className="font-display text-6xl leading-16 tracking-tighter text-espresso text-center m-0 flex flex-col justify-center items-center menu-drawer-blur">PASTA</h2>
                <div className="flex flex-col gap-6 mt-4 justify-start items-center">
                  {PASTA.map((item) => (
                    <MenuItem
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              </section>
              <section className="flex-1 min-w-0 md:min-w-[280px]">
                <h2 className="font-display text-6xl leading-16 tracking-tighter text-espresso text-center m-0 flex flex-col justify-center items-center menu-drawer-blur">ENTREES</h2>
                <div className="flex flex-col gap-6 mt-4 justify-start items-center">
                  {ENTREES.map((item) => (
                    <MenuItem
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
          {isOpen && (
            <PaperTexture
              {...paperTexturePresets[0].params}
              colorFront="#9e9e9e"
              scale={.60}
              contrast={.10}
              roughness={.10}
              fiber={.50}
              fiberSize={.10}
              crumples={0}
              crumpleSize={0}
              folds={0}
              fade={0}
              drops={0}
              className="pointer-events-none absolute inset-0 rounded-none z-10"
              style={{ mixBlendMode: 'overlay' }}
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </>
  )
}
