import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react';

export default function CoinSelector({ coins, selectedCoin, onChange }) {
  return (
    <Listbox value={selectedCoin} onChange={onChange}>
      <div className="relative mb-4">
        <Listbox.Button className="w-full bg-gray-700 rounded p-2 text-left flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={coins.find(c => c.id === selectedCoin)?.image}
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <span>
              {coins.find(c => c.id === selectedCoin)?.name}
            </span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-800 rounded shadow-lg max-h-60 overflow-y-auto">
          {coins.map((coin) => (
            <Listbox.Option
              key={coin.id}
              value={coin.id}
              className={({ active }) =>
                `cursor-pointer select-none px-4 py-2 flex items-center gap-2 ${
                  active ? 'bg-gray-700' : ''
                }`
              }
            >
              {({ selected }) => (
                <>
                  <img src={coin.image} alt="" className="w-5 h-5 rounded-full" />
                  <span>{coin.name}</span>
                  {selected && <Check className="ml-auto w-4 h-4 text-green-400" />}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}