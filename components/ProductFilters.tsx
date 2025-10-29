'use client';

import { useState } from 'react';

interface FilterOption {
  id: string;
  name: string;
  value: string;
  count?: number;
  color?: string;
}

interface FilterSection {
  title: string;
  type: 'checkbox' | 'radio' | 'color' | 'size' | 'price' | 'search';
  options: FilterOption[];
  searchPlaceholder?: string;
}

interface ProductFiltersProps {
  filters: FilterSection[];
  onFilterChange?: (filters: any) => void;
}

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const handleCheckboxChange = (sectionTitle: string, value: string) => {
    const currentSection = selectedFilters[sectionTitle] || [];
    const newFilters = currentSection.includes(value)
      ? currentSection.filter(item => item !== value)
      : [...currentSection, value];

    const updatedFilters = {
      ...selectedFilters,
      [sectionTitle]: newFilters
    };

    setSelectedFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const handleRadioChange = (sectionTitle: string, value: string) => {
    const updatedFilters = {
      ...selectedFilters,
      [sectionTitle]: [value]
    };

    setSelectedFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const handleSearchChange = (sectionTitle: string, term: string) => {
    setSearchTerms(prev => ({
      ...prev,
      [sectionTitle]: term
    }));
  };

  const resetSection = (sectionTitle: string) => {
    const updatedFilters = { ...selectedFilters };
    delete updatedFilters[sectionTitle];
    
    const updatedSearchTerms = { ...searchTerms };
    delete updatedSearchTerms[sectionTitle];
    
    setSelectedFilters(updatedFilters);
    setSearchTerms(updatedSearchTerms);
    onFilterChange?.(updatedFilters);
  };

  // Helper function to filter options based on search term
  const getFilteredOptions = (options: FilterOption[], searchTerm: string) => {
    if (!searchTerm) return options;
    return options.filter(option => 
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="hidden lg:block mr-2">
      <div className="hidden lg:block">
        {filters.map((section, index) => (
          <FilterSection
            key={index}
            section={section}
            selectedFilters={selectedFilters[section.title] || []}
            searchTerm={searchTerms[section.title] || ''}
            onCheckboxChange={handleCheckboxChange}
            onRadioChange={handleRadioChange}
            onSearchChange={handleSearchChange}
            onReset={() => resetSection(section.title)}
            getFilteredOptions={getFilteredOptions}
          />
        ))}
      </div>
    </div>
  );
}

// FilterSection component
function FilterSection({ 
  section, 
  selectedFilters, 
  searchTerm, 
  onCheckboxChange, 
  onRadioChange, 
  onSearchChange, 
  onReset,
  getFilteredOptions
}: any) {
  const [isOpen, setIsOpen] = useState(true);
  
  // Get filtered options based on search term
  const filteredOptions = getFilteredOptions(section.options, searchTerm);

  return (
    <div className="flex flex-col w-[226px] xl:w-[276px] mb-6">
      <div className="flex flex-col justify-between">
        <div 
          className="flex items-center justify-between py-[17px] cursor-pointer border-b border-azaGreyShade2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-medium text-azaBlackShade3">
            {section.title}
          </span>
          <i 
            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        
        {/* Search input for search-type sections */}
        {section.type === 'search' && (
          <div className="flex items-center justify-between w-full h-10 px-3 mt-4 border rounded-lg border-azaGreyShade1">
            <input 
              className="text-sm outline-none w-full bg-transparent text-azaBlackShade3 placeholder:text-azaGreyShade2"
              placeholder={section.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(section.title, e.target.value)}
            />
            <i className="block w-5 h-5 text-azaGreyShade2" />
          </div>
        )}
      </div>

      {isOpen && (
        <>
          <ul className={`max-h-[152px] overflow-y-auto lg:scrollbar-thumb-StorkGray lg:scrollbar-track-gray-100 lg:scroll-m-1 lg:scrollbar-thin mt-4 ${
            section.type === 'size' || section.type === 'color' ? '!max-h-none !overflow-visible' : ''
          }`}>
            
            {/* Checkbox options for search and checkbox types */}
            {(section.type === 'checkbox' || section.type === 'search') && 
              filteredOptions.map((option: FilterOption) => (
                <CheckboxOption
                  key={option.id}
                  option={option}
                  isChecked={selectedFilters.includes(option.value)}
                  onChange={() => onCheckboxChange(section.title, option.value)}
                />
              ))
            }
            
            {/* Radio options */}
            {section.type === 'radio' && 
              filteredOptions.map((option: FilterOption) => (
                <RadioOption
                  key={option.id}
                  option={option}
                  isChecked={selectedFilters.includes(option.value)}
                  onChange={() => onRadioChange(section.title, option.value)}
                />
              ))
            }

            {/* Size options */}
            {section.type === 'size' && (
              <div className="flex flex-wrap gap-2 mt-2">
                {filteredOptions.map((option: FilterOption) => (
                  <SizeOption
                    key={option.id}
                    option={option}
                    isChecked={selectedFilters.includes(option.value)}
                    onChange={() => onCheckboxChange(section.title, option.value)}
                  />
                ))}
              </div>
            )}

            {/* Color options */}
            {section.type === 'color' && (
              <div className="flex flex-wrap gap-2 mt-2">
                {filteredOptions.map((option: FilterOption) => (
                  <ColorOption
                    key={option.id}
                    option={option}
                    isChecked={selectedFilters.includes(option.value)}
                    onChange={() => onCheckboxChange(section.title, option.value)}
                  />
                ))}
              </div>
            )}

            {/* Price range */}
            {section.type === 'price' && (
              <PriceRange />
            )}
          </ul>

          {/* Reset button */}
          <div className="self-end pr-2 space-x-6 mt-4">
            <button 
              className="text-sm text-azaBlackShade3 hover:text-AzaRed transition-colors"
              onClick={onReset}
            >
              Reset
            </button>
            {section.type === 'price' && (
              <button className="px-2 h-[30px] rounded-lg w-[80px] text-sm text-azaBlackShade3 border border-azaGreyShade2 hover:border-AzaRed hover:text-AzaRed transition-colors">
                Apply
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Individual option components (keep these the same as before)
function CheckboxOption({ option, isChecked, onChange }: any) {
  return (
    <li className="flex flex-col mb-4">
      <div className="flex">
        <span className="flex items-center justify-between cursor-pointer mr-3">
          <span className="flex items-center">
            <span className="relative flex items-center">
              <input 
                type="checkbox" 
                id={option.id} 
                className="hidden"
                checked={isChecked}
                onChange={onChange}
              />
              <div className={`w-4 h-4 border rounded border-azaGreyShade2 flex items-center justify-center ${
                isChecked ? 'bg-AzaRed border-AzaRed' : 'bg-white'
              }`}>
                {isChecked && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 15 11" fill="none">
                    <path d="M1 4.5L5 9L14 1" stroke="white" strokeWidth="2" />
                  </svg>
                )}
              </div>
            </span>
            <label htmlFor={option.id} className="ml-2 text-sm cursor-pointer text-azaBlackShade3">
              {option.name}
            </label>
            {option.count && (
              <span className="ml-2 text-xs text-azaGreyShade2">({option.count})</span>
            )}
          </span>
        </span>
      </div>
    </li>
  );
}

function RadioOption({ option, isChecked, onChange }: any) {
  return (
    <li className="flex flex-col mb-4">
      <div className="flex">
        <span className="flex items-center justify-between cursor-pointer mr-3">
          <span className="flex items-center">
            <span className="relative flex items-center">
              <input 
                type="radio" 
                id={option.id} 
                className="hidden"
                checked={isChecked}
                onChange={onChange}
              />
              <div className={`w-4 h-4 border rounded-full border-azaGreyShade2 flex items-center justify-center ${
                isChecked ? 'border-AzaRed' : 'bg-white'
              }`}>
                {isChecked && (
                  <div className="w-2 h-2 bg-AzaRed rounded-full"></div>
                )}
              </div>
            </span>
            <label htmlFor={option.id} className="ml-2 text-sm cursor-pointer text-azaBlackShade3">
              {option.name}
            </label>
          </span>
        </span>
      </div>
    </li>
  );
}

function SizeOption({ option, isChecked, onChange }: any) {
  return (
    <div>
      <input 
        type="checkbox" 
        id={option.id} 
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      <label 
        htmlFor={option.id} 
        className={`flex items-center justify-center h-10 p-3 space-x-2 border rounded-lg cursor-pointer text-xs font-medium ${
          isChecked 
            ? 'border-AzaRed text-AzaRed bg-azaBrandColor9' 
            : 'border-azaGreyShade2 text-azaBlackShade3'
        }`}
      >
        {option.name}
      </label>
    </div>
  );
}

function ColorOption({ option, isChecked, onChange }: any) {
  return (
    <div className="relative">
      <input 
        type="checkbox" 
        id={option.id} 
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      <label 
        htmlFor={option.id} 
        className={`flex items-center h-10 p-1 pr-3 space-x-2 border rounded cursor-pointer ${
          isChecked ? 'border-AzaRed' : 'border-azaGreyShade1'
        }`}
      >
        <span 
          className="w-8 h-8 rounded border border-[#f5f5f5]" 
          style={{ backgroundColor: option.color }}
        ></span>
        <span className="text-sm text-azaBlackShade3">{option.name}</span>
      </label>
    </div>
  );
}

function PriceRange() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(515400);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className="mr-2 text-sm text-azaGreyShade4">₹</span>
        <input 
          type="number" 
          name="minPrice" 
          className="w-2/5 h-10 pl-2 text-sm text-left border rounded-lg text-azaBlackShade3 border-azaGreyShade1"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <span className="ml-4 mr-2 text-sm text-azaGreyShade4">₹</span>
        <input 
          type="number" 
          name="maxPrice" 
          className="w-2/5 h-10 pl-2 text-sm text-left border rounded-lg text-azaBlackShade3 border-azaGreyShade1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="my-4">
        <div className="relative h-1 rounded cursor-pointer bg-AzaRed/20">
          <div 
            className="absolute h-1 rounded bg-AzaRed" 
            style={{ left: '0%', right: '0%' }}
          ></div>
        </div>
        <div className="relative">
          <input 
            type="range" 
            min="0" 
            step="100" 
            max="515400" 
            className="absolute w-full h-1 opacity-0 cursor-pointer z-10"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input 
            type="range" 
            min="0" 
            step="100" 
            max="515400" 
            className="absolute w-full h-1 opacity-0 cursor-pointer z-10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  );
}