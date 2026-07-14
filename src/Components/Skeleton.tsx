
function Skeleton() {
  return (
  <div className="flex min-h-screen justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col bg-linear-to-t from-sky-500 to-indigo-500 max-w-md w-full rounded-2xl shadow-lg p-5 animate-pulse">
    
        <div className="flex gap-2 mb-6">
          <div className="grow h-12 rounded-full bg-white/30"></div>
          <div className="w-12 h-12 rounded-full bg-white/30"></div>
        </div>

     
        <div className="flex flex-col items-center p-4">
          <div className="w-28 h-28 rounded-full bg-white/30"></div>

          <div className="h-12 w-36 rounded bg-white/30 mt-4"></div>

      
          <div className="h-8 w-28 rounded bg-white/30 mt-4"></div>
        </div>

       
        <div className="flex justify-around mt-8 p-6">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded bg-white/30 mb-2"></div>
            <div className="h-6 w-16 rounded bg-white/30"></div>
            <div className="h-4 w-20 rounded bg-white/30 mt-2"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded bg-white/30 mb-2"></div>
            <div className="h-6 w-16 rounded bg-white/30"></div>
            <div className="h-4 w-20 rounded bg-white/30 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
