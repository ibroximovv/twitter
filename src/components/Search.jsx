import React, { useState } from 'react'
import { SearchIcon } from '../assets/icons'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='relative'>
      <input 
        className='py-[15px] pl-[66px] pr-4 w-full bg-[#EFF3F4] rounded-full border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200' 
        autoComplete='off' 
        type="text" 
        placeholder='Search Twitter'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        name='searchInput'
      />
      <SearchIcon className='absolute left-[22px] top-1/2 transform -translate-y-1/2 text-gray-500' />
    </div>
  )
}

export default Search