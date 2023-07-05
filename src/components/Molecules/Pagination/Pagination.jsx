import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon
} from '@heroicons/react/20/solid'

import './pagination.css'

const Pagination = ({ seriesPageNumber, setSeriesPageNumber }) => {
  const numberOfPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <nav className='flex items-center justify-between  border-secondary-200 px-8 sm:px-12 bg-primary-900'>
      <div className='-mt-px flex w-0 flex-1 text-secondary-400 hover:text-secondary-700'>
        <button
          onClick={() => {
            setSeriesPageNumber(seriesPageNumber - 1)
          }}
          disabled={seriesPageNumber === 1}
          className={`inline-flex items-center p-4 text-sm font-medium hover:border-gray-300 ${
            seriesPageNumber === 1 ? 'text-gray-700' : ''
          }`}
        >
          <ArrowLongLeftIcon
            className='mr-3 h-5 w-5 '
            aria-hidden='true'
          />
          Previous
        </button>
      </div>
      <div className='md:flex text-md gap-3 hidden md:visible'>
        {numberOfPages.map((page, index) => (
          <button
            key={index}
            className={`text-secondary-700 hover:text-secondary-200 hover:bg-secondary-900 w-8 h-8 bg-secondary-300 rounded-xl ${
              seriesPageNumber === page ? 'bg-secondary-900' : ''
            }`}
            onClick={() => {
              setSeriesPageNumber(Number(page))
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <div className='-mt-px flex w-0 flex-1 justify-end p-4 text-secondary-400 hover:text-secondary-700'>
        <button
          onClick={() => {
            setSeriesPageNumber(seriesPageNumber + 1)
          }}
          disabled={seriesPageNumber === 10}
          className={`inline-flex items-center p-4 text-sm font-medium hover:border-gray-300 ${
            seriesPageNumber === 10 ? 'text-gray-700' : ''
          }`}
        >
          Next
          <ArrowLongRightIcon
            className='ml-3 h-5 w-5 '
            aria-hidden='true'
          />
        </button>
      </div>
    </nav>
  )
}

export default Pagination
