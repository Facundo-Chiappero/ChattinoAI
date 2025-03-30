import { APP } from "../utils/constants";

export default function Header() {
  return (
    <div className='flex flex-col items-center relative top-4'>
      <img src="./chattinoFullBody.png" alt="chattino" className='chattinoFullBody h-24 w-14 ' />
      <h1 className="text-4xl bg-gray-800">{APP.TITLE}</h1>
    </div>
  )
}