import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDeleteWord } from '../server/deleteWord';

export interface wordAdmin {
  _id: string;
  name: string;
  translation: string;
  category: string[];
}

const AdminWords = () => {
  const [words, setWords] = useState<Array<wordAdmin>>([]);
  const fetchRequest = useCallback(() => {
    fetch('http://127.0.0.1:3000/api/word/table')
      .then((res) => res.json())
      .then((data) => {
        setWords(data.Words);
        console.log(data);
        console.log(words);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const { deleteWord } = useDeleteWord();
  useEffect(() => {
    fetchRequest();
  }, []);

  const wordsRow = useMemo(() => {
    return words.map((x) => {
      return (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={x._id}
        >
          <td className="px-6 py-4">{x.name}</td>
          <td className="px-6 py-4">{x.translation}</td>
          <td className="px-6 py-4">{x.category[0]}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => {
                deleteWord(x._id).then(fetchRequest);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              onClick={() => {}}
            >
              Update
            </button>
          </td>
        </tr>
      );
    });
  }, [words]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Translation
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>{wordsRow}</tbody>
      </table>
    </div>
  );
};

export default AdminWords;
