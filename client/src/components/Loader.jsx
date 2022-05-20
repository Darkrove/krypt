import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-1">
      <div className="animate-spin rounded-full border-solid h-8 w-8 border-b-2 border-red-500" />
    </div>
  )
}

export default Loader;
